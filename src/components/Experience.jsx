import './Experience.css';
function Experience() {
    return (
        <section className="experience" id="experience">
            <div className="section-label">Experience</div>
            <h2 className="section-title centered">Work <span>Experience</span></h2>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                        <div className="timeline-header">
                            <h3>Web Developer Intern</h3>
                            <span className="timeline-date">Mar 2026 - May 2026</span>
                        </div>
                        <p className="timeline-company">Techkrafteries Digital</p>
                        <ul>
                            <li>Delivered 5+ responsive landing pages aligned with business requirements</li>
                            <li>Developed real estate module using PHP and MySQL</li>
                            <li>Automated form data storage using Google Sheets (Apps Script)</li>
                            <li>Integrated WhatsApp click-to-chat for lead generation</li>
                            <li>Improved cross-browser compatibility and mobile responsiveness</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;