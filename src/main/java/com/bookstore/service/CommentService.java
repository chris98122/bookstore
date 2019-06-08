package com.bookstore.service;

import com.bookstore.entity.Comment;
import com.bookstore.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
public class CommentService {

    @Autowired
    private CommentRepository commentrepository;

    public List<Comment> get_comment(Long book_id,HttpServletRequest request)
    {
        List<Comment> commentList =  commentrepository.findByBookid(book_id);
        return commentList;
    }

}
