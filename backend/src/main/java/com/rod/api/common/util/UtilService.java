package com.rod.api.common.util;

public interface UtilService {
    int createRandomInteger(int start, int gapBetweenStartAndEnd);
    double createRandomDouble(int start, int gapBetweenStartAndEnd);

    String createRandomName();

    String createRandomTitle();

    String createRandomContent();
    String createRandomCompany();
    String createRandomUsername();

    String createRandomJob();
}