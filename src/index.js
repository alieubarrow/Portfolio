import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./Components/Home";
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import About from './Components/About';

const rout = createBrowserRouter([{
  path: "/",
  element: <Home/>,
},
{
  path: "/projects",
  element: <Projects/>,
},
{
  path: "/skills",
  element: <Skills/>,
},
{
  path: "/contact",
  element: <Contact/>,
},
{
  path: "/about",
  element: <About/>,
}]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={rout} />
  </React.StrictMode>
);


