import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Ajuda from "./routes/Ajuda/index.jsx";
import Home from "./routes/Home/index.jsx";
import SobreNos from "./routes/SobreNos/index.jsx";
import Duvidas from "./routes/Duvidas/index.jsx";
import Entrar from "./routes/Entrar/index.jsx";
import Rm from "./routes/Rm/index.jsx";
import Cadastrar from "./routes/Cadastrar/index.jsx";
import "./reset.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sobre",
        element: <SobreNos />,
      },
      {
        path: "/ajuda",
        element: <Ajuda />,
      },
      {
        path: "/duvidas",
        element: <Duvidas />,
      },
      {
        path: "/entrar",
        element: <Entrar />,
      },
      {
        path: "/rm",
        element: <Rm />,
      },
      {
        path: "/cadastrar",
        element: <Cadastrar />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
