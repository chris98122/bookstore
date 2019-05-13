package com.bookstore.entity;

 import javax.annotation.Generated;
  import javax.persistence.CascadeType;
  import javax.persistence.Column;
  import javax.persistence.Entity;
  import javax.persistence.GeneratedValue;
 import javax.persistence.GenerationType;


import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;
@Entity
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "ID")
  private long id;

  private String name;
  private String password;
  private String email;
  private long isActive;

  public User() {
  }

  public User(String name, String password, String email, long isActive) {
    this.name = name;
    this.password = password;
    this.email = email;
    this.isActive = isActive;
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


  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }


  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }


  public long getIsActive() {
    return isActive;
  }

  public void setIsActive(long isActive) {
    this.isActive = isActive;
  }

}
