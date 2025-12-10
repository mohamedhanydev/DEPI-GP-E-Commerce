import React, { useState, useEffect } from "react";
import AdminSidebar from "../components/AdminSidebar";
import { fetchAllOrders } from "../api/orders";
import { Link } from "react-router-dom";

const AdminOrderPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    try {
      setLoading(true);
      const data = await fetchAllOrders();
      setOrders(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="container mt-5 text-center">Loading orders...</div>;
  }

  if (error) {
    return (
      <div className="container mt-5 text-danger text-center">
        Error: {error}
      </div>
    );
  }
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3">
          <AdminSidebar />
        </div>
        <div className="col-md-9">
          <h2 className="my-4">Order Management</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Total</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.userId.email}</td>
                  <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                  <td>${order.amount.toFixed(2)}</td>
                  <td>{order.status}</td>
                  <td>
                    <Link
                      to={`/admin/orders/${order._id}`}
                      className="btn btn-sm btn-info"
                    >
                      View
                    </Link>
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

export default AdminOrderPage;
