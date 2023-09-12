import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import LanguageSelector from './languageSelector/LanguageSelector';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <LanguageSelector />
        <Routes>
          <Route path={'/'} exact element={<Home />} />
          <Route path={'/about'} element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
