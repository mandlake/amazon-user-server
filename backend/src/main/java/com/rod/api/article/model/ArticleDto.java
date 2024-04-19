package com.rod.api.article.model;

import lombok.*;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Component
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class ArticleDto {
    private Long id;
    private String title;
    private String content;
    private Long board;
    private Long user;
    private LocalDateTime registerDate;
    private LocalDate modDate;
}
