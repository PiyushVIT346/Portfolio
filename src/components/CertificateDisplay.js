import React from 'react';
import '../Styles/CertificatePage.css';

// Import images from src/assets/img
import certificate1 from '../assets/img/vityarthi.jpg';
import certificate2 from '../assets/img/CPP.jpg';
import certificate3 from '../assets/img/dsa.jpg';
import certificate4 from '../assets/img/ai.jpg';
import certificate5 from '../assets/img/computerVision.jpg';
import certificate6 from '../assets/img/CPP.jpg';
import certificate7 from '../assets/img/fundAI.jpg';
import certificate8 from '../assets/img/ML_kaggle.jpg';
import certificate9 from '../assets/img/ReactJS.jpg';
import certificate10 from '../assets/img/software.jpg';
import certificate11 from '../assets/img/hackCertificate.jpg';
import certificate12 from '../assets/img/OllamaCertificate.jpg';
import certificate13 from '../assets/img/freeLancingClub.jpg';

export const CertificatePage = () => {
  const certificates = [
    {
      title: 'Python Essential',
      issuer: 'Vityarthi',
      image: certificate1,
      description: 'A certification of Python covering DS and OOPs',
    },
    {
      title: 'C++',
      issuer: 'Skill Up',
      image: certificate2,
      description: 'Comprises the basics of C++ and OOPs concepts.',
    },
    {
      title: 'DSA Job Ready',
      issuer: 'Skill Up',
      image: certificate3,
      description:
        'Course comprises basic data structures, covering algorithms and coding of various structures.',
    },
    {
      title: 'AI with Python',
      issuer: 'Great Learning',
      image: certificate4,
      description:
        'Learned coding related to training and building models and other AI algorithms.',
    },
    {
      title: 'Computer Vision Essential',
      issuer: 'Great Learning',
      image: certificate5,
      description: 'Learned different modules of computer vision using Python.',
    },
    {
      title: 'Advanced C++',
      issuer: 'Skill Up',
      image: certificate6,
      description:
        'Learned graphics and advanced topics such as threading and iterators in C++.',
    },
    {
      title: 'Fundamentals of AI and ML',
      issuer: 'Vityarthi',
      image: certificate7,
      description:
        'Mastered the basics of AI and explored various models and techniques used in AI.',
    },
    {
      title: 'Intermediate ML',
      issuer: 'Kaggle',
      image: certificate8,
      description:
        'Explored advanced models and covered basics of NLP and computer vision.',
    },
    {
      title: 'ReactJS',
      issuer: 'Great Learning',
      image: certificate9,
      description:
        'Learned web development using ReactJS and built three minor projects.',
    },
    {
      title: 'Software',
      issuer: 'HackerRank',
      image: certificate10,
      description: 'Passed the software test conducted by HackerRank.',
    },
    {
      title: 'Hackathon',
      issuer: 'VIT Bhopal',
      image: certificate11,
      description:'Participated in a hackathon organized by VIT Bhopal.',
    },
    {
      title: 'Ollama',
      issuer: 'Udemy',
      image: certificate12,
      description:
        'Learned about the Ollama platform and RAG.',
    },
    {
      title: 'FreeLancing Club Letter',
      issuer: 'VIT Bhopal',
      image: certificate13,
      description:
        'Become the core member of the FreeLancing Club at VIT Bhopal.',
    },
  ];

  return (
    <div className="certificate-page-container">
      <h1 className="certificate-page-title">My Certificates</h1>
      <div className="certificate-page-grid">
        {certificates.map((certificate, index) => (
          <div key={index} className="certificate-card">
            <div className="certificate-thread"></div>
            <div className="certificate-knot"></div>
            <div className="certificate-thread-line"></div>
            <img
              src={certificate.image}
              alt={certificate.title}
              className="certificate-image"
            />
            <div className="certificate-overlay">
              <h3 className="certificate-name">{certificate.title}</h3>
              <p className="certificate-issuer">{certificate.issuer}</p>
              <p className="certificate-description">
                {certificate.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
