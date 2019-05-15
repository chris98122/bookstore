package com.bookstore.controller;


import com.bookstore.entity.User;
import com.bookstore.entity.Book;
import com.bookstore.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServlet;

import java.util.HashMap;
import java.util.List;
import javax.servlet.http.HttpSession;
@CrossOrigin(origins = {"http://localhost:8081","null"},allowCredentials = "true")
@RestController
public class AdminController {
    @Autowired
    private UserRepository userRepository;


    @GetMapping(value = "/manageuser")
    public List<User> getBooks(){
        return userRepository.findAll();
    }

}
