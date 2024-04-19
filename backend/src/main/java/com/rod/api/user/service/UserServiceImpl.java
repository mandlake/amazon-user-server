package com.rod.api.user.service;

import com.rod.api.common.component.JwtProvider;
import com.rod.api.common.component.Messenger;
import com.rod.api.user.UserRepository;
import com.rod.api.user.model.User;
import com.rod.api.user.model.UserDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Base64;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService {
    private final UserRepository repository;
    private final JwtProvider jwtProvider;

    @Override
    public Messenger save(UserDto t) {
        User ent = repository.save(dtoToEntity(t));
        return Messenger.builder().message("True").build();
    }

    @Override
    public Messenger deleteById(Long id) {
        repository.deleteById(id);
        return Messenger.builder().message("True").build();
    }

    @Override
    public List<UserDto> findAll() {
        return repository.findAll().stream().map(i -> entityToDto(Optional.ofNullable(i))).toList();
    }

    @Override
    public Optional<UserDto> findById(Long id) {
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

    @Override
    public Messenger modify(UserDto user) {
        repository.save(dtoToEntity(user));
        return Messenger.builder().message("True").build();
    }

    @Override
    public List<UserDto> findUsersByName(String name) {
        return repository.findUsersByName(name).stream().map(i -> entityToDto(Optional.ofNullable(i))).toList();
    }

    @Override
    public List<UserDto> findUsersByJob(String job) {
        return repository.findUsersByJob(job).stream().map(i -> entityToDto(Optional.ofNullable(i))).toList();
    }


    @Override
    public Optional<User> findUserByUsername(String username) {
        return repository.findByUsername(username);
    }

    @Transactional
    @Override
    public Messenger login(UserDto param) {
        User user = repository.findByUsername(param.getUsername()).get();
        String token = jwtProvider.createToken(entityToDto(Optional.of(user)));
        boolean flag = user.getPassword().equals(param.getPassword());

        // 토큰을 각 섹션(Header, Payload, Signature)으로 분할
        String[] chunks = token.split("\\.");
        Base64.Decoder decoder = Base64.getUrlDecoder();
        String header = new String(decoder.decode(chunks[0]));
        String payload = new String(decoder.decode(chunks[1]));

        log.info(header);
        log.info(payload);

        return Messenger.builder()
                .message(flag ? "True" : "False")
                .token(flag ? token : "None")
                .build();
    }

    public Messenger findByUsername(String username) {
        return Messenger.builder().message(repository.findByUsername(username).isPresent() ? "True" : "False").build();
    }
}
