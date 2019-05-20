package com.bookstore.service;

import com.alibaba.fastjson.JSONObject;
import com.bookstore.entity.Book;
import com.bookstore.entity.OrderContent;
import com.bookstore.entity.Orders;
import com.bookstore.entity.User;
import com.bookstore.repository.BookRepository;
import com.bookstore.repository.OrderContentRepository;
import com.bookstore.repository.OrdersRepository;
import com.bookstore.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.sql.Timestamp;
import java.util.List;

@Service
public class OrderService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private OrdersRepository ordersrepository;
    @Autowired
    private BookRepository bookrepository;
    @Autowired
    private OrderContentRepository orderContentrepository ;

    public String buy( String  buyitem,  HttpServletRequest request)
    {
        //get userid
        HttpSession session = request.getSession();
        long userid = (long) session.getAttribute("userid");

        Orders items = new Orders();
        items =  JSONObject.parseArray(buyitem, Orders.class).get(0);
        Timestamp date = new Timestamp(System.currentTimeMillis());


        for (int i = 0; i < items.getOrderContent().size(); i++) {
            //更新bnum
            OrderContent oc = items.getOrderContent().get(i);
            //以防书的价格变动，需要在ordercontent里保存书的价格
            Book b = items.getOrderContent().get(i).getBook();
            items.getOrderContent().get(i).setPrice(b.getPrice());
            //更新ordercontent
            orderContentrepository.save(oc);
        }
        //更新库存
        for (int i = 0; i < items.getOrderContent().size(); i++) {
            long buynum =  Math.round(items.getOrderContent().get(i).getbNum());
            Book b = items.getOrderContent().get(i).getBook();
            b.setStock(b.getStock()-buynum);

            bookrepository.save(b);
        }
        //更新用户的spending
        User user = userRepository.findById(userid);
        user.setSpending(user.getSpending()+items.getTotPrice());
        userRepository.saveAndFlush(user);

        Orders order = new Orders(items.getUser(),date,items.getTotPrice(),false,items.getOrderContent());
        ordersrepository.save(order);
        return "下单成功，订单号为"+ Long.toString(order.getId());}
        public String move_in(long b_id, HttpServletRequest request)
        {
            HttpSession session = request.getSession();

            long userid = (long) session.getAttribute("userid");

            long oid = ordersrepository.findByUser_IdAndIsCartIsTrue(userid).get(0).getId();
            Orders order = ordersrepository.getOne(oid);

            OrderContent oc = new OrderContent(1,bookrepository.getBookByBookId(b_id));
            oc.setoId(oid);

            if(order.getOrderContent().contains(oc))
            {
                return bookrepository.getBookByBookId(b_id).getName()+"已经在购物车";
            }
            orderContentrepository.save(oc);

            return bookrepository.getBookByBookId(b_id).getName()+"加入购物车成功";
        }
        public String move_out(long b_id,   HttpServletRequest request)
        {
            HttpSession session = request.getSession();

            long userid = (long) session.getAttribute("userid");
            long oid = ordersrepository.findByUser_IdAndIsCartIsTrue(userid).get(0).getId();
            OrderContent oc =  orderContentrepository.findByOIdAndBookIs(oid ,bookrepository.getBookByBookId(b_id));
            orderContentrepository.delete(oc);
            return bookrepository.getBookByBookId(b_id).getName()+"移出购物车成功";
        }

        public List<Orders> cart_show(HttpServletRequest request)
        {

            HttpSession session = request.getSession();
            long userid = (long) session.getAttribute("userid");

            return ordersrepository.findByUser_IdAndIsCartIsTrue(userid);
        }

        public  List<Orders> orders_show( HttpServletRequest request)
        {
            HttpSession session = request.getSession();
            long userid = (long) session.getAttribute("userid");

            return ordersrepository.findByUser_IdAndIsCartIsFalse(userid);
        }

}
