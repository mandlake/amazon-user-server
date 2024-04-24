package com.rod.api.user.service;

import com.rod.api.common.component.Messenger;
import com.rod.api.user.model.UserDto;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@Transactional
class UserServiceImplTest {
    @Autowired
    private UserServiceImpl service;

    @Test
    @DisplayName("유저 정보 저장")
    void save() {
        var vo = service.save(UserDto.builder()
                .password("password")
                .build());
        assertThat(vo.getMessage()).isEqualTo("True");
    }

    @Test
    @DisplayName("유저 제거")
    void deleteById() {
        var vo = service.deleteById(1L);
        assertThat(vo.getMessage()).isEqualTo("True");
    }

    @Test
    @DisplayName("유저 정보 전부 불러오기")
    void findAll() {
        var dtos = service.findAll();
        assertThat(dtos.size()).isEqualTo(15);
    }

    @Test
    @DisplayName("아이디로 유저 정보 불러오기")
    void findById() {
        var dto = service.findById(1L);
        assertThat(dto.isPresent()).isTrue();
    }

    @Test
    @DisplayName("가입된 회원 수")
    void count() {
        var totalUsers = service.count();
        assertThat(totalUsers).isEqualTo(15L);
    }

    @Test
    @DisplayName("유저 정보 찾기")
    void existsById() {
        var exists = service.existsById(1L);
        assertThat(exists).isTrue();
    }

    @Test
    @DisplayName("정보 수정하기")
    void modify() {
        var modify = service.modify(UserDto.builder()
                .password("password")
                .build());
        assertThat(modify.getMessage()).isEqualTo("True");
    }

    @Test
    void findUsersByName() {
    }

    @Test
    void findUsersByJob() {
    }

    @Test
    void findUserByUsername() {
    }

    @Test
    void login() {
    }
}