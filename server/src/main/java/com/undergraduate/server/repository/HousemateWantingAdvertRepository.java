package com.undergraduate.server.repository;

import com.undergraduate.server.entity.HousemateWantingAdvert;
import com.undergraduate.server.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HousemateWantingAdvertRepository extends JpaRepository<HousemateWantingAdvert,Long> {
    List<HousemateWantingAdvert> findAllByUser(User user);
}
