import './App.css'
import { BrowserRouter } from "react-router-dom";
import Router from "./components/router/router";
import { MisdeameanourContextProvider } from './components/context/data_provider';
import React from 'react';

function App() {

  return (
    <>
       <BrowserRouter>
        <MisdeameanourContextProvider>
          <Router />
        </MisdeameanourContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
