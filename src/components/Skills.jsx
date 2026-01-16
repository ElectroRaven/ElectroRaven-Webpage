import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const skills = [
    "C#",
    "Java",
    "Kotlin",
    "Android-Development",
    "Web-Development",
    "SQL"
];

const Skills = () => {
    const [showWebSkills, setShowWebSkills] = useState(false);

    const handleSkillClick = (skill) => {
        if (skill === "Web-Development") {
            setShowWebSkills(true);
        }
    };

    return (
        <section id="skills" className="section" style={{ position: 'relative' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="heading">Skills</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                    gap: '1.5rem'
                }}>
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="card"
                            onClick={() => handleSkillClick(skill)}
                            style={{
                                textAlign: 'center',
                                padding: '2rem 1rem',
                                fontWeight: 600,
                                color: 'var(--text-primary)',
                                background: 'var(--bg-secondary)', // Slightly different bg for contrast
                                border: 'none',
                                cursor: skill === "Web-Development" ? 'pointer' : 'default'
                            }}
                            whileHover={skill === "Web-Development" ? { scale: 1.05 } : {}}
                        >
                            {skill}
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <AnimatePresence>
                {showWebSkills && (
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        zIndex: 100,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '1rem'
                    }} onClick={() => setShowWebSkills(false)}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            style={{
                                backgroundColor: 'var(--card-bg)',
                                padding: '2rem',
                                borderRadius: '1rem',
                                border: '1px solid var(--border)',
                                maxWidth: '400px',
                                width: '100%',
                                position: 'relative',
                                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setShowWebSkills(false)}
                                style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    color: 'var(--text-secondary)'
                                }}
                            >
                                <X size={24} />
                            </button>
                            <h3 style={{ marginTop: 0, marginBottom: '1.5rem', color: 'var(--accent)' }}>Web-Development</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                {["HTML", "CSS", "Javascript", "React", "NodeJS"].map(subSkill => (
                                    <span key={subSkill} style={{
                                        padding: '0.5rem 1rem',
                                        backgroundColor: 'var(--bg-secondary)',
                                        borderRadius: '999px',
                                        fontSize: '0.9rem',
                                        fontWeight: 500
                                    }}>
                                        {subSkill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Skills;
