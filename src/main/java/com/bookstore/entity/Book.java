package com.bookstore.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
public class Book {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "ID")
  private long id;

  private String name;
  private String author;
  private long stock;
  private double price;
  private long words;
  private String isbn;
  private String publisher;
  private Boolean upshelf;
  private String detail;

  public Book() {
  }

  public Book(String name, String author, long stock,
              double price, String isbn, Boolean upshelf,String detail,
              String publisher, long words) {
    this.name = name;
    this.author = author;
    this.stock = stock;
    this.price = price;
    this.isbn = isbn;
    this.upshelf = upshelf;
    this.detail = detail;
    this.publisher =publisher;
    this.words = words;
  }

  public long getWords() {
    return words;
  }

  public void setWords(long words) {
    this.words = words;
  }

  public String getPublisher() {
    return publisher;
  }

  public void setPublisher(String publisher) {
    this.publisher = publisher;
  }

  public Boolean getUpshelf() {
    return upshelf;
  }

  public void setUpshelf(Boolean upshelf) {
    this.upshelf = upshelf;
  }

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }


  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }


  public String getAuthor() {
    return author;
  }

  public void setAuthor(String author) {
    this.author = author;
  }


  public long getStock() {
    return stock;
  }

  public void setStock(long stock) {
    this.stock = stock;
  }


  public double getPrice() {
    return price;
  }

  public void setPrice(double price) {
    this.price = price;
  }


  public String getIsbn() {
    return isbn;
  }

  public void setIsbn(String isbn) {
    this.isbn = isbn;
  }


  public String getDetail() {
    return detail;
  }

  public void setDetail(String detail) {
    this.detail = detail;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    Book book = (Book) o;
    return id == book.id &&
            isbn.equals(book.isbn);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, name, author, stock, price, isbn, detail);
  }
}
