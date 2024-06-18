package com.backend.backend.Repository;

import com.backend.backend.Model.anime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnimeRepository extends JpaRepository<anime, Long> {
}
