package com.bookstore.repository;


import com.bookstore.entity.Cover;
import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CoverRepository extends MongoRepository<Cover, Integer>{
   Cover findByBookid(Long bookid);
}
