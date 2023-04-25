package com.undergraduate.server.service;



import com.undergraduate.server.bucket.BucketName;
import com.undergraduate.server.entity.User;
import com.undergraduate.server.exception.FileUploadException;
import com.undergraduate.server.exception.ResourceNotFoundException;
import com.undergraduate.server.exception.ResourceType;
import com.undergraduate.server.model.request.UpdateUserRequest;
import com.undergraduate.server.model.response.UserResponse;
import com.undergraduate.server.repository.UserRepository;
import com.undergraduate.server.util.ImageUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.util.*;

@Service
@Transactional
public class UserService {
    private final UserRepository userRepository;

    private final ImageStorageService imageStorageService;

    @Autowired
    public UserService(UserRepository userRepository, ImageStorageService imageStorageService){
        this.userRepository = userRepository;
        this.imageStorageService = imageStorageService;
    }

    public Optional<User> getAuthenticatedUser(){
        String username = "";
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (!(authentication instanceof AnonymousAuthenticationToken)){
            username = authentication.getName();
        }
        Optional<User> optionalUser = userRepository.findByUsername(username);
        return optionalUser;
    }

    public Long getAuthenticatedUserId(){
        return getAuthenticatedUser().get().getId();
    }

    public UserResponse getUser(Long id){
        User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(ResourceType.USER));
        return UserResponse.fromEntity(user);
    }

    public byte[] getUserProfilePhoto(Long id){
        User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(ResourceType.USER));
        return imageStorageService.download(String.format("%s/user-profile-photo",BucketName.STORAGE_BUCKET.getBucketName()),user.getProfilePhotoUrl());
    }

    public void updateUser(UpdateUserRequest body){
        User user = getAuthenticatedUser().orElseThrow(() -> new ResourceNotFoundException(ResourceType.USER));
        user.setName(body.getName());
        user.setUsername(body.getUsername());
        user.setEmail(body.getEmail());
        user.setContactInfo(body.getContactInfo());

        if (!body.getPhoto().isEmpty()){
            if (user.getProfilePhotoUrl() != null){
                imageStorageService.delete(BucketName.STORAGE_BUCKET.getBucketName(), String.format("%s/%s",user.getId(),user.getProfilePhotoUrl()));
            }
            ImageUtil.isImage(body.getPhoto());
            Map<String, String> metadata = ImageUtil.extractMetadata(body.getPhoto());
            String path = String.format("%s/user-profile-photo", BucketName.STORAGE_BUCKET.getBucketName());
            String filename = String.format("%s-%s",UUID.randomUUID(), body.getPhoto().getOriginalFilename());
            try {
                imageStorageService.upload(path, filename, Optional.of(metadata), body.getPhoto().getInputStream());
                user.setProfilePhotoUrl(filename);
            }
            catch (IOException e){
                throw new FileUploadException();
            }
        }

        userRepository.save(user);
    }
}
