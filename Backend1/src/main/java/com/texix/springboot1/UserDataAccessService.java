package com.texix.springboot1;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Repository
public class UserDataAccessService {

    List<User> arrayDb = new ArrayList<>();
    private JdbcTemplate jdbcTemplate;

    public int insertUser(User user) {
        arrayDb.add(new User(user.getId(), user.getfName(), user.getlName(), user.getEmail(), user.getPassword(), user.getType()));
        return 1;
    }

    public List<User> selectAllUser() {
        return arrayDb;
    }
}
