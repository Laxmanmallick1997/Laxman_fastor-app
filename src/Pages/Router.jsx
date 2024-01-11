import React from "react";
import { Routes, Route } from "react-router-dom";


import EmailPage from "./EmailPage";
import OTPForm from "./OTPForm";
import RestaurantList from "./RestaurantList";
function Router() {
  return (
    <Routes>
      <Route path="/" element={<EmailPage />} />
      <Route path="/otp" element={<OTPForm />} />
      <Route path="/restaurant" element={<RestaurantList />} />

    </Routes>
  );
}

export default Router;