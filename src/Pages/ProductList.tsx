import React, { useState } from 'react'

const ProductList = () => {

    const products = [
        // Your JSON data here
        {
            "name": "Gaming Headset",
            "price": 69.99,
            "category": ["Electronics", "Gaming Accessories"],
            "quantity": 25,
            "inStock": true,
            "manageStock": true,
            "attributes": {
              "colorOptions": ["Black", "Red"],
              "sizeOptions": ["Standard"]
            },
            "description": "A gaming headset for an immersive gaming experience.",
            "slug": "gaming-headset",
            "youtubeVideoURL": "https://www.youtube.com/watch?v=video_id_17",
            "imageUrls": ["image_url17_1.jpg", "image_url17_2.jpg"]
          },
          {
            "name": "Digital Watch",
            "price": 49.99,
            "category": ["Accessories", "Watches"],
            "quantity": 30,
            "inStock": true,
            "manageStock": true,
            "attributes": {
              "colorOptions": ["Black", "Silver"],
              "sizeOptions": ["Standard"]
            },
            "description": "A digital watch with various features and style.",
            "slug": "digital-watch",
            "youtubeVideoURL": "https://www.youtube.com/watch?v=video_id_18",
            "imageUrls": ["image_url18_1.jpg", "image_url18_2.jpg"]
          },
          {
            "name": "Desktop Monitor",
            "price": 199.99,
            "category": ["Electronics", "Monitors"],
            "quantity": 20,
            "inStock": true,
            "manageStock": true,
            "attributes": {
              "colorOptions": ["Black"],
              "sizeOptions": ["24-inch", "27-inch"]
            },
            "description": "A high-resolution desktop monitor for work and entertainment.",
            "slug": "desktop-monitor",
            "youtubeVideoURL": "https://www.youtube.com/watch?v=video_id_19",
            "imageUrls": ["image_url19_1.jpg", "image_url19_2.jpg"]
          },
          {
            "name": "Digital Scale",
            "price": 39.99,
            "category": ["Home & Kitchen", "Appliances"],
            "quantity": 40,
            "inStock": true,
            "manageStock": true,
            "attributes": {
              "colorOptions": ["Black"],
              "sizeOptions": ["Standard"]
            },
            "description": "A digital scale for precise weight measurements in the kitchen.",
            "slug": "digital-scale",
            "youtubeVideoURL": "https://www.youtube.com/watch?v=video_id_20",
            "imageUrls": ["image_url20_1.jpg"]
          },
          {
            "name": "Wireless Keyboard",
            "price": 49.99,
            "category": ["Electronics", "Keyboards"],
            "quantity": 35,
            "inStock": true,
            "manageStock": true,
            "attributes": {
              "colorOptions": ["Black", "White"],
              "sizeOptions": ["Standard"]
            },
            "description": "A wireless keyboard for a clutter-free workspace.",
            "slug": "wireless-keyboard",
            "youtubeVideoURL": "https://www.youtube.com/watch?v=video_id_21",
            "imageUrls": ["image_url21_1.jpg"]
          }
      ];
    
      // Define your selected category state
      const [selectedCategory, setSelectedCategory] = useState("All"); // Initialize with "All" to show all products initially
    
      // Define a function to filter products based on the selected category
      const filteredProducts = products.filter((product) => {
        if (selectedCategory === "All") {
          return true; // Show all products if "All" is selected
        } else {
          return product.category.includes(selectedCategory);
        }
      });
    
      // Define a function to update the selected category
      const handleCategoryChange = (newCategory) => {
        setSelectedCategory(newCategory);
      };
  return (
    <div>

<h1>Product List</h1>
      <div>
        <label htmlFor="category">Select a category: </label>
        <select
          id="category"
          onChange={(e) => handleCategoryChange(e.target.value)}
          value={selectedCategory}
        >
          <option value="All">All</option>
          {/* Add options for all categories */}
        </select>
      </div>
      <div>
        {filteredProducts.map((product, index) => (
          <div key={index}>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            {/* Render other product details here */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList
