package com.texix.springboot1;

import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://192.168.8.101:19002/" })
@RestController
//@RequestMapping("register/user")
public class UserController {

    private final UserService userService;
    private DataSource dataSource;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping(value="register/user/post", method=RequestMethod.POST)
    public void addUser(@RequestBody User user) {
        userService.addUser(user);
    }

    @RequestMapping(value="register/user", method=RequestMethod.GET)
    public List<User> getAllUser() {
        return userService.getAllUser();
    }
}