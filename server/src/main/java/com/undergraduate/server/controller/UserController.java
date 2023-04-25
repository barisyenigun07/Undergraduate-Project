package com.undergraduate.server.controller;


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

    @GetMapping("/user/{id}")
    public UserResponse getUser(@PathVariable Long id){
        return userService.getUser(id);
    }

    @GetMapping("/user/auth")
    public UserResponse getAuthUser(){
        return userService.getUser(userService.getAuthenticatedUserId());
    }

    @GetMapping("/user/{id}/image/download")
    public byte[] getUserProfilePhoto(@PathVariable Long id){
        return userService.getUserProfilePhoto(id);
    }

    @PutMapping("/user/update")
    public void updateUser(@ModelAttribute UpdateUserRequest body){
        userService.updateUser(body);
    }
}