package com.rod.api.user.service;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.stream.Stream;

import static org.assertj.core.api.Assertions.assertThat;

@ExtendWith(SpringExtension.class)
public class SubstringDemo {
    private static final Logger log = LogManager.getLogger(SubstringDemo.class);

    @Test
    public void string_divide() {
        var str = "a, b, c";
        log.info("str: {}", str);
        var arr = str.split(", ");
        assertThat(arr.length).isEqualTo(3);
    }

    @Test
    public void divide_with_human_id() {
        var human1 = "970303-1";
        var human2 = "951101-2";
        var human3 = "020101-3";
        var human4 = "050101-4";

        var human5 = "730101-5";
        var human6 = "820101-6";
        var human7 = "120101-7";
        var human8 = "050101-8";

        log.info("human1 성별: {}, 한국 나이: {}, 만 나이: {}", gender(human1), korean_age(human1), getAgeWithLambda(human1));
        log.info("human2 성별: {}, 한국 나이: {}, 만 나이: {}", gender(human2), korean_age(human2), age(human2));
        log.info("human3 성별: {}, 한국 나이: {}, 만 나이: {}", gender(human3), korean_age(human3), age(human3));
        log.info("human4 성별: {}, 한국 나이: {}, 만 나이: {}", gender(human4), korean_age(human4), age(human4));
        log.info("human5 성별: {}, 한국 나이: {}, 만 나이: {}", gender(human5), korean_age(human5), age(human5));
        log.info("human6 성별: {}, 한국 나이: {}, 만 나이: {}", gender(human6), korean_age(human6), age(human6));
        log.info("human7 성별: {}, 한국 나이: {}, 만 나이: {}", gender(human7), korean_age(human7), age(human7));
        log.info("human8 성별: {}, 한국 나이: {}, 만 나이: {}", gender(human8), korean_age(human8), age(human8));
    }

    public String gender(String human) {
        var arr = human.split("-");
        var gender = Integer.parseInt(arr[1]);
        return gender % 2 == 1 ? "남자" : "여자";
    }

    public int age(String human) {
        var now = LocalDate.now();
        var current = Integer.parseInt(now.format(DateTimeFormatter.ofPattern("yyyyMMdd"))); // 20240424
        var arr = human.split("-");
        var year = change_year(arr);                                                         // 20000303
        return (current - year) / 10000;                                                     // 24
    }

    public int korean_age(String human) {
        var now = LocalDate.now();
        var current = Integer.parseInt(now.format(DateTimeFormatter.ofPattern("yyyyMMdd"))); // 20240424
        var date = Integer.parseInt(now.format(DateTimeFormatter.ofPattern("MMdd")));        // 0424
        var arr = human.split("-");
        var year = change_year(arr);                                                         // 20000303
        var human_date = Integer.parseInt(arr[0].substring(2));                     // 0303
        return human_date > date ? (current - year) / 10000 + 2 : (current - year) / 10000 + 1;
    }

    public int change_year(String[] arr) {
        var year = arr[0];
        var gender = arr[1];
        var int_year = Integer.parseInt(year);

        return switch (gender) {
            case "1", "2", "5", "6" -> int_year + 19000000;
            case "3", "4", "7", "8" -> int_year + 20000000;
            default -> int_year + 18000000;
        };
    }

    public int getAgeWithLambda(String human) {
        return Stream.of(human)
                .map(i -> i.split("-"))
                .map(i -> switch (i[1]) {
                    case "1", "2", "5", "6" -> Integer.parseInt(i[0]) + 19000000;
                    case "3", "4", "7", "8" -> Integer.parseInt(i[0]) + 20000000;
                    default -> Integer.parseInt(i[0]) + 18000000;
                })
                .map(i -> (Integer.parseInt(LocalDate.now().format(DateTimeFormatter.ofPattern("yyyyMMdd"))) - i) / 10000)
                .findAny().orElseThrow();
    }
}