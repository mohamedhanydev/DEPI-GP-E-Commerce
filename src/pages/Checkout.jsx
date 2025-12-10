import { useState } from "react";
import "../App.css";
import { useCart } from "../context/CartContext";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export default function Checkout() {
  const { cartItems, currency, rates } = useCart();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    notes: "",
    shipping: "30",
    payment: "",
  });

  const [errors, setErrors] = useState({});

  if (!rates) {
    return (
      <div className="container my-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-2">Loading checkout...</p>
      </div>
    );
  }

  const formatPrice = (price) => {
    const convertedPrice = price * (rates[currency] || 1);
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
    }).format(convertedPrice);
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const total = subtotal + Number(formData.shipping);

  // Handle input change
  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Validation function
  const validate = () => {
    let newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "Please enter your first name.";
    if (!formData.lastName.trim())
      newErrors.lastName = "Please enter your last name.";
    if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Enter a valid email.";
    if (!/^[0-9]{10,14}$/.test(formData.phone))
      newErrors.phone = "Enter a valid phone number.";
    if (!formData.address.trim()) newErrors.address = "Address is required.";
    if (!formData.city.trim()) newErrors.city = "City is required.";
    if (!/^[0-9]{4,6}$/.test(formData.zip))
      newErrors.zip = "Enter a valid ZIP.";
    if (!formData.payment)
      newErrors.payment = "Please select a payment method.";

    return newErrors;
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      if (formData.payment === "stripe") {
        try {
          const stripe = await stripePromise;
          const token = localStorage.getItem("token");
          const response = await fetch(
            `${
              import.meta.env.VITE_API_URL
            }/api/stripe/create-checkout-session`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({
                cartItems: cartItems,
                customer: {
                  email: formData.email,
                },
              }),
            }
          );

          const session = await response.json();

          if (session.url) {
            window.location.href = session.url;
          } else {
            setErrors({
              ...errors,
              payment: "Failed to create checkout session.",
            });
          }
        } catch (error) {
          console.error("Error during stripe checkout:", error);
          setErrors({
            ...errors,
            payment: "An error occurred during checkout.",
          });
        }
      } else {
        alert("Form is valid — ready to send to backend!");
      }
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-3">Checkout</h2>
      <p className="text-center">
        <a href="#">Home</a> / Checkout
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <div className="row mt-5">
          {/* Billing Section */}
          <div className="col-md-7">
            <div className="checkout-box">
              <h4 className="mb-4">Billing Details</h4>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label>First Name *</label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.firstName
                        ? "is-invalid"
                        : formData.firstName
                        ? "is-valid"
                        : ""
                    }`}
                    value={formData.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                  />
                  <div className="invalid-feedback">{errors.firstName}</div>
                </div>

                <div className="col-md-6 mb-3">
                  <label>Last Name *</label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.lastName
                        ? "is-invalid"
                        : formData.lastName
                        ? "is-valid"
                        : ""
                    }`}
                    value={formData.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                  />
                  <div className="invalid-feedback">{errors.lastName}</div>
                </div>
              </div>

              <div className="mb-3">
                <label>Company Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                />
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    className={`form-control ${
                      errors.email
                        ? "is-invalid"
                        : formData.email
                        ? "is-valid"
                        : ""
                    }`}
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                  />
                  <div className="invalid-feedback">{errors.email}</div>
                </div>

                <div className="col-md-6 mb-3">
                  <label>Phone Number *</label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.phone
                        ? "is-invalid"
                        : formData.phone
                        ? "is-valid"
                        : ""
                    }`}
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                  />
                  <div className="invalid-feedback">{errors.phone}</div>
                </div>
              </div>

              <div className="mb-3">
                <label>Address *</label>
                <input
                  type="text"
                  className={`form-control ${
                    errors.address
                      ? "is-invalid"
                      : formData.address
                      ? "is-valid"
                      : ""
                  }`}
                  value={formData.address}
                  onChange={(e) => handleChange("address", e.target.value)}
                />
                <div className="invalid-feedback">{errors.address}</div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label>Town/City *</label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.city
                        ? "is-invalid"
                        : formData.city
                        ? "is-valid"
                        : ""
                    }`}
                    value={formData.city}
                    onChange={(e) => handleChange("city", e.target.value)}
                  />
                  <div className="invalid-feedback">{errors.city}</div>
                </div>

                <div className="col-md-6 mb-3">
                  <label>Post Code/Zip Code *</label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.zip ? "is-invalid" : formData.zip ? "is-valid" : ""
                    }`}
                    value={formData.zip}
                    onChange={(e) => handleChange("zip", e.target.value)}
                  />
                  <div className="invalid-feedback">{errors.zip}</div>
                </div>
              </div>

              <div className="mb-3">
                <label>Order Notes</label>
                <textarea
                  className="form-control"
                  value={formData.notes}
                  onChange={(e) => handleChange("notes", e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>

          {/* Order Section */}
          <div className="col-md-5">
            <div className="order-box">
              <h4 className="order-title">Your Order</h4>

              <div className="d-flex justify-content-between border-bottom pb-2 mb-2">
                <strong>PRODUCT</strong>
                <strong>TOTAL</strong>
              </div>

              {cartItems.map((item) => (
                <div
                  key={item?._id || item.product._id}
                  className="d-flex justify-content-between mb-2"
                >
                  <span>
                    {item?.name || item.product.name} ×{" "}
                    {item?.quantity || item.product.quantity}
                  </span>
                  <span>
                    {formatPrice(
                      (item?.price || item.product.price) *
                        (item?.quantity || item.product.quantity)
                    )}
                  </span>
                </div>
              ))}

              <div className="d-flex justify-content-between mb-2">
                <strong>SUBTOTAL</strong>
                <span>{formatPrice(subtotal)}</span>
              </div>

              {/* Shipping */}
              <div className="mt-3">
                <strong>SHIPPING</strong> <br />
                <label>
                  <input
                    type="radio"
                    name="shipping"
                    value="30"
                    checked={formData.shipping === "30"}
                    onChange={(e) => handleChange("shipping", e.target.value)}
                  />{" "}
                  FLAT RATE: {formatPrice(30)}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="shipping"
                    value="0"
                    checked={formData.shipping === "0"}
                    onChange={(e) => handleChange("shipping", e.target.value)}
                  />{" "}
                  FREE SHIPPING
                </label>
              </div>

              <div className="d-flex justify-content-between mt-3 border-top pt-3">
                <strong>TOTAL</strong>
                <strong>{formatPrice(total)}</strong>
              </div>

              <hr />

              {/* Payment */}
              <div>
                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="bank"
                    onChange={(e) => handleChange("payment", e.target.value)}
                  />{" "}
                  Direct Bank Transfer
                </label>
                <br />

                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="cheque"
                    onChange={(e) => handleChange("payment", e.target.value)}
                  />{" "}
                  Cheque Payment
                </label>
                <br />

                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    onChange={(e) => handleChange("payment", e.target.value)}
                  />{" "}
                  Cash on Delivery
                </label>
                <br />

                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="paypal"
                    onChange={(e) => handleChange("payment", e.target.value)}
                  />{" "}
                  Paypal
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="stripe"
                    onChange={(e) => handleChange("payment", e.target.value)}
                  />{" "}
                  Credit Card (Stripe)
                </label>

                {errors.payment && (
                  <div className="text-danger mt-1">{errors.payment}</div>
                )}
              </div>

              <button className="btn btn-primary mt-3 w-100" type="submit">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
