package com.undergraduate.server.service;


import com.undergraduate.server.entity.User;
import com.undergraduate.server.exception.BusinessException;
import com.undergraduate.server.exception.ErrorCode;
import com.undergraduate.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
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
        String principal = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (principal.equals("anonymousUser")){
            throw new BusinessException(ErrorCode.unauthorized,"Yetkiniz bulunmuyor.");
        }
        return userRepository.findById(Long.parseLong(principal));
    }
}
