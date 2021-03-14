package com.texix.springboot1;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.UUID;

public class User {

    private UUID id;
    private String fName;
    private String lName;
    private String email;
    private String password;

    public User() {
    }
//    {
//        "fName":"Sithiaj",
//            "lName":"Nissara",
//            "email":"Sitha@",
//            "password":"sasasas"
//    }

    public User(@JsonProperty("id") UUID id,
                @JsonProperty("fName") String fName,
                @JsonProperty("lName") String lName,
                @JsonProperty("email") String email,
                @JsonProperty("password") String password) {
        this.id = id;
        this.fName = fName;
        this.lName = lName;
        this.email = email;
        this.password = password;
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
}
