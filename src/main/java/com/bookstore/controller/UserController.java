package com.bookstore.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.bookstore.service.UserService;

import javax.servlet.http.HttpServletRequest;

@CrossOrigin(origins = {"http://localhost:8081","null"},allowCredentials = "true")
@RestController
public class UserController {
    @Autowired
    private UserService userservice;

     @PostMapping(value = "/login")
     public  String login(
                                    @RequestParam(value = "password",required = false) String password,
                                    @RequestParam(value = "username",required = false) String username,
              HttpServletRequest request
            )
     {
         return userservice.login(password,username,request);
     }

    @PostMapping(value = "/logout")
    public  String logout(  HttpServletRequest request)
    {
        return userservice.logout(request);
    }

    @PostMapping(value = "/register")
    public  String register(  @RequestParam(value = "password",required = false) String password,
                              @RequestParam(value = "username",required = false) String username,
                              @RequestParam(value = "email",required = false) String email,
                              HttpServletRequest request)
    {
        return userservice.register(password,username,email,request);
    }


}
