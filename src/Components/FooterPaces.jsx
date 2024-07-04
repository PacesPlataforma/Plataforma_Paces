import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import redes from '../assets/redessociais.png';
import './FooterPaces.css'

function FooterPaces() {

    return (
            <footer className='footer_bolha'>
                <div className='footer_esquerda'>
                    <div className='footer_esquerda1'></div>
                    <div className='footer_esquerda2'>

                    </div>
                    <div className='footer_esquerda3'>
                        <img src={logo} className='footer_logo'/>
                    </div>
                    <div className='footer_esquerda4'>
                        <a className='acesse_linktree'>Acesse nosso Linktree!</a>
                        <img src={redes} className='redes_sociais_footer' />
                    </div>
                </div>

                <div className='footer_direita'>
                    <div className='footer_direita1'>
                        <div className='footer_direita2'></div>
                        <div className='footer_direita3'>
                            <h3 className='navegue_h3'>Outros</h3>
                            <a className='listagem_footer'>Mundo Sementinhas</a>
                            <a className='listagem_footer'>Mundo Girassol</a>
                            <a className='listagem_footer'>Agendar sessões</a>
                            <a className='listagem_footer'>Jogos estimulantes</a>
                            <a className='listagem_footer'>Comunidade</a>
                        </div>
                        <div className='footer_direita4'>
                        <h3 className='navegue_h3'>Navegue Aqui</h3>
                            <a className='listagem_footer'>Início</a>
                            <a className='listagem_footer'>Vídeos</a>
                            <a className='listagem_footer'>Exercícios</a>
                            <a className='listagem_footer'>Profissionais</a>
                            <a className='listagem_footer'>Sobre</a>
                        </div>
                    </div>
                </div>
            </footer>
    );
}

export default FooterPaces;
