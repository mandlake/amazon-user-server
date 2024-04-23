package com.rod.api.common.component.interceptor;

import com.rod.api.common.component.sequrity.JwtProvider;
import com.rod.api.user.UserRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import java.util.Optional;
import java.util.stream.Stream;

@Component
@RequiredArgsConstructor
public class AuthInterceptor implements HandlerInterceptor {
    private static final Logger log = LoggerFactory.getLogger(AuthInterceptor.class);
    private final JwtProvider jwtProvider;
    private final UserRepository repository;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {

        return Stream.of(request)
                .map(jwtProvider::extractTokenFromHeader)                               // 토큰 호출
                .filter(i -> !i.equals("undefined"))                                    // 토큰을 제대로 불러왔을 경우
                .peek(i -> log.info("1- 인터셉트 토큰 로그 Bearer 포함 : {}", i))
                .map(i -> jwtProvider.getPayload(i).get("userId", Long.class))       // userId 불러오기
                .map(repository::findById)                                              // 해당 id가 존재하는지 확인
                .peek(i -> log.info("2- 인터셉트 사용자 정보 : {}", i))
                .anyMatch(Optional::isPresent);                                         // 있으면 true
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView)
            throws Exception {

    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)
            throws Exception {

    }
}
