import React from 'react';
import ReactDOM from 'react-dom/client';

import App from "./components/A_Home_page/App";
import AboutPage from "./components/B_AboutUs_page/AboutPage";
import CoursePage from "./components/C_Course_page/CoursePage";
import WhyUsPage from "./components/D_whyUs_page/WhyUsPage";
import ReviewPage from "./components/E_Review_page/ReviewPage";
import ContactPage from "./components/F_contactUs_page/ContactPage";

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    // Home Page
    path: '/',
    element: (
      <App />
    ),
  },
  {
    // About Us Page
    path: '/about',
    element: (
      <AboutPage />
    ),
  },
  {
    // Course Page
    path: '/courses',
    element: (
      <CoursePage />
    ),
  },
  {
    // Why Us Page
    path: '/whyus',
    element: (
      <WhyUsPage />
    ),
  },
  {
    // Reviews Page
    path: '/reviews',
    element: (
      <ReviewPage />
    ),
  },
  {
    // Contact Us Page
    path: '/contact',
    element: (
      <ContactPage />
    ),
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
