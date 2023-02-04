package com.undergraduate.server.model.response;

import com.undergraduate.server.entity.BelongingsAdvert;
import lombok.Builder;
import lombok.Data;
import lombok.ToString;

import java.util.List;
import java.util.Set;

@Data
@ToString
@Builder
public class BelongingsAdvertResponse {
    private Long id;
    private String title;
    private String detail;
    private double price;
    private String type;
    private String status;
    private boolean isShippable;
    private boolean isExchangeable;
    private List<String> imageUrls;
    private UserResponse userResponse;

    public static BelongingsAdvertResponse fromEntity(BelongingsAdvert belongingsAdvert){
        return BelongingsAdvertResponse.builder()
                .id(belongingsAdvert.getId())
                .title(belongingsAdvert.getTitle())
                .detail(belongingsAdvert.getDetail())
                .price(belongingsAdvert.getPrice())
                .type(belongingsAdvert.getType())
                .status(belongingsAdvert.getStatus())
                .isShippable(belongingsAdvert.isShippable())
                .isExchangeable(belongingsAdvert.isExchangeable())
                .imageUrls(belongingsAdvert.getImageUrls())
                .userResponse(UserResponse.fromEntity(belongingsAdvert.getUser()))
                .build();
    }
}
