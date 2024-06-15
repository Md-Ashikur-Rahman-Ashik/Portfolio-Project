import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import Works from "../components/Works/Works";
import Success from "../components/Success/Success";
import Failed from "../components/Failed/Failed";
import Canceled from "../components/Canceled/Canceled";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/works",
        element: <Works></Works>,
      },
      {
        path: "/success",
        element: <Success></Success>,
      },
      {
        path: "/failed",
        element: <Failed></Failed>,
      },
      {
        path: "/canceled",
        element: <Canceled></Canceled>,
      },
    ],
  },
]);

export default router;
