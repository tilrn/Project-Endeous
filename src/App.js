import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from '../src/Pages/HomePage';
import Purpose from '../src/Pages/Purpose';
import Gallery from '../src/Pages/Gallery';
import Contacts from '../src/Pages/Contacts';
import MyStory from '../src/Pages/MyStory';
import Store from '../src/Pages/Store'; 

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Purpose />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/mystory" element={<MyStory />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
