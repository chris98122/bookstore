package com.bookstore.entity;


import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

@Entity
public class OrderContent {
  @Id
  private long id;
  private long bId;
  private double bNum;

  @ManyToOne
  @JoinColumn(name = "oId")
  private Book book;

  public Book getBook() {
    return book;
  }

  public void setBook(Book book) {
    this.book = book;
  }

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }



  public long getBId() {
    return bId;
  }

  public void setBId(long bId) {
    this.bId = bId;
  }


  public double getBNum() {
    return bNum;
  }

  public void setBNum(double bNum) {
    this.bNum = bNum;
  }

}
