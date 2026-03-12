import "./HeroSection.css";
import Reveal from "@/components/ui/Reveal";

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      {/* Decorative background */}
      <div className="hero__bg-grid" aria-hidden="true" />
      <div className="hero__glow hero__glow--1" aria-hidden="true" />
      <div className="hero__glow hero__glow--2" aria-hidden="true" />

      <div className="container hero__content">
        <div className="hero__left">
          <Reveal delay={0}>
            <div className="hero__badge">
              <span className="hero__badge-dot" />
              Corporate Sales Training Program
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="hero__headline">
              Build an{" "}
              <span className="gradient-text">AI Powered</span>
              <br />
              Sales Engine for Your Team
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="hero__subheadline">
              A hands-on training program that helps your sales team use AI,
              automation, and structured outreach systems to generate more pipeline
              and close deals faster.
            </p>
          </Reveal>

          {/* <Reveal delay={300}>
            <p className="hero__description">
              Your sales team learns the exact workflows modern B2B companies use
              to run prospecting, outreach, CRM management, and pipeline tracking
              using AI tools and automation systems.
              <br />
              <br />
              This is not theory. During the program your team builds real systems
              for your company&apos;s product, market, and customers.
            </p>
          </Reveal> */}

          <Reveal delay={400}>
            <div className="hero__ctas">
              <a href="#consultation" className="btn btn-primary">
                <span>Train Your Sales Team</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#program" className="btn btn-secondary">
                Book a Consultation
              </a>
            </div>
          </Reveal>

        </div>

        <div className="hero__right">
          <Reveal delay={300} className="hero__video-wrapper">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/wfnEeIQCQCw?si=72zA9gMQ-Codd1yC" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </Reveal>
        </div>
      </div>

      <div className="container hero__stats-container">
        <Reveal delay={500}>
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-num">20+</span>
              <span className="hero__stat-label">Companies Trained</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">100%</span>
              <span className="hero__stat-label">Hands-On Implementation</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num" style={{ fontSize: "1.3rem" }}>2 Consulting Sessions</span>
              <span className="hero__stat-label">Per Employee</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num" style={{ fontSize: "1.3rem" }}>Automation Workflows</span>
              <span className="hero__stat-label">Built for Your Pipeline</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
