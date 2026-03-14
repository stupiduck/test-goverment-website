import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Home() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show modal only if it hasn't been shown in this session
    const hasSeenModal = sessionStorage.getItem('hasSeenModal');
    if (!hasSeenModal) {
      setShowModal(true);
      sessionStorage.setItem('hasSeenModal', 'true');
    }
  }, []);

  const banners = [
    'https://scholarships.gov.in/public/assets2425/images/banner/banner3.png',
    'https://scholarships.gov.in/public/assets2425/images/banner/Banner4.png',
    'https://scholarships.gov.in/public/assets2425/images/banner/banner5.png'
  ];

  return (
    <main className="home-container">
      <div className="banner-section">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {banners.map((url, idx) => (
            <SwiperSlide key={idx}>
              <img src={url} alt={`Banner ${idx + 1}`} className="carousel-img" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="home-content-layout">
        <div className="left-sidebar">
          <h3>Quick Links</h3>
          <ul className="quick-links">
            <li><a href="#">Guidelines for AICTE Schemes</a></li>
            <li><a href="#">UGC Schemes Support</a></li>
            <li><a href="#">State Level Nodes</a></li>
            <li><a href="#">Helpdesk Numbers</a></li>
            <li><a href="#">Track Scholarship Status</a></li>
            <li><a href="#">FAQ for Students</a></li>
            <li><a href="#">Search Scheme Details</a></li>
          </ul>
          
          <div className="login-box">
            <h4>Applicant Login</h4>
            <input type="text" placeholder="Application ID" />
            <input type="password" placeholder="Password" />
            <button className="btn-retro">Login</button>
          </div>
        </div>

        <div className="center-content">
          <h2>About National Scholarship Portal</h2>
          <p className="intro-text">
            National Scholarship Portal is one-stop solution through which various services starting from student application, application receipt, processing, sanction and disbursal of various scholarships to Students are enabled.
          </p>

          <div className="schemes-section">
            <div className="scheme-card central">
              <h3>Central Schemes</h3>
              <p>Open for all eligible students across India based on category.</p>
              <button className="btn-retro-alt">View Schemes</button>
            </div>
            <div className="scheme-card ugc">
              <h3>UGC / AICTE Schemes</h3>
              <p>For technical and higher education students.</p>
              <button className="btn-retro-alt">View Schemes</button>
            </div>
            <div className="scheme-card state">
              <h3>State Schemes</h3>
              <p>Specific schemes for domiciles of respective States.</p>
              <Link to="/register" className="btn-apply-now blink-soft">
                » Applying for Pre-Matric Scholarship (Fresh) 2026-27 «
              </Link>
            </div>
          </div>

          <div className="announcements">
            <h3>📌 Important Circulars</h3>
            <ul>
              <li>[14-Mar-2026] Extension of date for defective applications verify.</li>
              <li>[01-Feb-2026] Biometric authentication is COMPULSORY for all renewals.</li>
              <li>[10-Jan-2026] State nodal officers contact list updated.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* INITIAL LOAD MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 className="modal-warning">⚠️ ATTENTION APPLICANTS</h3>
            <p>Welcome to the National Scholarship Portal.</p>
            <p>Please ensure you have your Aadhar card and bank details ready before starting any registration process.</p>
            <div className="modal-actions">
              <button 
                  className="btn-retro-danger" 
                  onClick={(e) => {
                      e.preventDefault();
                      setShowModal(false);
                      console.log("Home Modal dismissed!");
                  }}
                  id="dismissHomeModalBtn"
              >
                  Close & Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Home;
