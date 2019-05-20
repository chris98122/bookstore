package com.bookstore.service;

import com.bookstore.entity.Book;
import com.bookstore.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;

@Service
public class BookService {

    @Autowired
    private BookRepository bookrepository;
    public String update_price(long id,double price,    HttpServletRequest request)
    {
        Book book = bookrepository.getBookByBookId(id);
        book.setPrice(price);
        bookrepository.saveAndFlush(book);
        return "修改"+book.getName()+"的价格为"+book.getPrice();}
}
