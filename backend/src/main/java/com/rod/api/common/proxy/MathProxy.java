package com.rod.api.common.proxy;

/**
 *   ============= Math Proxy ==============
 *  abs, ceil, floor, max, min, random, round
 *  pow, sqrt, log, log10, sin, cos, tan
 *   =======================================
 */

import java.util.function.BiFunction;
import java.util.function.Function;
import java.util.function.Supplier;

public class MathProxy {
    public static Function<Integer, Integer> absInt = Math::abs;
    public static Function<Double, Double> ansDouble = Math::abs;
    public static Function<Long, Long> ansLong = Math::abs;

    public static Function<Double, Double> ceil = Math::ceil;

    public static Function<Double, Double> floor = Math::floor;

    public static BiFunction<Integer, Integer, Integer> maxInt = Math::max;
    public static BiFunction<Double, Double, Double> maxDouble = Math::max;

    public static BiFunction<Integer, Integer, Integer> minInt = Math::min;
    public static BiFunction<Double, Double, Double> minDouble = Math::min;

    public static BiFunction<Integer, Integer, Integer> randomInt
            = (a, b) -> (int) (Math.random() * (b - a) + a);
    public static Supplier<Double> randomDouble = Math::random;

    public static Function<Double, Long> round = Math::round;

    public static BiFunction<Double, Double, Double> pow = Math::pow;

    public static Function<Double, Double> sqrt = Math::sqrt;

    public static Function<Double, Double> log = Math::log;

    public static Function<Double, Double> log10 = Math::log10;

    public static Function<Double, Double> sin = Math::sin;

    public static Function<Double, Double> cos = Math::cos;

    public static Function<Double, Double> tan = Math::tan;
}
