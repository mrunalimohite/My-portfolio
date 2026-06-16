import './Footer.css';
import { FaArrowCircleUp } from "react-icons/fa";

function Footer() {
  return (
        <footer className="footer">
            <p>© {new Date().getFullYear()}{" "}Mrunali Mohite </p>
            <a href="/Mrunali-Mohite-Resume.pdf" download className="btn btn-primary" > Download Resume </a>
            <a href="#home" className="back-to-top" aria-label="Back to top"><FaArrowCircleUp /></a>
        </footer>
    );
}

export default Footer;