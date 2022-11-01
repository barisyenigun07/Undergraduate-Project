package com.undergraduate.server.service;

import com.undergraduate.server.entity.User;
import com.undergraduate.server.exception.*;
import com.undergraduate.server.model.request.LoginRequest;
import com.undergraduate.server.model.request.RegisterRequest;
import com.undergraduate.server.model.response.AuthResponse;
import com.undergraduate.server.repository.UserRepository;
import com.undergraduate.server.security.JwtUserDetailsService;
import com.undergraduate.server.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {
    private JwtUserDetailsService userDetailsService;
    private JwtUtil jwtUtil;
    private PasswordEncoder passwordEncoder;
    private UserRepository userRepository;

    @Autowired
    public AuthService(JwtUserDetailsService userDetailsService, JwtUtil jwtUtil, PasswordEncoder passwordEncoder, UserRepository userRepository){
        this.userDetailsService = userDetailsService;
        this.jwtUtil = jwtUtil;
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
    }


    public void register(RegisterRequest body){
        Optional<User> optionalUserByUsername = userRepository.findByUsername(body.getUsername());
        Optional<User> optionalUserByEmail = userRepository.findByEmail(body.getEmail());
        if (optionalUserByUsername.isPresent()){
            throw new BusinessException(ErrorCode.user_already_exists,"Böyle bir kullanıcı var.");
        }

        if (optionalUserByEmail.isPresent()){
            throw new BusinessException(ErrorCode.email_already_taken,"Bu email önceden alınmış.");
        }

        if (!body.getPassword().equals(body.getPasswordRepeat())){
            throw new BusinessException(ErrorCode.password_mismatch,"Şifreler uyuşmadı.");
        }

        User user = new User();
        user.setName(body.getName());
        user.setUsername(body.getUsername());
        user.setEmail(body.getEmail());
        user.setPassword(passwordEncoder.encode(body.getPassword()));
        userRepository.save(user);
    }

    public AuthResponse login(LoginRequest body){
        Optional<User> optionalUser = userRepository.findByUsername(body.getUsername());
        if (!optionalUser.isPresent()){
            throw new BusinessException(ErrorCode.user_not_found,"Kullanıcı bulunamadı.");
        }
        if (!passwordEncoder.matches(body.getPassword(), optionalUser.get().getPassword())){
            throw new BusinessException(ErrorCode.password_mismatch,"Şifreler uyuşmadı.");
        }
        final UserDetails userDetails = userDetailsService.loadUserByUsername(body.getUsername());
        final String jwtToken = jwtUtil.createToken(userDetails);
        return AuthResponse.builder()
                .token(jwtToken)
                .build();
    }
}
