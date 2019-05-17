package com.bookstore.entity;

 import javax.annotation.Generated;
 import javax.persistence.*;


 import javax.persistence.Entity;
 import java.io.Serializable;
 import java.util.List;

@Entity
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "ID")
  private long id;

  private String name;
  private String password;
  private String email;
  @Column(name = "is_active")
  private Boolean Active;

  private long  spending;

    public long getSpending() {
        return spending;
    }

    public void setSpending(long spending) {
        this.spending = spending;
    }

    public User() {
  }

    public Boolean getActive() {
        return Active;
    }

    public void setActive(Boolean active) {
        Active = active;
    }

    public User(String name, String password, String email, Boolean active) {
        this.name = name;
        this.password = password;
        this.email = email;
        Active = active;
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

}
