package com.undergraduate.server.repository;

import com.undergraduate.server.entity.BelongingsAdvert;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BelongingsAdvertRepository extends JpaRepository<BelongingsAdvert,Long> {
    Page<BelongingsAdvert> findAllByType(String type, Pageable pageable);
}
