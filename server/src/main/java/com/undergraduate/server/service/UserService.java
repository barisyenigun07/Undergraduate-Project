package com.undergraduate.server.service;


import com.undergraduate.server.bucket.BucketName;
import com.undergraduate.server.entity.User;
import com.undergraduate.server.exception.BusinessException;
import com.undergraduate.server.exception.ErrorCode;
import com.undergraduate.server.model.request.UpdateUserRequest;
import com.undergraduate.server.model.response.UserResponse;
import com.undergraduate.server.repository.UserRepository;
import org.apache.http.entity.ContentType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.*;

@Service
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

    public UserResponse getUser(Long id){
        User user = userRepository.findById(id).orElseThrow(() -> new BusinessException(ErrorCode.user_not_found, "User Not Found!"));
        return UserResponse.fromEntity(user);
    }

    public void updateUser(UpdateUserRequest body){
        User user = getAuthenticatedUser().orElseThrow(() -> new BusinessException(ErrorCode.user_not_found,"Kullanıcı bulunamadı."));
        user.setName(body.getName());
        user.setUsername(body.getUsername());
        user.setEmail(body.getEmail());

        if (!body.getPhoto().isEmpty()){
            isImage(body.getPhoto());
            Map<String, String> metadata = extractMetadata(body.getPhoto());
            String path = String.format("%s/%s", BucketName.STORAGE_BUCKET.getBucketName(),user.getId());
            String filename = String.format("%s-%s",body.getPhoto().getOriginalFilename(), UUID.randomUUID());
            try {
                imageStorageService.upload(path, filename, Optional.of(metadata), body.getPhoto().getInputStream());
                user.setProfilePhotoUrl(filename);
            }
            catch (IOException e){
                throw new IllegalStateException();
            }
        }

        userRepository.save(user);
    }

    private void isImage(MultipartFile file){
        if (!Arrays.asList(ContentType.IMAGE_PNG.getMimeType(), ContentType.IMAGE_JPEG.getMimeType()).contains(file.getContentType())){
            throw new IllegalStateException("File(s) must be image.");
        }
    }

    private Map<String, String> extractMetadata(MultipartFile file){
        Map<String, String> metadata = new HashMap<>();
        metadata.put("Content-Type",file.getContentType());
        metadata.put("Content-Length",String.valueOf(file.getSize()));
        return metadata;
    }
}
