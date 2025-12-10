import React, { useState, useEffect } from 'react';
import { getProduct, updateProduct } from '../api/products';
import { useNavigate, useParams } from 'react-router-dom';
import ProductForm from '../components/ProductForm';

const AdminProductEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [initialData, setInitialData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await getProduct(id);
                setInitialData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    const handleUpdateProduct = async (productData) => {
        try {
            await updateProduct(id, productData);
            navigate('/admin'); // Redirect to admin dashboard after updating product
        } catch (err) {
            setError(err.message);
        }
    };

    if (loading) {
        return <div className="container mt-5 text-center">Loading product data...</div>;
    }

    if (error) {
        return <div className="container mt-5 text-danger text-center">Error: {error}</div>;
    }

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Edit Product</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            {initialData && (
                <ProductForm onSubmit={handleUpdateProduct} initialData={initialData} isEdit={true} />
            )}
        </div>
    );
};

export default AdminProductEdit;
