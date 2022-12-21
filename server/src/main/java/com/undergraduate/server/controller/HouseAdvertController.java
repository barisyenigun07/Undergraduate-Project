package com.undergraduate.server.controller;

import com.undergraduate.server.model.request.HouseAdvertRequest;
import com.undergraduate.server.model.response.HouseAdvertResponse;
import com.undergraduate.server.service.HouseAdvertService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class HouseAdvertController {
    private final HouseAdvertService houseAdvertService;

    @Autowired
    public HouseAdvertController(HouseAdvertService houseAdvertService){
        this.houseAdvertService = houseAdvertService;
    }

    @PostMapping("/house-advert")
    public void createHouseAdvert(@RequestBody HouseAdvertRequest body){
        houseAdvertService.createHouseAdvert(body);
    }

    @GetMapping("/house-advert/{id}")
    public HouseAdvertResponse getHouseAdvert(@PathVariable Long id){
        return houseAdvertService.getHouseAdvert(id);
    }

    @GetMapping("/house-advert")
    public List<HouseAdvertResponse> getHouseAdverts(){
        return houseAdvertService.getHouseAdverts();
    }

    @PutMapping("/house-advert/{id}")
    public void updateHouseAdvert(@PathVariable Long id, @RequestBody HouseAdvertRequest newBody){
        houseAdvertService.updateHouseAdvert(id, newBody);
    }

    @DeleteMapping("/house-advert/{id}")
    public void deleteHouseAdvert(@PathVariable Long id){
        houseAdvertService.deleteHouseAdvert(id);
    }
}
