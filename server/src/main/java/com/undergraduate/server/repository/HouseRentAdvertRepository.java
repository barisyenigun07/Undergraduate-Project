package com.undergraduate.server.repository;


import com.undergraduate.server.entity.HouseRentAdvert;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HouseRentAdvertRepository extends JpaRepository<HouseRentAdvert,Long> {
}
