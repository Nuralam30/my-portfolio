import {
BrowserRouter as Router,
Routes,
Route
} from 'react-router-dom';
import './App.css';
import './components/Responsive/Responsive.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import { useState } from 'react';
import { createContext } from 'react';

export const ToggleContext = createContext();

function App() {

  const [isNav, setIsNav] = useState(false);

  return (
    <ToggleContext.Provider value={[isNav, setIsNav]} className="App">
      <Router>
        <Routes>
          <Route path='*' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/services' element={<Services></Services>}></Route>
          <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
        </Routes>
      </Router>
      
    </ToggleContext.Provider>
  );
}

export default App;
