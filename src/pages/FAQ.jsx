import React from 'react';

function FAQ() {
  const faqs = [
    { q: "Who can apply for scholarships?", a: "Students belonging to minority communities (Muslims, Sikhs, Christians, Buddhists, Jain and Parsi) are eligible." },
    { q: "Is Aadhar number mandatory?", a: "Yes, Aadhar number is mandatory for students to apply for scholarship." },
    { q: "What is the last date to apply?", a: "Please check the 'Latest News' section for scheme-specific deadlines." }
  ];

  return (
    <main className="form-container">
      <div className="breadcrumb">
        <span>Home {'>>'} FAQ</span>
      </div>
      <h2 className="page-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, i) => (
          <div key={i} className="faq-item">
            <p><strong>Q: {faq.q}</strong></p>
            <p>A: {faq.a}</p>
            <hr />
          </div>
        ))}
      </div>
    </main>
  );
}

export default FAQ;
