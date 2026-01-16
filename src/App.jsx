import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    const [theme, setTheme] = useState('dark'); // Default to dark as per screenshot style

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    return (
        <div className="app-container">
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <main>
                <Hero />
                <About />
                <Skills />
                <Certifications />
                <Projects />
                <Contact />
            </main>
            <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }}>
                <p>&copy; {new Date().getFullYear()} Maximilian Grill. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
