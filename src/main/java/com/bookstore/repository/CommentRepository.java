package com.bookstore.repository;


import com.bookstore.entity.Comment;
import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentRepository extends MongoRepository<Comment, Integer>{
    @Override
    List<Comment> findAll();

    @Override
    <S extends Comment> S save(S entity);

    Comment findById(int i);
}
