import '../App.css';
import React, { useState, useEffect } from 'react';

const ProductManagementTable = () => {
  const [products, setProducts] = useState([]);
  const [productCategories, setProductCategories] = useState([]);
  const [discounts, setDiscounts] = useState([]);

  useEffect(() => {
    const mockProducts = [
      { id: 1, name: 'Product 1', category_id: 1, product_inventory: { SKU: 'SKU001', quantity: 10, price: 20.99, discount_id: 1 } },
      { id: 2, name: 'Product 2', category_id: 2, product_inventory: { SKU: 'SKU002', quantity: 20, price: 30.99, discount_id: 2 } },
      { id: 3, name: 'Product 3', category_id: 3, product_inventory: { SKU: 'SKU003', quantity: 30, price: 20.99, discount_id: 3 } },
      { id: 4, name: 'Product 4', category_id: 4, product_inventory: { SKU: 'SKU004', quantity: 40, price: 30.99, discount_id: 4 } },
      { id: 5, name: 'Product 5', category_id: 5, product_inventory: { SKU: 'SKU005', quantity: 50, price: 20.99, discount_id: 5 } },
      { id: 6, name: 'Product 6', category_id: 6, product_inventory: { SKU: 'SKU006', quantity: 60, price: 30.99, discount_id: 6 } },
  
    ];

    const mockProductCategories = [
      { id: 1, name: 'Category 1' },
      { id: 2, name: 'Category 2' },
      { id: 3, name: 'Category 3' },
      { id: 4, name: 'Category 4' },
      { id: 5, name: 'Category 5' },
      { id: 6, name: 'Category 6' },
      
    ];

    const mockDiscounts = [
      { id: 1, name: 'Discount 1', discount_percent: 10, active: true },
      { id: 2, name: 'Discount 2', discount_percent: 20, active: true },
      { id: 3, name: 'Discount 3', discount_percent: 30, active: true },
      { id: 4, name: 'Discount 4', discount_percent: 40, active: true },
      { id: 5, name: 'Discount 5', discount_percent: 50, active: true },
      { id: 6, name: 'Discount 6', discount_percent: 60, active: true },
    ];

    setProducts(mockProducts);
    setProductCategories(mockProductCategories);
    setDiscounts(mockDiscounts);
  }, []);

  const getProductCategoryName = (categoryId) => {
    const category = productCategories.find((c) => c.id === categoryId);
    return category ? category.name : '';
  };

  const getDiscountName = (discountId) => {
    const discount = discounts.find((d) => d.id === discountId);
    return discount ? discount.name : '';
  };

  return (
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>
            Product Name
          </th>
          <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>
            Category
          </th>
          <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>
            SKU
          </th>
          <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>
            Quantity
          </th>
          <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>
            Price
          </th>
          <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>
            Discount
          </th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>
              {product.name}
            </td>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>
              {getProductCategoryName(product.category_id)}
            </td>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>
              {product.product_inventory.SKU}
            </td>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>
              {product.product_inventory.quantity}
            </td>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>
              {product.product_inventory.price}
            </td>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>
              {getDiscountName(product.product_inventory.discount_id)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductManagementTable;
