import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CategoryPage = ({ categories, products = [] }) => {
  // const navigate = useNavigate();

  // const handleCategoryClick = (category) => {
  //   navigate(`/products/${category}`);
  // };
  

  return (
 <div>
      <h2>All Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            {Array.isArray(category) ? (
              <ul>
                {category.map((subCategory) => (
                  <li key={subCategory}>
                    <Link to={`/products/${subCategory}`}>{subCategory}</Link>
                  </li>
                ))}
              </ul>
            ) : (
              <Link to={`/products/${category}`}>{category}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPage;
