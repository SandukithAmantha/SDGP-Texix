package com.texix.springboot1;

import java.util.List;





public interface UserDao {
    int insertUser(User user);
    List<User> selectAllUser();
    User loginUser(User user);
}
