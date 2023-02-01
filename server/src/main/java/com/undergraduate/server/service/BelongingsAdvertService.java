package com.undergraduate.server.service;

import com.undergraduate.server.entity.BelongingsAdvert;
import com.undergraduate.server.entity.User;
import com.undergraduate.server.exception.BusinessException;
import com.undergraduate.server.exception.ErrorCode;
import com.undergraduate.server.model.request.BelongingsAdvertRequest;
import com.undergraduate.server.model.response.BelongingsAdvertResponse;
import com.undergraduate.server.repository.BelongingsAdvertRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BelongingsAdvertService {
    private final BelongingsAdvertRepository belongingsAdvertRepository;

    private final ImageStorageService imageStorageService;
    private final UserService userService;

    @Autowired
    public BelongingsAdvertService(BelongingsAdvertRepository belongingsAdvertRepository, ImageStorageService imageStorageService, UserService userService){
        this.belongingsAdvertRepository = belongingsAdvertRepository;
        this.imageStorageService = imageStorageService;
        this.userService = userService;
    }

    public void createBelongingsAdvert(BelongingsAdvertRequest body){
        User user = userService.getAuthenticatedUser().orElseThrow(() -> new BusinessException(ErrorCode.user_not_found,"User Not Found!"));
        BelongingsAdvert belongingsAdvert = new BelongingsAdvert();
        belongingsAdvert.setTitle(body.getTitle());
        belongingsAdvert.setDetail(body.getDetail());
        belongingsAdvert.setPrice(body.getPrice());
        belongingsAdvert.setType(body.getType());
        belongingsAdvert.setType(body.getType());
        belongingsAdvert.setStatus(body.getStatus());
        belongingsAdvert.setShippable(body.isShippable());
        belongingsAdvert.setExchangeable(body.isExchangeable());
        belongingsAdvert.setUser(user);

        belongingsAdvertRepository.save(belongingsAdvert);
    }

    public BelongingsAdvertResponse getBelongingsAdvert(Long id){
        BelongingsAdvert belongingsAdvert = belongingsAdvertRepository.findById(id).orElseThrow(() -> new BusinessException(ErrorCode.advert_not_found,"Advert Not Found!"));
        return BelongingsAdvertResponse.fromEntity(belongingsAdvert);
    }

    public List<BelongingsAdvertResponse> getBelongingsAdverts(){
        List<BelongingsAdvert> belongingsAdverts = belongingsAdvertRepository.findAll();
        return belongingsAdverts.stream().map(belongingsAdvert -> BelongingsAdvertResponse.fromEntity(belongingsAdvert)).collect(Collectors.toList());
    }

    public void updateBelongingsAdvert(Long id, BelongingsAdvertRequest body){
        User user = userService.getAuthenticatedUser().orElseThrow(() -> new BusinessException(ErrorCode.user_not_found,"User Not Found!"));
        BelongingsAdvert belongingsAdvert = belongingsAdvertRepository.findById(id).orElseThrow(() -> new BusinessException(ErrorCode.advert_not_found,"Advert Not Found!"));
        if (!belongingsAdvert.getUser().equals(user)){
            throw new BusinessException(ErrorCode.unauthorized,"You are not authorized to do this action!");
        }

        belongingsAdvert.setTitle(body.getTitle());
        belongingsAdvert.setDetail(body.getDetail());
        belongingsAdvert.setPrice(body.getPrice());
        belongingsAdvert.setType(body.getType());
        belongingsAdvert.setType(body.getType());
        belongingsAdvert.setStatus(body.getStatus());
        belongingsAdvert.setShippable(body.isShippable());
        belongingsAdvert.setExchangeable(body.isExchangeable());

        belongingsAdvertRepository.save(belongingsAdvert);
    }

    public void deleteBelongingsAdvert(Long id){
        User user = userService.getAuthenticatedUser().orElseThrow(() -> new BusinessException(ErrorCode.user_not_found,"User Not Found!"));
        BelongingsAdvert belongingsAdvert = belongingsAdvertRepository.findById(id).orElseThrow(() -> new BusinessException(ErrorCode.advert_not_found,"Advert Not Found!"));
        if (!belongingsAdvert.getUser().equals(user)){
            throw new BusinessException(ErrorCode.unauthorized,"You are not authorized to do this action!");
        }
        belongingsAdvertRepository.deleteById(id);
    }
}