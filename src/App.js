import {
BrowserRouter as Router,
Routes,
Route
} from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
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
      
    </div>
  );
}

export default App;
