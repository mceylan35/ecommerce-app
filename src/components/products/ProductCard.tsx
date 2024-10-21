import { useCart } from '@/context/CartContext';
import { Product } from '@/types';
import Image from 'next/image';
import React from 'react'
import '../../styles/productCard.css';
interface ProductCardProps {
    product: Product;
  }
const ProductCard :React.FC<ProductCardProps>=({product}) =>{
   const {cart, addToCart}=useCart();
   const isInCart=cart.some(item=>item.id===product.id);

  return (
   <div className="product-card">
      <div className="product-image-container">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="product-image"
        />
      </div>
      
      <div className="product-details">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        
        <div className="product-footer">
          <span className="product-price">
            {new Intl.NumberFormat('tr-TR', {
              style: 'currency',
              currency: 'TRY'
            }).format(product.price)}
          </span>
          
          <button
            onClick={() => addToCart(product)}
            disabled={isInCart}
            className={`add-to-cart-btn ${isInCart ? 'in-cart' : ''}`}
          >
            {isInCart ? (
              <>
              
                <span>Sepette</span>
                
              </>
            ) : (
              <> 
              
                <span>Sepete Ekle</span>
                </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;