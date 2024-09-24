
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import { Products } from "./components/layout";
import { Productform } from "./pages/productForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginSignupForm } from "./pages/login";

 function App() {

   return (
  
<>
<BrowserRouter>
  <Routes>
        <Route path="/" element={<LoginSignupForm />} />
    <Route path="/layout" element={<Products />} />
    <Route path="/productForm/:id" element={<Productform />} />
    <Route path="/productForm" element={<Productform />} />

    {/* <Route path="/pages/productForm/:id" element={<Productform />} /> */}

  </Routes>
</BrowserRouter>
</>
   );
  }


 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
