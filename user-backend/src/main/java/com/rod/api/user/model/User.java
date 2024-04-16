package com.rod.api.user.model;

import com.rod.api.article.model.Article;
import com.rod.api.common.BaseEntity;
import jakarta.persistence.*;
import lombok.*;
import lombok.extern.log4j.Log4j2;

import java.util.List;

@Log4j2
@Entity(name="users")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Setter
@ToString(exclude = {"id", "articles"})
@Table(name = "users")
public class User extends BaseEntity {

    @Id
    @Column(name="id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "name")
    private String name;

    @Column(name = "phoneNumber")
    private String phoneNumber;

    @Column(name = "address")
    private String address;

    @Column(name = "job")
    private String job;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Article> articles;

    @Builder(builderMethodName = "builder")
    public User(Long id, String username, String password,
                String name, String phoneNumber,
                String address, String job) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.job = job;
    }
}
