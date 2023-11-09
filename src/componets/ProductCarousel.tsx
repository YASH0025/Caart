import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';

const ProductCarousel = ({ products }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % products.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [index, products.length]);

  return (
    <Carousel 
      activeIndex={index} 
      onSelect={handleSelect} 
      style={{ width: "90%", height: "90vh", margin: "0 auto" }}
    >
      {products.map((product, idx) => (
        <Carousel.Item key={idx}>
          <img
            className="d-block w-100"
            src={product.image}
            alt={product.name}
            style={{ maxHeight: "90vh", objectFit: "cover" }}
          />
          <Carousel.Caption style={{ color: "black" }}>
            <h3>{product.name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
