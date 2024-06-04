import React from "react";
import Novbar from "./components/Novbar";
import Info from "./components/Info";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import MainLayot from "./layout/MainLayot";
import About from "./pages/About";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Contact from "./pages/Contact";
import Collections from "./pages/Collections";

function App() {
  let routers = createBrowserRouter([
    {
      path: "/",
      element: <MainLayot />,
      children: [
        {
          index: true,
          element: <Info />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/men",
          element: <Men />,
        },
        {
          path: "/women",
          element: <Women />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/collections",
          element: <Collections />,
        },
      ],
    },
  ]);
  // return (
  //   <>
  //     {/* <Novbar />
  //     <hr />
  //     <Info /> */}
  //   </>
  // );
  return <RouterProvider router={routers} />;
}

export default App;
