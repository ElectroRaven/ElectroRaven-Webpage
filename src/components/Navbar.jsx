import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import logo from '../assets/logo-transparent.png';

const Navbar = ({ theme, toggleTheme }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    const navLinks = [
        { name: 'Über mich', id: 'about' },
        { name: 'Skills', id: 'skills' },
        { name: 'Zertifizierungen', id: 'certifications' },
        { name: 'Projekte', id: 'projects' },
        { name: 'Socials', id: 'contact' },
    ];

    return (
        <nav
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 50,
                width: '100%',
                transition: 'all 0.3s ease',
                backgroundColor: isScrolled ? 'rgba(var(--bg-primary), 0.8)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                borderBottom: isScrolled ? '1px solid var(--border)' : 'none',
            }}
        >
            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontWeight: 'bold', fontSize: '1.25rem', cursor: 'pointer', display: 'flex', alignItems: 'center' }} onClick={() => scrollToSection('hero')}>
                    <img src={logo} alt="Logo" style={{ height: '40px', width: 'auto' }} />
                </div>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => scrollToSection(link.id)}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: 'var(--text-secondary)',
                                cursor: 'pointer',
                                fontSize: '1rem',
                                fontWeight: 500,
                                transition: 'color 0.2s',
                            }}
                            onMouseEnter={(e) => e.target.style.color = 'var(--accent)'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                        >
                            {link.name}
                        </button>
                    ))}
                    <button
                        onClick={toggleTheme}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: 'var(--text-primary)',
                            cursor: 'pointer',
                            padding: '0.5rem',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="mobile-menu-btn" style={{ display: 'none' }}>
                    {/* Note: In a real CSS Module setup we'd use media queries. 
              For this single-file simplicity, I'll rely on inline styles + a responsive CSS class if strictly needed, 
              but since we have index.css, I will add media queries there later or assume desktop first for this prompt's constraints. 
              Actually, let's just add the mobile menu logic but keep it simple. */}
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ background: 'none', border: 'none', color: 'var(--text-primary)' }}>
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay - Simplified */}
            {mobileMenuOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    backgroundColor: 'var(--bg-primary)',
                    borderBottom: '1px solid var(--border)',
                    padding: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                }}>
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => scrollToSection(link.id)}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: 'var(--text-primary)',
                                textAlign: 'left',
                                fontSize: '1.1rem',
                                padding: '0.5rem 0'
                            }}
                        >
                            {link.name}
                        </button>
                    ))}
                </div>
            )}

            <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
