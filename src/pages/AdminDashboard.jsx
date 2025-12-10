import React, { useState, useEffect } from 'react';
import { fetchAllProducts, deleteProduct, createProduct, updateProduct } from '../api/products'; // Will create these API calls
import { Link } from 'react-router-dom';
import '../styles/admin.css';
import AdminSidebar from '../components/AdminSidebar';

const AdminDashboard = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        try {
            setLoading(true);
            const data = await fetchAllProducts();
            setProducts(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (productId) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            try {
                await deleteProduct(productId);
                loadProducts(); // Reload products after deletion
            } catch (err) {
                setError(err.message);
            }
        }
    };

    if (loading) {
        return <div className="container mt-5 text-center">Loading products...</div>;
    }

    if (error) {
        return <div className="container mt-5 text-danger text-center">Error: {error}</div>;
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-3">
                    <AdminSidebar />
                </div>
                <div className="col-md-9">
                    <h2 className="mb-4">Admin Dashboard</h2>
                    <p>Total Products: {products.length}</p>

                    <Link to="/admin/products/new" className="btn btn-primary mb-3">Add New Product</Link>

                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => (
                                <tr key={product._id}>
                                    <td>{product._id}</td>
                                    <td>{product.name}</td>
                                    <td>${product.price.toFixed(2)}</td>
                                    <td>{product.category}</td>
                                    <td>
                                        <Link to={`/admin/products/edit/${product._id}`} className="btn btn-sm btn-info me-2">Edit</Link>
                                        <button onClick={() => handleDelete(product._id)} className="btn btn-sm btn-danger">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
