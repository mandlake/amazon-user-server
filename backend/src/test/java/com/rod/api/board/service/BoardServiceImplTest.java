package com.rod.api.board.service;

import com.rod.api.board.model.BoardDto;
import com.rod.api.common.component.Messenger;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@Transactional
class BoardServiceImplTest {
    @Autowired
    private BoardServiceImpl service;

    @Test
    @DisplayName("보드 정보 저장")
    void save() {
        Messenger vo = service.save(BoardDto.builder().boardType("22").build());
        assertThat(vo.getMessage()).isEqualTo("True");
    }

    @Test
    void deleteById() {
        Messenger vo = service.deleteById(1L);
        assertThat(vo.getMessage()).isEqualTo("True");
    }

    @Test
    void modify() {
        Messenger vo = service.modify(BoardDto.builder().boardType("22").build());
        assertThat(vo.getMessage()).isEqualTo("True");
    }

    @Test
    void findAll() {
        List<BoardDto> dtos = service.findAll();
        assertThat(dtos).hasSize(2);
    }

    @Test
    void findById() {
        Optional<BoardDto> dto = service.findById(1L);
        assertThat(dto.isPresent()).isTrue();
    }

    @Test
    void count() {
        Long count = service.count();
        assertThat(count).isEqualTo(2L);
    }

    @Test
    void existsById() {
        boolean exists = service.existsById(1L);
        assertThat(exists).isTrue();
    }
}