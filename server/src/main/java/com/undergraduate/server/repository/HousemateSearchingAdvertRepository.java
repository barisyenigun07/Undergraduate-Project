package com.undergraduate.server.repository;

import com.undergraduate.server.entity.HousemateSearchingAdvert;
import com.undergraduate.server.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HousemateSearchingAdvertRepository extends JpaRepository<HousemateSearchingAdvert, Long> {
    List<HousemateSearchingAdvert> findAllByUser(User user);
}