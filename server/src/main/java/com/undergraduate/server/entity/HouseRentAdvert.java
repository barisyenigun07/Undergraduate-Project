package com.undergraduate.server.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.List;

@Entity
@Table(name = "house_rent_advert")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class HouseRentAdvert extends Advert{
    @Column(name = "rent")
    private double rent;
    @Column(name = "room_count")
    private String roomCount;
    @Column(name = "area")
    private String area;
    @Column(name = "warming_type")
    private String warmingType;
    @Column(name = "house_type")
    private String houseType;
    @Column(name = "address")
    private String address;
    @Column(name = "has_furniture")
    private boolean hasFurniture;
    @Column(name = "is_on_site")
    private boolean isOnSite;
    @ElementCollection
    @Column(name = "photo_links")
    private List<String> photoLinks;
}
