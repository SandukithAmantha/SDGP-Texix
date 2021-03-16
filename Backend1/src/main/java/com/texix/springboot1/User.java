package com.texix.springboot1;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.UUID;

public class User {

    private UUID id;
    private String fName;
    private String lName;
    private String email;
    private String password;
    private int type;

    public User() {
    }
//    {
//        "fName":"Sithiaj",
//            "lName":"Nissara",
//            "email":"Sitha@",
//            "password":"sasasas"
//    }

//    {
//            "fName": "vamal",
//            "lName": "hhuhuuh",
//            "email": "vamal@gooooo",
//            "password": "QWQWQWQq",
//            "type": 4
//    }
//    {
//            "fName": "Bimal",
//            "lName": "lkklk",
//            "email": "baml@gooooo",
//            "password": "KKKKLL",
//            "type": 5
//    }

    public User(@JsonProperty("id") UUID id,
                @JsonProperty("fName") String fName,
                @JsonProperty("lName") String lName,
                @JsonProperty("email") String email,
                @JsonProperty("password") String password,
                @JsonProperty("type") int type) {
        this.id = id;
        this.fName = fName;
        this.lName = lName;
        this.email = email;
        this.password = password;
        this.type = type;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getfName() {
        return fName;
    }

    public void setfName(String fName) {
        this.fName = fName;
    }

    public String getlName() {
        return lName;
    }

    public void setlName(String lName) {
        this.lName = lName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }
}
