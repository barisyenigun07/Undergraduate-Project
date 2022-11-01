package com.undergraduate.server.model.response;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class UserResponse {
    private Long id;
    private String name;
    private String username;
}
