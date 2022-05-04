package com.java.java_rest_api.services;

import com.java.java_rest_api.models.IPerson;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface IService {
    ResponseEntity<List<?>> selectAll();
    ResponseEntity<?> select(long id);
    ResponseEntity insert(IPerson person);
    ResponseEntity update(long id, IPerson object);
    ResponseEntity delete(long id);
    boolean isDuplicate(IPerson person);
}
