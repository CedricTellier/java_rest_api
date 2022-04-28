package com.java.java_rest_api.services;

import com.java.java_rest_api.models.IPerson;

import java.util.List;

public interface IService {
    List<?> selectAll();
    IPerson select(long id);
    int insert(IPerson person);
    int update(long id, IPerson object);
    int delete(long id);
}
