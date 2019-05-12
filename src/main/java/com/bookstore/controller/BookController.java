package com.bookstore.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.naming.AuthenticationException;
import java.util.List;
import java.util.Optional;

import com.bookstore.repository.BookRepository;
import com.bookstore.entity.Book;

@CrossOrigin(origins = {"http://localhost:8081","null"},allowCredentials = "true")
@RestController
public class BookController {
    @Autowired
    private BookRepository bookrepository;


    @GetMapping(value = "/browse")
    public List<Book> getBooks(){
        return bookrepository.findAll();
    }

}
