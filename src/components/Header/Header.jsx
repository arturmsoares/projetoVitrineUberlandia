import React from 'react'
import './Header.css'
 
const Header = () => {
  return (
    <section className='header-container'>
        <img src="/logoVitrineUberlandia.png" alt="logo" />
        <nav className='nav-header'>
            <ul>
                <li>
                    <a href="#">Divulgações</a>
                </li>
                <li>
                    <a href="#">Métricas</a>
                </li>
                <li>
                    <a href="#">Depoimentos</a>
                </li>
                <li>
                    <a href="#">Parcerias</a>
                </li>
                <li>
                    <a href="#">Faq</a>
                </li>
                <li>
                    <a href="#">Entre em Contato</a>
                </li>
            </ul>
        </nav>
    </section>
  )
}

export default Header