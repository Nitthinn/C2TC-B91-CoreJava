package com.tnsif.sm.orderitem;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
//@RequestMapping("/api")
public class OrderItemController 
{
	@Autowired
	private OrderItemService service;
	
	//Restful Api methods for retrieval operations
	
	@GetMapping("/orderitems")
	public List<OrderItem>list()
	{
		return service.listAll();
	}
	@GetMapping("/orderitems/{id}")
	public ResponseEntity<OrderItem> get(@PathVariable Integer id)
	{
		try
		{
			OrderItem orderitem=service.get(id);
			return new ResponseEntity<OrderItem>(orderitem,HttpStatus.OK);
		}
		catch(NoSuchElementException e)
		{
			return new ResponseEntity<OrderItem>(HttpStatus.NOT_FOUND);
		}
	}
	//create
	@PostMapping("/orderitems")
	public void add(@RequestBody OrderItem orderitem)
	{
		service.save(orderitem);
	}
	//Restfull api method for update operation
	@PutMapping("/orderitems/{id}")
	public ResponseEntity<?> update(@RequestBody OrderItem orderitem,@PathVariable Integer id)
	{
		try
		{
			OrderItem existOrderItem=service.get(id);
			service.save(orderitem);
			return new ResponseEntity<>(HttpStatus.OK);
		}
		catch(NoSuchElementException e)
		{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	//Restful api method for Delete operation
	@DeleteMapping("/orderitems/{id}")
	public void delete(@PathVariable Integer id)
	{
		service.delete(id);
	}
}
