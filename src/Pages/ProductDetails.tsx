import React from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const productImageStyle = {
  maxWidth: '100%',
  height: 'auto',
};

const productNameStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
};

const productPriceStyle = {
  fontSize: '20px',
  color: 'green',
};

const productDescriptionStyle = {
  fontSize: '16px',
};


interface Product {
  name: string;
  price: number;
  category: string[];
  // Define other properties as needed
}

interface ComponentProps {
  products: Product[];
}

const ProductDetails: React.FC<ComponentProps> = ({ products }) => {
  const { productId } = useParams(); // Get the product ID from the URL

  // Find the product with the matching productId
  const product = products.find((p) => p.id === parseInt(productId, 10));

  if (!product) {
    // Handle the case where the product with the given ID is not found
    return <div>Product not found</div>;
  }

  return (
    <Container className="mt-4">
      <Row>
        <Col md={6}>
          <img
            src={product.image}
            alt={product.name}
            style={productImageStyle}
          />
        </Col>
        <Col md={6}>
          <h2 style={productNameStyle}>{product.name}</h2>
          <p style={productPriceStyle}>Price: ${product.price}</p>
          <p style={productDescriptionStyle}>{product.description}</p>
          {/* You can add more inline styles here */}
          <Button variant="primary">Add to Cart</Button>

        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
