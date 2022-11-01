package com.undergraduate.server.repository;

import com.undergraduate.server.entity.HouseSaleAdvert;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HouseSaleAdvertRepository extends JpaRepository<HouseSaleAdvert,Long> {
}
