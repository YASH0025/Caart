import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CategoryProductsPage = ({ products }) => {
  const { category } = useParams();

  const categoryProducts = products.filter((product) => product.category === category);
//  const filteredProducts = products.filter((product) => product.category.includes(category));


  return (
    <Container className="mt-4">
      <h2>{category} Products</h2>
      <Row>
        {categoryProducts.map((product) => (
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

export default CategoryProductsPage;
