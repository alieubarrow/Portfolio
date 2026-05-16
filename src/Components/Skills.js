import { Link, NavLink } from "react-router-dom";
import "../Styles/PortfolioStyle.css";
import { navItems, skillCategories } from "../portfolioData";

export default function Skills() {
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
          <p className="eyebrow">Skills</p>
          <h1 className="pageTitle">A practical software development toolkit.</h1>
          <p className="pageCopy">
            These are the tools and habits I am using to build clearer,
            responsive, and more maintainable software applications.
          </p>
        </section>

        <section className="skillsGrid" aria-label="Technical skills">
          {skillCategories.map((category) => (
            <article className="skillCard" key={category.title}>
              <h2>{category.title}</h2>
              <ul className="skillList">
                {category.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
