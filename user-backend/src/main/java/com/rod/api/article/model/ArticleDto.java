package com.rod.api.article.model;

import com.rod.api.board.model.Board;
import com.rod.api.user.model.User;
import lombok.*;
import org.springframework.stereotype.Component;

@Component
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class ArticleDto {
    private Long id;
    private String title;
    private String content;
    private Board board_id;
    private User user_id;
}
