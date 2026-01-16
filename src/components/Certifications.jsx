import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
    return (
        <section id="certifications" className="section">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="heading">Zertifizierungen</h2>
                <a 
                    href="https://www.credly.com/badges/a89c1ef7-642f-4e84-affa-a22e2a2017e6" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ textDecoration: 'none', color: 'inherit' }}
                >
                    <div className="card" style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', padding: '1rem', cursor: 'pointer', transition: 'transform 0.2s' }}>
                        {/* Placeholder for the badge if valid image URL isn't available, but we try to simulate the look */}
                        <div style={{
                            width: '100px',
                            height: '100px',
                            backgroundColor: '#00bceb', // Cisco blue-ish
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '0.8rem',
                            textAlign: 'center'
                        }}>
                            Cisco Badge
                        </div>
                        <div>
                            <h3 style={{ margin: 0, fontSize: '1.2rem' }}>CCNA: Introduction to Networks</h3>
                            <p style={{ margin: '0.5rem 0 0', color: 'var(--text-secondary)' }}>Cisco Networking Academy</p>
                            <span style={{
                                display: 'inline-block',
                                marginTop: '0.5rem',
                                padding: '0.2rem 0.5rem',
                                backgroundColor: '#22c55e',
                                color: 'white',
                                borderRadius: '4px',
                                fontSize: '0.8rem',
                                fontWeight: 'bold'
                            }}>
                                Verified
                            </span>
                        </div>
                    </div>
                </a>
            </motion.div>
        </section>
    );
};

export default Certifications;
