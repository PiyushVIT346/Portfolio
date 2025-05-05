import React, { useEffect, useRef } from 'react';
import cppImage from '../assets/img/cpp2.png';
import pythonImage from '../assets/img/python2.png';
import htmlImage from '../assets/img/html2.png';
import jsImage from '../assets/img/js2.png';
import reactImage from '../assets/img/react2.png';
import mlImage from '../assets/img/ml2.png';
import genAIImage from '../assets/img/genAI2.png';
import langchainImage from '../assets/img/langchain.png';
import characterImage from '../assets/img/myPhoto.jpg';
import 'animate.css';
import '../Styles/DisplayImage.css';

export const DisplayImage = () => {
  const containerRef = useRef(null);
  const orbitRef = useRef(null);
  const charRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        containerRef.current.style.backgroundPosition = `${x * 100}% ${y * 100}%`;

        const moveX = (x - 0.5) * 50;
        const moveY = (y - 0.5) * 50;
        if (charRef.current) {
          charRef.current.style.transform = `translate(-50%, -50%) rotateX(${moveY}deg) rotateY(${moveX}deg)`;
        }

        if (orbitRef.current) {
          const moveOrbitX = (x - 0.5) * 30;
          const moveOrbitY = (y - 0.5) * 30;
          orbitRef.current.style.transform = `translate(-50%, -50%) rotateX(${moveOrbitY}deg) rotateY(${moveOrbitX}deg)`;
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const skills = [
    { img: cppImage, alt: 'C++' },
    { img: pythonImage, alt: 'Python' },
    { img: htmlImage, alt: 'HTML' },
    { img: jsImage, alt: 'JavaScript' },
    { img: reactImage, alt: 'React' },
    { img: mlImage, alt: 'Machine Learning' },
    { img: genAIImage, alt: 'Generative AI' },
    { img: langchainImage, alt: 'LangChain' },
  ];

  return (
    <>
      <div className="luxury-container" ref={containerRef}>
        
        
        <div className="luxury-text animate__animated animate__fadeInUp">
          <h2>Piyush Singh</h2>
          <p>AI Enthusiast and Web Developer</p>
          
          {/* Education Section */}
          <div className="luxury-education">
            <div className="luxury-education-line"></div>
            <div className="luxury-education-box">
              <h3>Education</h3>
              <ul>
                <li>High School : Vanasthali Public School</li>
                <li>Senior Secondary : Vanasthali Public School</li>
                <li>B.Tech CSE AIML : VIT Bhopal University </li>
              </ul>
            </div>
          </div>
          
          {/* Experience Section - Now placed below education */}
          <div className="luxury-experience">
            <div className="luxury-experience-line"></div>
            <div className="luxury-experience-box">
              <h3>Experience</h3>
              <ul>
                <li>Internship at LearnFlu 3-month internship</li>
                <li>FreeLancing Club Core member VIT Bhopal</li>
                <li>Member in Microsoft Club VIT Bhopal</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="luxury-orbit" ref={orbitRef}>
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`luxury-orbit-item animate__animated animate__fadeIn`}
              style={{ animationDelay: `${index * 0.5}s` }}>
              <img src={skill.img} alt={skill.alt} />
            </div>
          ))}
        </div>

        <div className="luxury-3d-character" ref={charRef}>
          <img src={characterImage} alt="3D Character" />
        </div>
      </div>
    </>
  );
};