import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import AnimatedIllustration from '../components/AnimatedIllustration';
import './Home.css';

export default function Home() {
  const homeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );
    const elements = homeRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  const highlights = [
    {
      icon: '⚡',
      title: 'Scalable Solutions',
      desc: 'Cloud-native architecture that grows with your business',
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      desc: 'SOC 2 compliant with end-to-end encryption',
    },
    {
      icon: '📊',
      title: 'Data-Driven Insights',
      desc: 'Real-time analytics and intelligent reporting',
    },
  ];

  const techBuzzwords = [
    'Cloud Computing', 'AI & Machine Learning', 'API Integration', 'DevOps',
    'Microservices', 'Big Data', 'IoT Solutions', 'Blockchain',
    'Cybersecurity', 'Automation', 'Digital Transformation', 'Agile Development',
  ];

  const techSolutions = [
    { label: 'Custom Software Development', delay: 0 },
    { label: 'API & Integration Services', delay: 0.1 },
    { label: 'Cloud Migration & DevOps', delay: 0.2 },
    { label: 'AI-Powered Automation', delay: 0.3 },
    { label: 'Enterprise Resource Planning', delay: 0.4 },
    { label: 'Mobile & Web Applications', delay: 0.5 },
  ];

  return (
    <div className="home" ref={homeRef}>
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-gradient"></div>
          <div className="hero-grid"></div>
          <div className="hero-orb hero-orb-1"></div>
          <div className="hero-orb hero-orb-2"></div>
          <div className="hero-orb hero-orb-3"></div>
        </div>
        <div className="container hero-inner">
          <div className="hero-content">
          <span className="hero-badge animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Enterprise SaaS • Cloud-Native • API-First
          </span>
          <h1 className="hero-title animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Transform Your Business with
            <span className="gradient-text"> Intelligent Software</span>
          </h1>
          <p className="hero-desc animate-fade-in" style={{ animationDelay: '0.35s' }}>
            We deliver end-to-end Software as a Service solutions:
          </p>
          <ul className="hero-bullets animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <li><span className="bullet">▸</span> Custom development & cloud infrastructure</li>
            <li><span className="bullet">▸</span> AI-driven automation & data analytics</li>
            <li><span className="bullet">▸</span> Streamlined operations & resource management</li>
            <li><span className="bullet">▸</span> Cutting-edge technology solutions</li>
          </ul>
          <div className="hero-tech-tags animate-fade-in" style={{ animationDelay: '0.55s' }}>
            <span>Custom Development</span>
            <span>Cloud Solutions</span>
            <span>Data Analytics</span>
            <span>API Integration</span>
            <span>DevOps & CI/CD</span>
          </div>
          <div className="hero-actions animate-fade-in" style={{ animationDelay: '0.65s' }}>
            <Link to="/services" className="btn btn-primary">
              Explore Services
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Get in Touch
            </Link>
          </div>
          </div>
          <div className="hero-illustration animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <AnimatedIllustration type="team" className="hero-illus" />
          </div>
        </div>
      </section>

      <section className="tech-marquee">
        <div className="tech-marquee-inner">
          {[...techBuzzwords, ...techBuzzwords].map((word, i) => (
            <span key={i} className="tech-marquee-item">{word}</span>
          ))}
        </div>
      </section>

      <section className="highlights">
        <div className="container">
          <h2 className="section-heading animate-on-scroll">
            Built for Modern <span className="gradient-text">Technology</span> Stacks
          </h2>
          <div className="highlights-grid">
            {highlights.map((item, i) => (
              <div
                key={i}
                className="highlight-card animate-on-scroll"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <span className="highlight-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tech-solutions">
        <div className="container">
          <h2 className="section-heading animate-on-scroll">
            Full-Stack <span className="gradient-text">Software</span> Capabilities
          </h2>
          <p className="section-sub animate-on-scroll">
            From backend systems to frontend applications—we build scalable, secure,
            and high-performance software that powers your digital ecosystem.
          </p>
          <div className="tech-solutions-grid">
            {techSolutions.map((item, i) => (
              <div
                key={i}
                className="tech-solution-item animate-on-scroll"
                style={{ animationDelay: `${item.delay}s` }}
              >
                <span className="tech-solution-bullet">✓</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-card animate-on-scroll">
            <h2>Ready to Digitize Your Operations?</h2>
            <ul className="cta-bullets">
              <li><span className="bullet">•</span> Custom software development</li>
              <li><span className="bullet">•</span> Cloud infrastructure & migration</li>
              <li><span className="bullet">•</span> AI & automation solutions</li>
            </ul>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
