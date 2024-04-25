package com.rod.api.common.component.sequrity;

import com.rod.api.user.model.UserDto;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.log4j.Log4j2;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.*;

import javax.crypto.SecretKey;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Log4j2
@Component
public class JwtProvider  {
    @Value("${jwt.iss}")
    private String issuer;

    private final SecretKey secretKey;

    Instant expiredDate = Instant.now().plus(1, ChronoUnit.DAYS);


    public JwtProvider(@Value("${jwt.secret}") String secretKey) {
        this.secretKey = Keys.hmacShaKeyFor(Decoders.BASE64URL.decode(secretKey));
    }

    public String createToken(UserDto dto) {
        String token = Jwts.builder()
                .issuer(issuer)
                .signWith(secretKey)
                .expiration(Date.from(expiredDate))
                .subject("rod")
                .claim("username", dto.getUsername())
                .claim("job", dto.getJob())
                .claim("userId", dto.getId())
                .compact();

        log.info("로그인 성공으로 발급된 토큰 : " + token);

        return token;
    }

    public void printPayload(String token) {
        // 토큰을 각 섹션(Header, Payload, Signature)으로 분할
        String[] chunks = token.split("\\.");
        Base64.Decoder decoder = Base64.getUrlDecoder();
        String header = new String(decoder.decode(chunks[0]));
        String payload = new String(decoder.decode(chunks[1]));

        log.info(header);
        log.info(payload);
    }

    public String extractTokenFromHeader(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization");
        return bearerToken != null && bearerToken.startsWith("Bearer ") ? bearerToken.substring(7) : "undefined";
    }

    public Claims getPayload(String token) {
        return Jwts.parser().verifyWith(secretKey).build().parseSignedClaims(token).getPayload();
    }
}