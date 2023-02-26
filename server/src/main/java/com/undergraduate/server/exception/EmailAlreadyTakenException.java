package com.undergraduate.server.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.CONFLICT)
public class EmailAlreadyTakenException extends RuntimeException{
    public EmailAlreadyTakenException(){
        super("That Email Has Already Been Taken!");
    }
}
