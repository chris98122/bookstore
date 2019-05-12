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
    private String data;

    //public void setCode(String code){this.code = code;}

  //  public void setMessage(String message){this.message = message;}

    public void setResult(String result){this.data = result;}

    public static WebResponse success(String result){
        WebResponse w = new WebResponse();
        w.setResult(result);
        return w;
    }

}