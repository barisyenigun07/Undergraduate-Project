package com.undergraduate.server.model.response;

import com.undergraduate.server.entity.HousemateWantingAdvert;
import lombok.Builder;
import lombok.Data;
import lombok.ToString;

import java.time.LocalDate;

@Data
@ToString
@Builder
public class HousemateWantingAdvertResponse {
    private Long id;
    private String title;
    private String detail;
    private LocalDate publishedDate;
    private double maxFeeMonthly;
    private String gender;
    private boolean isSmoking;
    private boolean hasPet;
    private UserResponse userResponse;

    public static HousemateWantingAdvertResponse fromEntity(HousemateWantingAdvert housemateWantingAdvert){
        return HousemateWantingAdvertResponse.builder()
                .id(housemateWantingAdvert.getId())
                .title(housemateWantingAdvert.getTitle())
                .detail(housemateWantingAdvert.getDetail())
                .publishedDate(housemateWantingAdvert.getPublishedDate())
                .maxFeeMonthly(housemateWantingAdvert.getMaxFeeMonthly())
                .gender(housemateWantingAdvert.getGender())
                .isSmoking(housemateWantingAdvert.isSmoking())
                .hasPet(housemateWantingAdvert.isHasPet())
                .userResponse(UserResponse.fromEntity(housemateWantingAdvert.getUser()))
                .build();
    }
}
