const ReturnPolicy = () => {
  return (
    <div className="container my-5 py-3">
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold">🔄 Return and Refund Policy</h1>
        <p className="lead text-muted">Your satisfaction is our priority.</p>
      </header>

      <div className="row justify-content-center">
        <div className="col-lg-10">
          <p>
            Thank you for shopping at [Your E-commerce Company Name]. If You are
            not entirely satisfied with Your purchase, We're here to help.
          </p>

          <hr />

          <section className="mb-5">
            <h2 className="mb-3 fw-bold">1. Returns</h2>
            <ul>
              <li>
                You have **30 calendar days** to return an item from the date
                You received it.
              </li>
              <li>
                To be eligible for a return, Your item must be **unused** and in
                the **same condition** that You received it.
              </li>
              <li>Your item must be in the **original packaging**.</li>
              <li>You must have the **receipt or proof of purchase**.</li>
              <li>
                **Non-returnable items:** [List any specific product categories,
                e.g., Gift cards, downloadable software products, or
                personalized items].
              </li>
            </ul>
          </section>

          <hr />

          <section className="mb-5">
            <h2 className="mb-3 fw-bold">2. Refunds</h2>

            <p>
              Once We receive Your item, We will inspect it and notify You that
              We have received Your returned item. We will immediately notify
              You on the status of Your refund after inspecting the item.
            </p>

            <ul>
              <li>
                If Your return is approved, We will initiate a refund to Your
                original method of payment.
              </li>
              <li>
                You will receive the credit within a certain amount of days,
                depending on Your card issuer's policies.
              </li>
            </ul>
          </section>

          <hr />

          <section className="mb-5">
            <h2 className="mb-3 fw-bold">3. Shipping Costs</h2>
            <p>
              You will be responsible for paying for Your own shipping costs for
              returning Your item. **Shipping costs are non-refundable.**
            </p>
            <p>
              If You receive a refund, the cost of return shipping will be
              deducted from Your refund, if applicable (e.g., if we provide a
              return label).
            </p>
          </section>

          <hr />

          <section>
            <h2 className="mb-3 fw-bold">4. Contact Us</h2>
            <p>
              If You have any questions on how to return Your item to Us,
              contact us at:
            </p>
            <ul>
              <li>Email: **returns@example.com**</li>
              <li>Phone: **(555) 987-6543**</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicy;
