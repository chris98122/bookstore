package com.bookstore.entity;

import org.springframework.data.annotation.Id;

import javax.persistence.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "bookcomment")
@Data
@ToString
public class Comment {

    @Id
    public String id;

    private Long bookid;
    private Long userid;

    private String content;

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Long getBookid() {
        return bookid;
    }

    public void setBookid(Long bookid) {
        this.bookid = bookid;
    }

    public Long getUserid() {
        return userid;
    }

    public void setUserid(Long userid) {
        this.userid = userid;
    }

    public Comment(Long bookid, Long userid, String content) {
        this.bookid = bookid;
        this.userid = userid;
        this.content = content;
    }
}
