import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Home from './routes/Home';
import './assets/tailwind.css';



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="min-h-screen bg-lemon-chiffon font-sans">
      <Header />
      <Home />
    </div>
  </React.StrictMode>
);
