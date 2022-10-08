package com.undergraduate.server.service;

import com.undergraduate.server.entity.User;
import com.undergraduate.server.exception.PasswordsMismatchedException;
import com.undergraduate.server.exception.UsernameAlreadyTakenException;
import com.undergraduate.server.model.request.LoginRequest;
import com.undergraduate.server.model.request.RegisterRequest;
import com.undergraduate.server.model.response.AuthResponse;
import com.undergraduate.server.repository.UserRepository;
import com.undergraduate.server.security.JwtUserDetailsService;
import com.undergraduate.server.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {
    private JwtUserDetailsService userDetailsService;
    private AuthenticationManager authenticationManager;
    private JwtUtil jwtUtil;
    private PasswordEncoder passwordEncoder;
    private UserRepository userRepository;

    @Autowired
    public AuthService(JwtUserDetailsService userDetailsService, AuthenticationManager authenticationManager, JwtUtil jwtUtil, PasswordEncoder passwordEncoder, UserRepository userRepository){
        this.userDetailsService = userDetailsService;
        this.authenticationManager = authenticationManager;
        this.jwtUtil = jwtUtil;
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
    }


    public void register(RegisterRequest body){
        Optional<User> optionalUser = userRepository.findByUsername(body.getUsername());
        if (optionalUser.isPresent()){
            throw new UsernameAlreadyTakenException();
        }

        if (!body.getPassword().equals(body.getPasswordRepeat())){
            throw new PasswordsMismatchedException();
        }

        User user = new User();
        user.setName(body.getName());
        user.setUsername(body.getUsername());
        user.setEmail(body.getEmail());
        user.setPassword(passwordEncoder.encode(body.getPassword()));
        userRepository.save(user);
    }

    public AuthResponse login(LoginRequest body){
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(body.getUsername(),body.getPassword()));
        }catch (BadCredentialsException e){
            e.printStackTrace();
        }
        final UserDetails userDetails = userDetailsService.loadUserByUsername(body.getUsername());
        final String jwtToken = jwtUtil.createToken(userDetails);
        return AuthResponse.builder()
                .token(jwtToken)
                .build();
    }
}
