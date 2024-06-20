package com.backend.backend.Controller;

import com.backend.backend.Model.anime;
import com.backend.backend.Service.AnimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/animes")
public class AnimeController {
    @Autowired
    private AnimeService animeService;

    @GetMapping
    public List<anime> getAllAnimes() {
        return animeService.findAll();
    }

    @GetMapping("/{id}")
    public Optional<anime> getAnimeById(@PathVariable Long id) {
        return animeService.findById(id);
    }

    @PostMapping
    public anime createAnime(@RequestBody anime anime) {
        return animeService.save(anime);
    }

    @DeleteMapping("/{id}")
    public void deleteAnime(@PathVariable Long id) {
        animeService.deleteById(id);
    }
}
