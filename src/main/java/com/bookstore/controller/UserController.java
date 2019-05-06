package com.bookstore.controller;
import com.bookstore.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.naming.AuthenticationException;
import java.util.List;
import java.util.Optional;

import com.bookstore.repository.UserRepository;
import com.bookstore.entity.User;
import com.bookstore.bean.WebResponse;

public class UserController {
    @Autowired
    private UserRepository userRepository;

     @PostMapping(value = "/login")
     public String login(
                                    @RequestParam(value = "password",required = false) String password,
                                    @RequestParam(value = "username",required = false) String username)
     {
         User user= userRepository.findByName(username);
        String response = new String();
         if(userRepository.findByName(username) == null)
         {
             response = "用户登录失败";
         }
         else if( user.getPassword() == password){
             response = "用户登录成功";
         }
         return response;
     }
}
