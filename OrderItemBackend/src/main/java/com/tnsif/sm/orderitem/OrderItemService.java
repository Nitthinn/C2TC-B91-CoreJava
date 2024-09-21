package com.tnsif.sm.orderitem;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class OrderItemService
{
	@Autowired
	private OrderItemRepository repo;
	
	public List<OrderItem>listAll()
	{
		return repo.findAll();
	}
	public OrderItem get(Integer id)
	{
		return repo.findById(id).get();
	}
	public void save(OrderItem orderitem)
	{
		repo.save(orderitem);
	}
	public void delete(Integer id)
	{
		repo.deleteById(id);
	}
}




