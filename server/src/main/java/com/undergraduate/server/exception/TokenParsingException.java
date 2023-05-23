package com.undergraduate.server.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class TokenParsingException extends RuntimeException{
    public TokenParsingException(){
        super("JWT Token Could Not Be Parsed Appropriately");
    }
}
