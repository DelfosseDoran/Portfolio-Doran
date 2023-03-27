import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Home from './routes/Home';
import './assets/tailwind.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Projects from './routes/Projects';
import Routs from './routes/Routs';

const router = createBrowserRouter([
  {
    path: '',
    element: <Routs />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="min-h-screen bg-lemon-chiffon font-sans">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
