package com.bookstore.entity;


import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;
@Entity
public class OrderContent {
  @Id
  private long id;
  private long oId;
  private long bId;
  private double bNum;


  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }


  public long getOId() {
    return oId;
  }

  public void setOId(long oId) {
    this.oId = oId;
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
