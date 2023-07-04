package com.undergraduate.server.bucket;

import org.springframework.beans.factory.annotation.Value;

public enum BucketName {
    STORAGE_BUCKET("undergradproject-storage-bucket");

    @Value("${aws.storage-bucket}")
    private final String bucketName;

    BucketName(String bucketName){
        this.bucketName = bucketName;
    }

    public String getBucketName(){
        return bucketName;
    }
}
