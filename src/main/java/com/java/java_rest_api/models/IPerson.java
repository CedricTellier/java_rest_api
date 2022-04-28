package com.java.java_rest_api.models;

public interface IPerson {
    void setId(int id);
    void setFirstname(String firstname);
    void setLastname(String lastname);
    void setAge(int age);
    void setCompany(String company);
    int getId();
    String getFirstname();
    String getLastname();
    int getAge();
    String getCompany();
}
