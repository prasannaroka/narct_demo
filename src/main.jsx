import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Admin from './pages/Admin.jsx';
import SuperAdmin from './pages/SuperAdmin.jsx';
import Application from './pages/Application.jsx';
import Super from './pages/Super.jsx';
import AdminPage from './pages/AdminPage.jsx';
import Home from './pages/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "application",
    element: <Application/>,
  },
  {
    path: "admin",
    element: <Admin/>,
  },
  {
    path: "superadmin",
    element: <SuperAdmin/>,
  },
  {
    path: "super",
    element: <Super/>,
  },
  {
    path: "adminpage",
    element: <AdminPage/>,
  },
  {
    path: "home",
    element: <Home/>,
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
