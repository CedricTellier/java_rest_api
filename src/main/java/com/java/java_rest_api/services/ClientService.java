package com.java.java_rest_api.services;

import com.java.java_rest_api.models.Client;
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
public class ClientService implements IService {

    @Autowired
    public JdbcTemplate mJdbc;
    private final String mSelectAllQry = "SELECT * FROM clients";
    private final String mSelectAnEmployeeQry = "SELECT * FROM clients WHERE id=?";
    private final String mUpdateQry = "UPDATE clients SET firstname=?, lastname=?,company=?,age=? WHERE id=?";
    private final String mInsertQry = "INSERT INTO clients (firstname, lastname, company, age) values (?, ?, ?, ?)";
    private final String mDeleteQry = "DELETE FROM clients WHERE id=?";

    @Override
    public ResponseEntity<List<?>> selectAll() {
        try{
            List<Client> clients = mJdbc.query(this.mSelectAllQry, BeanPropertyRowMapper.newInstance(Client.class));
            if(clients.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(clients, HttpStatus.OK);
        }
        catch (Exception e)
        {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Override
    public ResponseEntity<?> select(long aId) {
        try{
            Client client = mJdbc.queryForObject(this.mSelectAnEmployeeQry, BeanPropertyRowMapper.newInstance(Client.class), aId);
            return new ResponseEntity<>(client, HttpStatus.OK);
        }
        catch(EmptyResultDataAccessException exception){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        catch (Exception e)
        {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Override
    public int insert(IPerson aPerson) {
        return mJdbc.update(this.mInsertQry, new Object[]{aPerson.getFirstname(), aPerson.getLastname(), aPerson.getCompany(), aPerson.getAge()});
    }

    @Override
    public int update(long aId, IPerson aPerson) {
        return mJdbc.update(this.mUpdateQry, new Object[]{aPerson.getFirstname(), aPerson.getLastname(), aPerson.getCompany(), aPerson.getAge(), aId});
    }

    @Override
    public int delete(long aId) {
        return mJdbc.update(this.mDeleteQry,aId);
    }
}
