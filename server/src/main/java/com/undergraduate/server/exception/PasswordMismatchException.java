package com.undergraduate.server.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.CONFLICT)
public class PasswordMismatchException extends RuntimeException{
    public PasswordMismatchException(){
        super("Passwords Do Not Match!");
    }
}
