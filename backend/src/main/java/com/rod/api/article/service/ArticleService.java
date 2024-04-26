package com.rod.api.article.service;

import com.rod.api.article.model.Article;
import com.rod.api.article.model.ArticleDto;
import com.rod.api.board.model.Board;
import com.rod.api.common.service.command.CommandService;
import com.rod.api.common.service.query.QueryService;
import com.rod.api.user.model.User;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Optional;

public interface ArticleService extends CommandService<ArticleDto>, QueryService<ArticleDto>{
    default Article dtoToEntity(ArticleDto dto) {
        return Article.builder()
                .id(dto.getId())
                .title(dto.getTitle())
                .content(dto.getContent())
                .board(Board.builder().id(dto.getBoard()).build())
                .user(User.builder().id(dto.getUser()).build())
                .build();
    }

    default ArticleDto entityToDto(Optional<Article> optional) {
        Article a = optional.get();
        return ArticleDto.builder()
                .id(a.getId())
                .title(a.getTitle())
                .content(a.getContent())
                .board(a.getBoard().getId())
                .user(a.getUser().getId())
                .build();
    }
}