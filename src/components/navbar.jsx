import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#333", color: "white" }}>
      <ul style={{ justifyContent: "center",alignContent:"center",listStyle: "none", display: "flex", gap: "20%" }}>
        <li><Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link></li>
        <li><Link to="/art" style={{ color: "white", textDecoration: "none" }}>Art</Link></li>
        <li><Link to="/about" style={{ color: "white", textDecoration: "none" }}>About Me</Link></li>
        <li><Link to="/mail" style={{ color: "white", textDecoration: "none" }}>Mail</Link></li>
      </ul>
    </nav>
  );
}
