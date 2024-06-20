package com.backend.backend.Repository;

import com.backend.backend.Model.userAnime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserAnimeRepository extends JpaRepository<userAnime, Long> {
    List<userAnime> findByUserId(Long userId);
}
