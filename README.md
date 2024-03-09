#Project Description
This project is a web application developed using React.js, a popular JavaScript library for building user interfaces. The application serves as a product management system, allowing users to view, add, update, and delete products, manage product categories, and apply discounts.

#Features
Product Management: Users can view a list of products with details such as name, description, category, SKU, quantity, price, and applicable discount.
Product Categories: Users can view, add, update, and delete product categories.
Discount Management: Users can view, add, update, and delete discounts applicable to products.
CRUD Operations: The application supports Create, Read, Update, and Delete (CRUD) operations for products, product categories, and discounts.
Data Validation: Input data is validated to ensure correctness and prevent errors. For example, when adding a new product, the category ID is validated to ensure it exists in the database.
User Interface: The application has an intuitive and user-friendly interface, with features such as table views, forms for data entry, and error messages for invalid inputs.

#Technologies Used
React.js: Frontend library for building user interfaces.
Express: Web application framework for building APIs and server-side applications.
Sequelize: Promise-based ORM (Object-Relational Mapping) for interacting with databases.
MySQL: Relational database management system used to store application data.
HTML/CSS: Markup and styling languages for structuring and designing web pages.
JavaScript (ES6+): Programming language used for client-side and server-side development.

#Future Enhancements
User Authentication: Implement user authentication and authorization for secure access to the application.
Search and Filtering: Add functionality for users to search for products and filter them based on various criteria.
Pagination: Implement pagination for large datasets to improve performance and user experience.
Responsive Design: Make the application responsive to ensure compatibility with different screen sizes and devices.
Unit Testing: Write unit tests to ensure the reliability and correctness of application features.



#Questions

1. Explain the relationship between the "Product" and "Product_Category" entities from the above diagram.
   Relationship between "Product" and "Product_Category" entities: The relationship between the "Product" and "Product_Category"
   entities is typically a one-to-many relationship, where each product belongs to a single product category, and each product
   category can have multiple products. In the provided schema, this relationship is established through a foreign key association.
   Specifically, in the "Product" table, there is a column named category_id, which serves as a foreign key referencing the primary key of
   the "Product_Category" table. This means that each product in the "Product" table is associated with a specific category defined in the "Product_Category" table.
   
2. How could you ensure that each product in the "Product" table has a valid category assigned to it?
   Ensuring each product has a valid category: To ensure that each product in the "Product" table has a valid category assigned to it,
   you can enforce referential integrity through foreign key constraints in the database schema. In the SQL script provided earlier, this is
    achieved by defining a foreign key constraint on the category_id column of the "Product" table, which references the primary key of the "Product_Category" table.
    With this constraint in place, the database will prevent the insertion of rows into the "Product" table with category_id values that do not exist in the "Product_Category" table.
    Additionally, you can implement validation checks in your application logic to verify that only valid category IDs are assigned to products before any database operations are performed.

   
3. Create schema in any Database script or any ORM (Object Relational Mapping).

 Database Schema using SQL:
sql
Copy code
CREATE TABLE Product_Category (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT
);

CREATE TABLE Product (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES Product_Category(id)
);

CREATE TABLE Product_Inventory (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    SKU VARCHAR(255) NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    discount_id INT,
    FOREIGN KEY (product_id) REFERENCES Product(id),
    FOREIGN KEY (discount_id) REFERENCES Discount(id)
);

CREATE TABLE Discount (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    discount_percent DECIMAL(4, 2) NOT NULL,
    active BOOLEAN NOT NULL
);
This SQL script defines the database schema for the "Product", "Product_Category", "Product_Inventory", and "Discount" entities, 
along with foreign key constraints to establish relationships between them. The script can be executed in a SQL database management system to create the necessary tables and relationships.
