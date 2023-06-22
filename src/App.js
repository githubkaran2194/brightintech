import { BrowserRouter , Routes, Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Footer from './component/Footer';
import Home from './Pages/Home';
import Nav from './component/Nav';
import Services from './Pages/Services';
import ServiceDetail from './Pages/ServiceDetail';
import WebDevelopment from './Pages/WebDevelopment';
import AppDevelopment from './Pages/AppDevelopment';

function App() {
  return (
    <>

      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route  path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />}>    </Route>

          <Route path="webdevelopment" element={<WebDevelopment/>} />
          <Route path="Appdevelopment" element={<AppDevelopment />} />      
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer/>
      </BrowserRouter>

    </>  
  );
}

export default App;
