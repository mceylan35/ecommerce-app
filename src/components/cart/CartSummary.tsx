'use client';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import React from 'react'
import '../../styles/cartSummary.css';

const CartSummary = () => {
    const {cart,cartTotal}=useCart();
    const shippingCost=cartTotal>500?0:20;
    const totalWithShipping=cartTotal+shippingCost;

   return (
    <div className="cart-summary">
      <h2 className="summary-title">Sipariş Özeti</h2>
      
      <div className="summary-row">
        <span>Ara Toplam</span>
        <span>
          {new Intl.NumberFormat('tr-TR', {
            style: 'currency',
            currency: 'TRY'
          }).format(cartTotal)}
        </span>
      </div>

      <div className="summary-row">
        <span>Kargo</span>
        <span>
          {shippingCost === 0 
            ? 'Ücretsiz'
            : new Intl.NumberFormat('tr-TR', {
                style: 'currency',
                currency: 'TRY'
              }).format(shippingCost)}
        </span>
      </div>

      {cartTotal < 500 && (
        <div className="shipping-info">
          500 TL üzeri alışverişlerde kargo bedava! 
          {cartTotal > 0 && (
            <span>
              {new Intl.NumberFormat('tr-TR', {
                style: 'currency',
                currency: 'TRY'
              }).format(500 - cartTotal)} daha harcayarak kargo bedava fırsatından yararlanın.
            </span>
          )}
        </div>
      )}

      <div className="summary-total">
        <span>Toplam</span>
        <span>
          {new Intl.NumberFormat('tr-TR', {
            style: 'currency',
            currency: 'TRY'
          }).format(totalWithShipping)}
        </span>
      </div>

      <button className="checkout-button">
        Alışverişi Tamamla
      </button>

      <Link href="/" className="continue-shopping">
        Alışverişe Devam Et
      </Link>
    </div>
  );
};

export default CartSummary;