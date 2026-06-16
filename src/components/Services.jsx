import './Services.css';
import {
  FaLaptopCode,
  FaServer,
  FaMobileAlt,
  FaColumns
} from "react-icons/fa";

function Services() {
  return (
    <section className="services" id="services">
      <div className="section-label">Services</div>
      <h2 className="section-title">
        What I <span>Offer</span>
      </h2>

      <div className="services-grid">

        <div className="service-card">
          <FaLaptopCode className="service-icon" />
          <h3>Frontend Development</h3>
          <p>
            Crafting responsive and engaging
            user interfaces.
          </p>
        </div>

        <div className="service-card">
          <FaServer className="service-icon"/>
          <h3>Backend Integration</h3>
          <p>
            PHP, MySQL, APIs and CRUD operations.
          </p>
        </div>
        <div className="service-card">
          <FaMobileAlt className="service-icon" />
          <h3>Responsive Design</h3>
          <p>
            Ensuring pixel-perfect, cross-browser compatible layouts that work flawlessly on all screen sizes.
          </p>
        </div>
        <div className="service-card">
          <FaColumns className="service-icon" />
          <h3>Landing Pages</h3>
          <p>
            Building high-converting landing pages with lead capture, WhatsApp integration, and Google Sheets automation.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Services;