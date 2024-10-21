import Image from "next/image";
import styles from "./page.module.css";
import ProductList from "@/components/products/ProductList";
import '../styles/page.css'
import { CartProvider } from '@/context/CartContext';
import Header from "@/components/header/Header";
export default function Home() {
  return (
  
    <div className="home-container">
      <div className="home-header">
        <h1 className="home-title">Ürünlerimiz</h1>
        <p className="home-description">
          En yeni ve en popüler ürünlerimizi keşfedin
        </p>
      </div> 
    
       
   <Header />
   <ProductList />
    </div>
    
  );
}