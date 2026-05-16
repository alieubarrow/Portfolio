import "../Styles/HomeStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faAward,
  faBriefcase,
  faCode,
  faEnvelope,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { experience, highlights, navItems, projects, skills } from "../portfolioData";

export default function Home() {
  return (
    <div className="Home">
      <header className="homeHeader">
        <Link className="homeBrand" to="/">
          <img className="logo" src="/Images/Logo.png" alt="Alieu Barrow logo" />
          <span>Alieu Barrow</span>
        </Link>
        <nav className="topnav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main>
        <section className="heroSection">
          <div className="heroCopy">
            <p className="eyebrow">Software Developer</p>
            <h1>Hi, I am Alieu Barrow.</h1>
            <p className="heroLead">
              I build thoughtful web experiences with React, JavaScript, and a
              steady focus on clean user flows.
            </p>
            <div className="heroActions">
              <Link className="primaryAction" to="/projects">
                View Projects
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
              <Link className="secondaryAction" to="/contact">
                Contact Me
                <FontAwesomeIcon icon={faEnvelope} />
              </Link>
            </div>
          </div>

          <div className="heroVisual" aria-label="Laptop workspace">
            <img className="computer" src="/Images/Laptop.jpg" alt="Laptop on a work desk" />
          </div>
        </section>

        <section className="quickFacts" aria-label="Portfolio highlights">
          {highlights.map((highlight) => (
            <article className="factCard" key={highlight}>
              <FontAwesomeIcon icon={faCode} />
              <p>{highlight}</p>
            </article>
          ))}
        </section>

        <section className="aboutPreview">
          <div>
            <p className="eyebrow">About Me</p>
            <h2>Learning deeply, building consistently.</h2>
          </div>
          <p>
            I am growing as a developer by turning coursework, experiments, and
            personal ideas into complete interfaces. My goal is to make software
            that is clear, useful, and reliable for the people using it.
          </p>
        </section>

        <section className="splitSection">
          <div className="sectionHeading">
            <p className="eyebrow">Projects</p>
            <h2>Recent Work</h2>
          </div>
          <div className="projectGrid">
            {projects.map((project) => (
              <article className="projectTile" key={project.title}>
                <span>{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.liveUrl && (
                  <a className="projectLink" href={project.liveUrl} target="_blank" rel="noreferrer">
                    View Live
                    <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="splitSection twoColumn">
          <div>
            <p className="eyebrow">Skills</p>
            <h2>Tools I use to build.</h2>
            <ul className="homeSkillList">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Experience</p>
            <h2>What I am practicing.</h2>
            <div className="timeline">
              {experience.map((item) => (
                <article className="timelineItem" key={item.role}>
                  <FontAwesomeIcon icon={item.role.includes("Coursework") ? faUserGraduate : faAward} />
                  <div>
                    <h3>{item.role}</h3>
                    <span>{item.dates}</span>
                    <p>{item.details}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contactBanner">
          <div>
            <p className="eyebrow">Available For Projects</p>
            <h2>Have an idea worth building?</h2>
          </div>
          <Link className="primaryAction" to="/contact">
            Hire Me
            <FontAwesomeIcon icon={faBriefcase} />
          </Link>
        </section>
      </main>
    </div>
  );
}
