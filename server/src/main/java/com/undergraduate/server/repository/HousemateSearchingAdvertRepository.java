package com.undergraduate.server.repository;

import com.undergraduate.server.entity.HousemateSearchingAdvert;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HousemateSearchingAdvertRepository extends JpaRepository<HousemateSearchingAdvert, Long> {
}