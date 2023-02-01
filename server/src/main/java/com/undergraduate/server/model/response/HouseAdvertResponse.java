package com.undergraduate.server.model.response;

import com.undergraduate.server.entity.HouseAdvert;
import lombok.Builder;
import lombok.Data;
import lombok.ToString;

@Data
@ToString
@Builder
public class HouseAdvertResponse {
    private Long id;
    private String title;
    private String detail;
    private double price;
    private String roomCount;
    private double area;
    private String warmingType;
    private String houseType;
    private String address;
    private boolean hasFurniture;
    private boolean isOnSite;

    public static HouseAdvertResponse fromEntity(HouseAdvert houseAdvert){
        return HouseAdvertResponse.builder()
                .id(houseAdvert.getId())
                .title(houseAdvert.getTitle())
                .detail(houseAdvert.getDetail())
                .price(houseAdvert.getPrice())
                .roomCount(houseAdvert.getRoomCount())
                .area(houseAdvert.getArea())
                .warmingType(houseAdvert.getWarmingType())
                .houseType(houseAdvert.getHouseType())
                .address(houseAdvert.getAddress())
                .hasFurniture(houseAdvert.isHasFurniture())
                .isOnSite(houseAdvert.isOnSite())
                .build();
    }
}