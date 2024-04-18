package com.rod.api.article;

import com.rod.api.article.model.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface ArticleRepository extends JpaRepository<Article, Long>{
    // JPQL Default
    @Query("select a from articles a where a.board.id = :boardId")
    public List<Article> findAllByBoardId(@Param("boardId") Long boardId);

    // Native
    @Query(value = "select * from articles a where a.board.id = 1", nativeQuery = true)
    public List<Map<Article, Object>> getReviewsArticles(@Param("boardId") Long boardId);

    String articleDtoMapping = "new com.rod.api.article.model.ArticleDto(a.id, a.title, a.content, a.user.id, a.board.id, a.registerDate, a.modDate)";
    @Query("select " + articleDtoMapping + " from articles a where a.board = :boardId")
    public List<Article> getArticlesByBoardId(@Param("boardId") Long boardId);
}