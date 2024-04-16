package com.rod.api.common.junit.lambda;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.stream.IntStream;
import java.util.stream.Stream;

public class StreamOfTest {

    @Test
    @DisplayName("Test Same")
    public void testSame() {
        System.out.println(" --------- Test Same ---------");
        int[] arr = { 1, 2, 3, 4, 5 };

        System.out.println(" --------- Using Arrays.stream() ---------");
        IntStream intStream = Arrays.stream(arr);
        intStream.forEach(str -> System.out.print(str + " "));
        System.out.println();

        System.out.println(" --------- Using Stream.of() ---------");
        Stream<int[]> stream = Stream.of(arr);
        stream.forEach(str -> System.out.print(Arrays.toString(str) + " "));
        System.out.println();
    }

    @Test
    @DisplayName("Test Different")
    public void testDifferent() {
        System.out.println(" --------- Test Different ---------");
        int[] arr = { 1, 2, 3, 4, 5 };

        System.out.println(" --------- Using Arrays.stream() ---------");
        IntStream intStream = Arrays.stream(arr);
        intStream.forEach(str -> System.out.print(str + " "));
        System.out.println();

        System.out.println(" --------- Using Stream.of() ---------");
        Stream<int[]> stream = Stream.of(arr);
        // ***** Flattening of Stream<int[]> into IntStream *****
        IntStream intStreamNew = stream.flatMapToInt(Arrays::stream);
        intStreamNew.forEach(str -> System.out.print(str + " "));
        System.out.println();
    }
}
