package com.texix.springboot1;


import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.io.*;
import java.util.Base64;
import java.util.List;


@CrossOrigin(origins = {"http://192.168.43.219:19000/", "http://localhost:8000/" })

@RestController

public class UserController {

    private final UserService userService;
    private DataSource dataSource;
    public String encodeImage;
    public String imageValue;

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

    @RequestMapping(value="/encodedString", method=RequestMethod.POST)
    public void getEncodedString(@RequestBody Image image) throws Exception {
        encodeImage = image.getImage();
        System.out.println("getEncodedString() - "+encodeImage);
        //decoder();
    }

    @RequestMapping(value = "/imageToPy", method = RequestMethod.GET)
    public String decoder() throws Exception {
        //image path
//        String imagePath = "src/main/resources/image.png";
//        String base64String = "";
//        File file = new File(imagePath);
//        try (FileInputStream imageFile = new FileInputStream(file)) {
//            // Reading a Image file from file system
//            byte imageData[] = new byte[(int) file.length()];
//            imageFile.read(imageData);
//            //encode the image in base64
//            base64String = Base64.getEncoder().encodeToString(imageData);
//        } catch (FileNotFoundException e) {
//            System.out.println("Image not found" + e);
//        } catch (IOException ioe) {
//            System.out.println("Exception while reading the Image " + ioe);
//        }
//
//        System.out.println("Base64ImageString = " + base64String);
//        return base64String;
          return encodeImage;
    }

    //get the string from the datascience path through the get method
    @RequestMapping(path = "/getResponsePy", method = RequestMethod.GET)
    @ResponseBody
    public void getLetter(@RequestParam String iName) {
        System.out.println(iName);
        imageValue = iName;
    }

//    @RequestMapping(path = "/returnResponse", method = RequestMethod.GET)
//    @ResponseBody
//    public LetterName returnLetter() {
//        LetterName letterName = new LetterName(imageValue);
//        System.out.printf(letterName.toString());
//        return letterName;
//    }

    //@RequestMapping(path = "/returnResponse", method = RequestMethod.GET)
    @GetMapping(path = "/returnResponse")
    ResponseEntity<String> hello() {
        LetterName letterName = new LetterName(imageValue);
        System.out.println(letterName.toString());
        return new ResponseEntity<>(imageValue, HttpStatus.OK);
    }

//
//    @RequestMapping("/{someID}")
//    public @ResponseBody int getAttr(@PathVariable(value="someID") String id,
//                                     @RequestParam String someAttr) {
//    }


    
}