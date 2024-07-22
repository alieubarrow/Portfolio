import "../Style.css" 

export default function Home() {
    return (

      <div className="Home">
        <div className="image" >
            <img className= "logo" src="/Images/Logo.png" alt="Logo"></img>
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
      </div>
    );
  }