import React from "react";
import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { TaskProviderWrapper } from './context/task.context.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>

    <BrowserRouter>
      
      <TaskProviderWrapper>
        <App />
      </TaskProviderWrapper>
      
    
    </BrowserRouter>

  // </StrictMode>,
);
