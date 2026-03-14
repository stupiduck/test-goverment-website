import React from 'react';

function About() {
  return (
    <main className="form-container">
      <div className="breadcrumb">
        <span>Home {'>>'} About Us</span>
      </div>

      <h2 className="page-title">About National Scholarship Portal (NSP)</h2>
      
      <div className="about-content">
        <h3>Vision</h3>
        <p>To ensure timely disbursement of Scholarships to students and avoid any duplication in processing.</p>
        
        <h3>Mission</h3>
        <p>The Mission is to provide a common portal for various Scholarships schemes of Central and State Governments.</p>
        
        <h3>Objectives</h3>
        <ul>
          <li>Ensure timely disbursement of scholarships to students.</li>
          <li>Provide a common portal for various Scholarships schemes of Central and State Governments.</li>
          <li>Create a transparent database of scholars.</li>
          <li>Avoid duplication in processing.</li>
          <li>Harmonization of different Scholarships schemes & norms.</li>
          <li>Direct Benefit Transfer.</li>
        </ul>
      </div>
    </main>
  );
}

export default About;
