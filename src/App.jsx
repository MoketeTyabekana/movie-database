import "./App.css";
import React, { useState } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import MovieDetails from "./components/MovieDetails";

export default function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  return (
    <>
    <div>
    <BrowserRouter>
   <Routes>
     <Route path="/" element={<NavBar />}>
       <Route index element={<Home />} />
       <Route path="about" element={<About />}/>
     </Route>
   </Routes>
 </BrowserRouter>
    </div>
    <MovieDetails />

    </>


  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
