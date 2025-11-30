const mongoose = require("mongoose");

const availableSizeSchema = new mongoose.Schema(
  {
    size: {
      type: String,
      required: true,
      enum: ["XS", "S", "M", "L", "XL", "XXL"],
    },
    quantity: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },
  },
  { _id: false }
);

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
      enum: [
        "T-Shirts",
        "Hoodies",
        "Accessories",
        "Jeans",
        "Footwear",
        "Denim",
      ],
      index: true,
    },
    newPrice: {
      type: Number,
      required: true,
      min: 0,
    },
    oldPrice: {
      type: Number,
      required: true,
      min: 0,
    },
    newPriceText: {
      type: String,
      required: true,
    },
    oldPriceText: {
      type: String,
      required: true,
    },
    availableSizes: {
      type: [availableSizeSchema],
      required: true,
      default: [],
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
