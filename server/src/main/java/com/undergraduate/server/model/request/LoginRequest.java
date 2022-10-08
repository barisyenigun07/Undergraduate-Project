package com.undergraduate.server.model.request;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class LoginRequest {
    private String username;
    private String password;
}
