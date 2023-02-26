package com.undergraduate.server.controller;

import com.undergraduate.server.model.request.ChangePasswordRequest;
import com.undergraduate.server.model.request.LoginRequest;
import com.undergraduate.server.model.request.RegisterRequest;
import com.undergraduate.server.model.response.AuthResponse;
import com.undergraduate.server.service.AuthService;
import com.undergraduate.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping
public class AuthController {
    private final AuthService authService;
    private final UserService userService;

    @Autowired
    public AuthController(AuthService authService, UserService userService){
        this.authService = authService;
        this.userService = userService;
    }

    @PostMapping("/register")
    public void register(@RequestBody RegisterRequest body){
        authService.register(body);
    }

    @PostMapping("/login")
    public AuthResponse login(@RequestBody LoginRequest body){
        return authService.login(body);
    }

    @PutMapping("/change_password")
    public void changePassword(@RequestBody ChangePasswordRequest body){
        authService.changePassword(userService.getAuthenticatedUserId(), body);
    }
}
