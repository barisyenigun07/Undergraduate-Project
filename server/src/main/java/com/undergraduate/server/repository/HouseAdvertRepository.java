package com.undergraduate.server.repository;


import com.undergraduate.server.entity.HouseAdvert;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HouseAdvertRepository extends JpaRepository<HouseAdvert,Long> {
}
