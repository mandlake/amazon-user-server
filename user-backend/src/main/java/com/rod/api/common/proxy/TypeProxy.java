package com.rod.api.common.proxy;

import java.util.function.Function;

public class TypeProxy {
    public static Function<?, String> stringO = String::valueOf;
    public static Function<String, Integer> integerS = Integer::valueOf;
    public static Function<String, Double> doubleS = Double::valueOf;
    public static Function<String, Float> floatS = Float::valueOf;
}
