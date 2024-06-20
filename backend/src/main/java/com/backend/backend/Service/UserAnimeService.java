package com.backend.backend.Service;

import com.backend.backend.Model.userAnime;
import com.backend.backend.Repository.UserAnimeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserAnimeService {
    @Autowired
    private UserAnimeRepository userAnimeRepository;

    public List<userAnime> findByUserId(Long userId) {
        return userAnimeRepository.findByUserId(userId);
    }

    public userAnime save(userAnime userAnime) {
        return userAnimeRepository.save(userAnime);
    }

    public void deleteById(Long id) {
        userAnimeRepository.deleteById(id);
    }
}
