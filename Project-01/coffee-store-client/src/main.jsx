import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import AddCoffee from './Components/AddCoffee/AddCoffee';
import UpdateCoffee from './Components/UpdateCoffee/UpdateCoffee';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: '/add',
    element: <AddCoffee/>
  },
  {
    path: 'update',
    element: <UpdateCoffee/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
