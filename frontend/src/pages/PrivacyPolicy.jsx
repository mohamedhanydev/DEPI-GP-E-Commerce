const PrivacyPolicy = () => {
  return (
    <div className="container my-5 py-3">
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold">🛡️ Privacy Policy</h1>
        <p className="lead text-muted">Last updated: November 14, 2025</p>
      </header>

      <div className="row justify-content-center">
        <div className="col-lg-10">
          <p>
            This Privacy Policy describes Our policies and procedures on the
            collection, use, and disclosure of Your information when You use the
            Service and tells You about Your privacy rights and how the law
            protects You.
          </p>
          <p>
            We use Your Personal data to provide and improve the Service. By
            using the Service, You agree to the collection and use of
            information in accordance with this Privacy Policy.
          </p>

          <hr />

          <section className="mb-5">
            <h2 className="mb-3 fw-bold">1. Interpretation and Definitions</h2>
            <p>
              The words of which the initial letter is capitalized have meanings
              defined under the following conditions. The following definitions
              shall have the same meaning regardless of whether they appear in
              singular or in plural.
            </p>

            <h5 className="mt-4">Definitions:</h5>
            <ul>
              <li>
                **Account:** means a unique account created for You to access
                our Service or parts of our Service.
              </li>
              <li>
                **Company (referred to as "the Company," "We," "Us," or
                "Our"):** refers to [Your E-commerce Company Name].
              </li>
              <li>
                **Cookies:** are small files that are placed on Your computer,
                mobile device, or any other device by a website, containing the
                details of Your browsing history on that website among its many
                uses.
              </li>
              <li>
                **Personal Data:** is any information that relates to an
                identified or identifiable individual.
              </li>
              <li>
                **Service:** refers to the Website and our e-commerce
                operations.
              </li>
              <li>**Website:** refers to [Your Website URL].</li>
            </ul>
          </section>

          <hr />

          <section className="mb-5">
            <h2 className="mb-3 fw-bold">
              2. Collecting and Using Your Personal Data
            </h2>

            <h4 className="mt-4">Types of Data Collected</h4>

            <h5>Personal Data</h5>
            <p>
              While using Our Service, We may ask You to provide Us with certain
              personally identifiable information that can be used to contact or
              identify You. Personally identifiable information may include, but
              is not limited to:
            </p>
            <ul>
              <li>Email address</li>
              <li>First and last name</li>
              <li>Phone number</li>
              <li>Address, State, Province, ZIP/Postal code, City</li>
              <li>Payment Information (processed by third-party processors)</li>
            </ul>

            <h5>Usage Data</h5>
            <p>
              Usage Data is collected automatically when using the Service. This
              data may include information such as Your Device's Internet
              Protocol address (e.g. IP address), browser type, browser version,
              the pages of our Service that You visit, the time and date of Your
              visit, the time spent on those pages, unique device identifiers,
              and other diagnostic data.
            </p>
          </section>

          <hr />

          <section className="mb-5">
            <h2 className="mb-3 fw-bold">3. Use of Your Personal Data</h2>
            <p>The Company may use Personal Data for the following purposes:</p>
            <ul>
              <li>
                **To provide and maintain our Service:** including monitoring
                the usage of our Service.
              </li>
              <li>
                **To manage Your Account:** to manage Your registration as a
                user of the Service.
              </li>
              <li>
                **For the performance of a contract:** the development,
                compliance, and undertaking of the purchase contract for the
                products You have purchased or of any other contract with Us
                through the Service.
              </li>
              <li>
                **To contact You:** by email, telephone calls, SMS, or other
                equivalent forms of electronic communication, regarding updates
                or informative communications related to the functionalities,
                products, or contracted services.
              </li>
              <li>
                **To manage Your requests:** to attend and manage Your requests
                to Us.
              </li>
            </ul>
          </section>

          <hr />

          <section className="mb-5">
            <h2 className="mb-3 fw-bold">
              4. Disclosure of Your Personal Data
            </h2>
            <p>
              We may share Your personal information in the following
              situations:
            </p>
            <ul>
              <li>
                **With Service Providers:** We may share Your personal
                information with Service Providers to monitor and analyze the
                use of our Service, to process payments, or to contact You.
              </li>
              <li>
                **For Business Transfers:** We may share or transfer Your
                personal information in connection with, or during negotiations
                of, any merger, sale of Company assets, financing, or
                acquisition of all or a portion of Our business to another
                company.
              </li>
              <li>
                **With Your Consent:** We may disclose Your personal information
                for any other purpose with Your consent.
              </li>
            </ul>
          </section>

          <hr />

          <section>
            <h2 className="mb-3 fw-bold">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, You can
              contact us:
            </p>
            <ul>
              <li>By email: **support@example.com**</li>
              <li>
                By visiting this page on our website:{" "}
                <a href="/contact-us" className="text-primary">
                  /contact
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
