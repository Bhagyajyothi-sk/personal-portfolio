import "./App.css";

function App() {
  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <h2 className="logo">BK.</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certificates</a>
          <a href="#contact">Contact</a>
        </div>

      </nav>

      {/* ================= HERO SECTION ================= */}

      <section className="hero" id="home">

        <div className="hero-left">

          <p className="intro">
            Hello, I'm
          </p>

          <h1>
            Bhagyajyothi Koutagi
          </h1>

          <h2>
            AI & Data Science Student
          </h2>

          <p className="description">
            Passionate about Machine Learning,
            Artificial Intelligence, and modern
            software development. Focused on
            building intelligent, scalable,
            and user-friendly applications
            that solve real-world problems.
          </p>

          <div className="buttons">

            <a href="/resume.pdf" download>
              <button className="primary-btn">
                Download Resume
              </button>
            </a>

            <a href="#contact">
              <button className="secondary-btn">
                Contact Me
              </button>
            </a>

          </div>

        </div>

        <div className="hero-right">

          <img
            src="/profile.jpg"
            alt="Profile"
          />

        </div>

      </section>

      {/* ================= ABOUT ================= */}

      <section className="about" id="about">

        <h2>About Me</h2>

        <p className="about-text">
          I am an AI & Data Science student
          passionate about Machine Learning,
          Artificial Intelligence, and software
          development. I enjoy building clean,
          scalable, and responsive applications
          while continuously improving my
          technical and analytical skills.
        </p>

        <div className="about-cards">

          <div className="card">

            <h3>Education</h3>

            <p>
            B.E. in Artificial Intelligence & Data Science
            <br /><br />
            CGPA: 9.5
            <br /><br />
            Nitte Meenakshi Institute of Technology
            </p>

          </div>

          <div className="card">

            <h3>Career Goal</h3>

            <p>
              Aspiring Machine Learning Engineer
            </p>

          </div>

          <div className="card">

            <h3>Interests</h3>

            <p>
              AI, Machine Learning,
              problem solving
            </p>

          </div>

        </div>

      </section>

      {/* ================= SKILLS ================= */}

      <section className="skills" id="skills">

        <h2>Skills</h2>

        <div className="skills-container">

          <div className="skill-box">Python</div>
          <div className="skill-box">Machine Learning</div>
          <div className="skill-box">HTML</div>
          <div className="skill-box">CSS</div>
          <div className="skill-box">SQL</div>
          <div className="skill-box">Java</div>
          <div className="skill-box">Git & GitHub</div>
          <div className="skill-box">FastAPI</div>
          <div className="skill-box">Flutter</div>
          <div className="skill-box">Computer Vision</div>
          <div className="skill-box">REST APIs</div>

        </div>

      </section>

      {/* ================= PROJECTS ================= */}

      <section className="projects" id="projects">

        <h2>Projects</h2>

        <div className="project-container">

          <div className="project-card">

            <h3>AI Resume Analyzer</h3>

            <p>
              Developed an AI-powered resume
              analyzer that evaluates resumes
              and provides feedback based on
              skills and job relevance.
            </p>

            <span>
              Python • ML • NLP
            </span>

          </div>

          <div className="project-card">

            <h3>SnapShareAI</h3>

            <p>
              AI-powered photo sharing platform
              that uses facial recognition to
              identify people in group photos
              and automatically deliver images
              to matched contacts via email.
            </p>

            <span>
              Flutter • FastAPI • MongoDB • AI
            </span>

          </div>

          <div className="project-card">

            <h3>Portfolio Website</h3>

            <p>
              Designed and developed a responsive
              personal portfolio website using
              React and modern UI principles.
            </p>

            <span>
              React • CSS • JavaScript
            </span>

          </div>

        </div>

      </section>

      {/* ================= CERTIFICATIONS ================= */}

      <section className="certifications" id="certifications">
      <h2>Certificates</h2>

      <div className="certification-container">

        <a
          href="/certificates/additivemanufacturing.pdf"
          target="_blank"
          rel="noreferrer"
          className="certificate-card"
        >
          <h3>Additive Manufacturing</h3>
          <p>professional certificate</p>
          <span>View Certificate →</span>
        </a>

        <a
          href="/certificates/cybersecurity.pdf"
          target="_blank"
          rel="noreferrer"
          className="certificate-card"
        >
          <h3>Cyber Security</h3>
          <p>Issued from ZecurX Cybersecurity Pvt. Ltd.</p>
          <span>View Certificate →</span>
        </a>

        <a
          href="/certificates/llm.pdf"
          target="_blank"
          rel="noreferrer"
          className="certificate-card"
        >
          <h3>Large Language Models (LLM)</h3>
          <p>professional certificate</p>
          <span>View Certificate →</span>
        </a>

        <a
          href="/certificates/softwareengineering.pdf"
          target="_blank"
          rel="noreferrer"
          className="certificate-card"
        >
          <h3>Software Engineering</h3>
          <p>Issued from Infosys</p>
          <span>View Certificate →</span>
        </a>

        <a
          href="/certificates/softwareestimation.pdf"
          target="_blank"
          rel="noreferrer"
          className="certificate-card"
        >
          <h3>Software Estimation</h3>
          <p>Issued from Infosys</p>
          <span>View Certificate →</span>
        </a>

        <a
          href="/certificates/pitchnight.pdf"
          target="_blank"
          rel="noreferrer"
          className="certificate-card"
        >
          <h3>Pitch night</h3>
          <p>Issued from Google</p>
          <span>View Certificate →</span>
        </a>

      </div>
    </section>

      {/* ================= CONTACT ================= */}

      <section className="contact" id="contact">

        <h2>Contact Me</h2>

        <p>
          Open to internships, collaborations,
          and opportunities in AI, Machine Learning,
          and Software Development.
        </p>

        <div className="contact-info">

          <p>
            📧 koutagibhagyajyothi@gmail.com
          </p>

          <p>
            📱 +91 7019454882
          </p>

        </div>

        <div className="contact-buttons">

          <a
            href="https://www.linkedin.com/in/bhagyajyothi-koutagi-28a9423a0"
            target="_blank"
            rel="noreferrer"
          >
            <button className="primary-btn">
              LinkedIn
            </button>
          </a>

          <a
            href="https://github.com/Bhagyajyothi-sk"
            target="_blank"
            rel="noreferrer"
          >
            <button className="secondary-btn">
              GitHub
            </button>
          </a>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <p>
          © 2026 Bhagyajyothi Koutagi.
          Built using React.js
        </p>

      </footer>

    </div>
  );
}

export default App;