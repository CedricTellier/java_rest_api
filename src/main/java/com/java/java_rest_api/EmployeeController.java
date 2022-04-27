package com.java.java_rest_api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;
import org.springframework.jdbc.core.BeanPropertyRowMapper;

import java.util.List;

@RestController
public class EmployeeController {
        @Autowired
        private JdbcTemplate jdbcTemplate;

        @GetMapping(value = "/employees")
        public List<Employee> getAllEmployees()  {
            return selectAll();
        }
        @GetMapping("/employees/{id}")
        public Employee getAnEmploye(@PathVariable long id)
        {
            return selectAnEmployee(id);
        }
        @PostMapping("/employees")
        public int create(@RequestBody Employee lEmployee) {
            return insertAnEmployee(lEmployee);
        }

        @PutMapping("/employees/{id}")
        public int update(@PathVariable long id, @RequestBody Employee lEmployee){
            return updateAnEmployee(id, lEmployee);
        }
        @DeleteMapping("/employees/{id}")
        public int delete(@PathVariable long id)
        {
            return deleteAnEmployee(id);
        }
        public List<Employee>  selectAll()  {
            String sql = "SELECT * FROM employees";
            List<Employee> list =  jdbcTemplate.query(sql, BeanPropertyRowMapper.newInstance(Employee.class));
            return list;
        }

        public Employee selectAnEmployee(long id)  {
            String sql = "SELECT * FROM employees WHERE id=?";
            Employee lEmployee =  jdbcTemplate.queryForObject(sql, BeanPropertyRowMapper.newInstance(Employee.class), id);
            return lEmployee;
        }

        public int updateAnEmployee(long id, Employee employee){
            String sql = "UPDATE employees SET firstname=?, lastname=?,company=?,age=? WHERE id=?";
            return jdbcTemplate.update(sql, new Object[]{employee.getFirstname(), employee.getLastname(), employee.getCompany(), employee.getAge(), id});
        }

        public int insertAnEmployee(Employee employee){
            String sql = "INSERT INTO employees (firstname, lastname, company, age) values (?, ?, ?, ?)";
            return jdbcTemplate.update(sql, new Object[]{employee.getFirstname(), employee.getLastname(), employee.getCompany(), employee.getAge()});
        }

        public int deleteAnEmployee(long id){
            String sql = "DELETE FROM employees WHERE id=?";
            return jdbcTemplate.update(sql,id);
        }
}
