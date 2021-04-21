package com.texix.springboot1;

import javax.imageio.ImageIO;
import javax.sql.DataSource;

import org.apache.commons.io.FileUtils;
import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.apache.commons.io.FilenameUtils;
import org.springframework.web.multipart.MultipartFile;

import java.awt.image.BufferedImage;
import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.List;


@CrossOrigin(origins = {"http://192.168.43.219:19000/", "http://localhost:8000/" })
//@CrossOrigin(origins = {"http://localhost:8000/" })

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


    @RequestMapping(value = "/imageToPy", method = RequestMethod.GET)
    public String decoder() throws Exception {
        String imagePath = "src/main/resources/image.png";
        String base64String = "";
        File file = new File(imagePath);
        try (FileInputStream imageFile = new FileInputStream(file)) {
            // Reading a Image file from file system
            byte imageData[] = new byte[(int) file.length()];
            imageFile.read(imageData);
            base64String = Base64.getEncoder().encodeToString(imageData);
        } catch (FileNotFoundException e) {
            System.out.println("Image not found" + e);
        } catch (IOException ioe) {
            System.out.println("Exception while reading the Image " + ioe);
        }

        System.out.println("Base64ImageString = " + base64String);
        return base64String;

    }

    @RequestMapping(path = "/getResponsePy", produces = "application/json; charset=UTF-8", method = RequestMethod.GET)
    @ResponseBody
    public void findCities() {

    }




    
}