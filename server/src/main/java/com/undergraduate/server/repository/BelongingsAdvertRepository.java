package com.undergraduate.server.repository;

import com.undergraduate.server.entity.BelongingsAdvert;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BelongingsAdvertRepository extends JpaRepository<BelongingsAdvert,Long> {
}
