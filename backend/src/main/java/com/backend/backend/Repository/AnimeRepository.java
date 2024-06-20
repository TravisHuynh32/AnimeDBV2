package com.backend.backend.Repository;

import com.backend.backend.Model.anime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnimeRepository extends JpaRepository<anime, Long> {

    // SEARCH BY SPECIFIC QUERIES, NOTE: FOR THE FUTURE DO THIS SO YOU CAN SAVE TIME
    @Query("SELECT a FROM anime a WHERE LOWER(a.title) LIKE %:query%")
    List<anime> customSearchByTitle(@Param("query") String query);
}
