package com.undergraduate.server.repository;

import com.undergraduate.server.entity.HousemateWantingAdvert;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HousemateWantingAdvertRepository extends JpaRepository<HousemateWantingAdvert,Long> {
}
