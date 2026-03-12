import AnimatedIllustration from '../components/AnimatedIllustration';
import './About.css';

export default function About() {
  const values = [
    { icon: '◆', title: 'Innovation', desc: 'We push boundaries to deliver cutting-edge solutions.' },
    { icon: '◇', title: 'Integrity', desc: 'Transparent partnerships built on trust and reliability.' },
    { icon: '★', title: 'Excellence', desc: 'Quality-driven approach in every project we undertake.' },
  ];

  const stats = [
    { icon: '✓', number: '150+', label: 'Projects Delivered' },
    { icon: '★', number: '50+', label: 'Enterprise Clients' },
    { icon: '◉', number: '99.9%', label: 'Uptime SLA' },
  ];

  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <span className="page-badge">About Us</span>
          <h1 className="page-title">
            Empowering Organizations Through
            <span className="gradient-text"> Digital Excellence</span>
          </h1>
          <p className="page-desc">
            DarshanaTech is a leading provider of Software as a Service solutions, helping businesses
            worldwide streamline operations, manage resources, and harness the power of data.
          </p>
        </div>
      </section>

      <section className="about-story">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <h2>Our Story</h2>
              <p>
                Founded with a vision to democratize enterprise-grade software, DarshanaTech has evolved
                into a trusted partner for organizations seeking to modernize their operations.
                We combine deep technical expertise with a customer-first mindset to deliver
                solutions that drive real business value.
              </p>
              <ul className="story-bullets">
                <li><span className="bullet">▸</span> Automate workflows & streamline processes</li>
                <li><span className="bullet">▸</span> Optimize resource allocation</li>
                <li><span className="bullet">▸</span> Data-driven decisions that propel growth</li>
                <li><span className="bullet">▸</span> Serving startups to Fortune 500 companies</li>
              </ul>
            </div>
            <div className="story-visual">
              <AnimatedIllustration type="collaboration" className="about-illus" />
              <p className="story-visual-caption">Building the future of work, one solution at a time.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-card">
                <span className="value-icon">{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s, i) => (
              <div key={i} className="stat-item">
                <span className="stat-icon">{s.icon}</span>
                <span className="stat-number">{s.number}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
