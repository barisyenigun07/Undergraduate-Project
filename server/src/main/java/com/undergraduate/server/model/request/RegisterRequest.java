package com.undergraduate.server.model.request;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class RegisterRequest {
    private String name;
    private String username;
    private String email;
    private String password;
    private String passwordRepeat;
    private String contactInfo;
    private String role;
}
