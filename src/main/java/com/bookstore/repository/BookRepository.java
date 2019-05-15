package com.bookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.bookstore.entity.Book;

import java.util.List;
@Repository
public interface BookRepository extends JpaRepository<Book, Long> {

    List<Book> findAll();

    @Query("SELECT b from Book b")
    List<Book> getAll();

    @Query("select b from Book b where b.id=:book_id")
    Book getBookByBookId(@Param("book_id") long book_id);

    @Override
    <S extends Book> S save(S entity);
}
