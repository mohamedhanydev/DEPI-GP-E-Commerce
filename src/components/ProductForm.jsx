import React, { useState, useEffect } from "react";

const ProductForm = ({ onSubmit, initialData = {}, isEdit = false }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    imageUrl: "",
    quantity: "",
  });

  useEffect(() => {
    if (isEdit && initialData) {
      setFormData({
        name: initialData.name || "",
        price: initialData.price || "",
        category: initialData.category || "",
        imageUrl: initialData.imageUrl || "",
        quantity: initialData.quantity || "",
      });
    }
  }, [isEdit, initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Product Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">
          Price
        </label>
        <input
          type="number"
          className="form-control"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
          min="0"
          step="0.01"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="quantity" className="form-label">
          quantity
        </label>
        <input
          type="number"
          className="form-control"
          id="quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
          min="0"
          step="1"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <input
          type="text"
          className="form-control"
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="imageUrl" className="form-label">
          Image URL
        </label>
        <input
          type="text"
          className="form-control"
          id="imageUrl"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          required
        />
      </div>
      {/* Add more fields as necessary */}
      <button type="submit" className="btn btn-primary">
        {isEdit ? "Update Product" : "Add Product"}
      </button>
    </form>
  );
};

export default ProductForm;
