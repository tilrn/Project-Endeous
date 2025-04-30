import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "react-photo-album/styles.css"; // if required
import NavigationBar from './Components/NavigationBar';
import Home from '../src/Pages/HomePage';
import Projects from '../src/Pages/Projects';
import Gallery from '../src/Pages/Gallery';
import Contacts from '../src/Pages/Contacts';
import MyStory from '../src/Pages/MyStory';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/mystory" element={<MyStory />} />
      </Routes>
    </Router>
  );
}

export default App;
