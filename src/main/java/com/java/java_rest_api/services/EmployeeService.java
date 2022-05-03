package com.java.java_rest_api.services;

import com.java.java_rest_api.models.Employee;
import com.java.java_rest_api.models.IPerson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class EmployeeService implements IService{

    @Autowired
    public JdbcTemplate mJdbc;
    private final String mSelectAllQry = "SELECT * FROM employees";
    private final String mSelectAnEmployeeQry = "SELECT * FROM employees WHERE id=?";
    private final String mUpdateQry = "UPDATE employees SET firstname=?, lastname=?,company=?,age=? WHERE id=?";
    private final String mInsertQry = "INSERT INTO employees (firstname, lastname, company, age) values (?, ?, ?, ?)";
    private final String mDeleteQry = "DELETE FROM employees WHERE id=?";

    @Override
    public ResponseEntity<List<?>> selectAll() {
        try{
            List<Employee> employees = mJdbc.query(this.mSelectAllQry, BeanPropertyRowMapper.newInstance(Employee.class));
            return new ResponseEntity<>(employees, HttpStatus.OK);
        }
        catch(EmptyResultDataAccessException exception){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Override
    public ResponseEntity<?>  select(long id)  {
        try{
            Employee employee = mJdbc.queryForObject(this.mSelectAnEmployeeQry, BeanPropertyRowMapper.newInstance(Employee.class), id);
            if(employee == null){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(employee, HttpStatus.OK);
        }
        catch (Exception e)
        {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Override
    public ResponseEntity insert(IPerson employee){
        try {
            int result =  mJdbc.update(this.mInsertQry, new Object[]{employee.getFirstname(), employee.getLastname(), employee.getCompany(), employee.getAge()});
            if(result == 1){
                return new ResponseEntity(HttpStatus.OK);
            }
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        catch (Exception e) {
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Override
    public ResponseEntity update(long id, IPerson employee){
        try {
            int result = mJdbc.update(this.mUpdateQry, new Object[]{employee.getFirstname(), employee.getLastname(), employee.getCompany(), employee.getAge(), id});
            if(result == 1){
                return new ResponseEntity(HttpStatus.OK);
            }
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        catch (Exception e) {
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Override
    public ResponseEntity delete(long id){
        try {
            int result = mJdbc.update(this.mDeleteQry,id);
            if(result == 1){
                return new ResponseEntity(HttpStatus.OK);
            }
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        catch (Exception e) {
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
