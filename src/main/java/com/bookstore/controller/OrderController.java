package com.bookstore.controller;

import com.bookstore.entity.Orders;
import com.bookstore.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
@CrossOrigin(origins = {"http://localhost:8081","null"},allowCredentials = "true")
@RestController
public class OrderController {
    @Autowired
    private OrderService orderservice;

    @GetMapping(value = "/orders_show")
    public List<Orders> getOrders( HttpServletRequest request){
        return orderservice.orders_show(request);
    }

}
