package com.undergraduate.server.model.response;

import com.undergraduate.server.entity.BelongingsAdvert;
import lombok.Builder;
import lombok.Data;
import lombok.ToString;

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

    public static BelongingsAdvertResponse fromEntity(BelongingsAdvert belongingsAdvert){
        return BelongingsAdvertResponse.builder()
                .id(belongingsAdvert.getId())
                .title(belongingsAdvert.getStatus())
                .detail(belongingsAdvert.getDetail())
                .price(belongingsAdvert.getPrice())
                .type(belongingsAdvert.getType())
                .status(belongingsAdvert.getStatus())
                .isShippable(belongingsAdvert.isShippable())
                .isExchangeable(belongingsAdvert.isExchangeable())
                .build();
    }
}
