package com.undergraduate.server.model.request;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class ChangePasswordRequest {
    private String oldPassword;
    private String newPassword;
}
