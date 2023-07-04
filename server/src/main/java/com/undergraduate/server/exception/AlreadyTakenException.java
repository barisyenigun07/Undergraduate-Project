package com.undergraduate.server.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.CONFLICT)
public class AlreadyTakenException extends RuntimeException {
    public AlreadyTakenException(AlreadyTakenType alreadyTakenType) {
        super(alreadyTakenType + " Already Taken!");
    }
}
