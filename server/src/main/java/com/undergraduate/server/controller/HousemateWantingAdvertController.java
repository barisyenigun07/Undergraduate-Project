package com.undergraduate.server.controller;

import com.undergraduate.server.model.request.HousemateWantingAdvertRequest;
import com.undergraduate.server.model.response.HousemateWantingAdvertResponse;
import com.undergraduate.server.service.HousemateWantingAdvertService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class HousemateWantingAdvertController {
    private final HousemateWantingAdvertService housemateWantingAdvertService;

    @Autowired
    public HousemateWantingAdvertController(HousemateWantingAdvertService housemateWantingAdvertService){
        this.housemateWantingAdvertService = housemateWantingAdvertService;
    }

    @PostMapping("/housemate-wanting-advert")
    public void createHousemateWantingAdvert(@RequestBody HousemateWantingAdvertRequest body){
        housemateWantingAdvertService.createHousemateWantingAdvert(body);
    }

    @GetMapping("/housemate-wanting-advert/{id}")
    public HousemateWantingAdvertResponse getHousemateWantingAdvert(@PathVariable Long id){
        return housemateWantingAdvertService.getHousemateWantingAdvert(id);
    }

    @GetMapping("/housemate-wanting-advert")
    public List<HousemateWantingAdvertResponse> getHousemateWantingAdverts(){
        return housemateWantingAdvertService.getHousemateWantingAdverts();
    }

    @PutMapping("/housemate-wanting-advert/{id}")
    public void updateHousemateWantingAdvert(@PathVariable Long id, @RequestBody HousemateWantingAdvertRequest newBody){
        housemateWantingAdvertService.updateHousemateWantingAdvert(id,newBody);
    }

    @DeleteMapping("/housemate-wanting-advert/{id}")
    public void deleteHousemateWantingAdvert(@PathVariable Long id){
        housemateWantingAdvertService.deleteHousemateWantingAdvert(id);
    }

}
