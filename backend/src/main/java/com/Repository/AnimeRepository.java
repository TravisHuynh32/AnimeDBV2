package com.Repository;

import com.Model.anime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnimeRepository extends JpaRepository<anime, Long> {
}
