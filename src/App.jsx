import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import MovieDetail from "./components/MovieDetails";

export default function App() {




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

    
    </>


  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
