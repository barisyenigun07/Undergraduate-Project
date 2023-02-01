package com.undergraduate.server.service;

import com.undergraduate.server.entity.HousemateSearchingAdvert;
import com.undergraduate.server.entity.User;
import com.undergraduate.server.exception.BusinessException;
import com.undergraduate.server.exception.ErrorCode;
import com.undergraduate.server.model.request.HousemateSearchingAdvertRequest;
import com.undergraduate.server.model.response.HousemateSearchingAdvertResponse;
import com.undergraduate.server.repository.HousemateSearchingAdvertRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class HousemateSearchingAdvertService {
    private final HousemateSearchingAdvertRepository housemateSearchingAdvertRepository;
    private final UserService userService;

    @Autowired
    public HousemateSearchingAdvertService(HousemateSearchingAdvertRepository housemateSearchingAdvertRepository, UserService userService){
        this.housemateSearchingAdvertRepository = housemateSearchingAdvertRepository;
        this.userService = userService;
    }

    public void createHousemateSearchingAdvert(HousemateSearchingAdvertRequest body){
        User user = userService.getAuthenticatedUser().orElseThrow(() -> new BusinessException(ErrorCode.user_not_found,"User Not Found!"));
        HousemateSearchingAdvert housemateSearchingAdvert = new HousemateSearchingAdvert();
        housemateSearchingAdvert.setTitle(body.getTitle());
        housemateSearchingAdvert.setDetail(body.getDetail());
        housemateSearchingAdvert.setMonthlyRentFee(body.getMonthlyRentFee());
        housemateSearchingAdvert.setHouseType(body.getHouseType());
        housemateSearchingAdvert.setRoomCount(body.getRoomCount());
        housemateSearchingAdvert.setArea(body.getArea());
        housemateSearchingAdvert.setWarmingType(body.getWarmingType());
        housemateSearchingAdvert.setFeePerPerson(body.getFeePerPerson());
        housemateSearchingAdvert.setOnSite(body.isOnSite());
        housemateSearchingAdvert.setLivingPeopleCount(body.getLivingPeopleCount());
        housemateSearchingAdvert.setUser(user);
        housemateSearchingAdvertRepository.save(housemateSearchingAdvert);
    }

    public HousemateSearchingAdvertResponse getHousemateSearchingAdvert(Long id){
        HousemateSearchingAdvert housemateSearchingAdvert = housemateSearchingAdvertRepository.findById(id).orElseThrow(() -> new BusinessException(ErrorCode.advert_not_found,"Advert Not Found!"));
        return HousemateSearchingAdvertResponse.fromEntity(housemateSearchingAdvert);
    }

    public List<HousemateSearchingAdvertResponse> getHousemateSearchingAdverts(){
        List<HousemateSearchingAdvert> housemateSearchingAdverts = housemateSearchingAdvertRepository.findAll();
        return housemateSearchingAdverts.stream().map(housemateSearchingAdvert -> HousemateSearchingAdvertResponse.fromEntity(housemateSearchingAdvert)).collect(Collectors.toList());
    }

    public void updateHousemateSearchingAdvert(Long id, HousemateSearchingAdvertRequest body){
        User user = userService.getAuthenticatedUser().orElseThrow(() -> new BusinessException(ErrorCode.user_not_found,"User Not Found!"));
        HousemateSearchingAdvert housemateSearchingAdvert = housemateSearchingAdvertRepository.findById(id).orElseThrow(() -> new BusinessException(ErrorCode.advert_not_found,"Advert Not Found!"));
        if (!housemateSearchingAdvert.getUser().equals(user)){
            throw new BusinessException(ErrorCode.unauthorized,"You are not authorized to do this action!");
        }

        housemateSearchingAdvert.setTitle(body.getTitle());
        housemateSearchingAdvert.setDetail(body.getDetail());
        housemateSearchingAdvert.setMonthlyRentFee(body.getMonthlyRentFee());
        housemateSearchingAdvert.setHouseType(body.getHouseType());
        housemateSearchingAdvert.setRoomCount(body.getRoomCount());
        housemateSearchingAdvert.setArea(body.getArea());
        housemateSearchingAdvert.setWarmingType(body.getWarmingType());
        housemateSearchingAdvert.setFeePerPerson(body.getFeePerPerson());
        housemateSearchingAdvert.setOnSite(body.isOnSite());
        housemateSearchingAdvert.setLivingPeopleCount(body.getLivingPeopleCount());

        housemateSearchingAdvertRepository.save(housemateSearchingAdvert);
    }

    public void deleteHousemateSearchingAdvert(Long id){
        User user = userService.getAuthenticatedUser().orElseThrow(() -> new BusinessException(ErrorCode.user_not_found,"User Not Found!"));
        HousemateSearchingAdvert housemateSearchingAdvert = housemateSearchingAdvertRepository.findById(id).orElseThrow(() -> new BusinessException(ErrorCode.advert_not_found,"Advert Not Found!"));
        if (!housemateSearchingAdvert.getUser().equals(user)){
            throw new BusinessException(ErrorCode.unauthorized,"You are not authorized to do this action!");
        }

        housemateSearchingAdvertRepository.deleteById(id);
    }
}