const db = require('./config/db');

const createCategoriesTable = `
CREATE TABLE IF NOT EXISTS categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  category_name VARCHAR(255) NOT NULL,
  slug VARCHAR(255),
  parent_category VARCHAR(255),
  description TEXT,
  seo_title VARCHAR(255),
  seo_description TEXT,
  status VARCHAR(50) DEFAULT 'Active',
  breadcrumb VARCHAR(255),
  featured BOOLEAN DEFAULT false,
  sitemap BOOLEAN DEFAULT true,
  global_search BOOLEAN DEFAULT true,
  image VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;const createProductsTable = `
CREATE TABLE IF NOT EXISTS products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_name VARCHAR(255) NOT NULL,
  description TEXT,
  sku VARCHAR(100),
  brand VARCHAR(255),
  category VARCHAR(255),
  sub_category VARCHAR(255),
  base_price DECIMAL(10, 2),
  discount_price DECIMAL(10, 2),
  stock_quantity INT DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  is_featured BOOLEAN DEFAULT false,
  weight DECIMAL(10, 2),
  length DECIMAL(10, 2),
  width DECIMAL(10, 2),
  height DECIMAL(10, 2),
  base_color VARCHAR(100),
  meta_title VARCHAR(255),
  meta_description TEXT,
  image VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

db.query(createCategoriesTable, (err, results) => {
  if (err) {
    console.error('Error creating categories table:', err);
  } else {
    console.log('Categories table ready!');
  }
  
  db.query(createProductsTable, (err, results) => {
    if (err) {
      console.error('Error creating products table:', err);
    } else {
      console.log('Products table ready!');
    }
    process.exit();
  });
});
