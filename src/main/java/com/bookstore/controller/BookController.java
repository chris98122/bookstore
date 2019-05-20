package com.bookstore.controller;

import com.bookstore.entity.Book;
import com.bookstore.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.naming.AuthenticationException;
import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Optional;

import com.bookstore.repository.BookRepository;
import com.bookstore.service.BookService;

@CrossOrigin(origins = {"http://localhost:8081","null"},allowCredentials = "true")
@RestController
public class BookController {

    @Autowired
    private BookRepository bookrepository;

    @Autowired
    private BookService bookservice;

    @GetMapping(value = "/book")
    public List<Book> getBooks(){
        return bookrepository.findAll();
    }

    @PostMapping(value = "/update_stock")
    public String update_stock( @RequestParam(value = "bid",required = false)long id,
                           @RequestParam(value = "stock",required = false)long stock,
                           HttpServletRequest request) {
        Book book = bookrepository.getBookByBookId(id);
        book.setStock(stock);
        bookrepository.saveAndFlush(book);
        return "修改"+book.getName()+"的库存为"+book.getStock();
    }

    @PostMapping(value = "/update_price")
    public String update_price( @RequestParam(value = "bid",required = false)long id,
                           @RequestParam(value = "price",required = false)double price,
                           HttpServletRequest request) {
        return bookservice.update_price(id,price,request);
    }
    @PostMapping(value = "/update_shelf")
    public String update_shelf( @RequestParam(value = "bid",required = false)long id,
                                @RequestParam(value = "upshelf",required = false)Boolean upshelf,
                                HttpServletRequest request) {
        Book book = bookrepository.getBookByBookId(id);
        book.setUpshelf(upshelf);
        bookrepository.saveAndFlush(book);
        String a[] = {"下架","上架"};
        return "修改"+book.getName()+ a[book.getUpshelf() ?  1 : 0];
    }
    @PostMapping(value = "/onshelf")
    public String onshelf( @RequestParam(value = "name",required = false)String name,
                           @RequestParam(value = "author",required = false)String author,
                           @RequestParam(value = "stock",required = false)long stock,
                           @RequestParam(value = "isbn",required = false)String isbn,
                           @RequestParam(value = "price",required = false)double  price,
                           HttpServletRequest request) {
        Book newbook = new Book( name,   author,   stock,   price,   isbn, true);

        bookrepository.saveAndFlush(newbook );
        return newbook.getName()+"上传成功";
    }

}
