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
import com.alibaba.fastjson.JSON;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServlet;

import java.util.HashMap;
import javax.servlet.http.HttpSession;
@CrossOrigin(origins = {"http://localhost:8081","null"},allowCredentials = "true")
@RestController
public class UserController {
    @Autowired
    private UserRepository userRepository;

     @PostMapping(value = "/login")
     public  String login(
                                    @RequestParam(value = "password",required = false) String password,
                                    @RequestParam(value = "username",required = false) String username,
              HttpServletRequest request
            )
     {
         User user= userRepository.findByName(username);
         if(userRepository.findByName(username) == null)
         {
             System.out.println("dont find username");
             return "用户登录失败";
         }
         else if( user.getPassword().equals(password) ){
             HttpSession session = request.getSession();
             session.setAttribute("username", username);
             session.setAttribute("userid",  user.getId());
             if( user.getId() == 1)
             {
                 return"管理员登录成功";
             }
             else
             {
                 if(user.getIsActive() !=1)
                 {
                     return"您被禁止登录";
                 }
                 return"用户登录成功";
             }

         }
         return " ";
     }

    @PostMapping(value = "/logout")
    public  String logout(  HttpServletRequest request)
    {
        request.getSession().removeAttribute("username");
        request.getSession().removeAttribute("userid");
        request.getSession().invalidate();
        return "登出";
    }

    @PostMapping(value = "/register")
    public  String register(  @RequestParam(value = "password",required = false) String password,
                              @RequestParam(value = "username",required = false) String username,
                              @RequestParam(value = "email",required = false) String email,
                              HttpServletRequest request)
    {
        if(userRepository.findByName(username) == null)
        {
            User user = new User(username,password,email,1);
            userRepository.saveAndFlush( user);
            HttpSession session = request.getSession();
            session.setAttribute("username", username);
            session.setAttribute("userid",  user.getId());
            return "注册成功";
        }
        else
        {
            return"用户名已存在";
        }

    }


}
