package com.bookstore.controller;

import com.bookstore.entity.Book;
import com.bookstore.entity.Comment;
import com.bookstore.repository.BookRepository;
import com.bookstore.service.BookService;

import com.bookstore.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@CrossOrigin(origins = {"http://localhost:8081","null"},allowCredentials = "true")
@RestController
public class BookController {

    @Autowired
    private BookRepository bookrepository;
    @Autowired
    private  CommentService commentservice;

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
        return bookservice.update_price(id,stock,request);
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
        return bookservice.update_shelf(id,upshelf,request);
    }
    @PostMapping(value = "/onshelf")
    public String onshelf( @RequestParam(value = "name",required = false)String name,
                           @RequestParam(value = "author",required = false)String author,
                           @RequestParam(value = "stock",required = false)long stock,
                           @RequestParam(value = "isbn",required = false)String isbn,
                           @RequestParam(value = "price",required = false)double  price,
                           @RequestParam(value = "detail",required = false)String detail,
                           @RequestParam(value = "publisher",required = false)String publisher,
                           @RequestParam(value = "words",required = false)long words,
                           HttpServletRequest request) {
        return bookservice.upshelf(name,author,stock,isbn,price,detail,publisher,words,request);
    }

    @PostMapping(value = "/comment")
    public List<Comment> get_comment(@RequestParam(value = "book_id",required = false)long book_id,
                                     HttpServletRequest request) {

        return commentservice.get_comment(book_id,request);
    }
    @PostMapping(value = "/get_url")
    public String get_url(@RequestParam(value = "book_id",required = false)long book_id,
                                     HttpServletRequest request) {

        return bookservice.get_url(book_id,request);
    }

}
