import './About.css';
import portfolio from '../assets/Profile-pic.jpeg';
function About() {
  return (
    <section className="about" id="about">
      <div className="section-label">About</div>
      <div className="about-grid">
        <div className="about-photo-wrap">
          <div className="about-photo-placeholder">
            <img src={portfolio} alt="Mrunali Mohite" className="profile-img"/>
          </div>
          <div className="about-stats">
            <div className="stat">
              <strong>5+</strong>
              <span>Projects</span>
            </div>
            <div className="stat">
              <strong>M.Sc.</strong>
              <span>CS Degree</span>
            </div>

            <div className="stat">
              <strong>2026</strong>
              <span>Internship</span>
            </div>
          </div>
        </div>

        <div className="about-text">
          <h2 className="section-title">
            About <span>Me</span>
          </h2>

          <h3 className="about-role">
            Frontend Developer
          </h3>

          <p>
            Self-motivated and detail-oriented Frontend
            Developer with a strong foundation in
            responsive web design.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;