package com.rod.api.board.model;

import com.rod.api.article.model.Article;
import com.rod.api.common.BaseEntity;
import jakarta.persistence.*;
import lombok.*;
import lombok.extern.log4j.Log4j2;

import java.util.List;

@Log4j2
@Entity(name = "boards")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@ToString(exclude = {"id", "articles"})
@Table(name = "boards")
public class Board extends BaseEntity {

    @Id
    @Column(name="id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="title")
    private String title;

    @Column(name="description")
    private String description;

    @OneToMany(mappedBy = "board", cascade = CascadeType.ALL)
    private List<Article> articles;

    @Builder(builderMethodName = "builder")
    public Board(Long id, String title, String description, List<Article> articles) {
        this.id = id;
        this.title = title;
        this.description = description;
    }
}
