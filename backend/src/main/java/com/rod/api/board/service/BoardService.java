package com.rod.api.board.service;

import com.rod.api.board.model.Board;
import com.rod.api.board.model.BoardDto;
import com.rod.api.common.service.command.CommandService;
import com.rod.api.common.service.query.QueryService;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Optional;

public interface BoardService extends CommandService<BoardDto>, QueryService<BoardDto> {
    default Board dtoToEntity(BoardDto dto){
        return Board.builder()
                .id(dto.getId())
                .title(dto.getTitle())
                .description(dto.getDescription())
                .build();
    }

    default BoardDto entityToDto(Optional<Board> optional){
        Board b = optional.get();
        return BoardDto.builder()
                .id(b.getId())
                .title(b.getTitle())
                .description(b.getDescription())
                .registerDate(LocalDateTime.now())
                .modDate(LocalDate.now())
                .build();
    }

}