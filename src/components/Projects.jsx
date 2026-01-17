import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const basePath = import.meta.env.BASE_URL || '/';
    const projects = [
        {
            title: "Bahnly - Bahnhofsnavigator",
            description: "Ein innovativer Bahnhofsnavigator, der Nutzern hilft, sich in Bahnhöfen zurechtzufinden. Mit einer benutzerfreundlichen Oberfläche und Echtzeitdaten bietet Bahnly eine nahtlose Erfahrung für Reisende.",
            tags: ["Web App", "Navigation", "Real-time"],
            link: "#", // Placeholder
        },
        {
            title: "Korea Lernplattform",
            description: "Eine Plattform zum Lernen der koreanischen Sprache.",
            tags: ["Education", "Language", "Web"],
            link: `${basePath}Korea/koreastartpage.html`,
        },
        {
            title: "Leap",
            description: "Eine eigens entwickelte, anfängerorientierte Programmiersprache.",
            tags: ["Compiler", "Language Design", "Education"],
            link: "#",
        }
    ];

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
                                color: 'var(--text-secondary)'
                            }}>
                                {/* Image Placeholder */}
                                <span>Project Image</span>
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
