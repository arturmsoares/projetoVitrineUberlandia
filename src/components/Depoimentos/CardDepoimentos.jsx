import React from 'react';
import './TestimonialCard.css';

const CardDepoimentos = ({ depoimento, nome, avatar }) => {
  return (
    <div className="testimonial-card">
      <p className="testimonial-quote">"{depoimento}"</p>
      <div className="testimonial-author">
        <img src={avatar} alt={`Avatar de ${nome}`} className="author-avatar" />
        <span className="author-name">{nome}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;