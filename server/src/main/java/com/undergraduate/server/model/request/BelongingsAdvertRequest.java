package com.undergraduate.server.model.request;

import lombok.Data;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Data
@ToString
public class BelongingsAdvertRequest {
    private String title;
    private String detail;
    private double price;
    private String type;
    private String status;
    private boolean isShippable;
    private boolean isExchangeable;
    private List<MultipartFile> photos;
}
