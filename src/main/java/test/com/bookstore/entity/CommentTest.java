package test.com.bookstore.entity; 

import com.bookstore.repository.OrdersRepository;
import org.junit.Test;
import org.junit.Before; 
import org.junit.After; 
import com.bookstore.repository.CommentRepository;
import java.util.List;
import com.bookstore.entity.Comment;
import org.springframework.beans.factory.annotation.Autowired;

import org.junit.runner.RunWith;


import com.bookstore.BookstoreApplication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

/**
* Comment Tester. 
* 
* @author <Authors name> 
* @since <pre>���� 8, 2019</pre> 
* @version 1.0 
*/



@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes=BookstoreApplication.class)
public class CommentTest {

    @Autowired
    private CommentRepository repo;

@Before
public void before() throws Exception {
} 

@After
public void after() throws Exception { 
} 

/** 
* 
* Method: getId() 
* 
*/ 
@Test
public void testGetId() throws Exception {
    System.out.println("!!!");


    Comment c = repo.findById(1);
    System.out.println(c.getContent());


//TODO: Test goes here... 
} 

/** 
* 
* Method: setId(int id) 
* 
*/ 
@Test
public void testSetId() throws Exception { 
//TODO: Test goes here... 
} 

/** 
* 
* Method: getContent() 
* 
*/ 
@Test
public void testGetContent() throws Exception { 
//TODO: Test goes here... 
} 

/** 
* 
* Method: setContent(String content) 
* 
*/ 
@Test
public void testSetContent() throws Exception { 
//TODO: Test goes here... 
}


}
