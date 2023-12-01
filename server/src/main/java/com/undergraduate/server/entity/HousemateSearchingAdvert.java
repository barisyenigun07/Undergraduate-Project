package com.undergraduate.server.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
@Entity
@Table(name = "housemate_searching_advert")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class HousemateSearchingAdvert extends Advert{
    @Column(name = "monthly_rent_fee")
    private double monthlyRentFee;
    @Column(name = "house_type")
    private String houseType;
    @Column(name = "room_count")
    private String roomCount;
    @Column(name = "area")
    private double area;
    @Column(name = "warming_type")
    private String warmingType;
    @Column(name = "fee_per_person")
    private double feePerPerson;
    @Column(name = "is_on_site")
    private boolean isOnSite;
    @Column(name = "living_people_count")
    private int livingPeopleCount;
}
