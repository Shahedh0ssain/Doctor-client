

import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar/Navbar';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Footer from './Pages/Footer/Footer';



function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/"element={<Home></Home>} />
        <Route path="/"element={<About></About>} />
      </Routes>;
      <Footer></Footer>
    </div>
  );
}

export default App;
