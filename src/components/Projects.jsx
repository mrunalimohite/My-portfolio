import "./Projects.css";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import coffeCornerImg from "../assets/coffee-corner.png";
import internDashbord from "../assets/Intern-Dashboard.png";
import Ngo from "../assets/NGO-page.png";
import PHPcrud from "../assets/php-curd.png";
import stopWatch from "../assets/stop-watch.png";
import ticTacToe from "../assets/tic-tac-toe.png";
import toDo from "../assets/to-do-list.png"; 
import resume from "../assets/resume.png"

function Projects() {
    const projects = [
            {
            title: "Intern Dashboard",
            tag: "PHP · JavaScript · JSON",
            tech: "PHP · JS · JSON · Bootstrap",
            desc: "Responsive dashboard with login, referral tracking, rewards, and activity logs.",
            link: "https://github.com/mrunalimohite/intern-dashboard",
            img: internDashbord,
        },
        {
            title: "PHP CRUD App",
            tag: "PHP · MySQL",
            tech: "PHP · MySQL · Bootstrap",
            desc: "Interface for managing structured data with full database CRUD operations and Bootstrap styling.",
            link: "https://github.com/mrunalimohite/php-crud-app.git",
            img: PHPcrud,
        },
        {
            title: "Coffee Corner Cafe Website",
            tag: "WordPress · Elementor",
            tech: "WordPress · Elementor · Astra Theme · Contact Form 7",
            desc: "Responsive cafe website with image galleries, menu cards, contact forms, and hover effects.",
            link: "https://coffeecorner.great-site.net/wp/",
            img: coffeCornerImg,
        },
        {
            title: "NGO Website",
            tag: "HTML · CSS · JS",
            tech: "HTML · CSS · JS",
            desc: "Responsive NGO website with navigation, volunteer forms, and cross-device compatibility.",
            link: "https://github.com/mrunalimohite/NGO-Website.git",
            img: Ngo,
        },
        {
            title: "To-Do List App",
            tag: "HTML · CSS · JS",
            tech: "HTML · CSS · JS · Local Storage",
            desc: "Task manager using Local Storage and dynamic DOM updates for persistent task management.",
            link: "https://mytooo-dooo-lists.netlify.app/",
            img: toDo,
        },
        {
            title: "Stop Watch",
            tag: "HTML · CSS · JS",
            tech: "HTML · CSS · JS",
            desc: "Stopwatch application with start, stop, reset, and lap features.",
            link: "https://github.com/mrunalimohite/Stop-Watch.git",
            img: stopWatch,
        },
        {
            title: "Tic Tac Toe",
            tag: "HTML · CSS · JS",
            tech: "HTML · CSS · JS",
            desc: "Interactive Tic Tac Toe game with win detection and responsive design.",
            link: "https://github.com/mrunalimohite/Tic-Tac-Toe.git",
            img: ticTacToe,
        },
        {
            title: "Resume page",
            tag: "HTML · CSS · JS",
            tech: "HTML · CSS · JS",
            desc: "Interactive online resume built with responsive layouts.",
            link: "https://mrunali-resume.netlify.app/",
            img: resume,
        },
    ];
    return (
        <section className="projects" id="projects">
            <div className="section-label">Work</div>
            <h2 className="section-title">
                Latest <span>Projects</span>
            </h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <div className="project-image">
                            <img src={project.img} alt={project.title} />
                        </div>
                        <div className="project-meta">
                            <span className="project-tag">{project.tag}</span>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link"  >
                                <FaArrowUpRightFromSquare />
                            </a>
                        </div>
                        <h3>{project.title}</h3>
                        <p>{project.desc}</p>
                        <div className="project-tech">
                            {project.tech}
                        </div>
                    </div>
                ))}
            </div>
        </section>
        
  );
}

export default Projects;