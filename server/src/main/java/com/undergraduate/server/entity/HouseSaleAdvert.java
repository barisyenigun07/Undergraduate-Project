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
@Table(name = "house_sale_advert")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class HouseSaleAdvert extends Advert{
    @Column(name = "price")
    private double price;
    @Column(name = "room_count")
    private String roomCount;
    @Column(name = "area")
    private String area;
    @Column(name = "warming_type")
    private String warmingType;
    @Column(name = "address")
    private String address;
    @Column(name = "has_furniture")
    private boolean hasFurniture;
    @Column(name = "is_on_site")
    private boolean isOnSite;
    @Column(name = "dues")
    private double dues;
    @ElementCollection
    @Column(name = "photo_links")
    private List<String> photoLinks;
}
