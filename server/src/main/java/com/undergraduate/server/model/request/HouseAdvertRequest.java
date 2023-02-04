package com.undergraduate.server.model.request;

import lombok.Data;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Data
@ToString
public class HouseAdvertRequest {
    private String title;
    private String detail;
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
    private List<MultipartFile> photos;
}
