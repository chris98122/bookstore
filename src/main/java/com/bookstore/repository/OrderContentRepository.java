package com.bookstore.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.bookstore.entity.Orders;

import com.bookstore.entity.Book;
import com.bookstore.entity.OrderContent;

import java.util.List;
@Repository
public interface OrderContentRepository extends JpaRepository<OrderContent, Long>{
    @Override
    default <S extends OrderContent> List<S> saveAll(Iterable<S> entities) {
        return null;
    }

    @Override
    default <S extends OrderContent> S saveAndFlush(S entity) {
        return null;
    }

    @Override
    <S extends OrderContent> S save(S entity);
    OrderContent findByOIdAndBookIs(long oid,Book b);

    @Override
    void deleteById(Long aLong);
}
