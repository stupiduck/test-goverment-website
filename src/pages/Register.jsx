import React, { useState, useEffect } from 'react';

function Register() {
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Trigger the annoying modal after 4 seconds of being on the page
  // The agent HAS to see this and click it before hitting submit because Playwright no longer uses force:true
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container success-container">
        <h1>✅ Application Submitted Successfully</h1>
        <p>Your Pre-Matric Registration has been recorded and sent to the Nodal Officer.</p>
        <button className="btn-retro" onClick={() => setSubmitted(false)}>Start New Application</button>
      </div>
    );
  }

  return (
    <main className="form-container">
      <div className="breadcrumb">
        <span>Home {'>>'} Scholarship Applications {'>>'} Pre-Matric Registration</span>
      </div>

      <h2 className="page-title">Student Pre-Matric Registration (Fresh)</h2>
      
      <form onSubmit={handleSubmit} className="gov-form">
        <table className="form-table">
          <tbody>
            <tr>
              <td className="label-cell"><label htmlFor="aadharUpload">Aadhar Card Upload (PDF/JPG) <span className="req">*</span></label></td>
              <td className="input-cell"><input type="file" id="aadharUpload" accept=".pdf,.jpg,.jpeg,.png" required /></td>
            </tr>
            <tr>
              <td className="label-cell"><label htmlFor="fullName">Full Name (As per Aadhar) <span className="req">*</span></label></td>
              <td className="input-cell"><input type="text" id="fullName" required placeholder="Enter actual name" /></td>
            </tr>
            <tr>
              <td className="label-cell"><label htmlFor="dob">Date of Birth <span className="req">*</span></label></td>
              <td className="input-cell"><input type="date" id="dob" required /></td>
            </tr>
            <tr>
              <td className="label-cell"><label htmlFor="gender">Gender <span className="req">*</span></label></td>
              <td className="input-cell">
                <select id="gender" required>
                  <option value="">-- Select --</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="label-cell"><label htmlFor="category">Category <span className="req">*</span></label></td>
              <td className="input-cell">
                <select id="category" required>
                  <option value="">-- Select Category --</option>
                  <option value="General">General</option>
                  <option value="OBC">OBC</option>
                  <option value="SC">SC</option>
                  <option value="ST">ST</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="label-cell"><label htmlFor="district">District of Institute <span className="req">*</span></label></td>
              <td className="input-cell">
                <select id="district" required>
                  <option value="">-- Select District --</option>
                  <option value="Agra">Agra</option>
                  <option value="Aligarh">Aligarh</option>
                  <option value="Lucknow">Lucknow</option>
                  <option value="Varanasi">Varanasi</option>
                  <option value="Kanpur">Kanpur</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="declaration">
          <input type="checkbox" id="declare" required />
          <label htmlFor="declare">I hereby declare that the information provided above is true and correct to the best of my knowledge.</label>
        </div>

        <div className="actions">
          <button type="button" className="btn-retro-alt">Reset</button>
          <button type="submit" className="btn-retro-primary" id="finalSubmitBtn">Submit Final Registration</button>
        </div>
      </form>

      {/* ANNOYING MODAL - Physically blocks the submit button until dismissed */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 className="modal-warning">⚠️ IMPORTANT NOTICE</h3>
            <p>Please ensure your Aadhar seeding is complete with your bank account before submitting this form.</p>
            <p>Failure to link Aadhar will result in rejection. Have you completed seeding?</p>
            <div className="modal-actions">
              <button 
                  className="btn-retro-danger" 
                  onClick={(e) => {
                      e.preventDefault();
                      setShowModal(false);
                      console.log("Modal dismissed!");
                  }}
                  id="dismissNoticeBtn"
              >
                  Close & Acknowledge
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Register;
