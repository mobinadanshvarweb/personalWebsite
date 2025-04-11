import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "home", element: <Home /> },
      { path: "contact", element: <Contact /> },
      { path: "services", element: <Services /> },
      { path: "portfolio", element: <Portfolio /> },
    ],
  },
]);
export default router;
