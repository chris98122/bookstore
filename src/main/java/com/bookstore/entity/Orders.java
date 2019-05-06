package com.bookstore.entity;



import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;
@Entity
public class Orders {
  @Id
  private long id;
  private long uId;
  private java.sql.Timestamp buydate;
  private double totPrice;
  private long isCart;


  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }


  public long getUId() {
    return uId;
  }

  public void setUId(long uId) {
    this.uId = uId;
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


  public long getIsCart() {
    return isCart;
  }

  public void setIsCart(long isCart) {
    this.isCart = isCart;
  }

}
