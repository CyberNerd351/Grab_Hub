import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from "react-icons/fa";
import "./faqs.css"; // Custom styles

const faqsData = [
  {
    question: "What is Grab Hub?",
    answer:
      "Grab Hub is an online marketplace that connects users with high-quality food products, allowing easy search, purchase, and delivery with secure payment options including M-Pesa.",
  },
  {
    question: "How do I place an order?",
    answer:
      "To place an order, browse or search for a product, add it to your cart, then proceed to checkout. You can make a payment securely via M-Pesa.",
  },
  {
    question: "How do I add a product as an admin?",
    answer:
      "Click on 'Add Products' in the navigation bar. You’ll be prompted to enter the admin password to gain access to the upload form.",
  },
  {
    question: "Is my payment information secure?",
    answer:
      "Yes. We use secure channels and M-Pesa integration to ensure your transactions are safe and encrypted.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can contact support by navigating to the Help section and clicking on 'Contact Support' or chatting with our assistant for real-time help.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="faq-container container py-5">
      <h2 className="text-center mb-5 text-primary">
        <FaQuestionCircle className="me-2 text-primary" />
        Frequently Asked Questions
      </h2>

      <div className="accordion">
        {faqsData.map((faq, index) => (
          <div key={index} className="faq-item mb-3 shadow-sm rounded bg-light">
            <div
              className="faq-question p-3 d-flex justify-content-between align-items-center"
              onClick={() => toggleFAQ(index)}
              style={{ cursor: "pointer" }}
            >
              <h5 className="mb-0 text-dark">{faq.question}</h5>
              {openIndex === index ? (
                <FaChevronUp className="text-primary" />
              ) : (
                <FaChevronDown className="text-secondary" />
              )}
            </div>
            {openIndex === index && (
              <div className="faq-answer px-3 pb-3 text-muted">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
