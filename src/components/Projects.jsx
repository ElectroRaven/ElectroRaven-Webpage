import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import leapImage from '../assets/LeapBannerTransparent.png';
import bahnlyImage from '../assets/BahnlyBanner.png';
import koroLearnImage from '../assets/KoroLearnBanner.png';

const projects = [
    {
        title: "Bahnly - Bahnhofsnavigator",
        description: "Ein innovativer Bahnhofsnavigator, der Nutzern hilft, sich in Bahnhöfen zurechtzufinden. Mit einer benutzerfreundlichen Oberfläche und Echtzeitdaten bietet Bahnly eine nahtlose Erfahrung für Reisende.",
        tags: ["Mobile App", "Navigation", "Real-time"],
        link: "#", // Placeholder
        image: bahnlyImage,
    },
    {
        title: "KoroLearn - Koreanisch Lernplattform",
        description: "Eine Plattform zum Lernen der koreanischen Sprache.",
        tags: ["Education", "Language", "Web"],
        link: "https://electroraven.pages.dev/Korea/koreastartpage.html",
        image: koroLearnImage,
    },
    {
        title: "Leap",
        description: "Eine eigens entwickelte, anfängerorientierte Programmiersprache. Mit selbst designtem Syntax und einem eigens entwickelten Interpreter Plugin in VSC.",
        tags: ["Compiler", "Language Design", "Education"],
        link: "#",
        image: leapImage
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="heading">Projekte</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="card"
                            whileHover={{ y: -5 }}
                            style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '1rem' }}
                        >
                            <div style={{
                                height: '120px',
                                backgroundColor: 'var(--bg-secondary)',
                                borderRadius: '0.5rem',
                                marginBottom: '0.75rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--text-secondary)',
                                overflow: 'hidden'
                            }}>
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'contain',
                                            padding: '1rem'
                                        }}
                                    />
                                ) : (
                                    <span>Project Image</span>
                                )}
                            </div>
                            <h3 style={{ fontSize: '1.1rem', marginTop: 0, marginBottom: '0.5rem' }}>{project.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', flex: 1, fontSize: '0.9rem', marginBottom: '0.5rem' }}>{project.description}</p>
                            <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap', margin: '0.5rem 0' }}>
                                {project.tags.map(tag => (
                                    <span key={tag} style={{
                                        fontSize: '0.8rem',
                                        padding: '0.2rem 0.6rem',
                                        borderRadius: '999px',
                                        backgroundColor: 'var(--bg-primary)',
                                        border: '1px solid var(--border)'
                                    }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div style={{ marginTop: 'auto' }}>
                                <a href={project.link} target="_blank" rel="noreferrer" className="btn" style={{ width: '100%', justifyContent: 'center' }}>
                                    View Project <ExternalLink size={16} style={{ marginLeft: '0.5rem' }} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
