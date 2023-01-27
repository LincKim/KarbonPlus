import "./App.css"
import Home from './Components/home/Home';
import {BrowserRouter} from "react-router-dom"
// import About from "./Components/home/About";
// import About from "./Components/home/About";
// import Display from "./Components/display/Display";



function App() {
  return (

    
    <BrowserRouter>
      <Home />
      {/* <Routes>
            <Route path="/estimates" element={ <Display/>}></Route>
            <Route path="/about" element={ <About/>}></Route>
          
      </Routes> */}
    </BrowserRouter>
        



  )
  }


export default App;
