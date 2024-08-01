import "../Style.css" 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnchor, faPowerOff, faUserGraduate, faAward } from '@fortawesome/free-solid-svg-icons'



export default function Home() {
    return (
    <>
      <div className="Home">
        <div className="image">
            <img className= "logo" src="/Images/Logo.png" alt="Logo"></img>
        </div>
        <div className="gif">
            <img className="computer" src="/Images/Laptop.jpg" alt="Computer"></img>
        </div>
        <nav className="topnav">
           <ul>
            <li><a href="home.html">Home</a></li>
            <li><a href="about.html">About Me</a></li>
            <li><a href="#projects.html">Projects</a></li>
            <li><a href="skills.html">Skills</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </nav>
        <div className="header">
            <h3>Hi, my name is Alieu Barrow</h3>
            <h2>I love buildning software applications</h2>
        </div>
        <div className="textBox">
            <p className="intro">
                Geckos are a group of usually small, usually nocturnal lizards. They are found on every continent except Antarctica.
                Some species live in houses where they hunt insects attracted by artificial light.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
            <div className="innerBox">
                <p className="footNote">
                    Geckos are a group of usually small, usually nocturnal lizards. They are found on every in continent test except Antarctica in.
                    Some species live in houses where they hunt.
                </p>
            </div>
        </div>
        <div className="hire">
            <p className="hireMe">Hire Me</p>
            <FontAwesomeIcon icon={faAnchor} size="sm" style={{color: "#c0c0c0",}} />
        </div>
        <div className="lights">
            <p className="turnOnLights">Turn On Light</p>
            <FontAwesomeIcon icon={faPowerOff} size="sm" style={{color: "#c0c0c0",}} />
        </div>
        <div className="aboutMe">
            <p className="me">ABOUT ME</p>
        </div>
      </div>
      <div className="ed">
            <p className="education">Education</p>
            <FontAwesomeIcon icon={faUserGraduate} size="sm" style={{color: "#c0c0c0",}}/>
      </div>
      <div className="exp">
            <p className="experience">Experience</p> 
            <FontAwesomeIcon icon={faAward} size="sm" style={{color: "#c0c0c0",}} />
      </div>  

    </>
    );
  }