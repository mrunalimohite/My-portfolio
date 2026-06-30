import './Footer.css';
import { FaArrowCircleUp } from "react-icons/fa";
import resume from "../assets/MrunaliMohiteResume .pdf"
function Footer() {
  return (
        <footer className="footer">
            <p>© {new Date().getFullYear()}{" "}Mrunali Mohite </p>
            <a  href={resume} target="_blank" rel="noopener noreferrer"> Download Resume </a>
            <a href="#home" className="back-to-top" aria-label="Back to top"><FaArrowCircleUp /></a>
        </footer>
    );
}

export default Footer;