package com.rod.api.board.service;

import com.rod.api.board.model.Board;
import com.rod.api.board.model.BoardDto;
import com.rod.api.common.service.command.CommandService;
import com.rod.api.common.service.query.QueryService;

import java.util.Optional;

public interface BoardService extends CommandService<BoardDto>, QueryService<BoardDto> {
    default Board dtoToEntity(BoardDto dto){
        return Board.builder()
                .id(dto.getId())
                .boardName(dto.getBoardName())
                .boardType(dto.getBoardType())
                .build();
    }

    default BoardDto entityToDto(Optional<Board> optional){
        Board b = optional.get();
        return BoardDto.builder()
                .id(b.getId())
                .boardName(b.getBoardName())
                .boardType(b.getBoardType())
                .build();
    }

}