package com.rod.api.user.model;

import com.rod.api.article.model.Article;
import lombok.*;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Component
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class UserDto {
    private Long id;
    private String username;
    private String password;
    private String name;
    private String phoneNumber;
    private String address;
    private String job;
    private LocalDateTime registerDate;
    private LocalDate modDate;

    @Builder.Default
    private List<Article> articles = new ArrayList<>();
}
