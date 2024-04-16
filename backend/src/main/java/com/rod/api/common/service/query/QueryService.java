package com.rod.api.common.service.query;

import com.rod.api.common.component.PageRequestVo;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

public  interface QueryService<T> {
    List<T> findAll() ;
    Optional<T> findById(Long id);
    long count();
    boolean existsById(Long id);
}