import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../Styles/PortfolioStyle.css";
import { navItems, projects } from "../portfolioData";

export default function Projects() {
  return (
    <div className="pageShell">
      <header className="siteHeader">
        <Link className="brandLink" to="/">
          <img className="brandLogo" src="/Images/Logo.png" alt="Alieu Barrow logo" />
          <span>Alieu Barrow</span>
        </Link>
        <nav className="siteNav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="pageMain">
        <section className="pageIntro">
          <p className="eyebrow">Projects</p>
          <h1 className="pageTitle">Selected work and practice builds.</h1>
          <p className="pageCopy">
            A growing collection of projects that show interface design,
            component structure, routing, and practical problem solving.
          </p>
        </section>

        <section className="sectionGrid">
          {projects.map((project) => (
            <article className="projectCard" key={project.title}>
              <span className="projectType">{project.type}</span>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              {project.liveUrl && (
                <a className="projectLink" href={project.liveUrl} target="_blank" rel="noreferrer">
                  View Live
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>
              )}
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
