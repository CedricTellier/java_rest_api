package com.java.java_rest_api.services;

import com.java.java_rest_api.models.IPerson;

import java.util.List;

public interface IService {
    public  List<?> selectAll();
    public IPerson select(long id);
    public  int insert(IPerson person);
    public  int update(long id, IPerson object);
    public  int delete(long id);
}
