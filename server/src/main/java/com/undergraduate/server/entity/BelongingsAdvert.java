package com.undergraduate.server.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "belongings_advert")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BelongingsAdvert extends Advert{
    @Column(name = "price",nullable = false)
    private double price;
    @Column(name = "type",nullable = false)
    private String type;
    @Column(name = "status",nullable = false)
    private String status;
    @Column(name = "is_shippable",nullable = false)
    private boolean isShippable;
    @Column(name = "is_exchangeable",nullable = false)
    private boolean isExchangeable;
    @ElementCollection
    @CollectionTable(name = "belongings_image", joinColumns = @JoinColumn(name = "advert_id"))
    @Column(name = "image_url")
    private List<String> imageUrls;
}
