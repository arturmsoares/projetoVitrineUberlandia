import React, { useState } from 'react'
import './Header.css'
 
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className='header-container'>
        <img src="/logoVitrineUberlandia.png" alt="logo" />
        
        {/* Botão hambúrguer para mobile */}
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <nav className={`nav-header ${isMenuOpen ? 'active' : ''}`}>
            <ul>
                <li>
                    <a href="#" onClick={() => setIsMenuOpen(false)}>Divulgações</a>
                </li>
                <li>
                    <a href="#" onClick={() => setIsMenuOpen(false)}>Métricas</a>
                </li>
                <li>
                    <a href="#" onClick={() => setIsMenuOpen(false)}>Depoimentos</a>
                </li>
                <li>
                    <a href="#" onClick={() => setIsMenuOpen(false)}>Parcerias</a>
                </li>
                <li>
                    <a href="#" onClick={() => setIsMenuOpen(false)}>Faq</a>
                </li>
                <li>
                    <a href="#" onClick={() => setIsMenuOpen(false)}>Entre em Contato</a>
                </li>
            </ul>
        </nav>
    </section>
  )
}

export default Header