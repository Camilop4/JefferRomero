import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

import style from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log('toggle menu called');
    setMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // Cierra el menú después de hacer clic en un enlace
    }
  };

  return (
    <header className={style.Header}>
      <p>Jeffer Camilo Romero</p>
      <div className={style.Container}>
        <button onClick={toggleMenu} className={style.Boton}>
          <FaBars className={style.Img}/>
        </button>
        {isMenuOpen && (
          <nav className={style.Navega}>
            
              <span>
                <Link onClick={() => scrollToSection('About')}>Acerca de</Link>
              </span>
              <span>
                <Link onClick={() => scrollToSection('Skill')}>Habilidades</Link>
              </span>
              <span>
                <Link onClick={() => scrollToSection('Project')}>Proyectos</Link>
              </span>
              <span>
                <Link onClick={() => scrollToSection('Contact')}>Contacto</Link>
              </span>
            
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;


