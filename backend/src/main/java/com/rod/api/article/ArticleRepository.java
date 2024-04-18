package com.rod.api.article;

import com.rod.api.article.model.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ArticleRepository extends JpaRepository<Article, Long>{
    @Query("select a from articles a where a.board.id = :boardId")
    public List<Article> findAllByBoardId(@Param("boardId") Long boardId);
}