'use client';
import { useCart } from '@/context/CartContext';
import { CartContextType, CartItemItem } from '@/types';
import Image from 'next/image';
import React from 'react'
import '../../styles/cartItem.css';

interface CartItemProps {
    item: CartItemItem;
}


const CartItem:React.FC<CartItemProps> = ({item}) => {

    const {updateQuantity,removeFromCart}=useCart();

    const handleQuantityChange = (newQuantity: number) => {
        if (newQuantity >= 1 && newQuantity <= item.stock) {
          updateQuantity(item.id, newQuantity);
        }
      };
      return (
        <div className="cart-item">
          <div className="cart-item-image">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="cart-image"
            />
          </div>
    
          <div className="cart-item-details">
            <h3 className="cart-item-title">{item.name}</h3>
            <p className="cart-item-description">{item.description}</p>
            <div className="cart-item-price">
              {new Intl.NumberFormat('tr-TR', {
                style: 'currency',
                currency: 'TRY'
              }).format(item.price)}
            </div>
          </div>
    
          <div className="cart-item-actions">
            <div className="quantity-controls">
              <button 
                className="quantity-button"
                onClick={() => handleQuantityChange(item.quantity - 1)}
                disabled={item.quantity <= 1}
              >
           çıkar
              </button>
              
              <span className="quantity-value">{item.quantity}</span>
              
              <button 
                className="quantity-button"
                onClick={() => handleQuantityChange(item.quantity + 1)}
                disabled={item.quantity >= item.stock}
              >
               ekle
              </button>
            </div>
    
            <div className="cart-item-total">
              {new Intl.NumberFormat('tr-TR', {
                style: 'currency',
                currency: 'TRY'
              }).format(item.price * item.quantity)}
            </div>
    
            <button 
              onClick={() => removeFromCart(item.id)}
              className="remove-button"
              title="Ürünü sepetten çıkar"
            >
             
            </button>
          </div>
        </div>
      );
    };
    
    export default CartItem;