package com.texix.springboot1;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowCallbackHandler;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.*;

@Repository
public class UserDataAccessService implements UserDao {
//public class UserDataAccessService extends JdbcDaoSupport {

    List<User> arrayDb = new ArrayList<>();
    List<User> login = new ArrayList<>();
    private String email;
    private String password;
    private NamedParameterJdbcTemplate jdbcTemplate;

    public UserDataAccessService(NamedParameterJdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public int insertUser(User user) {
        //arrayDb.add(new User(user.getId(), user.getfName(), user.getlName(), user.getEmail(), user.getPassword(), user.getUserType()));
        try {
            String sql = "INSERT INTO UserDetails(ID, F_NAME, L_NAME, EMAIL, PASSWORD, USERTYPE) VALUES (:ID,:F_NAME,:L_NAME,:EMAIL,:PASSWORD,:USERTYPE)";

            //KeyHolder holder = new GeneratedKeyHolder();
            SqlParameterSource param = new MapSqlParameterSource()
                    .addValue("ID", user.getId())
                    .addValue("F_NAME", user.getfName())
                    .addValue("L_NAME", user.getlName())
                    .addValue("EMAIL", user.getEmail())
                    .addValue("PASSWORD", user.getPassword())
                    .addValue("USERTYPE", user.getUserType());

            jdbcTemplate.update(sql, param);

            //jdbcTemplate.query(sql, (RowCallbackHandler) param);
        }catch (Exception e) {
            System.out.println(e);
        }
        return 1;
    }

    public User loginUser(User user) {
        try {
//            System.out.println("Email - "+user.getEmail());
//            System.out.println("Password  - "+user.getPassword());

            String sql1 = "SELECT * FROM UserDetails WHERE EMAIL =:EMAIL AND PASSWORD =:PASSWORD";

            SqlParameterSource param = new MapSqlParameterSource()
                    .addValue("ID", user.getId())
                    .addValue("F_NAME", user.getfName())
                    .addValue("L_NAME", user.getlName())
                    .addValue("EMAIL", user.getEmail())
                    .addValue("PASSWORD", user.getPassword())
                    .addValue("USERTYPE", user.getUserType());

            User user1 = new User();
            jdbcTemplate.query(sql1, param, new RowMapper<User>() {
                @Override
                public User mapRow(ResultSet resultSet, int i) throws SQLException {

                    System.out.println("mapRow ");
                    user.setId(UUID.fromString(resultSet.getString("ID")));
                    user.setfName(resultSet.getString("F_NAME"));
                    user.setlName(resultSet.getString("L_NAME"));
                    user.setEmail(resultSet.getString("EMAIL"));
                    user.setPassword(resultSet.getString("PASSWORD"));
                    user.setUserType(Integer.parseInt(resultSet.getString("USERTYPE")));
//                    System.out.println("UserDataAccessService - " + user);
                    return user;
                }
            });
//            System.out.println("SQL ");
        }catch (Exception e) {
            System.out.println(e);
        }
        return user;
    }

    public List<User> selectAllUser() {
        return jdbcTemplate.query("select * from userdetails", new RowMapper<User>() {
            @Override
            public User mapRow(ResultSet resultSet, int i) throws SQLException {
                User user = new User();
                user.setId(UUID.fromString(resultSet.getString(1)));
                user.setfName(resultSet.getString(2));
                user.setlName(resultSet.getString(3));
                user.setEmail(resultSet.getString(4));
                user.setPassword(resultSet.getString(5));
                user.setUserType(Integer.parseInt(resultSet.getString(6)));
                return user;
            }
        });
    }

}
