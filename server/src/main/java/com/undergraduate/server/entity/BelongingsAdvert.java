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
@Table(name = "belongings_advert")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BelongingsAdvert extends Advert{
    @Column(name = "price")
    private double price;
    @Column(name = "type")
    private String type;
    @Column(name = "status")
    private String status;
    @Column(name = "is_shippable")
    private boolean isShippable;
    @Column(name = "is_exchangeable")
    private boolean isExchangeable;
    @ElementCollection
    @Column(name = "photo_links")
    private List<String> photoLinks;
}
