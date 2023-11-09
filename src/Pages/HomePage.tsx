// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import ProductCard from '../components/ProductCard';
// import { Link } from 'react-router-dom';
// import ProductList from './ProductList';
// interface Product {
//   name: string;
//   price: number;
//   category: string[];
//   // Define other properties as needed
// }

// interface ComponentProps {
//   products: Product[];
// }

// const HomePage: React.FC<ComponentProps> = () => {
//   // Sample product data
//   const featuredProducts = [
//     {
//       "id": 1,
//       "name": "Blue T-Shirt",
//       "price": 19.99,
//       "category": "Apparel",
//       "description": "A comfortable blue T-shirt made from high-quality fabric.",
//       "image": "image_url1.jpg"
//     },
//     {
//       "id": 2,
//       "name": "Smart Watch",
//       "price": 29.99,
//       "category": "Electronics",
//       "description": "A stylish watch hoodi keeps you in style.",
//       "image": "image_url2.jpg"
//     },
//     {
//       "id": 3,
//       "name": "Running Shoes",
//       "price": 59.99,
//       "category": "Footwear",
//       "description": "High-performance running shoes for your daily workout.",
//       "image": "image_url3.jpg"
//     },
//     {
//       "id": 4,
//       "name": "Moisturizer",
//       "price": 59.99,
//       "category": "SkinCare",
//       "description": "High-performance moisturizer for your daily skincare.",
//       "image": "image_url4.jpg"
//     }
//     // Add more products with different categories
//   ];

//   const categories = [...new Set(featuredProducts.map((product) => product.category))];

//   return (
//     <Container className="mt-4">
//       <h2>Featured Products</h2>
//       {/* <ProductList /> */}
//       <Row>
//         {categories.map((category) => (
//           <Col key={category} md={4} sm={6} xs={12}>
//             <Link to={`/products/${category}`}>
//               <div className="category-link">
//                 {category}
//               </div>
//             </Link>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default HomePage;
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HomePage = ({ products }) => {
  const { category } = useParams();

 // const categoryProducts = products.filter((product) => product.category === category);
//  const filteredProducts = products.filter((product) => product.category.includes(category));


  return (
    <Container className="mt-4">
      <h2>{category} Products</h2>
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={4} sm={6} xs={12}>
          < Link to={`/product/${product.id}`}>
              <Card>
                <Card.Img variant="top" src={product.image} alt={product.name} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>${product.price}</Card.Text>
                  <Card.Text>{product.description}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;

