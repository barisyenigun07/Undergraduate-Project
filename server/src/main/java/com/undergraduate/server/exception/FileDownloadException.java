package com.undergraduate.server.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class FileDownloadException extends RuntimeException{
    public FileDownloadException(){
        super("File Could Not Be Downloaded!");
    }
}
