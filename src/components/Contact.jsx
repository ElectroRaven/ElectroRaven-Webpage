import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section" style={{ textAlign: 'center', paddingBottom: '4rem' }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="heading">Kontakt & Socials</h2>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                    Gerne können wir uns vernetzen!
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                    {[
                        { icon: <Github size={32} />, label: "GitHub", href: "https://github.com/ElectroRaven" },
                        { icon: <Linkedin size={32} />, label: "LinkedIn", href: "https://www.linkedin.com/in/maximilian-grill-54abbb27a/" },
                       // { icon: <Mail size={32} />, label: "Email", href: "mailto:contact@example.com" },
                        // { icon: <Twitter size={32} />, label: "Twitter", href: "#" }
                    ].map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.href}
                            whileHover={{ scale: 1.2, color: 'var(--accent)' }}
                            style={{
                                color: 'var(--text-primary)',
                                transition: 'color 0.3s'
                            }}
                            title={social.label}
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
