package com.texix.springboot1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserDataAccessService userDataAccessService;

    @Autowired
    public UserService(UserDataAccessService userDataAccessService) {
        this.userDataAccessService = userDataAccessService;
    }

    public int addUser(User user) {
        return userDataAccessService.insertUser(user);
    }

    public List<User> getAllUser() {
        return userDataAccessService.selectAllUser();
    }

}
