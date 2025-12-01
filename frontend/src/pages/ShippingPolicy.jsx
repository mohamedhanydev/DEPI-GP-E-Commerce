const ShippingPolicy = () => {
  return (
    <div className="container my-5 py-3">
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold">🚚 Shipping Policy</h1>
        <p className="lead text-muted">
          Here's everything you need to know about our shipping process.
        </p>
      </header>

      <div className="row justify-content-center">
        <div className="col-lg-10">
          <p>
            Thank you for shopping with [Your E-commerce Company Name]. We are
            committed to delivering your products to you in a timely and
            efficient manner. Please review our shipping policy below.
          </p>

          <hr />

          <section className="mb-5">
            <h2 className="mb-3 fw-bold">1. Order Processing Time</h2>
            <ul>
              <li>
                All orders are processed within **1-3 business days** (excluding
                weekends and holidays) after receiving your order confirmation
                email.
              </li>
              <li>
                You will receive another notification when Your order has
                shipped, which will include tracking information.
              </li>
              <li>
                Orders placed after 12 PM EST will be processed the following
                business day.
              </li>
            </ul>
          </section>

          <hr />

          <section className="mb-5">
            <h2 className="mb-3 fw-bold">
              2. Domestic Shipping Rates and Estimates
            </h2>

            <p>
              Shipping charges for Your order will be calculated and displayed
              at checkout.
            </p>

            <div className="table-responsive">
              <table className="table table-striped table-bordered">
                <thead className="table-primary">
                  <tr>
                    <th>Shipping Method</th>
                    <th>Estimated Delivery Time</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Standard Shipping</td>
                    <td>5–8 business days</td>
                    <td>$7.99 (Free for orders over $50)</td>
                  </tr>
                  <tr>
                    <td>Expedited Shipping</td>
                    <td>2–3 business days</td>
                    <td>$19.99</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-3">
              We offer **Free Standard Shipping** for all domestic orders over
              **$50.00**.
            </p>
          </section>

          <hr />

          <section className="mb-5">
            <h2 className="mb-3 fw-bold">3. International Shipping</h2>
            <p>
              We offer international shipping to a select number of countries.
              Shipping rates and delivery times will vary significantly based on
              the destination.
            </p>
            <ul>
              <li>
                International shipping typically takes **7–21 business days**.
              </li>
              <li>
                Your order may be subject to **import duties and taxes**
                (including VAT), which are incurred once a shipment reaches your
                destination country. [Your E-commerce Company Name] is **not
                responsible** for these charges if they are applied and are your
                responsibility as the customer.
              </li>
            </ul>
          </section>

          <hr />

          <section className="mb-5">
            <h2 className="mb-3 fw-bold">
              4. How do I check the status of my order?
            </h2>
            <p>
              When Your order has shipped, you will receive an email
              notification from us which will include a tracking number You can
              use to check its status. Please allow **48 hours** for the
              tracking information to become available.
            </p>
            <p>
              If You haven't received Your order within [X] days of receiving
              Your shipping confirmation email, please contact us at{" "}
              <a href="mailto:support@example.com">support@example.com</a> with
              Your name and order number, and we will look into it for You.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
