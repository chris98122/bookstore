package com.bookstore.entity;

import org.springframework.data.annotation.Id;

import javax.persistence.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "cover")
@Data
@ToString
public class Cover {
    @Id
    public String id;

    private Long bookid;

    private String url;

    public Long getBookid() {
        return bookid;
    }

    public void setBookid(Long bookid) {
        this.bookid = bookid;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }


    public Cover(Long bookid, String url) {
        this.bookid = bookid;
        this.url = url;
    }
}
