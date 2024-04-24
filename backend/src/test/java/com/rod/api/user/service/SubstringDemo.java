package com.rod.api.user.service;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

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

        log.info("human1 성별: {}, 나이: {}", gender(human1), age(human1));
        log.info("human2 성별: {}, 나이: {}", gender(human2), age(human2));
        log.info("human3 성별: {}, 나이: {}", gender(human3), age(human3));
        log.info("human4 성별: {}, 나이: {}", gender(human4), age(human4));
        log.info("human5 성별: {}, 나이: {}", gender(human5), age(human5));
        log.info("human6 성별: {}, 나이: {}", gender(human6), age(human6));
        log.info("human7 성별: {}, 나이: {}", gender(human7), age(human7));
        log.info("human8 성별: {}, 나이: {}", gender(human8), age(human8));
    }

    public String gender(String human) {
        var arr = human.split("-");
        var gender = Integer.parseInt(arr[1]);
        return gender % 2 == 1 ? "남자" : "여자";
    }

    public int age(String human) {
        var now = LocalDate.now();
        var curr = String.format(now.format(DateTimeFormatter.ofPattern("YYYYMMdd"))); // 20240424
        var curr_year = Integer.parseInt(curr);
        var arr = human.split("-");
        var year = change_year(arr); // 20000303
        return (curr_year - year) / 10000; // 24
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
}