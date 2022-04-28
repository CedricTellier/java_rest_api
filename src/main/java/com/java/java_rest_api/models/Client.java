package com.java.java_rest_api.models;

public class Client implements IPerson {

    private int id = 0;
    private String firstname;
    private String lastname;
    private int age;
    private String company;

    public Client(){}
    public Client(int aId){
        this.id = aId;
    }

    @Override
    public int getId() {
        return this.id;
    }

    @Override
    public void setId(int aId) {
        this.id = aId;
    }

    @Override
    public String getFirstname() {
        return this.firstname;
    }

    @Override
    public void setFirstname(String aFirstname) {
        this.firstname = aFirstname;
    }

    @Override
    public String getLastname() { return this.lastname; }

    @Override
    public void setLastname(String aLastname) {this.lastname = aLastname;}

    @Override
    public int getAge() {
        return this.age;
    }

    @Override
    public void setAge(int aAge) {this.age = aAge;}

    @Override
    public String getCompany() {return this.company;}

    @Override
    public void setCompany(String aCompany) {
        this.company = aCompany;
    }
}
