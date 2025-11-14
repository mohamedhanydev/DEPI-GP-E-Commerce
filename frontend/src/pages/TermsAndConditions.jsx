const TermsAndConditions = () => {
  return (
    <div className="container my-5 py-3">
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold">📜 Terms and Conditions</h1>
        <p className="lead text-muted">Effective Date: November 14, 2025</p>
      </header>

      <div className="row justify-content-center">
        <div className="col-lg-10">
          <p>
            Please read these terms and conditions carefully before using Our
            Service. These Terms apply to all visitors, users, and others who
            access or use the Service.
          </p>

          <hr />

          <section className="mb-5">
            <h2 className="mb-3 fw-bold">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Service, You agree to be bound by these
              Terms and Conditions. If You disagree with any part of the terms
              then You may not access the Service. You represent that you are
              over the age of 18. The Company does not permit those under 18 to
              use the Service.
            </p>
          </section>

          <hr />

          <section className="mb-5">
            <h2 className="mb-3 fw-bold">2. Purchases and Payment</h2>

            <h5 className="mt-4">Orders</h5>
            <p>
              If You wish to purchase any product or service made available
              through the Service ("Purchase"), You may be asked to supply
              certain information relevant to Your Purchase including, without
              limitation, Your credit card number, the expiration date of Your
              credit card, Your billing address, and Your shipping information.
            </p>

            <h5 className="mt-4">Price Changes</h5>
            <p>
              The Company reserves the right to revise its prices at any time
              prior to accepting an order. All purchases are subject to product
              availability.
            </p>

            <h5 className="mt-4">Payment Methods</h5>
            <p>
              Payment can be made through various payment methods we have
              available, such as Visa, MasterCard, American Express, or online
              payment methods (PayPal, etc.).
            </p>
          </section>

          <hr />

          <section className="mb-5">
            <h2 className="mb-3 fw-bold">3. Returns and Refunds Policy</h2>
            <p>
              Please refer to our separate Returns and Refunds Policy, which is
              available on [Link to Returns Policy Page if separate], for
              detailed information regarding Your rights and procedures for
              returning products. This policy is incorporated into these Terms
              by reference.
            </p>
          </section>

          <hr />

          <section className="mb-5">
            <h2 className="mb-3 fw-bold">4. User Accounts</h2>
            <ul>
              <li>
                When You create an account with Us, You must provide information
                that is accurate, complete, and current at all times. Failure to
                do so constitutes a breach of the Terms, which may result in
                immediate termination of Your account.
              </li>
              <li>
                You are responsible for safeguarding the password that You use
                to access the Service and for any activities or actions under
                Your password.
              </li>
              <li>
                You agree not to disclose Your password to any third party.
              </li>
            </ul>
          </section>

          <hr />

          <section className="mb-5">
            <h2 className="mb-3 fw-bold">5. Intellectual Property</h2>
            <p>
              The Service and its original content (excluding content provided
              by You or other users), features, and functionality are and will
              remain the exclusive property of [Your E-commerce Company Name]
              and its licensors. The Service is protected by copyright,
              trademark, and other laws of both the [Your Country] and foreign
              countries. Our trademarks may not be used in connection with any
              product or service without the prior written consent of the
              Company.
            </p>
          </section>

          <hr />

          <section>
            <h2 className="mb-3 fw-bold">6. Governing Law</h2>
            <p>
              The laws of [Your State/Country], excluding its conflicts of law
              rules, shall govern these Terms and Your use of the Service.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
