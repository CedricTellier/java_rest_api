package com.java.java_rest_api.services;

import com.java.java_rest_api.models.Employee;
import com.java.java_rest_api.models.IPerson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class EmployeeService implements IService {

    @Autowired
    public JdbcTemplate mJdbc;
    private final String mSelectAllQry = "SELECT * FROM employees";
    private final String mSelectAnEmployeeQry = "SELECT * FROM employees WHERE id=?";
    private final String mUpdateQry = "UPDATE employees SET firstname=?, lastname=?,company=?,age=? WHERE id=?";
    private final String mInsertQry = "INSERT INTO employees (firstname, lastname, company, age) values (?, ?, ?, ?)";
    private final String mDeleteQry = "DELETE FROM employees WHERE id=?";

    @Override
    public List<Employee> selectAll()  {
        return mJdbc.query(this.mSelectAllQry, BeanPropertyRowMapper.newInstance(Employee.class));
    }

    @Override
    public Employee select(long id)  {
        return mJdbc.queryForObject(this.mSelectAnEmployeeQry, BeanPropertyRowMapper.newInstance(Employee.class), id);
    }

    @Override
    public int insert(IPerson employee){
        return mJdbc.update(this.mInsertQry, new Object[]{employee.getFirstname(), employee.getLastname(), employee.getCompany(), employee.getAge()});
    }

    @Override
    public int update(long id, IPerson employee){
        return mJdbc.update(this.mUpdateQry, new Object[]{employee.getFirstname(), employee.getLastname(), employee.getCompany(), employee.getAge(), id});
    }

    @Override
    public int delete(long id){
        return mJdbc.update(this.mDeleteQry,id);
    }
}
