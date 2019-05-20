package com.bookstore.service;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.bookstore.entity.Orders;
import com.bookstore.entity.User;
import com.bookstore.repository.BookRepository;
import com.bookstore.repository.OrdersRepository;
import com.bookstore.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@Service
public class AdminService {


    @Autowired
    private OrdersRepository ordersrepository;

    @Autowired
    private UserRepository userRepository;
    public List<Orders> statistics_by_day(HttpServletRequest request)
    {
        try
        {
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd ");
            String dateString= sdf.format(new Date());
            Date date = sdf.parse(dateString);
            System.out.println(date);
            Timestamp end = new Timestamp(date.getTime()+1000*60*60*24);
            long sub = 6*1000*60*60*24;
            Timestamp start = new Timestamp(date.getTime()-sub);
            return ordersrepository.findAllByBuydateBetween(start,end);

        }
        catch (ParseException e)
        {
            System.out.println(e.getMessage());
        }
        return null;
    }

        public   List<Map>  statistics_by_user(HttpServletRequest request)

        {
            List<User> users = userRepository.findByIdIsGreaterThan(1);
            List<Map> returnlist =  new ArrayList<Map>();

            for (int i = 0; i < users.size(); i++) {
                Map<JSONObject, JSONArray> pair = new HashMap<JSONObject, JSONArray>();
                List<Orders> orders = ordersrepository.findByUser_IdAndIsCartIsFalse(users.get(i).getId());
                pair.put(JSON.parseObject(JSON.toJSONString(users.get(i))),JSONArray.parseArray(JSON.toJSONString(orders)));
                returnlist.add(pair);
            }
            return returnlist;
        }
}
