package com.undergraduate.server.model.response;

import com.undergraduate.server.entity.Role;
import com.undergraduate.server.entity.User;
import lombok.Builder;
import lombok.Data;
import lombok.ToString;

@Data
@ToString
@Builder
public class UserResponse {
    private Long id;
    private String name;
    private String username;
    private String email;
    private String contactInfo;
    private String profilePhotoUrl;
    private Role role;

    public static UserResponse fromEntity(User user){
        return UserResponse.builder()
                .id(user.getId())
                .name(user.getName())
                .username(user.getUsername())
                .email(user.getEmail())
                .contactInfo(user.getContactInfo())
                .profilePhotoUrl(user.getProfilePhotoUrl())
                .role(user.getRole())
                .build();
    }
}
