package com.bookstore.entity;


import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;
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

  public OrderContent() {
  }

  public OrderContent(double bNum, Book book) {
    this.bNum = bNum;
    this.book = book;
  }
  @Column(name = "o_ID")
  private long oId;

  public long getoId() {
    return oId;
  }

  public void setoId(long oId) {
    this.oId = oId;
  }

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

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    OrderContent that = (OrderContent) o;
    return oId == that.oId &&
            book.equals(that.book);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, bNum, book, oId);
  }
}
