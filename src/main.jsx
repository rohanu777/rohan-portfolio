import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Github, Linkedin, Mail, Menu, X, Download,
  Code2, Database, Cloud, Terminal, ExternalLink, MapPin
} from "lucide-react";
import "./styles.css";

const profile = {
  name: "Rohan U",
  email: "rohanu9948@gmail.com",
  phone: "+91 9845909948",
  linkedin: "https://linkedin.com/in/rohan-u-799413290",
  github: "https://github.com/rohanu777",
};

const projects = [
  {
    title: "Weather App",
    period: "08/24 – 09/24",
    description:
      "Responsive weather application integrating the OpenWeatherMap REST API to retrieve and display real-time weather data.",
    tags: ["HTML", "CSS", "JavaScript", "REST API"],
    github: "https://github.com/rohanu777/weather-app",
    featured: true,
  },
  {
    title: "Note-Making App",
    period: "04/23 – 05/23",
    description:
      "Note-taking web application built with AngularJS, supporting CRUD operations through a clean, responsive and modular interface.",
    tags: ["AngularJS", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/rohanu777/Notes-App",
    featured: true,
  },
  {
    title: "Employee Management System",
    period: "Internship Project",
    description:
      "Full-stack employee management application developed during internship exposure, with RESTful CRUD APIs and an Angular frontend.",
    tags: ["Java", "Spring Boot", "Angular", "MySQL"],
    github: "https://github.com/rohanu777/Basic-employee-Management-System",
    featured: false,
  },
];

const skillGroups = [
  {
    icon: Code2,
    title: "Programming",
    skills: ["Python", "Java", "JavaScript"],
  },
  {
    icon: Terminal,
    title: "Core Development",
    skills: ["OOP", "REST API Development", "SQL", "Git", "HTML", "CSS"],
  },
  {
    icon: Database,
    title: "Frameworks & Database",
    skills: ["Spring Boot", "Angular", "AngularJS", "MySQL"],
  },
  {
    icon: Cloud,
    title: "Cloud & Tools",
    skills: ["AWS S3", "AWS EC2", "GitHub", "VS Code", "Jupyter Notebook"],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#home" onClick={closeMenu}>
            <span className="brand-mark">R</span>
            <span>Rohan<span className="accent">.</span></span>
          </a>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {["About", "Skills", "Projects", "Experience", "Education", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
            ))}
            <a className="nav-resume" href="/Resume.pdf" download>
              <Download size={15} /> Resume
            </a>
          </div>

          <div className="nav-actions">
            <button className="theme-btn" onClick={() => setDark(!dark)} aria-label="Toggle theme">
              {dark ? "☼" : "☾"}
            </button>
            <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-glow glow-one" />
          <div className="hero-glow glow-two" />
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <div className="eyebrow"><span className="status-dot" /> Open to entry-level opportunities</div>
              <h1>Hi, I'm <span>Rohan.</span><br />Aspiring Software Developer.</h1>
              <p className="hero-text">
                2025 Information Science graduate with hands-on experience in Python,
                object-oriented programming, REST APIs, SQL, Git and AWS fundamentals.
                I enjoy turning practical problems into clean, usable software.
              </p>
              <div className="hero-buttons">
                <a className="btn primary" href="#projects">View Projects <ArrowUpRight size={17} /></a>
                <a className="btn secondary" href="/Resume.pdf" download>Download Resume <Download size={16} /></a>
              </div>
              <div className="social-row">
                <a href={profile.github} target="_blank" rel="noreferrer"><Github size={18}/> GitHub</a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18}/> LinkedIn</a>
                <a href={`mailto:${profile.email}`}><Mail size={18}/> Email</a>
              </div>
            </div>

            <div className="hero-card reveal">
              <div className="terminal-bar"><span/><span/><span/></div>
              <div className="code-window">
                <div><span className="muted">const</span> <span className="blue">developer</span> = {"{"}</div>
                <div className="indent"><span className="key">name</span>: <span className="green">"Rohan U"</span>,</div>
                <div className="indent"><span className="key">role</span>: <span className="green">"Software Developer"</span>,</div>
                <div className="indent"><span className="key">focus</span>: [</div>
                <div className="double-indent"><span className="green">"Python"</span>, <span className="green">"Web Development"</span>,</div>
                <div className="double-indent"><span className="green">"REST APIs"</span>, <span className="green">"AWS"</span></div>
                <div className="indent">],</div>
                <div className="indent"><span className="key">status</span>: <span className="green">"Learning & Building"</span></div>
                <div>{"};"}</div>
                <div className="cursor">_</div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container narrow reveal">
            <div className="section-label">01 / About</div>
            <h2>Building a foundation for real-world software development.</h2>
            <p className="lead">
              I'm a 2025 graduate in Information Science and Engineering from RNS Institute of Technology,
              Bangalore. My development foundation spans Python, JavaScript, REST API development, SQL,
              Git and AWS.
            </p>
            <p>
              During a 3-month Java Full Stack Development internship with EduBridge Learning Pvt. Ltd.
              in association with Capgemini, I gained hands-on exposure to enterprise application
              development using Spring Boot, Angular and MySQL. I'm now looking for an entry-level
              opportunity where I can contribute, learn from experienced engineers and grow through
              real-world development work.
            </p>
          </div>
        </section>

        <section id="skills" className="section alt">
          <div className="container">
            <div className="section-label">02 / Skills</div>
            <div className="section-heading">
              <div>
                <h2>Tools I work with.</h2>
                <p>Focused on solid fundamentals, practical projects and continuous learning.</p>
              </div>
            </div>
            <div className="skill-grid">
              {skillGroups.map(({ icon: Icon, title, skills }) => (
                <article className="skill-card reveal" key={title}>
                  <div className="skill-icon"><Icon size={20}/></div>
                  <h3>{title}</h3>
                  <div className="chips">
                    {skills.map(skill => <span key={skill}>{skill}</span>)}
                  </div>
                </article>
              ))}
            </div>
            <div className="skill-note">
              <strong>Frontend note:</strong> React.js and AngularJS are currently areas of basic knowledge/exposure.
              They are intentionally not presented as advanced skills.
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <div className="section-label">03 / Projects</div>
            <div className="section-heading">
              <div>
                <h2>Things I've built.</h2>
                <p>Practical projects demonstrating web development, APIs and full-stack fundamentals.</p>
              </div>
            </div>
            <div className="project-grid">
              {projects.map((project, index) => (
                <article className={`project-card reveal ${project.featured ? "featured" : ""}`} key={project.title}>
                  <div className="project-top">
                    <span className="project-number">0{index + 1}</span>
                    <span className="project-period">{project.period}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="chips">
                    {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                  </div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer">GitHub <Github size={15}/></a>
                    <a href={project.github} target="_blank" rel="noreferrer">Repository <ExternalLink size={14}/></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section alt">
          <div className="container">
            <div className="section-label">04 / Experience</div>
            <div className="experience-card reveal">
              <div className="experience-date">2025</div>
              <div>
                <div className="experience-company">EduBridge Learning Pvt. Ltd. — in association with Capgemini</div>
                <h2>Java Full Stack Developer Intern</h2>
                <p className="muted-text">3 months · concluded July 2025</p>
                <ul>
                  <li>Completed an industry-oriented Java Full Stack Development program, scoring 70% (Grade B+).</li>
                  <li>Built a full-stack Employee Management System using Spring Boot 3, Java 17, Angular and MySQL.</li>
                  <li>Developed RESTful CRUD APIs with Spring Data JPA/Hibernate and custom exception handling.</li>
                  <li>Designed a normalized MySQL schema for employee records.</li>
                  <li>Built responsive Angular modules for admin login, employee listing, add/update forms and detailed views.</li>
                  <li>Consumed backend REST APIs from the Angular frontend with CORS configured for cross-origin access.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <div className="container">
            <div className="section-label">05 / Education</div>
            <div className="education-grid">
              <article className="education-main reveal">
                <span className="edu-year">2021 — 2025</span>
                <h2>Bachelor of Engineering</h2>
                <h3>Information Science and Engineering</h3>
                <p>RNS Institute of Technology · Bangalore, India</p>
                <div className="cgpa">CGPA <strong>7.34</strong></div>
              </article>
              <article className="education-small reveal">
                <span>2019 — 2021</span>
                <h3>12th PCMB</h3>
                <p>ASC PU College · Bangalore</p>
                <strong>73.33%</strong>
              </article>
              <article className="education-small reveal">
                <span>2019</span>
                <h3>10th SSLC</h3>
                <p>Jnana Vahini Vidya Samsthe · Bangalore</p>
                <strong>78.56%</strong>
              </article>
            </div>
          </div>
        </section>

        <section className="section cert-section">
          <div className="container">
            <div className="section-label">06 / Certifications</div>
            <div className="cert-grid">
              <div className="cert-card"><strong>Java Full Stack Development</strong><span>EduBridge · Capgemini · Jul 2025 · B+</span></div>
              <div className="cert-card"><strong>Programming Fundamentals using Python — Part 1</strong><span>OnWingspan</span></div>
              <div className="cert-card"><strong>Programming Fundamentals using Python — Part 2</strong><span>OnWingspan</span></div>
              <div className="cert-card"><strong>AWS Academy Graduate — Cloud Foundations</strong><span>AWS Academy</span></div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <div className="reveal">
              <div className="section-label">07 / Contact</div>
              <h2>Let's connect.</h2>
              <p>
                I'm currently looking for entry-level software development opportunities.
                If you're hiring or would like to connect, feel free to reach out.
              </p>
              <div className="contact-list">
                <a href={`mailto:${profile.email}`}><Mail size={18}/>{profile.email}</a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18}/>LinkedIn</a>
                <a href={profile.github} target="_blank" rel="noreferrer"><Github size={18}/>GitHub</a>
                <span><MapPin size={18}/>Bengaluru, India</span>
              </div>
            </div>
            <div className="contact-card reveal">
              <div className="contact-card-title">Open to opportunities</div>
              <p>Software Developer · Python Developer · Frontend Developer · Graduate Software Engineer</p>
              <a className="btn primary full" href={`mailto:${profile.email}?subject=Software%20Development%20Opportunity`}>
                Email Me <ArrowUpRight size={17}/>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <div><strong>Rohan<span className="accent">.</span></strong><span> Aspiring Software Developer</span></div>
          <div>© 2026 Rohan U</div>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);