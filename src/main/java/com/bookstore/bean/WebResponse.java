package com.bookstore.bean;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class WebResponse {
 //   private String code;
   // private String message;
    private Object result;

    //public void setCode(String code){this.code = code;}

  //  public void setMessage(String message){this.message = message;}

    public void setResult(Object result){this.result = result;}

    public static WebResponse success(Object result){
        WebResponse w = new WebResponse();
        w.setResult(result);
        return w;
    }

}