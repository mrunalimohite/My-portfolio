import './Skills.css';
import { IoIosCode } from "react-icons/io";
import { AiOutlineDatabase } from "react-icons/ai";
import { FiTool } from "react-icons/fi";
import { VscLightbulb } from "react-icons/vsc";
function Skills() {
  return (
    <section className="skills" id="skills">
        <div className="section-label">Skills</div>
        <h2 className="section-title"> Technical <span>Skills</span></h2>
        <div className="skills-categories">
            <div className="skill-category">
                <h4><IoIosCode />Frontend</h4>
                <div className="skill-chips">
                    <span>HTML5</span>
                    <span>CSS3</span>
                    <span>JavaScript</span>
                    <span>Bootstrap</span>
                    <span>JQuery</span>
                    <span>React</span>
                    <span>Responsive Design</span>
                </div>
            </div>
            <div className="skill-category">
                <h4><AiOutlineDatabase /> Backend & DB </h4>
                <div className="skill-chips">
                    <span>PHP</span>
                    <span>MYSQL</span>
                    <span>JSON</span>
                    <span>CRUD Operations</span>
                </div>
            </div>
            <div className="skill-category">
                <h4><FiTool /> Tools</h4>
                <div className="skill-chips">
                    <span>Git</span>
                    <span>GitHub</span>
                    <span>Adobe Photoshop</span>
                    <span>Adobe Illustrator</span>
                    <span>ChatGPT</span>
                    <span>Claude AI</span>
                </div>
            </div>
            <div className="skill-category">
                <h4><VscLightbulb />Other</h4>
                <div className="skill-chips">
                    <span>DOM Manipulation</span>
                    <span>Local Storage</span>
                    <span>Cross-Browser</span>
                    <span>Debugging</span>
                    <span>Google Sheets API</span>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Skills;