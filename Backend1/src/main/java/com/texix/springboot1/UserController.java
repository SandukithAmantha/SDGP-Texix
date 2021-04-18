package com.texix.springboot1;

import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://192.168.43.219:19000/" })
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


    @RequestMapping(value="login/user/post", method=RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public void logInUser(@RequestBody User user) {
        System.out.println("UserController - "+user.toString());
        userService.userLogin(user);
    }

    @RequestMapping(value = "login/user/response", method = RequestMethod.GET)
    @ResponseBody
    public void generate(User user) {
        userService.userLogin(user);
    }

    @RequestMapping(value="register/user", method=RequestMethod.GET)
    public List<User> getAllUser() {
        return userService.getAllUser();
    }
}