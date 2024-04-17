package com.rod.api.board.model;

import com.rod.api.article.model.Article;
import lombok.*;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class BoardDto {
    private Long id;
    private String title;
    private String description;

    @Builder.Default
    private List<Article> articles = new ArrayList<>();
}
