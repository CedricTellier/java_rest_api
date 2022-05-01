package com.java.java_rest_api.models;

public class Employee implements IPerson {

    private int id = 0;
    private String firstname;
    private String lastname;
    private int age;
    private String company;

    public Employee(){}
    public Employee(int id){ this.id = id; }

    @Override
    public int getId() {
        return id;
    }

    @Override
    public void setId(int id) {
        this.id = id;
    }

    @Override
    public String getFirstname() {
        return this.firstname;
    }

    @Override
    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    @Override
    public String getLastname() {
        return this.lastname;
    }

    @Override
    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    @Override
    public int getAge() {
        return this.age;
    }

    @Override
    public void setAge(int age) {this.age = age;}

    @Override
    public String getCompany() {return this.company;}

    @Override
    public void setCompany(String company) {
        this.company = company;
    }
}
