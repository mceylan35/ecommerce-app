'use client';
import { useCart } from '@/context/CartContext';  
import React from 'react' 
import Link from 'next/link';    
import '../../styles/cart.css'
import CartItem from '@/components/cart/CartItem';
import CartSummary from '@/components/cart/CartSummary';



const CartPage = () => {
    const {cart}=useCart();
    if(cart.length===0){
        return (
            <div className="empty-cart">
              
              <h2 className="empty-cart-title">Sepetiniz boş</h2>
              <p className="empty-cart-text">Alışverişe başlamak için ürünlerimize göz atın</p>
              <Link href="/" className="empty-cart-link">
                Alışverişe Başla
              </Link>
            </div>
          );
        }


        return (
            <div className="cart-page">
              <h1 className="cart-page-title">Alışveriş Sepeti</h1>
              
              <div className="cart-container">
                <div className="cart-items">
                  {cart.map(item=>(
                    <CartItem key={item.id} item={item} />
                  ))}
                </div>
                
                <CartSummary />
              </div>
            </div>
          );
        }

export default CartPage