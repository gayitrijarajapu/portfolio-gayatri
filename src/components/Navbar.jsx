import React, { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <nav className="navbar" role="navigation">
      <div className="nav-inner">
        <div className="nav-left">
          <h1 className="brand">Gayatri Jarajapu</h1>
        </div>

        <button
          className={`hamburger ${open ? 'is-open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-center ${open ? 'open' : ''}`}>
          <ul className="nav-links">
            <li><a href="#about" onClick={close}>About</a></li>
            <li><a href="#skills" onClick={close}>Skills</a></li>
            <li><a href="#projects" onClick={close}>Projects</a></li>
            <li><a href="#contact" onClick={close}>Contact</a></li>
          </ul>
        </div>

        <div className="nav-right">
          <a className="social" href="https://www.instagram.com/gayitri_jarajapu?igsh=NDNlaTBxcTJ4dm42&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="1.2"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.2"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/></svg>
          </a>
          <a className="social" href="https://www.linkedin.com/in/gayitri-jarajapu-325071346?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.2"/><path d="M7 10.5V17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/><path d="M7 8.5V8.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/><path d="M11 17V12.2C11 11.08 12.08 10.5 12.88 10.5C13.68 10.5 14.76 11.08 14.76 12.2V17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
          </a>
          <a className="social" href="https://github.com/gayitrijarajapu" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.38-3.88-1.38-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.11-.76.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .98-.31 3.2 1.19a11.14 11.14 0 012.92-.39c.99.01 1.99.13 2.92.39 2.22-1.5 3.2-1.19 3.2-1.19.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.27 5.68.42.36.8 1.08.8 2.17 0 1.56-.01 2.82-.01 3.2 0 .31.21.68.8.56C20.71 21.38 24 17.08 24 12 24 5.73 18.27.5 12 .5z" fill="currentColor"/></svg>
          </a>
          <a className="social" href="mailto:gayitrijarajapu@gmail.com" aria-label="Email">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.2"/><path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div className={`mobile-menu ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
        <div className="mobile-menu-inner" onClick={(e) => e.stopPropagation()}>
          <ul>
            <li><a href="#about" onClick={close}>About</a></li>
            <li><a href="#skills" onClick={close}>Skills</a></li>
            <li><a href="#projects" onClick={close}>Projects</a></li>
            <li><a href="#contact" onClick={close}>Contact</a></li>
          </ul>
          <div className="mobile-socials">
            <a href="https://github.com/gayitrijarajapu" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/gayitri-jarajapu-325071346?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.instagram.com/gayitri_jarajapu?igsh=NDNlaTBxcTJ4dm42&utm_source=qr" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
  