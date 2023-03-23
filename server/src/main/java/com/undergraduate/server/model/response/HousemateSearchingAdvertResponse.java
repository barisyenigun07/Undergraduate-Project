package com.undergraduate.server.model.response;

import com.undergraduate.server.entity.HousemateSearchingAdvert;
import lombok.Builder;
import lombok.Data;
import lombok.ToString;

import java.time.LocalDate;

@Data
@ToString
@Builder
public class HousemateSearchingAdvertResponse {
    private Long id;
    private String title;
    private String detail;
    private LocalDate publishedDate;
    private double monthlyRentFee;
    private String houseType;
    private String roomCount;
    private double area;
    private String warmingType;
    private double feePerPerson;
    private boolean isOnSite;
    private int livingPeopleCount;
    private UserResponse userResponse;

    public static HousemateSearchingAdvertResponse fromEntity(HousemateSearchingAdvert housemateSearchingAdvert){
        return HousemateSearchingAdvertResponse.builder()
                .id(housemateSearchingAdvert.getId())
                .title(housemateSearchingAdvert.getTitle())
                .detail(housemateSearchingAdvert.getDetail())
                .publishedDate(housemateSearchingAdvert.getPublishedDate())
                .monthlyRentFee(housemateSearchingAdvert.getMonthlyRentFee())
                .houseType(housemateSearchingAdvert.getHouseType())
                .roomCount(housemateSearchingAdvert.getRoomCount())
                .area(housemateSearchingAdvert.getArea())
                .warmingType(housemateSearchingAdvert.getWarmingType())
                .feePerPerson(housemateSearchingAdvert.getFeePerPerson())
                .isOnSite(housemateSearchingAdvert.isOnSite())
                .livingPeopleCount(housemateSearchingAdvert.getLivingPeopleCount())
                .userResponse(UserResponse.fromEntity(housemateSearchingAdvert.getUser()))
                .build();
    }
}
