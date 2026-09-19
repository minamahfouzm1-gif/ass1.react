import './App.css'
import { Home } from './pages/Home/Home';
import { About } from "./pages/About/About";
import { Content } from "./pages/Content/Content";
import "@fortawesome/fontawesome-free"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './pages/layout/layout';
import Error from './pages/Error/Error';
import Descrip from './pages/Descrip/Descrip';




let x = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "about", element: <About /> },
      { path: "content", element: <Content /> },
      { path: "descrip/:id", element: <Descrip /> },
      { index: true, element: <Home /> },
      { path: "*", element: <Error /> },
    ],
  },
]);


function App() {

  return (
    <>
     <RouterProvider router={x}></RouterProvider>
    </>
  );
}

export default App
