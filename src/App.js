import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/checkout" element={[<Header />,<h1>yoo guys check me out</h1>]} />
          <Route path="/" element={[<Header />,<Home/>]} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
