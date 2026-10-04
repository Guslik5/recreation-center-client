import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop.jsx';
import Header from "./Components/Header.jsx";
import { Footer } from "./Components/Footer.jsx";
import { Home } from "./Pages/Home.jsx";
import { HouseDetail } from "./Pages/HouseDetail.jsx";
import { PrivacyPolicy } from "./Pages/PrivacyPolicy.jsx";
import { BookingModal } from "./Components/BookingModal.jsx";
import { ReviewModal } from "./Components/ReviewModal.jsx";

function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingHouseSlug, setBookingHouseSlug] = useState(null);
  const [bookingService, setBookingService] = useState(null);

  const [reviewOpen, setReviewOpen] = useState(false);

  const handleOpenBooking = (houseSlug = null, serviceName = null) => {
    setBookingHouseSlug(houseSlug);
    setBookingService(serviceName);
    setBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingOpen(false);
  };

  const handleOpenReview = () => {
    setReviewOpen(true);
  };

  const handleCloseReview = () => {
    setReviewOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="d-flex flex-column min-vh-100">
        <Header onOpenBooking={() => handleOpenBooking()} />
        <main className="flex-grow-1">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  onOpenBooking={handleOpenBooking}
                  onOpenReviewModal={handleOpenReview}
                />
              }
            />
            <Route
              path="/houses/:houseSlug"
              element={<HouseDetail onOpenBooking={handleOpenBooking} />}
            />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>

      {/* Глобальные модальные окна */}
      <BookingModal
        show={bookingOpen}
        onHide={handleCloseBooking}
        initialHouseSlug={bookingHouseSlug}
        initialService={bookingService}
      />

      <ReviewModal
        show={reviewOpen}
        onHide={handleCloseReview}
      />
    </Router>
  );
}

export default App;
