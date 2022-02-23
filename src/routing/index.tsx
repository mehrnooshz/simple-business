import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from 'pages';
import Business from 'pages/business';
import PageNotFound from 'pages/error';

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/business/:id" element={<Business />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
