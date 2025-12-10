import React, { useState } from 'react';
import { createProduct } from '../api/products';
import { useNavigate } from 'react-router-dom';
import ProductForm from '../components/ProductForm';

const AdminProductNew = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const handleCreateProduct = async (productData) => {
        try {
            await createProduct(productData);
            navigate('/admin'); // Redirect to admin dashboard after creating product
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Add New Product</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <ProductForm onSubmit={handleCreateProduct} />
        </div>
    );
};

export default AdminProductNew;
