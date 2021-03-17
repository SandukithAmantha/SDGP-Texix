package com.texix.springboot1;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Repository
public class UserDataAccessService extends JdbcDaoSupport {

    List<User> arrayDb = new ArrayList<>();
    private JdbcTemplate jdbcTemplate;

    public int insertUser(User user) {
        arrayDb.add(new User(user.getId(), user.getfName(), user.getlName(), user.getEmail(), user.getPassword(), user.getType()));
        String sql = "INSERT INTO UserDetails " + "(ID, F_NAME, L_NAME, EMAIL, PASSWORD, TYPE) VALUES (?, ?, ?, ?, ?, ?)";
        getJdbcTemplate().update(sql, new User(user.getId(),user.getfName(),user.getlName(),user.getEmail(),user.getPassword(),user.getType()));
        return 1;
    }

    public List<User> selectAllUser() {
        return arrayDb;
    }
}
