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

export default router;