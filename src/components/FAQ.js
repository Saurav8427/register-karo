// components/FAQ.js

import { useState } from 'react';
import styles from './FAQ.module.css';

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    {
      question: "How can a virtual office benefit my business in India?",
      answer:
        "A virtual office allows you to have an office space without physically owning or paying for one. It is a cost-effective solution for those looking to rent an office space to start/expand their business in a new city, running a remote business, manage stocks and supply in different states across India.",
    },
    {
      question: "How can I cancel my virtual office service if needed?",
      answer: "",
    },
    {
      question: "Can I legally register my business using a virtual office address in India?",
      answer: "",
    },
    {
      question: "How will I receive my business mail and packages with a virtual office?",
      answer: "",
    },
    {
      question: "Do virtual office services in India include call answering and forwarding?",
      answer: "",
    },
  ];

  return (
    <div className={styles.faqContainer}>
      <h1 className={styles.header}>Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div key={index} className={styles.faqItem}>
          <div className={styles.question} onClick={() => toggleFAQ(index)}>
            <span>{faq.question}</span>
            <span>{open === index ? "▲" : "▼"}</span>
          </div>
          {open === index && <div className={styles.answer}>{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
