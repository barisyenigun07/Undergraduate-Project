package com.undergraduate.server.exception;

public enum ErrorCode {
    unknown(400),
    unauthorized(401),
    user_not_found(404),
    user_already_exists(409),
    password_mismatch(409),
    email_already_taken(409),
    advert_not_found(404);


    private final int httpCode;

    ErrorCode(int httpCode){
        this.httpCode = httpCode;
    }

    public int getHttpCode(){
        return httpCode;
    }
}
