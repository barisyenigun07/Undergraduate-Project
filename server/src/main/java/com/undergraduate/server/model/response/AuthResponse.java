package com.undergraduate.server.model.response;

import lombok.Builder;
import lombok.Data;
import lombok.ToString;

@Data
@ToString
@Builder
public class AuthResponse {
    private String token;
    private UserResponse user;
}
