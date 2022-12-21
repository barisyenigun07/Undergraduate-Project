package com.undergraduate.server.service;

import com.undergraduate.server.entity.HouseAdvert;
import com.undergraduate.server.entity.User;
import com.undergraduate.server.exception.BusinessException;
import com.undergraduate.server.exception.ErrorCode;
import com.undergraduate.server.model.request.HouseAdvertRequest;
import com.undergraduate.server.model.response.HouseAdvertResponse;
import com.undergraduate.server.repository.HouseAdvertRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class HouseAdvertService {
    private final HouseAdvertRepository houseAdvertRepository;
    private final UserService userService;

    @Autowired
    public HouseAdvertService(HouseAdvertRepository houseAdvertRepository, UserService userService){
        this.houseAdvertRepository = houseAdvertRepository;
        this.userService = userService;
    }

    public void createHouseAdvert(HouseAdvertRequest body){
        User user = userService.getAuthenticatedUser().orElseThrow(() -> new BusinessException(ErrorCode.user_not_found,"User not found!"));
        HouseAdvert houseAdvert = new HouseAdvert();
        houseAdvert.setTitle(body.getTitle());
        houseAdvert.setDetail(body.getDetail());
        houseAdvert.setPrice(body.getPrice());
        houseAdvert.setRoomCount(body.getRoomCount());
        houseAdvert.setArea(body.getArea());
        houseAdvert.setWarmingType(body.getWarmingType());
        houseAdvert.setHouseType(body.getHouseType());
        houseAdvert.setAddress(body.getAddress());
        houseAdvert.setHasFurniture(body.isHasFurniture());
        houseAdvert.setOnSite(body.isOnSite());
        houseAdvert.setUser(user);
        houseAdvertRepository.save(houseAdvert);
    }

    public HouseAdvertResponse getHouseAdvert(Long id){
        HouseAdvert houseAdvert = houseAdvertRepository.findById(id).orElseThrow(() -> new BusinessException(ErrorCode.advert_not_found,"Advert Not Found!"));
        return HouseAdvertResponse.fromEntity(houseAdvert);
    }

    public List<HouseAdvertResponse> getHouseAdverts(){
        List<HouseAdvert> houseAdverts = houseAdvertRepository.findAll();
        return houseAdverts.stream().map(houseAdvert -> HouseAdvertResponse.fromEntity(houseAdvert)).collect(Collectors.toList());
    }

    public void updateHouseAdvert(Long id, HouseAdvertRequest body){
        User user = userService.getAuthenticatedUser().orElseThrow(() -> new BusinessException(ErrorCode.user_not_found,"User Not Found!"));
        HouseAdvert houseAdvert = houseAdvertRepository.findById(id).orElseThrow(() -> new BusinessException(ErrorCode.advert_not_found,"Advert Not Found!"));
        if (!houseAdvert.getUser().equals(user)){
            throw new BusinessException(ErrorCode.unauthorized,"You are not authorized to do this!");
        }

        houseAdvert.setTitle(body.getTitle());
        houseAdvert.setDetail(body.getDetail());
        houseAdvert.setPrice(body.getPrice());
        houseAdvert.setRoomCount(body.getRoomCount());
        houseAdvert.setArea(body.getArea());
        houseAdvert.setWarmingType(body.getWarmingType());
        houseAdvert.setHouseType(body.getHouseType());
        houseAdvert.setAddress(body.getAddress());
        houseAdvert.setHasFurniture(body.isHasFurniture());
        houseAdvert.setOnSite(body.isOnSite());
        houseAdvertRepository.save(houseAdvert);
    }

    public void deleteHouseAdvert(Long id){
        User user = userService.getAuthenticatedUser().orElseThrow(() -> new BusinessException(ErrorCode.user_not_found,"User Not Found!"));
        HouseAdvert houseAdvert = houseAdvertRepository.findById(id).orElseThrow(() -> new BusinessException(ErrorCode.advert_not_found,"Advert Not Found!"));
        if (!houseAdvert.getUser().equals(user)){
            throw new BusinessException(ErrorCode.unauthorized,"You are not authorized to do this!");
        }
        houseAdvertRepository.deleteById(id);
    }

}