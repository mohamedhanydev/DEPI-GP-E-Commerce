import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="list-group">
      <Link
        to="/admin"
        className="list-group-item list-group-item-action"
        aria-current="true"
      >
        Dashboard
      </Link>
      <Link
        to="/admin/products"
        className="list-group-item list-group-item-action"
      >
        Products
      </Link>
      <Link
        to="/admin/users"
        className="list-group-item list-group-item-action"
      >
        Users
      </Link>
      <Link
        to="/admin/orders"
        className="list-group-item list-group-item-action"
      >
        Orders
      </Link>
    </div>
  );
};

export default AdminSidebar;
