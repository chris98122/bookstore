package com.bookstore.service;

import com.bookstore.bean.Password;
import com.bookstore.entity.Orders;
import com.bookstore.entity.User;
import com.bookstore.repository.OrdersRepository;
import com.bookstore.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private OrdersRepository ordersrepository;

    public  String login(String password,String username, HttpServletRequest request)
    {
        User user= userRepository.findByName(username);
        if(userRepository.findByName(username) == null)
        {
            System.out.println("dont find username");
            return "用户登录失败";
        }
        else if( Password.encode(password).equals(user.getPassword()) ){
            HttpSession session = request.getSession();
            session.setAttribute("username", username);
            session.setAttribute("userid",  user.getId());
            if( user.getId() == 1)
            {
                return"管理员登录成功";
            }
            else
            {
                if(!user.getActive())
                {
                    return"您被禁止登录";
                }
                return"用户登录成功";
            }

        }
        return " ";
    }

    public String logout(HttpServletRequest request)
    {   request.getSession().removeAttribute("username");
        request.getSession().removeAttribute("userid");
        request.getSession().invalidate();
        return "登出";
    }

    public String register( String password,String username, String email,HttpServletRequest request) {
        if (userRepository.findByName(username) == null) {
            String encryted_password = Password.encode(password);
            User user = new User(username, encryted_password, email, true);
            userRepository.saveAndFlush(user);
            HttpSession session = request.getSession();
            session.setAttribute("username", username);
            session.setAttribute("userid", user.getId());
            Orders order = new Orders(user, null, 0, true, null);
            ordersrepository.save(order);
            return "注册成功";
        } else {
            return "用户名已存在";
        }
    }

}
