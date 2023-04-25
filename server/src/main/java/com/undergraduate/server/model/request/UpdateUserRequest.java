package com.undergraduate.server.model.request;

import lombok.Data;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

@Data
@ToString
public class UpdateUserRequest {
    private String name;
    private String username;
    private String email;
    private String contactInfo;
    private MultipartFile photo;
}