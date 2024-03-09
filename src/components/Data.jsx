const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

const ProductCategory = sequelize.define('product_category', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  desc: {
    type: Sequelize.TEXT,
    allowNull: true
  }
}, {
  timestamps: true,
  paranoid: true
});

const Product = sequelize.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  desc: {
    type: Sequelize.TEXT,
    allowNull: true
  }
}, {
  timestamps: true,
  paranoid: true
});

const ProductInventory = sequelize.define('product_inventory', {
  SKU: {
    type: Sequelize.STRING,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  price: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false
  }
}, {
  timestamps: true,
  paranoid: true
});

const Discount = sequelize.define('discount', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  desc: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  discount_percent: {
    type: Sequelize.DECIMAL(4, 2),
    allowNull: false
  },
  active: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
}, {
  timestamps: true,
  paranoid: true
});

Product.belongsTo(ProductCategory, { foreignKey: 'category_id' });
ProductInventory.belongsTo(Product, { foreignKey: 'product_id' });
ProductInventory.belongsTo(Discount, { foreignKey: 'discount_id' });

sequelize.sync();