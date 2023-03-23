package com.undergraduate.server.model.response;

import com.undergraduate.server.entity.HouseAdvert;
import lombok.Builder;
import lombok.Data;
import lombok.ToString;

import java.time.LocalDate;
import java.util.List;

@Data
@ToString
@Builder
public class HouseAdvertResponse {
    private Long id;
    private String title;
    private String detail;
    private LocalDate publishedDate;
    private double price;
    private String roomCount;
    private double area;
    private String warmingType;
    private String houseType;
    private String propertyType;
    private String address;
    private boolean hasFurniture;
    private boolean isOnSite;
    private double dues;
    private List<String> imageUrls;
    private UserResponse userResponse;

    public static HouseAdvertResponse fromEntity(HouseAdvert houseAdvert){
        return HouseAdvertResponse.builder()
                .id(houseAdvert.getId())
                .title(houseAdvert.getTitle())
                .detail(houseAdvert.getDetail())
                .publishedDate(houseAdvert.getPublishedDate())
                .price(houseAdvert.getPrice())
                .roomCount(houseAdvert.getRoomCount())
                .area(houseAdvert.getArea())
                .warmingType(houseAdvert.getWarmingType())
                .houseType(houseAdvert.getHouseType())
                .propertyType(houseAdvert.getPropertyType())
                .address(houseAdvert.getAddress())
                .hasFurniture(houseAdvert.isHasFurniture())
                .isOnSite(houseAdvert.isOnSite())
                .dues(houseAdvert.getDues())
                .imageUrls(houseAdvert.getImageUrls())
                .userResponse(UserResponse.fromEntity(houseAdvert.getUser()))
                .build();
    }
}