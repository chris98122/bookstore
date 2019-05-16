package com.bookstore.controller;


import com.bookstore.entity.Orders;
import com.bookstore.entity.User;
import com.bookstore.entity.Book;
import com.bookstore.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServlet;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;

import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;
import javax.servlet.http.HttpSession;
@CrossOrigin(origins = {"http://localhost:8081","null"},allowCredentials = "true")
@RestController
public class AdminController {
    @Autowired
    private UserRepository userRepository;


    @GetMapping(value = "/manageuser")
    public List<User> getBooks(  HttpServletRequest request) {
//        HttpSession session = request.getSession();
//        long userid = (long) session.getAttribute("userid");
//        if( userid == 1)
            return userRepository.findByIdIsGreaterThan(1);
//        else return null;
    }
    @PostMapping(value = "/ban_user")
    public String buy( @RequestParam(value = "userid",required = false)long id,
                       @RequestParam(value = "active",required = false)Boolean active,
                      HttpServletRequest request) {
         System.out.println(id);
           User user = userRepository.findById(id);
           user.setActive(active);
           userRepository.saveAndFlush(user);
           return " ";
       }


}
