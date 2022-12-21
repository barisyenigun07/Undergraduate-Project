package com.undergraduate.server.model.request;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class HousemateSearchingAdvertRequest {
    private String title;
    private String detail;
    private double monthlyRentFee;
    private String houseType;
    private String roomCount;
    private double area;
    private String warmingType;
    private double feePerPerson;
    private boolean isOnSite;
    private int livingPeopleCount;
}
