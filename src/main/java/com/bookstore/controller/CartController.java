package com.bookstore.controller;

import com.bookstore.entity.OrderContent;
import com.bookstore.entity.Orders;

import com.bookstore.repository.OrdersRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.ArrayList;

import com.bookstore.repository.OrderContentRepository;

import javax.servlet.http.HttpServletRequest;

import javax.servlet.http.HttpSession;

import java.sql.Timestamp;

import com.alibaba.fastjson.JSONObject;

@CrossOrigin(origins = {"http://localhost:8081","null"},allowCredentials = "true")
@RestController
public class CartController {
    @Autowired
    private OrdersRepository ordersrepository;
    @Autowired
    private OrderContentRepository orderContentrepository ;


    @GetMapping(value = "/cart_show")
    public List<Orders> getOrders( HttpServletRequest request){
            HttpSession session = request.getSession();
            long userid = (long) session.getAttribute("userid");

            return ordersrepository.findByUser_IdAndIsCartIsTrue(userid);
        }

    @PostMapping(value = "/cart_buy")
    public String getOrders(@RequestParam(value = "item",required = false)  String  buyitem,
                                  HttpServletRequest request){
        HttpSession session = request.getSession();

        Orders  items = new Orders();
        items =  JSONObject.parseArray(buyitem, Orders.class).get(0);
        Timestamp date = new Timestamp(System.currentTimeMillis());

        List <OrderContent> orderContent = new ArrayList<OrderContent>();
      for (int i = 0; i < items.getOrderContent().size(); i++) {
            OrderContent oc = items.getOrderContent().get(i);
            orderContent.add(oc);
          orderContentrepository. save(oc);
       }
        Orders order = new Orders(items.getUser(),date,items.getTotPrice(),false,orderContent);
        ordersrepository.save(order);
        return "下单成功，订单号为"+ Long.toString(order.getId());
    }
    }

