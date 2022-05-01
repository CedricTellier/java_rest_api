package com.java.java_rest_api.controllers;

import com.java.java_rest_api.services.EmployeeService;
import com.java.java_rest_api.models.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EmployeeController {

    @Autowired
    EmployeeService mService;

    @GetMapping(value = "/employees")
    public List<Employee> getAllEmployees()  {
        return mService.selectAll();
    }

    @GetMapping("/employees/{id}")
    public Employee getAnEmployee(@PathVariable long id) {
        return mService.select(id);
    }

    @PostMapping("/employees")
    public int create(@RequestBody Employee lEmployee) {
        return mService.insert(lEmployee);
    }

    @PutMapping("/employees/{id}")
    public int update(@PathVariable long id, @RequestBody Employee lEmployee) {
        return mService.update(id, lEmployee);
    }

    @DeleteMapping("/employees/{id}")
    public int delete(@PathVariable long id) {
        return mService.delete(id);
    }
}
