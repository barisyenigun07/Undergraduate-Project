package com.undergraduate.server.controller;


import com.undergraduate.server.entity.User;
import com.undergraduate.server.exception.BusinessException;
import com.undergraduate.server.exception.ErrorCode;
import com.undergraduate.server.model.request.UpdateUserRequest;
import com.undergraduate.server.model.response.UserResponse;
import com.undergraduate.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService){
        this.userService = userService;
    }

    @GetMapping("/user/me")
    public User getAuthenticatedUser(){
        return userService.getAuthenticatedUser().orElseThrow(() -> new BusinessException(ErrorCode.user_not_found,"User Not Found!"));
    }

    @GetMapping("/user/{id}")
    public UserResponse getUser(@PathVariable Long id){
        return userService.getUser(id);
    }

    @PutMapping("/user/me")
    public void updateUser(@ModelAttribute UpdateUserRequest body){
        userService.updateUser(body);
    }

}