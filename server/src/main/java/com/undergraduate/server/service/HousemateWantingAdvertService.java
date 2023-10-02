package com.undergraduate.server.service;

import com.undergraduate.server.entity.HousemateWantingAdvert;
import com.undergraduate.server.entity.User;
import com.undergraduate.server.exception.*;
import com.undergraduate.server.model.request.HousemateWantingAdvertRequest;
import com.undergraduate.server.model.response.HousemateWantingAdvertResponse;
import com.undergraduate.server.repository.HousemateWantingAdvertRepository;
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
public class HousemateWantingAdvertService {
    private final HousemateWantingAdvertRepository housemateWantingAdvertRepository;
    private final UserService userService;
    private final UserRepository userRepository;

    @Autowired
    public HousemateWantingAdvertService(HousemateWantingAdvertRepository housemateWantingAdvertRepository, UserService userService, UserRepository userRepository){
        this.housemateWantingAdvertRepository = housemateWantingAdvertRepository;
        this.userService = userService;
        this.userRepository = userRepository;
    }

    public void createHousemateWantingAdvert(HousemateWantingAdvertRequest body){
        User user = userService.getAuthenticatedUser().orElseThrow(() -> new ResourceNotFoundException(ResourceType.USER));
        HousemateWantingAdvert housemateWantingAdvert = new HousemateWantingAdvert();

        housemateWantingAdvert.setTitle(body.getTitle());
        housemateWantingAdvert.setDetail(body.getDetail());
        housemateWantingAdvert.setSmoking(body.isSmoking());
        housemateWantingAdvert.setHasPet(body.isHasPet());
        housemateWantingAdvert.setGender(body.getGender());
        housemateWantingAdvert.setMaxFeeMonthly(body.getMaxFeeMonthly());
        housemateWantingAdvert.setUser(user);

        housemateWantingAdvertRepository.save(housemateWantingAdvert);
    }

    public HousemateWantingAdvertResponse getHousemateWantingAdvert(Long id){
        HousemateWantingAdvert housemateWantingAdvert = housemateWantingAdvertRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(ResourceType.ADVERT));
        return HousemateWantingAdvertResponse.fromEntity(housemateWantingAdvert);
    }

    public List<HousemateWantingAdvertResponse> getHousemateWantingAdvertsByUser(Long userId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException(ResourceType.USER));
        List<HousemateWantingAdvert> housemateWantingAdvertsByUser = housemateWantingAdvertRepository.findAllByUser(user);
        return housemateWantingAdvertsByUser.stream().map(housemateWantingAdvert -> HousemateWantingAdvertResponse.fromEntity(housemateWantingAdvert)).collect(Collectors.toList());
    }

    public List<HousemateWantingAdvertResponse> getHousemateWantingAdverts(){
        List<HousemateWantingAdvert> housemateWantingAdverts = housemateWantingAdvertRepository.findAll();
        return housemateWantingAdverts.stream().map(housemateWantingAdvert -> HousemateWantingAdvertResponse.fromEntity(housemateWantingAdvert)).collect(Collectors.toList());
    }

    public Page<HousemateWantingAdvertResponse> getHousemateWantingAdvertPage(int pageNo, int size){
        Pageable pageable = PageRequest.of(pageNo, size, Sort.by("publishedDate").descending());
        Page<HousemateWantingAdvert> housemateWantingAdvertPage = housemateWantingAdvertRepository.findAll(pageable);
        return housemateWantingAdvertPage.map(housemateWantingAdvert -> HousemateWantingAdvertResponse.fromEntity(housemateWantingAdvert));
    }

    public void updateHousemateWantingAdvert(Long id, HousemateWantingAdvertRequest body){
        User user = userService.getAuthenticatedUser().orElseThrow(() -> new ResourceNotFoundException(ResourceType.USER));
        HousemateWantingAdvert housemateWantingAdvert = housemateWantingAdvertRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(ResourceType.ADVERT));

        if (!housemateWantingAdvert.getUser().equals(user)){
            throw new UnauthorizedException();
        }

        housemateWantingAdvert.setTitle(body.getTitle());
        housemateWantingAdvert.setDetail(body.getDetail());
        housemateWantingAdvert.setGender(body.getGender());
        housemateWantingAdvert.setSmoking(body.isSmoking());
        housemateWantingAdvert.setHasPet(body.isHasPet());
        housemateWantingAdvert.setMaxFeeMonthly(body.getMaxFeeMonthly());

        housemateWantingAdvertRepository.save(housemateWantingAdvert);
    }

    public void deleteHousemateWantingAdvert(Long id){
        User user = userService.getAuthenticatedUser().orElseThrow(() -> new ResourceNotFoundException(ResourceType.USER));
        HousemateWantingAdvert housemateWantingAdvert = housemateWantingAdvertRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(ResourceType.ADVERT));
        if (!housemateWantingAdvert.getUser().equals(user)){
            throw new UnauthorizedException();
        }
        housemateWantingAdvertRepository.deleteById(id);
    }
}