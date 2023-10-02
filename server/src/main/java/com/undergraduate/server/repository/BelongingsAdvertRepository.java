package com.undergraduate.server.repository;

import com.undergraduate.server.entity.BelongingsAdvert;
import com.undergraduate.server.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BelongingsAdvertRepository extends JpaRepository<BelongingsAdvert,Long> {
    List<BelongingsAdvert> findAllByUser(User user);
    Page<BelongingsAdvert> findByPriceBetween(double minPrice, double maxPrice, Pageable pageable);
    Page<BelongingsAdvert> findByType(String type, Pageable pageable);

}
