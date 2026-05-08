
import { Link, NavLink } from "react-router-dom";
import "../Styles/PortfolioStyle.css";
import { highlights, navItems } from "../portfolioData";

export default function About() {
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
          <p className="eyebrow">About</p>
          <h1 className="pageTitle">Developer in progress, builder by habit.</h1>
          <p className="pageCopy">
            I am a computer science student developing my craft through React
            projects, coursework, and steady practice. I care about writing code
            that makes interfaces easier to understand and easier to use.
          </p>
        </section>

        <section className="sectionGrid">
          {highlights.map((highlight) => (
            <article className="infoCard" key={highlight}>
              <h2>Focus</h2>
              <p>{highlight}</p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
