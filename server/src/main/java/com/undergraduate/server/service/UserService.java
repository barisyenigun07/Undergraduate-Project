package com.undergraduate.server.service;


import com.undergraduate.server.entity.User;
import com.undergraduate.server.exception.BusinessException;
import com.undergraduate.server.exception.ErrorCode;
import com.undergraduate.server.model.request.UpdateUserRequest;
import com.undergraduate.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
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

    public User getUser(Long id){
        return userRepository.findById(id).orElseThrow(() -> new BusinessException(ErrorCode.user_not_found, "User Not Found!"));
    }

    public void updateUser(UpdateUserRequest body){
        User user = getAuthenticatedUser().orElseThrow(() -> new BusinessException(ErrorCode.user_not_found,"Kullanıcı bulunamadı."));
        user.setName(body.getName());
        user.setUsername(body.getUsername());
        user.setEmail(body.getEmail());
        userRepository.save(user);
    }
}
