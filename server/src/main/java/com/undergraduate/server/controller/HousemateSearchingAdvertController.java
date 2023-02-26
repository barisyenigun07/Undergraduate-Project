package com.undergraduate.server.controller;

import com.undergraduate.server.model.request.HousemateSearchingAdvertRequest;
import com.undergraduate.server.model.response.HousemateSearchingAdvertResponse;
import com.undergraduate.server.service.HousemateSearchingAdvertService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class HousemateSearchingAdvertController {
    private final HousemateSearchingAdvertService housemateSearchingAdvertService;

    @Autowired
    public HousemateSearchingAdvertController(HousemateSearchingAdvertService housemateSearchingAdvertService){
        this.housemateSearchingAdvertService = housemateSearchingAdvertService;
    }

    @PostMapping("/housemate-searching-advert")
    public void createHousemateSearchingAdvert(@RequestBody HousemateSearchingAdvertRequest body){
        housemateSearchingAdvertService.createHousemateSearchingAdvert(body);
    }

    @GetMapping("/housemate-searching-advert/{id}")
    public HousemateSearchingAdvertResponse getHousemateSearchingAdvert(@PathVariable Long id){
        return housemateSearchingAdvertService.getHousemateSearchingAdvert(id);
    }

    @GetMapping("/housemate-searching-advert")
    public List<HousemateSearchingAdvertResponse> getHousemateSearchingAdverts(){
        return housemateSearchingAdvertService.getHousemateSearchingAdverts();
    }

    @GetMapping("/housemate-searching-advert")
    public List<HousemateSearchingAdvertResponse> getHousemateSearchingAdvertPage(@RequestParam("page_no") int pageNo, @RequestParam("size") int size){
        return housemateSearchingAdvertService.getHousemateSearchingAdvertPage(pageNo, size);
    }

    @PutMapping("/housemate-searching-advert/{id}")
    public void updateHousemateSearchingAdvert(@PathVariable Long id, @RequestBody HousemateSearchingAdvertRequest body){
        housemateSearchingAdvertService.updateHousemateSearchingAdvert(id, body);
    }

    @DeleteMapping("/housemate-searching-advert/{id}")
    public void deleteHousemateSearchingAdvert(@PathVariable Long id){
        housemateSearchingAdvertService.deleteHousemateSearchingAdvert(id);
    }

}
