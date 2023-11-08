//import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import "./App.css"
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element = {<Home />} />
        <Route exact path='/About' element = {<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;