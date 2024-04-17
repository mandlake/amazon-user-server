package com.rod.api.article.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.rod.api.article.ArticleRepository;
import com.rod.api.article.model.ArticleDto;
import com.rod.api.board.BoardRepository;
import com.rod.api.common.component.Messenger;
import com.rod.api.user.model.UserDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ArticleServiceImpl implements ArticleService{
    private final ArticleRepository repository;

    @Override
    public Messenger save(ArticleDto t) {
        repository.save(dtoToEntity(t));
        return Messenger.builder().message("True").build();
    }

    @Override
    public Messenger deleteById(Long id) {
        repository.deleteById(id);
        return Messenger.builder().message("True").build();
    }

    @Override
    public Messenger modify(ArticleDto articleDto) {
        repository.save(dtoToEntity(articleDto));
        return Messenger.builder().message("True").build();
    }

    @Override
    public List<ArticleDto> findAll() {
        return repository.findAll().stream().map(i -> entityToDto(Optional.ofNullable(i))).collect(Collectors.toList());
    }

    public List<ArticleDto> findByBoardId(Long id) {
        return repository.findAllByBoardId(id).stream().map(i -> entityToDto(Optional.ofNullable(i))).collect(Collectors.toList());
    }

    @Override
    public Optional<ArticleDto> findById(Long id) {
        return repository.findById(id).map(i -> entityToDto(Optional.of(i)));
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