package com.backend.backend.Controller;

import com.backend.backend.Model.userAnime;
import com.backend.backend.Service.UserAnimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user_animes")
public class UserAnimeController {
    @Autowired
    private UserAnimeService userAnimeService;

    @GetMapping("/user/{userId}")
    public List<userAnime> getUserAnimes(@PathVariable Long userId) {
        return userAnimeService.findByUserId(userId);
    }

    @PostMapping
    public userAnime addUserAnime(@RequestBody userAnime userAnime) {
        return userAnimeService.save(userAnime);
    }

    @DeleteMapping("/{id}")
    public void deleteUserAnime(@PathVariable Long id) {
        userAnimeService.deleteById(id);
    }
}
