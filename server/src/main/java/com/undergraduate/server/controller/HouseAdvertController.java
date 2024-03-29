package com.undergraduate.server.controller;

import com.undergraduate.server.model.request.HouseAdvertRequest;
import com.undergraduate.server.model.response.HouseAdvertResponse;
import com.undergraduate.server.service.HouseAdvertService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
public class HouseAdvertController {
    private final HouseAdvertService houseAdvertService;

    @Autowired
    public HouseAdvertController(HouseAdvertService houseAdvertService){
        this.houseAdvertService = houseAdvertService;
    }

    @PostMapping( "/house-advert")
    public void createHouseAdvert(@ModelAttribute HouseAdvertRequest body){
        houseAdvertService.createHouseAdvert(body);
    }

    @GetMapping("/house-advert/{id}")
    public HouseAdvertResponse getHouseAdvert(@PathVariable Long id){
        return houseAdvertService.getHouseAdvert(id);
    }

    @GetMapping("/house-advert/user")
    public List<HouseAdvertResponse> getHouseAdvertsByUser(@RequestParam("user_id") Long userId) {
        return houseAdvertService.getHouseAdvertsByUser(userId);
    }

    @GetMapping("/house-advert")
    public List<HouseAdvertResponse> getHouseAdverts(){
        return houseAdvertService.getHouseAdverts();
    }

    @GetMapping("/house-advert/page")
    public Page<HouseAdvertResponse> getHouseAdvertPage(@RequestParam("page_no") int pageNo, @RequestParam("size") int size){
        return houseAdvertService.getHouseAdvertsPage(pageNo, size);
    }
    @GetMapping("/house-advert/{id}/image/download")
    public byte[] getImageOfHouseAdvert(@PathVariable Long id, @RequestParam("filename") String filename){
        return houseAdvertService.getImageOfHouseAdvert(id, filename);
    }

    @PutMapping("/house-advert/{id}")
    public void updateHouseAdvert(@PathVariable Long id, @ModelAttribute HouseAdvertRequest newBody){
        houseAdvertService.updateHouseAdvert(id, newBody);
    }

    @PutMapping("/house-advert/{id}/image/delete")
    public void deleteHouseAdvertImage(@PathVariable Long id, @RequestParam("filename") String filename){
        houseAdvertService.deleteHouseAdvertImage(id, filename);
    }

    @DeleteMapping("/house-advert/{id}")
    public void deleteHouseAdvert(@PathVariable Long id){
        houseAdvertService.deleteHouseAdvert(id);
    }
}
