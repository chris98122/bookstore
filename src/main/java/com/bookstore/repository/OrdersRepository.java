package com.bookstore.repository;

import com.bookstore.entity.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.util.List;
@Repository
public interface OrdersRepository extends JpaRepository<Orders, Long>{
    List<Orders> findAllByIsCartIsFalse();

    List<Orders> findByUser_IdAndIsCartIsFalse(long userid);

    List<Orders> findByUser_IdAndIsCartIsTrue(long userid);

    @Override
    default <S extends Orders> S saveAndFlush(S entity) {
        return null;
    }

    @Override
    <S extends Orders> S save(S entity);


    List<Orders> findAllByBuydateBetween(Timestamp a, Timestamp b);
}
