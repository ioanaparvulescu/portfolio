export default function Home() {
  return (
    <main className="portfolio-shell">
      <nav className="site-nav" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Ioana-Lavinia Parvulescu home">
          ILP<span>.</span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="cv-link" href="#contact">Download CV <span aria-hidden="true">↗</span></a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="kicker">Automatic control / Computer science</p>
          <h1>Making complex systems feel <em>human.</em></h1>
          <p className="hero-intro">I&apos;m Ioana-Lavinia, a student building a future in software, automation, and intelligent machines.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work <span aria-hidden="true">↓</span></a>
            <a className="text-link" href="#contact">Let&apos;s connect <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Abstract visualization of an automated control system">
          <div className="visual-grid" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="visual-core"><span>01</span><strong>MODE<br />/ ACTIVE</strong></div>
          <div className="visual-note note-top">signal / 04</div>
          <div className="visual-note note-bottom">logic meets motion</div>
        </div>
        <div className="scroll-note"><span /> Scroll to inspect</div>
      </section>

      <section className="signal-strip" aria-label="Current focus">
        <p>Currently learning</p>
        <div className="signal-list"><span>MATLAB</span><span>C / C++</span><span>JAVA</span><span>CONTROL LOGIC</span><span>+ more in progress</span></div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <h2>Selected studies<br /><em>in the making.</em></h2>
          <p>University projects become a record of how I think: curious, methodical, and always looking for the signal inside the noise.</p>
        </div>
        <div className="project-grid">
          <article className="project project-large">
            <div className="project-image project-image-control"><span className="image-label">CONTROL / SYSTEMS</span><div className="waveform" /></div>
            <div className="project-meta"><h3>Control systems lab</h3><span>MATLAB · 2025</span></div>
            <p>Exploring feedback, stability, and the beautiful discipline of making a system respond.</p>
          </article>
          <article className="project project-small">
            <div className="project-image project-image-code"><span className="code-lines">{`> build(idea)\n> compile(thought)\n> run(curiosity)`}</span></div>
            <div className="project-meta"><h3>Programming foundations</h3><span>C++ · JAVA</span></div>
            <p>Small programs, solid foundations, and a growing taste for elegant logic.</p>
          </article>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-mark">IOANA<br /><span>LAVINIA</span></div>
        <div className="about-copy"><h2>Not one job title.<br /><em>A wide technical horizon.</em></h2><p>I&apos;m still discovering which corner of IT will become home. That&apos;s the exciting part: I bring a systems mindset, a willingness to learn, and the patience to understand how things really work.</p><a className="text-link" href="#contact">More about me <span aria-hidden="true">↗</span></a></div>
      </section>

      <footer className="site-footer" id="contact">
        <p className="kicker">Open to the next chapter</p>
        <h2>Let&apos;s make<br /><em>something click.</em></h2>
        <a className="button button-light" href="mailto:ioana.parvulescu@example.com">ioana.parvulescu@example.com <span aria-hidden="true">↗</span></a>
        <div className="footer-bottom"><span>© 2025 Ioana-Lavinia Parvulescu</span><span>Built with curiosity + code</span><span>LinkedIn&nbsp;&nbsp; GitHub</span></div>
      </footer>
    </main>
  );
}
