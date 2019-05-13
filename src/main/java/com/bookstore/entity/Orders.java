package com.bookstore.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import javax.persistence.Table;
import java.util.ArrayList;
import java.util.Collections;

import java.util.Set;

@Entity
public class Orders {
  @Id
  private long id;

  @ManyToOne
  @JoinColumn(name = "u_ID")
  private User user;

  private java.sql.Timestamp buydate;
  private double totPrice;
  private boolean isCart;

  @OneToMany(cascade = { CascadeType.ALL })
  @JoinColumn(name = "o_ID")
  private Set <OrderContent> orderContent;

  public Set<OrderContent> getOrderContent() {
    return orderContent;
  }

  public void setOrderContent(Set<OrderContent> orderContent) {
    this.orderContent = orderContent;
  }

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public User getUser() {
    return user;
  }

  public void setUser(User user) {
    this.user = user;
  }

  public java.sql.Timestamp getBuydate() {
    return buydate;
  }

  public void setBuydate(java.sql.Timestamp buydate) {
    this.buydate = buydate;
  }


  public double getTotPrice() {
    return totPrice;
  }

  public void setTotPrice(double totPrice) {
    this.totPrice = totPrice;
  }

  public boolean isCart() {
    return isCart;
  }

  public void setCart(boolean cart) {
    isCart = cart;
  }
}
