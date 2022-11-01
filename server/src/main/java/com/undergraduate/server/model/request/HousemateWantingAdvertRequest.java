package com.undergraduate.server.model.request;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class HousemateWantingAdvertRequest {
    private String title;
    private String detail;
    private double maxFeeMonthly;
    private String gender;
    private boolean isSmoking;
    private boolean hasPet;
}
