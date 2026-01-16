import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="heading">Über mich</h2>
                <div className="card">
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                        Servus ich bin Max und ich befasse mich leidenschaftlich gerne mit den Themen Software Entwicklung und seit neuestem auch mit Server Administration 💻.
                        Neben meiner technischen Seite, trage ich auch eine große Faszination für die Luftfahrt ✈️ in mir.
                        Wenn du mehr über mich wissen möchtest schau dich hier gerne um ;)
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
