package com.rod.api.board.service;


import com.rod.api.board.BoardRepository;
import com.rod.api.board.model.BoardDto;
import com.rod.api.common.component.Messenger;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BoardServiceImpl implements BoardService{

    private final BoardRepository repository;

    @Override
    public Messenger save(BoardDto t) {
        entityToDto(Optional.of(repository.save(dtoToEntity(t))));
        return new Messenger();
    }

    @Override
    public Messenger deleteById(Long id) {
        repository.deleteById(id);
        return Messenger.builder().message("True").build();
    }

    @Override
    public Messenger modify(BoardDto boardDto) {
        repository.save(dtoToEntity(boardDto));
        return Messenger.builder().message("True").build();
    }

    @Override
    public List<BoardDto> findAll() {
        return repository.findAll().stream().map(i -> entityToDto(Optional.ofNullable(i))).collect(Collectors.toList());
    }

    @Override
    public Optional<BoardDto> findById(Long id) {
        return Optional.of(entityToDto(repository.findById(id)));
    }

    @Override
    public long count() {
        return repository.count();
    }

    @Override
    public boolean existsById(Long id) {
        return repository.existsById(id);
    }
}