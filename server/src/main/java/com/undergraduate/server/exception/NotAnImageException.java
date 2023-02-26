package com.undergraduate.server.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.UNSUPPORTED_MEDIA_TYPE)
public class NotAnImageException extends RuntimeException{
    public NotAnImageException(){
        super("File(s) Must Be Image!");
    }
}
