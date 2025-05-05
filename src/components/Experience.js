import React, { useState, useEffect, useRef } from 'react';
import '../Styles/Experience.css';

const experiences = [
  {
    title: 'Volunteered and member of Microsoft club',
    company: 'Microsoft Club VIT Bhopal',
    duration: '2023 - 2024',
    description:'Acquired valuable experience in collaborative team tasks, event organization, and efficient workflow management, enhancing leadership, communication, and problem-solving skills in dynamic environments.',
  },
  {
    title: 'Internship and Training',
    company: 'LearnFlu',
    duration: '2023 - 2024',
    description:'Gained practical experience in AI and ML programming using Python, focusing on advanced statistical methods and techniques to develop innovative solutions across various domains.',
  },
  {
    title: 'Core member of FreeLancing Club',
    company: 'FreeLancing Club VIT Bhopal',
    duration: '2024 - 2025',
    description:'Contributed to the FreeLancing Club at VIT Bhopal, gaining hands-on experience in project management, client communication, and teamwork while enhancing my skills in freelancing and entrepreneurship.',
  },
];

export const Experience = () => {
  const [stars, setStars] = useState([]);
  const containerRef = useRef(null);
  
  // Create a new star object with random properties
  const createStar = (x, y) => {
    // Different size ranges for more variety
    // User-created stars are slightly larger for better visibility
    const size = x !== undefined 
      ? Math.random() * 4 + 2 // Larger for click-generated stars (2-6px)
      : Math.random() * 3 + 1; // Smaller for background stars (1-4px)
    
    // Generate a unique ID for each star
    const uniqueId = Math.random().toString(36).substring(2, 9) + Date.now().toString(36);
    
    return {
      id: uniqueId,
      x: x !== undefined ? x : Math.random() * 100, // % position
      y: y !== undefined ? y : Math.random() * 100, // % position
      size,
      opacity: Math.random() * 0.7 + 0.3, // Random opacity between 0.3 and 1
      animationDuration: Math.random() * 3 + 2, // Random duration between 2-5s
      // Add slight color variation
      color: Math.random() > 0.7 ? '#fffcdd' : Math.random() > 0.5 ? '#e8f7ff' : '#fff',
    };
  };
  
  // Handle click to create a new star
  const handleBackgroundClick = (e) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    // Create 3 stars at the click position with slight offsets for a burst effect
    const newStars = [
      createStar(x, y),
      createStar(x + 0.5, y - 0.5),
      createStar(x - 0.7, y + 0.3)
    ];
    
    console.log("Creating new stars at:", x, y);
    setStars(prevStars => [...prevStars, ...newStars]);
  };
  
  // Generate initial stars
  useEffect(() => {
    // Function to generate initial stars
    const generateInitialStars = () => {
      const starCount = 150; // Increased number of stars for better visibility
      const newStars = [];
      
      for (let i = 0; i < starCount; i++) {
        newStars.push(createStar());
      }
      
      setStars(newStars);
    };
    
    // Generate stars when component mounts
    generateInitialStars();
    
    // Log to verify stars are being created
    console.log("Generated initial stars:", 150);
    
    // Setup animation loop for twinkling effect
    const twinkleInterval = setInterval(() => {
      setStars(prevStars => 
        prevStars.map(star => ({
          ...star,
          opacity: Math.random() * 0.7 + 0.3 // Random opacity between 0.3 and 1
        }))
      );
    }, 1500); // Slightly slower twinkling
    
    return () => clearInterval(twinkleInterval);
  }, []);

  return (
    <div 
      className="experience-container" 
      ref={containerRef}
      onClick={handleBackgroundClick}
    >
      {/* Stars background */}
      <div className="stars-background">
        {stars.map(star => (
          <div
            key={star.id}
            className="star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              backgroundColor: star.color || '#fff',
              animationDuration: `${star.animationDuration}s`,
              '--opacity': star.opacity, // CSS variable for animation
            }}
          />
        ))}
      </div>
      
      <h2 className="experience-title">My Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-content">
              <h3>{exp.title}</h3>
              <p><strong>Company / Organisation:</strong> {exp.company}</p>
              <p><strong>Duration:</strong> {exp.duration}</p>
              <p><strong>Description:</strong> {exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};