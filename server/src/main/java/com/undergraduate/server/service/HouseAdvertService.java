package com.undergraduate.server.service;

import com.undergraduate.server.bucket.BucketName;
import com.undergraduate.server.entity.HouseAdvert;
import com.undergraduate.server.entity.User;
import com.undergraduate.server.exception.BusinessException;
import com.undergraduate.server.exception.ErrorCode;
import com.undergraduate.server.model.request.HouseAdvertRequest;
import com.undergraduate.server.model.response.HouseAdvertResponse;
import com.undergraduate.server.repository.HouseAdvertRepository;
import org.apache.http.entity.ContentType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class HouseAdvertService {
    private final HouseAdvertRepository houseAdvertRepository;
    private final ImageStorageService imageStorageService;
    private final UserService userService;

    @Autowired
    public HouseAdvertService(HouseAdvertRepository houseAdvertRepository, ImageStorageService imageStorageService,UserService userService){
        this.houseAdvertRepository = houseAdvertRepository;
        this.imageStorageService = imageStorageService;
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
        houseAdvert.setPropertyType(body.getPropertyType());
        houseAdvert.setAddress(body.getAddress());
        houseAdvert.setHasFurniture(body.isHasFurniture());
        houseAdvert.setOnSite(body.isOnSite());
        houseAdvert.setDues(body.getDues());

        if (body.getPhotos().size() > 0){
            List<String> imageUrls = new ArrayList<>();
            for (MultipartFile file : body.getPhotos()){
                isImage(file);
                Map<String, String> metadata = extractMetadata(file);
                String path = String.format("%s/%s", BucketName.STORAGE_BUCKET.getBucketName(), user.getId());
                String filename = String.format("%s-%s", file.getOriginalFilename(), UUID.randomUUID());
                try {
                    imageStorageService.upload(path, filename, Optional.of(metadata), file.getInputStream());
                    imageUrls.add(filename);
                }
                catch (IOException e){
                    throw new IllegalStateException(e);
                }
            }
            houseAdvert.setImageUrls(imageUrls);
        }

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

    @Cacheable(value = "images", key = "#filename")
    public byte[] getImageOfHouseAdvert(Long id, String filename){
        HouseAdvert houseAdvert = houseAdvertRepository.findById(id).orElseThrow(() -> new BusinessException(ErrorCode.advert_not_found,"Advert Not Found!"));
        if (!houseAdvert.getImageUrls().contains(filename)){
            throw new IllegalStateException();
        }
        return imageStorageService.download(String.format("%s/%s",BucketName.STORAGE_BUCKET.getBucketName(),houseAdvert.getUser().getId()),filename);
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
        houseAdvert.setDues(body.getDues());

        if (!houseAdvert.getImageUrls().isEmpty()){
            String[] urls = convertListToArray(user.getId(), houseAdvert.getImageUrls());
            imageStorageService.deleteMultipleImages(BucketName.STORAGE_BUCKET.getBucketName(),urls);
        }

        if (body.getPhotos().size() > 0){
            List<String> imageUrls = new ArrayList<>();
            for (MultipartFile file : body.getPhotos()){
                isImage(file);
                Map<String, String> metadata = extractMetadata(file);
                String path = String.format("%s/%s", BucketName.STORAGE_BUCKET.getBucketName(), user.getId());
                String filename = String.format("%s-%s", file.getOriginalFilename(), UUID.randomUUID());
                try {
                    imageStorageService.upload(path, filename, Optional.of(metadata), file.getInputStream());
                    imageUrls.add(filename);
                }
                catch (IOException e){
                    throw new IllegalStateException(e);
                }
            }
            houseAdvert.setImageUrls(imageUrls);
        }

        houseAdvertRepository.save(houseAdvert);
    }

    public void deleteHouseAdvert(Long id){
        User user = userService.getAuthenticatedUser().orElseThrow(() -> new BusinessException(ErrorCode.user_not_found,"User Not Found!"));
        HouseAdvert houseAdvert = houseAdvertRepository.findById(id).orElseThrow(() -> new BusinessException(ErrorCode.advert_not_found,"Advert Not Found!"));
        if (!houseAdvert.getUser().equals(user)){
            throw new BusinessException(ErrorCode.unauthorized,"You are not authorized to do this!");
        }
        if (!houseAdvert.getImageUrls().isEmpty()) {
            String[] urls = convertListToArray(user.getId(), houseAdvert.getImageUrls());
            imageStorageService.deleteMultipleImages(BucketName.STORAGE_BUCKET.getBucketName(), urls);
        }
        houseAdvertRepository.deleteById(id);
    }

    private void isImage(MultipartFile file){
        if (!Arrays.asList(ContentType.IMAGE_PNG.getMimeType(), ContentType.IMAGE_JPEG.getMimeType()).contains(file.getContentType())){
            throw new IllegalStateException("File(s) must be image.");
        }
    }

    private Map<String, String> extractMetadata(MultipartFile file){
        Map<String, String> metadata = new HashMap<>();
        metadata.put("Content-Type",file.getContentType());
        metadata.put("Content-Length",String.valueOf(file.getSize()));
        return metadata;
    }

    private String[] convertListToArray(long userId, List<String> urls){
        String[] arr = new String[urls.size()];
        for (int i = 0;i < arr.length;i++){
            arr[i] = String.format("%s/%s",userId,urls.get(i));
        }
        return arr;
    }

}