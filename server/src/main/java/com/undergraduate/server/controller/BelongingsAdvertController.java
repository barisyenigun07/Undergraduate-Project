package com.undergraduate.server.controller;

import com.undergraduate.server.model.request.BelongingsAdvertRequest;
import com.undergraduate.server.model.response.BelongingsAdvertResponse;
import com.undergraduate.server.service.BelongingsAdvertService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BelongingsAdvertController {
    private final BelongingsAdvertService belongingsAdvertService;

    @Autowired
    public BelongingsAdvertController(BelongingsAdvertService belongingsAdvertService){
        this.belongingsAdvertService = belongingsAdvertService;
    }

    @PostMapping("/belongings-advert")
    public void createBelongingsAdvertController(@RequestBody BelongingsAdvertRequest body){
        belongingsAdvertService.createBelongingsAdvert(body);
    }

    @GetMapping("/belongings-advert/{id}")
    public BelongingsAdvertResponse getBelongingsAdvert(@PathVariable Long id){
        return belongingsAdvertService.getBelongingsAdvert(id);
    }

    @GetMapping("/belongings-advert")
    public List<BelongingsAdvertResponse> getBelongingsAdverts(){
        return belongingsAdvertService.getBelongingsAdverts();
    }

    @PutMapping("/belongings-advert/{id}")
    public void updateBelongingsAdvert(@PathVariable Long id, @RequestBody BelongingsAdvertRequest newBody){
        belongingsAdvertService.updateBelongingsAdvert(id, newBody);
    }

    @DeleteMapping("/belongings-advert/{id}")
    public void deleteBelongingsAdvert(@PathVariable Long id){
        belongingsAdvertService.deleteBelongingsAdvert(id);
    }
}
