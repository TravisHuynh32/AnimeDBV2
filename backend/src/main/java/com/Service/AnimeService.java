package com.Service;

import com.Model.anime;
import com.Repository.AnimeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AnimeService {
    @Autowired
    private AnimeRepository animeRepository;

    public List<anime> findAll() {
        return animeRepository.findAll();
    }

    public Optional<anime> findById(Long id) {
        return animeRepository.findById(id);
    }

    public anime save(anime anime) {
        return animeRepository.save(anime);
    }

    public void deleteById(Long id) {
        animeRepository.deleteById(id);
    }
}
