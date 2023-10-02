package com.undergraduate.server.service;

import com.undergraduate.server.entity.HousemateSearchingAdvert;
import com.undergraduate.server.entity.User;
import com.undergraduate.server.exception.*;
import com.undergraduate.server.model.request.HousemateSearchingAdvertRequest;
import com.undergraduate.server.model.response.HousemateSearchingAdvertResponse;
import com.undergraduate.server.repository.HousemateSearchingAdvertRepository;
import com.undergraduate.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class HousemateSearchingAdvertService {
    private final HousemateSearchingAdvertRepository housemateSearchingAdvertRepository;
    private final UserService userService;
    private final UserRepository userRepository;

    @Autowired
    public HousemateSearchingAdvertService(HousemateSearchingAdvertRepository housemateSearchingAdvertRepository, UserService userService, UserRepository userRepository){
        this.housemateSearchingAdvertRepository = housemateSearchingAdvertRepository;
        this.userService = userService;
        this.userRepository = userRepository;
    }

    public void createHousemateSearchingAdvert(HousemateSearchingAdvertRequest body){
        User user = userService.getAuthenticatedUser().orElseThrow(() -> new ResourceNotFoundException(ResourceType.USER));
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
        HousemateSearchingAdvert housemateSearchingAdvert = housemateSearchingAdvertRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(ResourceType.ADVERT));
        return HousemateSearchingAdvertResponse.fromEntity(housemateSearchingAdvert);
    }

    public List<HousemateSearchingAdvertResponse> getHousemateSearchingAdvertsByUser(Long userId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException(ResourceType.USER));
        List<HousemateSearchingAdvert> housemateSearchingAdvertsByUser = housemateSearchingAdvertRepository.findAllByUser(user);
        return housemateSearchingAdvertsByUser.stream().map(housemateSearchingAdvert -> HousemateSearchingAdvertResponse.fromEntity(housemateSearchingAdvert)).collect(Collectors.toList());
    }

    public List<HousemateSearchingAdvertResponse> getHousemateSearchingAdverts(){
        List<HousemateSearchingAdvert> housemateSearchingAdverts = housemateSearchingAdvertRepository.findAll();
        return housemateSearchingAdverts.stream().map(housemateSearchingAdvert -> HousemateSearchingAdvertResponse.fromEntity(housemateSearchingAdvert)).collect(Collectors.toList());
    }


    public Page<HousemateSearchingAdvertResponse> getHousemateSearchingAdvertPage(int pageNo, int size){
        Pageable pageable = PageRequest.of(pageNo, size, Sort.by("publishedDate").descending());
        Page<HousemateSearchingAdvert> housemateSearchingAdvertPage = housemateSearchingAdvertRepository.findAll(pageable);
        return housemateSearchingAdvertPage.map(housemateSearchingAdvert -> HousemateSearchingAdvertResponse.fromEntity(housemateSearchingAdvert));
    }

    public void updateHousemateSearchingAdvert(Long id, HousemateSearchingAdvertRequest body){
        User user = userService.getAuthenticatedUser().orElseThrow(() -> new ResourceNotFoundException(ResourceType.USER));
        HousemateSearchingAdvert housemateSearchingAdvert = housemateSearchingAdvertRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(ResourceType.ADVERT));
        if (!housemateSearchingAdvert.getUser().equals(user)){
            throw new UnauthorizedException();
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
        User user = userService.getAuthenticatedUser().orElseThrow(() -> new ResourceNotFoundException(ResourceType.USER));
        HousemateSearchingAdvert housemateSearchingAdvert = housemateSearchingAdvertRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(ResourceType.ADVERT));
        if (!housemateSearchingAdvert.getUser().equals(user)){
            throw new UnauthorizedException();
        }

        housemateSearchingAdvertRepository.deleteById(id);
    }
}