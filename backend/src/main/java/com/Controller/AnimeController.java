package com.Controller;

import com.Model.anime;
import com.Repository.AnimeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/animes")
public class AnimeController {
    @Autowired
    private AnimeRepository animeRepository;

    @GetMapping
    public List<anime> getAllAnimes() {
        return animeRepository.findAll();
    }

    @PostMapping
    public anime createAnime(@RequestBody anime anime) {
        return animeRepository.save(anime);
    }

    @DeleteMapping("/{id}")
    public void deleteAnime(@PathVariable Long id) {
        animeRepository.deleteById(id);
    }
}
