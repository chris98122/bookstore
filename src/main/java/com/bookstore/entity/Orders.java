package com.bookstore.entity;

import com.alibaba.fastjson.annotation.JSONField;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.List;
@Entity
public class Orders {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "ID")
  private long id;

  @ManyToOne
  @JoinColumn(name = "u_ID")
  private User user;

  @JSONField(format = "yyyy-MM-dd HH:mm:ss")
  private java.sql.Timestamp buydate;
  private double totPrice;
  private boolean isCart;

  @OneToMany()
  @JoinColumn(name = "o_ID")
  private List <OrderContent> orderContent;

  public Orders() {
  }

  public Orders(User user, Timestamp buydate, double totPrice, boolean isCart, List<OrderContent> orderContent) {
    this.user = user;
    this.buydate = buydate;
    this.totPrice = totPrice;
    this.isCart = isCart;
    this.orderContent = orderContent;
  }

  public List<OrderContent> getOrderContent() {
    return orderContent;
  }

  public void setOrderContent(List<OrderContent> orderContent) {
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

  public Timestamp getBuydate() {
    return buydate;
  }

  public void setBuydate(Timestamp buydate) {
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
