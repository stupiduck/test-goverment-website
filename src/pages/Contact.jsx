import React from 'react';

function Contact() {
  return (
    <main className="form-container">
      <div className="breadcrumb">
        <span>Home {'>>'} Contact Us</span>
      </div>
      <h2 className="page-title">Contact Support - Helplines</h2>
      <div className="contact-info">
        <h3>National Level Support</h3>
        <p><strong>Helpdesk Number:</strong> 0120-6619540</p>
        <p><strong>Email ID:</strong> helpdesk-nsp@gov.in</p>
        <br />
        <h3>Working Hours</h3>
        <p>Monday to Friday: 10:00 AM to 5:30 PM (except gazetted holidays)</p>
      </div>
    </main>
  );
}

export default Contact;
