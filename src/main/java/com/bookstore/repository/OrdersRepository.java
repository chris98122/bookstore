package com.bookstore.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.bookstore.entity.Orders;

import java.util.List;
@Repository
public interface OrdersRepository extends JpaRepository<Orders, Long>{
    List<Orders> findByUser_IdAndIsCartIsFalse(long userid);

    List<Orders> findByUser_IdAndIsCartIsTrue(long userid);
}
