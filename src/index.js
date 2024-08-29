
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AddNumbers from "./pages/AddNumbers";
import AddArrayValues from "./pages/AddArrayValues";

import Layout from "./pages/Layout";
import React from 'react'

export default function App()
{

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="addnumbers" element={<AddNumbers />} />
        <Route path="addarrayvalues" element={<AddArrayValues />} />

      </Routes>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <App />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

