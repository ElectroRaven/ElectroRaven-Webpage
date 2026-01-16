import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" style={{
            minHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '0 1rem',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background decoration */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '600px',
                height: '600px',
                backgroundColor: 'var(--blob-color)',
                borderRadius: '50%',
                filter: 'blur(100px)',
                zIndex: -1
            }} />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <span style={{
                    color: 'var(--accent)',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: '1rem',
                    display: 'block'
                }}>
                    Portfolio
                </span>
                <h1 style={{
                    fontSize: 'clamp(3rem, 8vw, 6rem)',
                    fontWeight: 800,
                    lineHeight: 1.1,
                    marginBottom: '1.5rem',
                    background: 'linear-gradient(to right, var(--text-primary), var(--text-secondary))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    Maximilian Grill
                </h1>
                <p style={{
                    fontSize: '1.5rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '2rem',
                    maxWidth: '600px',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>
                    18 Jahre alt | Informatik Schüler an der HTL Donaustadt, Wien 🇦🇹
                </p>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <button
                        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                        className="btn"
                    >
                        Mehr über mich
                    </button>
                    <button
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        className="btn"
                        style={{ backgroundColor: 'transparent', border: '2px solid var(--border)', color: 'var(--text-primary)' }}
                    >
                        Projekte ansehen
                    </button>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
