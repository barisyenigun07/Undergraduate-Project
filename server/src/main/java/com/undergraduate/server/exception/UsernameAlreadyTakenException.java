package com.undergraduate.server.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.CONFLICT)
public class UsernameAlreadyTakenException extends RuntimeException{
    public UsernameAlreadyTakenException(){
        super("Username Has Already Been Taken From Another User!");
    }
}
