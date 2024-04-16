package com.rod.api.common.junit;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class ItemTest {
    Item s = new Item();
    @Test
    public void test() {
        Assertions.assertEquals(s.add(5, 3), 8);
    }

    @Test
    public void systemOut() {
        //List<Integer> numbers = List.of(1,2,3,4);
        String s3 = s.print();
        System.out.println("-->"+s3);
        String s2 = "Hello";
        Assertions.assertEquals(s.print(), "Hello");
    }
}