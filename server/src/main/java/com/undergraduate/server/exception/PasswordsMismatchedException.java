package com.undergraduate.server.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class PasswordsMismatchedException extends RuntimeException{
    public PasswordsMismatchedException(){
        super("Passwords Not Matched!");
    }
}
