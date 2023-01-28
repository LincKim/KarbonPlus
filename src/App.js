import "./App.css"
import Home from './Components/home/Home';
import {BrowserRouter, Route, Routes} from "react-router-dom"
// import About from "./Components/home/About";
import About from "./Components/home/About";
import Display from "./Components/display/Display";
import Navbar from "./Components/home/Navbar";



function App() {
  return (

    
    <BrowserRouter>

      <Navbar/>

      <Routes>
            <Route path="/estimates" element={ <Display/>}></Route>
            <Route path="/about" element={ <About/>}></Route>
            <Route path="/" element={<Home/>}></Route> 
      </Routes>


    </BrowserRouter>
        



  )
  }


export default App;
