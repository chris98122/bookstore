package com.bookstore.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.naming.AuthenticationException;
import java.util.List;
import java.util.Optional;

import com.bookstore.repository.BookRepository;
import com.bookstore.entity.Book;

@RestController
public class BookController {
    @Autowired
    private BookRepository bookrepository;


    @GetMapping(value = "/book")
    public List<Book> getBooks(){
        return bookrepository.findAll();
    }

}
