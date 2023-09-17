/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'BoShop';
const collection = 'Products';

// Create a new database.
use(database);

// Create a new collection.
db.Products.insert([
  {id:1,name:"Pham Duc Quy",age:21},
  {id:2,name:"Pham Duc Quy",age:21},
  {id:3,name:"Pham Duc Quy",age:21},
  {id:4,name:"Pham Duc Quy",age:21}
])

db.Products.find()