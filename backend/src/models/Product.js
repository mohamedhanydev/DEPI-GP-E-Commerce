const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    img: {
      type: String,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
      text: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
      enum: ["T-Shirts", "Hoodies", "Accessories", "Jeans", "Footwear"],
      index: true,
    },
    price: {
      type: Number,
      required: true,
      min: 1,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "products",
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

//  sample data
//   {
//   "_id": "1",
//   "img": "...",
//   "name": "Big Air in Black",
//   "oldPriceText": "LE 2,000.00",
//   "newPriceText": "LE 1,300.00",
//   "availableSizes": [
//   { "size": "S", "quantity": 40 },
//   { "size": "M", "quantity": 40 }
//   ],
//   "newPrice": 1300,
//   "oldPrice": 2000,
//   "createdAt": "2025-11-25T06:31:08.825Z",
//   "updatedAt": "2025-11-25T06:31:08.825Z"
//   }
