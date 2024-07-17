// ProjectCard.jsx
import React, { useState, useEffect } from 'react';
import quizStill from '../assets/qzss.png';
import quizGif from '../assets/qz.gif';
import apartmentStill from '../assets/apss.png';
import apartmentGif from '../assets/app.gif';
import bladeBrawlerStill from '../assets/bbss.png';
import bladeBrawlerGif from '../assets/samurai.gif';
import notesStill from '../assets/note-ss.png';
import notesGif from '../assets/notes.gif';
import chefStill from '../assets/chef-ss.png';
import chefGif from '../assets/chefs-choice.gif';
import './ProjectCard.css';

const ProjectCard = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    const projects = [
        {
            title: "Chef's Choice",
            description: "A meal subscription app",
            longDescription: "A meal Subscription App that offers a convenient way to plan and enjoy delicious, home-cooked meals. Choose from a variety of meal plans tailored to your dietary preferences and receive fresh, pre-portioned ingredients delivered to your door.",
            skills: ["Node", "TypeScript", "React", "Express", "MongoDB"],
            image: chefStill,
            gif: chefGif,
            sourceLink: "https://github.com/Developers-Challenge/Theta",
        },
        {
            title: "Blade Brawler",
            description: "A 2d duel fighting game",
            longDescription: "Blade Brawler is an exciting 2D duel fighting game where players engage in intense sword battles. Test your reflexes and strategy as you face off against opponents in thrilling combat.",
            skills: ["JavaScript", "GSAP"],
            image: bladeBrawlerStill,
            gif: bladeBrawlerGif,
            sourceLink: "https://github.com/gb-webdev/blade-brawler",
            liveLink: "https://blade-brawler.netlify.app"
        },
        {
            title: "Quizard",
            description: "A flashcard and quiz application, sprinkled with some game elements",
            longDescription: "Quizard is an interactive flashcard and quiz application designed to make learning fun. With added game elements, it provides an engaging way to study and test your knowledge on various subjects.",
            skills: ["Ruby on Rails", "PostgreSQL", "React", "GSAP"],
            image: quizStill,
            gif: quizGif,
            backendSource: "https://github.com/learn-stack-rgb/quizard-backend",
            frontendSource: "https://github.com/learn-stack-rgb/quizard-frontend",
            liveLink: "https://quizard-u7md.onrender.com/"
        },
        {
            title: "Notes App",
            description: "A longterm Notes app project with many planned features",
            longDescription: "The Notes App is a versatile tool for organizing your thoughts and tasks.",
            skills: ["Node", "TypeScript", "React", "Express"],
            image: notesStill,
            gif: notesGif,
            sourceLink: "https://github.com/gb-webdev/Notes"
        },
        {
            title: "Apartment Finder",
            description: "An apartment app, find a place to rent, or manage your own properties.",
            longDescription: "Apartment Finder is a comprehensive application that helps users find rental properties and allows property owners to manage their listings. It streamlines the process of apartment hunting and property management.",
            skills: ["Ruby on Rails", "PostgreSQL", "React"],
            image: apartmentStill,
            gif: apartmentGif,
            backendSource: "https://github.com/learn-academy-2023-echo/apartment-app-backend-zilflowlist",
            frontendSource: "https://github.com/learn-academy-2023-echo/apartment-app-frontend-zilflowlist"
        }
    ];

    useEffect(() => {
        const images = projects.map(project => {
            const img = new Image();
            img.src = project.gif;
            return img;
        });

        Promise.all(images.map(img => img.decode()))
            .then(() => setImagesLoaded(true))
            .catch(err => console.log("Failed to load images", err));
    }, []);

    const openModal = (project) => {
        setSelectedProject(project);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedProject(null);
    };

    return (
        <div className='card-container'>
            {projects.map((project, index) => (
                <div className='card' key={index}>
                    <img
                        className='proj-img'
                        src={project.image}
                        alt={`Image of the ${project.title} application`}
                    />
                    <h3 className='card-title'>{project.title}</h3>
                    <p className='card-description'>{project.description}</p>
                    <ul className='card-skills'>
                        {project.skills.map((skill, skillIndex) => (
                            <li className='proj-skill' key={skillIndex}>{skill}</li>
                        ))}
                    </ul>
                    <button className='see-more-btn' onClick={() => openModal(project)}>See More</button>
                </div>
            ))}

            {modalOpen && selectedProject && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <span className="close-button" onClick={closeModal}>&times;</span>
                        <h2>{selectedProject.title}</h2>
                        <img
                            className='modal-gif'
                            src={selectedProject.gif}
                            alt={`GIF of the ${selectedProject.title} application`}
                        />
                        <p>{selectedProject.longDescription}</p>
                        <h4>Technologies:</h4>
                        <ul className='modal-skills'>
                            {selectedProject.skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                        <div className='modal-links'>
                            {selectedProject.sourceLink && (
                                <a className='proj-card-link' href={selectedProject.sourceLink} target='_blank' rel='noopener noreferrer'>Source</a>
                            )}
                            {selectedProject.backendSource && (
                                <a className='proj-card-link' href={selectedProject.backendSource} target='_blank' rel='noopener noreferrer'>B-E Source</a>
                            )}
                            {selectedProject.frontendSource && (
                                <a className='proj-card-link' href={selectedProject.frontendSource} target='_blank' rel='noopener noreferrer'>F-E Source</a>
                            )}
                            {selectedProject.liveLink && (
                                <a className='proj-card-link' href={selectedProject.liveLink} target='_blank' rel='noopener noreferrer'>Play!</a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectCard;