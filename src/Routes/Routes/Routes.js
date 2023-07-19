import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home/Home";
import Main from "../../Layout/Main";
import Login from "../../Pages/Auth/Login/Login";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Registration from "../../Pages/Auth/Registration/Registration";
import ContactUs from "../../Pages/Home/ContactUs/ContactUs";
import Testimonials from "../../Pages/Home/Testimonial/Testimonials";
import Blogs from "../../Pages/Home/Blog/Blogs";
import Services from "../../Pages/Home/Services/Services";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/registration",
        element: <Registration />
      },
      {
        path: "/appointment",
        element: <Appointment />
      },
      {
        path: "/contact-us",
        element: <ContactUs />
      },
      {
        path: "/reviews",
        element: <Testimonials />
      },
      {
        path: "/blog",
        element: <Blogs />
      },
      {
        path: "/services",
        element: <Services />
      }
    ]
  },
]);
export default router;

