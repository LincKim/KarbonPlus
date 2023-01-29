import "./App.css"
import Home from './Components/home/Home';
import {BrowserRouter, Route, Routes} from "react-router-dom"
// import About from "./Components/home/About";
import About from "./Components/home/About";
import Display from "./Components/display/Display";
import Navbar from "./Components/home/Navbar";
import Electricity from "./Components/Estimates/electricity";
import Flight from "./Components/Estimates/flight";
import Shipping from "./Components/Estimates/shipping";
import Vehicle from "./Components/Estimates/vehicle";
import Fuel from "./Components/Estimates/fuel";




function App() {
  return (

    
    <BrowserRouter>

      <Navbar/>

      <Routes>
            <Route path="/estimates" element={ <Display/>}></Route>
            <Route path="/about" element={ <About/>}></Route>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/flight" element={<Flight/>}></Route> 
            <Route path="/shipping" element={<Shipping/>}></Route> 
            <Route path="/vehicle" element={<Vehicle/>}></Route> 
            <Route path="/fuel" element={<Fuel/>}></Route> 
            <Route path="/electricity" element={<Electricity/>}></Route>  
      </Routes>


    </BrowserRouter>
        



  )
  }


export default App;
