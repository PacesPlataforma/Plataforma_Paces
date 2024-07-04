import React, { useEffect, useRef } from 'react';
import style from './Header.module.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Header() {
    const navRef = useRef(null);
    const menuToggleRef = useRef(null);

    useEffect(() => {
        const nav = navRef.current;
        const menuToggle = menuToggleRef.current;

        const handleMenuToggleClick = () => {
            nav.classList.toggle(style.active);
        };

        menuToggle.addEventListener('click', handleMenuToggleClick);

        return () => {
            menuToggle.removeEventListener('click', handleMenuToggleClick);
        };
    }, []);

    useEffect(() => {
        const navLinks = document.querySelectorAll(`.${style.navLinks} a`);

        const handleLinkClick = (event) => {
            navLinks.forEach(link => link.classList.remove(style.active));
            event.currentTarget.classList.add(style.active);
        };

        navLinks.forEach(link => {
            link.addEventListener('click', handleLinkClick);
        });

        return () => {
            navLinks.forEach(link => {
                link.removeEventListener('click', handleLinkClick);
            });
        };
    }, []);

    return (
        <>
            <header>
                <nav ref={navRef}>
                    <Link to={'/TelaInicial'}>
                        <div className={style.logo}>
                            <img src={logo} alt="Logo" />
                        </div>
                    </Link>

                    <div className={style.menuToggle} ref={menuToggleRef}>
                        <span className={style.bar}></span>
                        <span className={style.bar}></span>
                        <span className={style.bar}></span>
                    </div>

                    <ul className={style.navLinks}>
                        <div id={style.navOpc}>
                            <Link to={'/TelaInicial'}>
                                <li>Início</li>
                            </Link>
                            <Link to={'/SelecaoPacotes'}>
                                <li>Vídeos</li>
                            </Link>
                            <Link to={'/Exercicio'}>
                                <li>Exercícios</li>
                            </Link>
                            <Link to={'/Profissionais'}>
                                <li>Profissionais</li>
                            </Link>
                        
                                <li>Comunidade</li>
                            
                            <Link to={'/SobreNos'}>
                                <li>Sobre</li>
                            </Link>
                            <Link to={'/Login'}>
                                <li>Login</li>
                            </Link>
                        </div>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;
