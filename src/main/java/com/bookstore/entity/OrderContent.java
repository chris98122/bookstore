package com.bookstore.entity;


import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

@Entity
public class OrderContent {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "ID")
  private long id;
  private double bNum;

  @ManyToOne
  @JoinColumn(name = "b_ID")
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

  public double getbNum() {
    return bNum;
  }

  public void setbNum(double bNum) {
    this.bNum = bNum;
  }
}
