package com.undergraduate.server.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "house_advert")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class HouseAdvert extends Advert{
    @Column(name = "price")
    private double price;
    @Column(name = "room_count")
    private String roomCount;
    @Column(name = "area")
    private double area;
    @Column(name = "warming_type")
    private String warmingType;
    @Column(name = "house_type")
    private String houseType;
    @Column(name = "property_type")
    private String propertyType;
    @Column(name = "address")
    private String address;
    @Column(name = "has_furniture")
    private boolean hasFurniture;
    @Column(name = "is_on_site")
    private boolean isOnSite;
    @Column(name = "dues")
    private double dues;
    @ElementCollection
    @CollectionTable(name = "house_images", joinColumns = @JoinColumn(name = "advert_id"))
    @Column(name = "image_url")
    private Set<String> imageUrls;
}
