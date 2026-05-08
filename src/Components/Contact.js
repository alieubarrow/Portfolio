import { Link, NavLink } from "react-router-dom";
import "../Styles/PortfolioStyle.css";
import { navItems } from "../portfolioData";

export default function Contact() {
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
          <p className="eyebrow">Contact</p>
          <h1 className="pageTitle">Let us build something useful.</h1>
        </section>

        <section className="contactPanel infoCard">
          <p className="pageCopy">
            I am open to project conversations, collaboration, and opportunities
            to keep improving as a software developer.
          </p>
          <a className="contactButton" href="mailto:alieubarrow@example.com">
            Send Email
          </a>
        </section>
      </main>
    </div>
  );
}
