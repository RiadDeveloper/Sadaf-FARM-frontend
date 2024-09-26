import { createBrowserRouter } from "react-router-dom";
import AboutUs from "./ui/AboutUs";
import ContactUs from "./ui/ContactUs";
import Home from "./ui/Home";
import Invest from "./ui/Invest";
import PrivacyPolicy from "./ui/PrivacyPolicy";
import Profile from "./ui/Profile";
import TermsOfServices from "./ui/TermsOfServices";
import UltimateChatAI from "./ui/UltimateChatAI";
import ErrorPage from "./ui/ErrorPage";
import Login from "./ui/Login";
import SignUp from "./ui/SignUp";
import ForgetPassword from "./ui/ForgetPassword";
import App from "./App";
import Pricing from "./ui/Pricing";
import TermsService from "./ui/TermsService";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'chat',
        element: <UltimateChatAI />,
      },
      {
        path: 'invest',
        element: <Invest />,
      },
      {
        path: 'contact-us',
        element: <ContactUs />
      },
      {
        path: 'about-us',
        element: <AboutUs />,
      },
      {
        path: 'privacy-policy',
        element: <PrivacyPolicy />,
      },
      {
        path: 'terms-of-services',
        element: <TermsOfServices />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'sign-up',
        element: <SignUp />,
      },
      {
        path: 'forget-password',
        element: <ForgetPassword />,
      },
      {
        path: 'pricing',
        element: <Pricing />
      },
      {
        path: 'terms-service',
        element: <TermsService/>
      }   
    ]
  },
]);

export default router;