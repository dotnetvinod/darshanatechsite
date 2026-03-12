import AnimatedIllustration from '../components/AnimatedIllustration';
import './Services.css';

const serviceCategories = [
  {
    title: 'Resource & Project Management',
    icon: '📋',
    services: [
      {
        name: 'Project Management Suite',
        desc: 'Plan, track, and deliver projects with real-time collaboration, Gantt charts, and agile workflows.',
      },
      {
        name: 'Resource Allocation Platform',
        desc: 'Optimize workforce and asset allocation with intelligent scheduling and capacity planning.',
      },
      {
        name: 'Inventory & Asset Management',
        desc: 'Track equipment, supplies, and assets across locations with automated reorder alerts.',
      },
      {
        name: 'Workflow Automation',
        desc: 'Automate repetitive tasks and streamline approval processes to save time daily.',
      },
    ],
  },
  {
    title: 'Data & Analytics',
    icon: '📊',
    services: [
      {
        name: 'Business Intelligence Dashboard',
        desc: 'Transform raw data into actionable insights with customizable reports and visualizations.',
      },
      {
        name: 'Data Warehouse & ETL',
        desc: 'Centralize data from multiple sources for unified reporting and analysis.',
      },
      {
        name: 'Predictive Analytics',
        desc: 'Forecast trends, demand, and outcomes using AI-powered models.',
      },
      {
        name: 'Real-Time Reporting',
        desc: 'Monitor KPIs and metrics in real-time with live dashboards.',
      },
    ],
  },
  {
    title: 'Daily Operations & Productivity',
    icon: '⚡',
    services: [
      {
        name: 'CRM & Sales Pipeline',
        desc: 'Manage customer relationships, track deals, and automate sales workflows.',
      },
      {
        name: 'HR & Payroll Management',
        desc: 'Handle recruitment, onboarding, attendance, and payroll in one platform.',
      },
      {
        name: 'Document Management System',
        desc: 'Store, version, and collaborate on documents with secure access controls.',
      },
      {
        name: 'Communication Hub',
        desc: 'Unified messaging, video conferencing, and team collaboration tools.',
      },
    ],
  },
  {
    title: 'Customer & Support',
    icon: '🎯',
    services: [
      {
        name: 'Help Desk & Ticketing',
        desc: 'Streamline support requests with automated routing and SLA tracking.',
      },
      {
        name: 'Customer Portal',
        desc: 'Self-service portals for clients to access services and track requests.',
      },
      {
        name: 'Feedback & Survey Platform',
        desc: 'Collect and analyze customer feedback to improve satisfaction.',
      },
    ],
  },
  {
    title: 'Finance & Compliance',
    icon: '💰',
    services: [
      {
        name: 'Expense Management',
        desc: 'Track expenses, approvals, and reimbursements with policy enforcement.',
      },
      {
        name: 'Invoice & Billing Automation',
        desc: 'Generate invoices, track payments, and manage subscriptions automatically.',
      },
      {
        name: 'Compliance & Audit Trail',
        desc: 'Maintain audit logs and ensure regulatory compliance across operations.',
      },
    ],
  },
  {
    title: 'Industry-Specific Solutions',
    icon: '🏢',
    services: [
      {
        name: 'Healthcare Management',
        desc: 'Patient records, appointment scheduling, and HIPAA-compliant workflows.',
      },
      {
        name: 'Retail & E-Commerce',
        desc: 'POS integration, inventory sync, and omnichannel order management.',
      },
      {
        name: 'Manufacturing ERP',
        desc: 'Production planning, supply chain, and quality control modules.',
      },
      {
        name: 'Education & LMS',
        desc: 'Course management, student portals, and learning analytics.',
      },
    ],
  },
];

export default function Services() {
  return (
    <div className="services">
      <section className="services-hero">
        <div className="container services-hero-inner">
          <div className="services-hero-content">
          <span className="page-badge">Our Services</span>
          <h1 className="page-title">
            End-to-End SaaS Solutions for
            <span className="gradient-text"> Modern Organizations</span>
          </h1>
          <p className="page-desc">
            From resource management to data analytics, we build software that simplifies day-to-day
            operations. Our solutions include:
          </p>
          <ul className="services-hero-bullets">
            <li><span className="bullet">•</span> Resource & project management</li>
            <li><span className="bullet">•</span> Data analytics & business intelligence</li>
            <li><span className="bullet">•</span> Day-to-day operations & productivity</li>
            <li><span className="bullet">•</span> Customer support & compliance</li>
          </ul>
          </div>
          <div className="services-hero-illus">
            <AnimatedIllustration type="services" className="services-illus" />
          </div>
        </div>
      </section>

      <section className="services-list">
        <div className="container">
          {serviceCategories.map((category, catIndex) => (
            <div key={catIndex} className="service-category">
              <h2 className="category-title">
                <span className="category-icon">{category.icon}</span>
                {category.title}
              </h2>
              <div className="service-cards">
                {category.services.map((service, svcIndex) => (
                  <div key={svcIndex} className="service-card">
                    <h3><span className="service-bullet">▸</span> {service.name}</h3>
                    <p>{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="services-cta">
        <div className="container">
          <div className="cta-inner">
            <h2>Need a Custom Solution?</h2>
            <ul className="services-cta-bullets">
              <li><span className="bullet">✓</span> Tailored to your business needs</li>
              <li><span className="bullet">✓</span> Scalable & flexible architecture</li>
              <li><span className="bullet">✓</span> Dedicated support & onboarding</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
