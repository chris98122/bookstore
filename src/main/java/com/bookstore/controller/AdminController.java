package com.bookstore.controller;


import com.bookstore.entity.Orders;
import com.bookstore.entity.User;
import com.bookstore.repository.OrdersRepository;
import com.bookstore.repository.UserRepository;
import com.bookstore.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;
@CrossOrigin(origins = {"http://localhost:8081","null"},allowCredentials = "true")
@RestController
public class AdminController {
    @Autowired
    private AdminService adminservice;

    @Autowired
    private OrdersRepository ordersrepository;


    @GetMapping(value = "/manageuser")
    public List<User> get_users(  HttpServletRequest request) {
        return adminservice.get_users(request);
    }
    @PostMapping(value = "/ban_user")
    public String BanUser( @RequestParam(value = "userid",required = false)long id,
                       @RequestParam(value = "active",required = false)Boolean active,
                      HttpServletRequest request) {
        return adminservice.BanUser(id,active,request);
       }
    @GetMapping(value = "/statistics_show")
    public List<Orders> getstatistics( HttpServletRequest request)
    {
        return  ordersrepository.findAllByIsCartIsFalse();
    }

    @GetMapping(value = "/statistics_by_user")
    public   List<Map>  statistics_by_user(  HttpServletRequest request) {
        return adminservice.statistics_by_user(request);
    }

    @GetMapping(value = "/statistics_by_day")
    public   List<Orders> statistics_by_day(HttpServletRequest request) {
        return adminservice.statistics_by_day(request);
    }



}
