package com.bookstore.repository;

import com.bookstore.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
    List<User> findAllByOrderById();
    List<User> findAll();
    User findByName(String username);
    User findById(long userid);

    @Override
    <S extends User> S saveAndFlush(S entity);

    @Override
    <S extends User> List<S> saveAll(Iterable<S> entities);

    List<User> findByIdIsGreaterThan(long i);


}
