const express = require('express');
const cors = require('cors');
const { resolve } = require('path');
const app = express();
const port = 3000;
// app.use(express.static('static'));
app.use(cors());
let products = [
  {
    id: 1,
    name: 'Xiaomi iPhone 12',
    brand: 'Xiaomi',
    price: 60000,
    ram: 6,
    rom: 256,
    rating: 4.5,
    os: 'Android',
    camera: 108,
  },
  {
    id: 2,
    name: 'Oppo Mi 10',
    brand: 'Xiaomi',
    price: 30000,
    ram: 6,
    rom: 512,
    rating: 4,
    os: 'iOS',
    camera: 64,
  },
  {
    id: 3,
    name: 'Samsung Mi 10',
    brand: 'Oppo',
    price: 20000,
    ram: 4,
    rom: 256,
    rating: 4,
    os: 'Android',
    camera: 24,
  },
  {
    id: 4,
    name: 'Apple Find X2',
    brand: 'Samsung',
    price: 60000,
    ram: 8,
    rom: 512,
    rating: 4.5,
    os: 'iOS',
    camera: 48,
  },
  {
    id: 5,
    name: 'Oppo Mi 11',
    brand: 'Xiaomi',
    price: 30000,
    ram: 12,
    rom: 128,
    rating: 4,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 6,
    name: 'OnePlus Find X3',
    brand: 'Apple',
    price: 30000,
    ram: 12,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 64,
  },
  {
    id: 7,
    name: 'Apple Pixel 5',
    brand: 'Apple',
    price: 70000,
    ram: 4,
    rom: 512,
    rating: 4.5,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 8,
    name: 'Google Mi 10',
    brand: 'Oppo',
    price: 30000,
    ram: 8,
    rom: 64,
    rating: 5,
    os: 'iOS',
    camera: 108,
  },
  {
    id: 9,
    name: 'Oppo Mi 11',
    brand: 'Samsung',
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 24,
  },
  {
    id: 10,
    name: 'Xiaomi Mi 10',
    brand: 'Oppo',
    price: 60000,
    ram: 16,
    rom: 512,
    rating: 4.5,
    os: 'Android',
    camera: 12,
  },
  {
    id: 11,
    name: 'OnePlus Pixel 5',
    brand: 'Apple',
    price: 60000,
    ram: 12,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 12,
  },
  {
    id: 12,
    name: 'Xiaomi OnePlus 8',
    brand: 'Xiaomi',
    price: 70000,
    ram: 8,
    rom: 64,
    rating: 4.5,
    os: 'Android',
    camera: 48,
  },
  {
    id: 13,
    name: 'Xiaomi Pixel 6',
    brand: 'Oppo',
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 108,
  },
  {
    id: 14,
    name: 'Samsung Find X2',
    brand: 'Oppo',
    price: 40000,
    ram: 12,
    rom: 512,
    rating: 4.7,
    os: 'Android',
    camera: 48,
  },
  {
    id: 15,
    name: 'Google OnePlus 8',
    brand: 'Apple',
    price: 20000,
    ram: 16,
    rom: 64,
    rating: 5,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 16,
    name: 'OnePlus iPhone 12',
    brand: 'OnePlus',
    price: 20000,
    ram: 6,
    rom: 128,
    rating: 4.5,
    os: 'iOS',
    camera: 64,
  },
  {
    id: 17,
    name: 'Google Mi 11',
    brand: 'Oppo',
    price: 70000,
    ram: 6,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 64,
  },
  {
    id: 18,
    name: 'Google OnePlus 9',
    brand: 'Apple',
    price: 20000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 64,
  },
  {
    id: 19,
    name: 'Oppo Galaxy S22',
    brand: 'Samsung',
    price: 20000,
    ram: 16,
    rom: 256,
    rating: 4.7,
    os: 'Android',
    camera: 12,
  },
  {
    id: 20,
    name: 'Apple Pixel 5',
    brand: 'Oppo',
    price: 40000,
    ram: 8,
    rom: 128,
    rating: 4.7,
    os: 'Android',
    camera: 108,
  },
];

// Endpoint 1
function sortProductsHighToLow(product1, product2) {
  return product2.rating - product1.rating;
}
app.get('/products/sort/popularity', (req, res) => {
  let sortedProducts = products.slice();
  sortedProducts.sort(sortProductsHighToLow);
  res.json({products: sortedProducts});
});

// Endpoint 2
function sortProductsPriceHighToLow(product1, product2) {
  return product2.price - product1.price;
}
app.get('/products/sort/price-high-to-low', (req, res) => {
  let sortedProducts = products.slice();
  sortedProducts.sort(sortProductsPriceHighToLow);
  res.json({products: sortedProducts});
});

// Endpoint 3
function sortProductsPriceLowToHigh(product1, product2) {
  return product1.price - product2.price;
}
app.get('/products/sort/price-low-to-high', (req, res) => {
  let sortedProducts = products.slice();
  sortedProducts.sort(sortProductsPriceLowToHigh);
  res.json({products: sortedProducts});
});

// Endpoint 4
function filterByRam(product, filterRam) {
  return product.ram === filterRam;
}
app.get('/products/filter/ram', (req, res) => {
  let filterRam = parseInt(req.query.ram);
  let result = products.filter((product) => filterByRam(product, filterRam));
  res.json({products: result});
});

// Endpoint 5
function filterByRom(product, filterRom) {
  return product.rom === filterRom;
}
app.get('/products/filter/rom', (req, res) => {
  let filterRom = parseInt(req.query.rom);
  let result = products.filter((product) => filterByRom(product, filterRom));
  res.json({products: result});
});

// Endpoint 6
function filterByBrand(product, filterBrand) {
  return product.brand.toLowerCase() === filterBrand.toLowerCase();
}
app.get('/products/filter/brand', (req, res) => {
  let filterBrand = req.query.brand;
  let result = products.filter((product) =>
    filterByBrand(product, filterBrand)
  );
  res.json({products: result});
});

// Endpoint 7
function filterByOs(product, filterOs) {
  return product.os.toLowerCase() === filterOs.toLowerCase();
}
app.get('/products/filter/os', (req, res) => {
  let filterOs = req.query.os;
  let result = products.filter((product) => filterByOs(product, filterOs));
  res.json({products: result});
});

// Endpoint 8
function filterByPrice(product, filterPrice) {
  return product.price <= filterPrice;
}
app.get('/products/filter/price', (req, res) => {
  let filterPrice = parseFloat(req.query.price);
  let result = products.filter((product) =>
    filterByPrice(product, filterPrice)
  );
  res.json({products: result});
});

// Endpoint 9
app.get('/products', (req, res) => {
  res.json({products: products});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
