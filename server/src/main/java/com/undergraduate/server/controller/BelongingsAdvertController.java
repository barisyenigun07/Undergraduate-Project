package com.undergraduate.server.controller;

import com.undergraduate.server.model.request.BelongingsAdvertRequest;
import com.undergraduate.server.model.response.BelongingsAdvertResponse;
import com.undergraduate.server.service.BelongingsAdvertService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
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
    public void createBelongingsAdvertController(@ModelAttribute BelongingsAdvertRequest body){
        belongingsAdvertService.createBelongingsAdvert(body);
    }

    @GetMapping("/belongings-advert/{id}")
    public BelongingsAdvertResponse getBelongingsAdvert(@PathVariable Long id){
        return belongingsAdvertService.getBelongingsAdvert(id);
    }

    @GetMapping("/belongings-advert/user")
    public List<BelongingsAdvertResponse> getBelongingsAdvertsByUser(@RequestParam("user_id") Long userId) {
        return belongingsAdvertService.getBelongingsAdvertsByUser(userId);
    }

    @GetMapping("/belongings-advert")
    public List<BelongingsAdvertResponse> getBelongingsAdverts(){
        return belongingsAdvertService.getBelongingsAdverts();
    }

    @GetMapping("/belongings-advert/page")
    public Page<BelongingsAdvertResponse> getBelongingsAdvertPage(@RequestParam("page_no") int pageNo, @RequestParam("size") int size){
        return belongingsAdvertService.getBelongingsAdvertPage(pageNo, size);
    }

    @GetMapping("/belongings-advert/{id}/image/download")
    public byte[] getImageOfBelongingsAdvert(@PathVariable Long id, @RequestParam("filename") String filename){
        return belongingsAdvertService.getImageOfBelongingsAdvert(id, filename);
    }

    @PutMapping("/belongings-advert/{id}")
    public void updateBelongingsAdvert(@PathVariable Long id, @ModelAttribute BelongingsAdvertRequest newBody){
        belongingsAdvertService.updateBelongingsAdvert(id, newBody);
    }

    @PutMapping("/belongings-advert/{id}/image/delete")
    public void deleteBelongingsAdvertImage(@PathVariable Long id, @RequestParam("filename") String filename){
        belongingsAdvertService.deleteBelongingsAdvertImage(id, filename);
    }

    @DeleteMapping("/belongings-advert/{id}")
    public void deleteBelongingsAdvert(@PathVariable Long id){
        belongingsAdvertService.deleteBelongingsAdvert(id);
    }
}
