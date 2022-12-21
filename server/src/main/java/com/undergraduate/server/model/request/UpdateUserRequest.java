package com.undergraduate.server.model.request;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class UpdateUserRequest {
    private String name;
    private String username;
    private String email;
}