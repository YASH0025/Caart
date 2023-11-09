import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./componets/Header";
import Footer from "./componets/Footer";
import CategoryProductsPage from "./componets/CategoryProductsPage";
import ProductDetails from "./Pages/ProductDetails";
// import CategorryPage from "./componets/CategorryPage";
import CategoryPage from "./componets/CategorryPage";
import ProductList from "./Pages/ProductList";
import NewProduct from "./ProductData/NewProducts.json"
import ProductCarousel from "./componets/ProductCarousel";


const App = () => {

  const featuredProducts =  [
    {
      "id": 1,
      "name": "Blue T-Shirt",
      "price": 19.99,
      "category": "Apparel",
      "description": "A comfortable blue T-shirt made from high-quality fabric.",
      "image": "https://plus.unsplash.com/premium_photo-1682096261732-88a83f8bb20b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": 2,
      "name": "Red T-Shirt",
      "price": 19.99,
      "category": "Apparel",
      "description": "A comfortable blue T-shirt made from high-quality fabric.",
      "image": "https://images.unsplash.com/photo-1634849112476-88cb7e60392b?q=80&w=1424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": 3,
      "name": "Smart Watch",
      "price": 29.99,
      "category": "Electronics",
      "description": "A stylish watch hoodi keeps you in style.",
      "image": "https://images.unsplash.com/photo-1617043983671-adaadcaa2460?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": 4,
      "name": "Running Shoes",
      "price": 59.99,
      "category": "Footwear",
      "description": "High-performance running shoes for your daily workout.",
      "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": 6,
      "name": "Sneakers",
      "price": 53.83,
      "category": "Footwear",
      "description": "High-Qulity running shoes for your daily workout.",
      "image": "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": 7,
      "name": "Lipbalm",
      "price": 59.99,
      "category": "SkinCare",
      "description": "High-performance moisturizer for your daily skincare.",
      "image": "https://images.unsplash.com/photo-1603923054647-887b2d34a2ee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": 8,
      "name": "Mini Van",
      "price": 59.99,
      "category": "Toys ",
      "description": "High-performance moisturizer for your daily skincare.",
      "image": "https://images.unsplash.com/photo-1447931958677-954446df5f70?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
      "id": 9,
      "name": "Black T-Shirt",
      "price": 19.99,
      "category": "Apparel",
      "description": "A comfortable blue T-shirt made from high-quality fabric.",
      "image": "https://images.unsplash.com/photo-1610502778270-c5c6f4c7d575?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": 10,
      "name": "White T-Shirt",
      "price": 19.99,
      "category": "Apparel",
      "description": "A comfortable blue T-shirt made from high-quality fabric.",
      "image": "https://plus.unsplash.com/premium_photo-1682096353438-03b20899f011?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": 11,
      "name": "Smart Watch",
      "price": 29.99,
      "category": "Electronics",
      "description": "A stylish watch hoodi keeps you in style.",
      "image": "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": 12,
      "name": "Boots ",
      "price": 59.99,
      "category": "Footwear",
      "description": "High-performance running shoes for your daily workout.",
      "image": "https://images.unsplash.com/photo-1554133818-7bb790d55236?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": 13,
      "name": "HighTop Sneakers",
      "price": 59.99,
      "category": "Toys ",
      "description": "High-performance running shoes for your daily workout.",
      "image": "https://images.unsplash.com/photo-1695748966450-3abe5c25b481?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": 14,
      "name": "Hand Gun",
      "price": 59.99,
      "category": "Toys ",
      "description": "High-performance moisturizer for your daily skincare.",
      "image": "https://assets.ajio.com/medias/sys_master/root/20210619/V2gK/60ccf1d1f997ddb312d13d1a/-1117Wx1400H-4919026200-multi-MODEL.jpg"
    },
    {
      "id": 15,
      "name": "Kitchen Set",
      "price": 59.99,
      "category": "Kitchen",
      "description": "High-performance moisturizer for your daily skincare.",
      "image": "https://images.unsplash.com/photo-1617784625140-515e220ba148?q=80&w=1634&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": 16,
      "name": "MicroWave",
      "price": 59.99,
      "category": "Kitchen",
      "description": "High-performance moisturizer for your daily skincare.",
      "image": "https://akm-img-a-in.tosshub.com/sites/rd/resources/202006/shutterstock_74910703_1592489390_1200x675.jpeg?size=684:384"
    },
    {
      "id": 17,
      "name": "Washing Machine",
      "price": 59.99,
      "category": "Kitchen",
      "description": "High-performance moisturizer for your daily skincare.",
      "image": "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": 18,
      "name": "Face Cream",
      "price": 59.99,
      "category": "SkinCare",
      "description": "High-performance moisturizer for your daily skincare.",
      "image": "https://files.themomsco.com/site-images/1200x1200/70a934b0-487a-11ec-b6c5-957ebacf6f5e.jpg"
    },
    {
      "id": 19,
      "name": "Makeup",
      "price": 59.99,
      "category": "SkinCare",
      "description": "High-performance moisturizer for your daily skincare.",
      "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": 20,
      "name": "Some Thing I Waiting Tell You",
      "price": 59.99,
      "category": "Books ",
      "description": "High-performance moisturizer for your daily skincare.",
      "image": "data:image/jpeg;base64,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"
    },
    {
      "id": 21,
      "name": "Achemist ",
      "price": 59.99,
      "category": "Books ",
      "description": "High-performance moisturizer for your daily skincare.",
      "image": "https://5.imimg.com/data5/SELLER/Default/2021/11/QQ/SI/XU/60672026/5.jpg"
    },
    {
      "id": 22,
      "name": "Cricket Bat",
      "price": 59.99,
      "category": "Sports ",
      "description": "High-performance moisturizer for your daily skincare.",
      "image": "data:image/jpeg;base64,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"
    },
    {
      "id": 23,
      "name": "SG Cricket Ball",
      "price": 59.99,
      "category": "Sports ",
      "description": "High-performance moisturizer for your daily skincare.",
      "image": "https://www.nfsportech.com/cdn/shop/products/test2.jpg?v=1562756965"
    }
    ,
    {
      "id": 24,
      "name": "Smart Watch",
      "price": 29.99,
      "category": "Electronics",
      "description": "A stylish watch hoodi keeps you in style.",
      "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1399&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }

  ]
  // const categories = [...new Set(featuredProducts.map((product) => product.category))];
 
  const categories = [...new Set(featuredProducts.map((product) => product.category))];


  return (
    <>
       <Header />
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<ProductCarousel products={featuredProducts} />} />
            {/* <Route path="/products/:category" element={<CategoryProductsPage products={featuredProducts} />} /> */}
            <Route path="/products/:category" element={<CategoryProductsPage products={featuredProducts} />} />

           {/* // <Route path="/product/:productId" element={<ProductDetails products={featuredProducts} />} /> */}
            <Route path="/products" element={<CategoryPage categories={categories} />} />
            <Route path="/product/:productId" element={<ProductDetails products={featuredProducts} />} />
            <Route path="/products/:category" element={<ProductList products={featuredProducts} />} />

          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
};

export default App;
