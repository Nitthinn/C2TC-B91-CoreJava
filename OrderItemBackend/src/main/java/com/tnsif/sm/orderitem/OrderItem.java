package com.tnsif.sm.orderitem;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="orderitem")
public class OrderItem 
{
	private int orderItemId;
	private int orderId;
	private int productId;
	private int quantity;
	private double unitPrice;
	
	
	public OrderItem()
	{
		
	}
	public OrderItem(int orderItemId, int orderId, int productId, int quantity, double unitPrice)
	{
		super();
		this.orderItemId = orderItemId;
		this.orderId = orderId;
		this.productId = productId;
		this.quantity = quantity;
		this.unitPrice = unitPrice;
	}
	@Id
	//@GeneratedValue(strategy=GenerationType.IDENTITY)
	public int getOrderItemId() {
		return orderItemId;
	}
	public void setOrderItemId(int orderItemId) {
		this.orderItemId = orderItemId;
	}
	public int getOrderId() {
		return orderId;
	}
	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}
	public int getProductId() {
		return productId;
	}
	public void setProductId(int productId) {
		this.productId = productId;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public double getUnitPrice() {
		return unitPrice;
	}
	public void setUnitPrice(double unitPrice) {
		this.unitPrice = unitPrice;
	}
	
	
}
