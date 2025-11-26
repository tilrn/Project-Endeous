import '../Components/Navbar.css';
import { Link, useLocation } from 'react-router-dom';

function NavigationBar() {
  const location = useLocation();
  return (
    <nav className="custom-navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          <img src="/img/origiLogo.png" alt="Project Endeous" className="logo-image" />
        </Link>
        <div className="nav-links">
          <Link to="/" className={`nav-link${location.pathname === '/' ? ' active-link' : ''}`}>Home</Link>
          <Link to="/projects" className={`nav-link${location.pathname === '/projects' ? ' active-link' : ''}`}>Purpose</Link>
          <Link to="/gallery" className={`nav-link${location.pathname === '/gallery' ? ' active-link' : ''}`}>Creations</Link>
          <Link to="/contacts" className={`nav-link${location.pathname === '/contacts' ? ' active-link' : ''}`}>Contacts</Link>
          <Link to="/mystory" className={`nav-link${location.pathname === '/mystory' ? ' active-link' : ''}`}>MyStory</Link>
          <Link to="/store" className={`nav-link${location.pathname === '/store' ? ' active-link' : ''}`}>Store</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
