package com.undergraduate.server.bucket;

public enum BucketName {
    STORAGE_BUCKET("***********************");

    private final String bucketName;

    BucketName(String bucketName){
        this.bucketName = bucketName;
    }

    public String getBucketName(){
        return bucketName;
    }
}
