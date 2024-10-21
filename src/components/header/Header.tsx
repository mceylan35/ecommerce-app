'use client';
import { useCart } from '@/context/CartContext';  
import React from 'react'
import '../../styles/productCard.css';
import Link from 'next/link'; 

const Header = () => {

    const {cart, cartTotal}=useCart();
    

    return (
        <header className="header">
          <div className="header-container">
            <div className="header-content">
              {/* Logo ve Ana Sayfa Linki */}
              <div className="header-left">
                <Link href="/" className="logo-link">
               
                  <span>E-Ticaret</span>
                </Link>
              </div>
    
              {/* Kategoriler */}
              <nav className="nav-menu">
                <Link href="/products?category=elektronik" className="nav-link">
                  Elektronik
                </Link>
                <Link href="/products?category=giyim" className="nav-link">
                  Giyim
                </Link>
              </nav>
    
              {/* Sepet */}
              <Link href="/cart" className="cart-link">
                <div className="cart-icon-wrapper">
                  <input size={24} />
                  {cart.length > 0 && (
                    <span className="cart-badge">{cart.length}</span>
                  )}
                </div>
                <div className="cart-info">
                  <span className="cart-label">Sepet</span>
                  <span className="cart-total">
                    {new Intl.NumberFormat('tr-TR', {
                      style: 'currency',
                      currency: 'TRY'
                    }).format(cartTotal)}
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </header>
      );
    };
    
    export default Header;