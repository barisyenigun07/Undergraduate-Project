package com.undergraduate.server.service;

import com.amazonaws.AmazonServiceException;
import com.undergraduate.server.bucket.BucketName;
import com.undergraduate.server.entity.BelongingsAdvert;
import com.undergraduate.server.entity.User;
import com.undergraduate.server.exception.BusinessException;
import com.undergraduate.server.exception.ErrorCode;
import com.undergraduate.server.model.request.BelongingsAdvertRequest;
import com.undergraduate.server.model.response.BelongingsAdvertResponse;
import com.undergraduate.server.repository.BelongingsAdvertRepository;
import org.apache.http.entity.ContentType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.*;
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

        if (body.getPhotos().size() > 0){
            List<String> imageUrls = new ArrayList<>();
            for (MultipartFile file : body.getPhotos()){
                isImage(file);
                Map<String, String> metadata = extractMetadata(file);
                String path = String.format("%s/%s", BucketName.STORAGE_BUCKET.getBucketName(),user.getId());
                String filename = String.format("%s-%s",file.getOriginalFilename(),UUID.randomUUID());
                try {
                    imageStorageService.upload(path, filename, Optional.of(metadata), file.getInputStream());
                    imageUrls.add(filename);
                }
                catch (IOException e){
                    throw new IllegalStateException(e);
                }
            }
            belongingsAdvert.setImageUrls(imageUrls);
        }

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

    @Cacheable(value = "images", key = "#filename")
    public byte[] getImageOfBelongingsAdvert(Long id, String filename){
        BelongingsAdvert belongingsAdvert = belongingsAdvertRepository.findById(id).orElseThrow(() -> new BusinessException(ErrorCode.advert_not_found,"Advert Not Found!"));
        byte[] imageDownloaded = imageStorageService.download(String.format("%s/%s",BucketName.STORAGE_BUCKET.getBucketName(),belongingsAdvert.getUser().getId()),filename);
        return imageDownloaded;
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

        if (!belongingsAdvert.getImageUrls().isEmpty()){
            String[] urls = convertListToArray(user.getId(), belongingsAdvert.getImageUrls());
            imageStorageService.deleteMultipleImages(BucketName.STORAGE_BUCKET.getBucketName(), urls);
        }

        if (body.getPhotos().size() > 0){
            List<String> imageUrls = new ArrayList<>();
            for (MultipartFile file : body.getPhotos()){
                isImage(file);
                Map<String, String> metadata = extractMetadata(file);
                String path = String.format("%s/%s", BucketName.STORAGE_BUCKET.getBucketName(),user.getId());
                String filename = String.format("%s-%s",file.getOriginalFilename(),UUID.randomUUID());
                try {
                    imageStorageService.upload(path, filename, Optional.of(metadata), file.getInputStream());
                    imageUrls.add(filename);
                }
                catch (IOException e){
                    throw new IllegalStateException(e);
                }
            }
            belongingsAdvert.setImageUrls(imageUrls);
        }

        belongingsAdvertRepository.save(belongingsAdvert);
    }

    public void deleteBelongingsAdvert(Long id){
        User user = userService.getAuthenticatedUser().orElseThrow(() -> new BusinessException(ErrorCode.user_not_found,"User Not Found!"));
        BelongingsAdvert belongingsAdvert = belongingsAdvertRepository.findById(id).orElseThrow(() -> new BusinessException(ErrorCode.advert_not_found,"Advert Not Found!"));
        if (!belongingsAdvert.getUser().equals(user)){
            throw new BusinessException(ErrorCode.unauthorized,"You are not authorized to do this action!");
        }

        if (!belongingsAdvert.getImageUrls().isEmpty()){
            String[] urls = convertListToArray(user.getId(), belongingsAdvert.getImageUrls());
            imageStorageService.deleteMultipleImages(BucketName.STORAGE_BUCKET.getBucketName(), urls);
        }

        belongingsAdvertRepository.deleteById(id);
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