import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import './Layout.css';

export default function Layout({ children }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className="layout">
      <header className="header">
        <div className="container header-inner">
          <Link to="/" className="logo">
            <span className="logo-icon">◆</span>
            <span className="logo-text">DarshanaTech</span>
          </Link>
          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Light mode' : 'Dark mode'}
          >
            {isDark ? (
              <span className="theme-icon" aria-hidden="true">☀️</span>
            ) : (
              <span className="theme-icon" aria-hidden="true">🌙</span>
            )}
          </button>
          <button
            className="mobile-menu-btn"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <main className="main">{children}</main>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <span className="logo-icon">◆</span>
            <span>DarshanaTech SaaS</span>
          </div>
          <div className="footer-links">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className="footer-link">
                {link.label}
              </Link>
            ))}
          </div>
          <p className="footer-copy">© {new Date().getFullYear()} DarshanaTech. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
