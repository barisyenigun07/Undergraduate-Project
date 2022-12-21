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
    private String area;
    private String warmingType;
    private String houseType;
    private String address;
    private boolean hasFurniture;
    private boolean isOnSite;
    private List<MultipartFile> photoLinks;
}
