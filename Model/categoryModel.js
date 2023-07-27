const mongoose = require("mongoose");

const categoryModel = new mongoose.Schema({
  categoryName: String,
  items: [
    {
      name: String,
      price: Number,
      in_stock: Number,

    }
  ]
})
