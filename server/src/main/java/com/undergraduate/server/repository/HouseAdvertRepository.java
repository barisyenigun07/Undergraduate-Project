package com.undergraduate.server.repository;


import com.undergraduate.server.entity.HouseAdvert;
import com.undergraduate.server.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HouseAdvertRepository extends JpaRepository<HouseAdvert,Long> {
    List<HouseAdvert> findAllByUser(User user);
}
