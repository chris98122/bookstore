package com.bookstore.service;

import com.bookstore.entity.Book;
import com.bookstore.repository.BookRepository;

import com.bookstore.repository.CoverRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;

@Service
public class BookService {

    @Autowired
    private BookRepository bookrepository;

    @Autowired
    private CoverRepository coverrepository;

    public String update_price(long id,double price,    HttpServletRequest request)
    {
        Book book = bookrepository.getBookByBookId(id);
        book.setPrice(price);
        bookrepository.saveAndFlush(book);
        return "修改"+book.getName()+"的价格为"+book.getPrice();}

    public String upshelf(String name,String author,long stock,String isbn,double  price,
                          String detail,
                          String publisher,
                          long words,
                          HttpServletRequest request)
    {

        Book newbook = new Book( name,   author,   stock,   price,   isbn, true,detail,publisher,words);

        bookrepository.saveAndFlush(newbook );
        return newbook.getName()+"上传成功";
    }
    public String update_shelf(long id,Boolean upshelf, HttpServletRequest request)
    {

        Book book = bookrepository.getBookByBookId(id);
        book.setUpshelf(upshelf);
        bookrepository.saveAndFlush(book);
        String a[] = {"下架","上架"};
        return "修改"+book.getName()+ a[book.getUpshelf() ?  1 : 0];
    }
    public String update_stock(long id,long stock, HttpServletRequest request)

    {
        Book book = bookrepository.getBookByBookId(id);
        book.setStock(stock);
        bookrepository.saveAndFlush(book);
        return "修改"+book.getName()+"的库存为"+book.getStock();}


        public String get_url(long book_id, HttpServletRequest request)
        {
            return coverrepository.findByBookid( book_id).getUrl();
        }
}
