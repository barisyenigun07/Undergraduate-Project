package com.undergraduate.server.service;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.DeleteObjectsRequest;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.S3Object;
import com.amazonaws.services.s3.model.S3ObjectInputStream;
import com.amazonaws.util.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class ImageStorageService {
    private final AmazonS3 s3;

    @Autowired
    public ImageStorageService(AmazonS3 s3){
        this.s3 = s3;
    }

    public void upload(String path, String filename, Optional<Map<String, String>> optionalMetadata, InputStream inputStream){
        ObjectMetadata objectMetadata = new ObjectMetadata();
        optionalMetadata.ifPresent(
                map -> {
                    if (!map.isEmpty()){
                        map.forEach(objectMetadata::addUserMetadata);
                    }
                }
        );
        try {
            s3.putObject(path, filename, inputStream, objectMetadata);
        }
        catch (AmazonServiceException e){
            throw new IllegalStateException("Failed to upload file",e);
        }
    }

    public byte[] download(String path, String key){
        try {
            S3Object object = s3.getObject(path, key);
            S3ObjectInputStream objectContent = object.getObjectContent();
            return IOUtils.toByteArray(objectContent);
        }
        catch (AmazonServiceException | IOException e){
            throw new IllegalStateException("Failed to download the file",e);
        }
    }

    public void deleteMultiple(String path ,String[] keys){
        DeleteObjectsRequest delObjReq = new DeleteObjectsRequest(path).withKeys(keys);
        s3.deleteObjects(delObjReq);
    }
}
