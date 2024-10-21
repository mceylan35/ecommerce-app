'use client';
import { Product } from '@/types';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import '../../styles/productList.css'
import Header from '../header/Header';

const ProductList:React.FC = () => {

    const [products,setProducts]=useState<Product[]>([]);
    const [loading,setLoading]=useState<boolean>(false);
    const searchParams=useSearchParams();
    const categorySlug=searchParams.get('category');
useEffect(()=>{
    const fetchProducts = async () => {
        try {
          const response = await import('@/data/products.json');
          let filteredProducts = response.products;
  
          if (categorySlug) {
            filteredProducts = filteredProducts.filter(
              product => product.categoryId.toString() === categorySlug
            );
          }
  
          setProducts(filteredProducts);
          setLoading(false);
        } catch (error) {
          console.error('Ürünler yüklenirken hata oluştu:', error);
          setLoading(false);
        }
      };
  
      fetchProducts();
},[categorySlug]);

if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="empty-products">
        <h2>Bu kategoride ürün bulunamadı</h2>
      </div>
    );
  }

  return (
     
    <div className="products-grid">
       {
        products.map(product=>(
            <ProductCard key={product.id} product={product} />
        ))
       }
     </div>
  )
}

export default ProductList;