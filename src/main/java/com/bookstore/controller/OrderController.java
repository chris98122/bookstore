package com.bookstore.controller;

import com.bookstore.entity.Orders;
import com.bookstore.entity.OrderContent;

import com.bookstore.repository.OrdersRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.naming.AuthenticationException;
import java.util.List;
import java.util.Optional;

import com.bookstore.repository.UserRepository;
import com.bookstore.entity.User;
import com.bookstore.bean.WebResponse;
import com.alibaba.fastjson.JSON;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServlet;

import java.util.HashMap;
import javax.servlet.http.HttpSession;

@CrossOrigin(origins = {"http://localhost:8081","null"},allowCredentials = "true")
@RestController
public class OrderController {
    @Autowired
    private OrdersRepository ordersrepository;

    @GetMapping(value = "/orders_show")
    public List<Orders> getOrders( HttpServletRequest request){
        HttpSession session = request.getSession();
        long userid = (long) session.getAttribute("userid");

        return ordersrepository.findByUId(userid);
    }

}
