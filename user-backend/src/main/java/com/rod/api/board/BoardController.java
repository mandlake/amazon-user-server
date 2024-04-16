package com.rod.api.board;

import com.rod.api.board.model.BoardDto;
import com.rod.api.board.service.BoardServiceImpl;
import com.rod.api.common.component.Messenger;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@ApiResponses(value = {
        @ApiResponse(responseCode = "400", description = "Invalid ID supplied"),
        @ApiResponse(responseCode = "404", description = "Customer not found")})
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/api/boards")
@Slf4j
public class BoardController {
    private final BoardServiceImpl service;

    @SuppressWarnings("static-access")
    @PostMapping( "/save")
    public ResponseEntity<Messenger> save(@RequestBody BoardDto dto) {
        log.info("입력받은 정보 : {}", dto );
        return ResponseEntity.ok(service.save(dto));
    }

    @GetMapping("/list")
    public ResponseEntity<List<BoardDto>> findAll(){
        log.info("입력받은 정보 : {}" );
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/detail")
    public ResponseEntity<Optional<BoardDto>> findById(@RequestParam Long id) {
        log.info("입력받은 정보 : {}", id );
        return ResponseEntity.ok(service.findById(id));
    }

    @PutMapping("/modify")
    public ResponseEntity<Messenger> modify(@RequestBody BoardDto param) {
        log.info("입력받은 정보 : {}", param );
        return ResponseEntity.ok(service.modify(param));
    }

    @DeleteMapping("/delete")
    public ResponseEntity<Messenger> deleteById(@RequestParam Long id) {
        log.info("입력받은 정보 : {}", id );
        return ResponseEntity.ok(service.deleteById(id));
    }

    @GetMapping("/count")
    public ResponseEntity<Long> count() {
        return ResponseEntity.ok(service.count());
    }

    @GetMapping("/exists/{id}")
    public ResponseEntity<Messenger> existsById(@PathVariable long id) {
        service.existsById(0L);
        return ResponseEntity.ok(new Messenger());
    }
}
