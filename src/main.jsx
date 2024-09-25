import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './ui/Home.jsx';
import UltimateChatAI from './ui/UltimateChatAI.jsx';
import ContactUs from './ui/ContactUs.jsx';
import AboutUs from './ui/AboutUs.jsx';
import PrivacyPolicy from './ui/PrivacyPolicy.jsx';
import TermsOfServices from './ui/TermsOfServices.jsx';
import Invest from './ui/Invest.jsx';
import Profile from './ui/Profile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/chat',
        element: <UltimateChatAI />,
      },
      {
        path: '/invest',
        element: <Invest />,
      },
      {
        path: '/contact-us',
        element: <ContactUs />
      },
      {
        path: '/about-us',
        element: <AboutUs />,
      },
      {
        path: '/privacy-policy',
        element: <PrivacyPolicy />,
      },
      {
        path: '/terms-of-services',
        element: <TermsOfServices />,
      },
      {
        path: '/profile',
        element: <Profile />,
      }
    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)