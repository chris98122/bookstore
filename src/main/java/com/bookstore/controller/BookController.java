package com.bookstore.controller;

import com.bookstore.entity.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.naming.AuthenticationException;
import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Optional;

import com.bookstore.repository.BookRepository;
import com.bookstore.entity.Book;

@CrossOrigin(origins = {"http://localhost:8081","null"},allowCredentials = "true")
@RestController
public class BookController {
    @Autowired
    private BookRepository bookrepository;

    @GetMapping(value = "/book")
    public List<Book> getBooks(){
        return bookrepository.findAll();
    }

    @PostMapping(value = "/update_stock")
    public String BanUser( @RequestParam(value = "bid",required = false)long id,
                           @RequestParam(value = "stock",required = false)long stock,
                           HttpServletRequest request) {
        Book book = bookrepository.getBookByBookId(id);
        book.setStock(stock);
        bookrepository.saveAndFlush(book);
        return "修改"+book.getName()+"的库存为"+book.getStock();
    }
}
