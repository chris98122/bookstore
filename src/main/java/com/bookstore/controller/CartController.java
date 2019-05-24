package com.bookstore.controller;

import com.bookstore.entity.Orders;
import com.bookstore.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@CrossOrigin(origins = {"http://localhost:8081","null"},allowCredentials = "true")
@RestController
public class CartController {

    @Autowired
    private OrderService orderservice;

    @GetMapping(value = "/cart_show")
    public List<Orders> cart_show( HttpServletRequest request){
        return orderservice.cart_show(request);
    }

    @PostMapping(value = "/cart_buy")
    public String buy(@RequestParam(value = "item",required = false)  String  buyitem,
                                  HttpServletRequest request){
            return  orderservice.buy(buyitem,request);
    }

    @PostMapping(value = "/cart_movein")
    public String movein(@RequestParam(value = "bookid",required = false) long b_id,
                            HttpServletRequest request){
        return orderservice.move_in(b_id,request);
    }
    @PostMapping(value = "/cart_moveout")
    public String moveout(@RequestParam(value = "bid",required = false) long b_id,
                         HttpServletRequest request){
        return orderservice.move_out(b_id,request);
    }
}

