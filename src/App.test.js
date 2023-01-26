/* import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
 */
import { Routes, Route } from "react-router-dom";
import { Summary } from "./Components/home/Summary";
import Navbar from './Components/navbar/Navbar';
import About from './Components/about/About';


function Nav() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/summary" element={<Summary />} />
     </Routes>
    </>    
  )
    
      
}

export default Nav;