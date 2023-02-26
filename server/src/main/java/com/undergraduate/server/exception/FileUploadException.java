package com.undergraduate.server.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.UNSUPPORTED_MEDIA_TYPE)
public class FileUploadException extends RuntimeException{
    public FileUploadException(){
        super("File Could Not Be Uploaded!");
    }
}
