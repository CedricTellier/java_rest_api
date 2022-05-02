package com.java.java_rest_api.controllers;

import com.java.java_rest_api.models.Client;
import com.java.java_rest_api.services.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ClientController {

    @Autowired
    ClientService mService;

    @GetMapping(value = "/clients")
    public ResponseEntity<List<?>> getAllClients()  {
        return mService.selectAll();
    }

    @GetMapping("/clients/{id}")
    public ResponseEntity<?> getAClient(@PathVariable long id) {
        return mService.select(id);
    }

    @PostMapping("/clients")
    public ResponseEntity create(@RequestBody Client aClient) {
        return mService.insert(aClient);
    }

    @PutMapping("/clients/{id}")
    public ResponseEntity update(@PathVariable long id, @RequestBody Client lClient){
        return mService.update(id, lClient);
    }

    @DeleteMapping("/clients/{id}")
    public int delete(@PathVariable long id)
    {
        return mService.delete(id);
    }
}
