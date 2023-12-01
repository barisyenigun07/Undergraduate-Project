package com.undergraduate.server.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.*;

@Entity
@Table(name = "housemate_wanting_advert")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class HousemateWantingAdvert extends Advert {
    @Column(name = "max_fee_monthly")
    private double maxFeeMonthly;
    @Column(name = "gender")
    private String gender;
    @Column(name = "is_smoking")
    private boolean isSmoking;
    @Column(name = "has_pet")
    private boolean hasPet;
}
