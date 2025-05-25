import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {Home} from "./Pages/Home.jsx";
import Header from "./Components/Header.jsx";
import {Footer} from "./Components/Footer.jsx";

function App() {

  return (
    <>
      <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer/>
      </Router>
    </>
  )
}

export default App
