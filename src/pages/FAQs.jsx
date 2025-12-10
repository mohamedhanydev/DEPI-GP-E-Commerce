import React from "react";

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "Our return policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately, we can’t offer you a refund or exchange. To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.",
  },
  {
    question: "How do I track my order?",
    answer:
      "Once your order has shipped, you will receive an email with a tracking number and a link to track your package.",
  },
  {
    question: "What are the shipping options?",
    answer:
      "We offer standard and express shipping options. Standard shipping usually takes 5-7 business days, while express shipping takes 2-3 business days. Shipping costs are calculated at checkout.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (VISA, Mastercard, AMEX) and PayPal payments.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship to most countries worldwide. International shipping rates and times vary depending on the destination.",
  },
];

const FAQs = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Frequently Asked Questions</h1>
      <div className="accordion" id="faqsAccordion">
        {faqs.map((faq, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded="false"
                aria-controls={`collapse${index}`}
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${index}`}
              data-bs-parent="#faqsAccordion"
            >
              <div className="accordion-body">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
