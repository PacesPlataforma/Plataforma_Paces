import React from 'react';
import style from '../Components/SelecaoPacotes.module.css';
import desenvolva from '../assets/desenvolva.svg';
import gaby2 from '../assets/gaby2.png';
import Header from './Header';
import thumbnail from '../assets/thumbnail.jpg'
import CapaVideo from '../assets/CapaVideos.png'

import mundoGira from '../assets/mundoGirassol.jpg'
import { Link } from 'react-router-dom';

function App() {
    return (
        <>
       <Header/>
        <div className={style.App}>
            <div className={style.parte1Selecao}>
                <div className={style.parte1EsquerdaSelecao}>
                    <object className={style.pacesAnimado} type="image/svg+xml" data={desenvolva}></object>
                </div>
                <div className={style.parte1DireitaSelecao}>
                    <h3>Vídeos auxiliares!</h3>
                    <p>Aqui você encontrará vídeos para ajudar na construção de diversas características para a família toda!</p>
                </div>
            </div>

            <div className={style.parte2Selecao}>
                <h3 className={style.selecionarMundo}>Selecione um <span style={{ color: 'rgb(255, 218, 53)' }}>Mundo</span></h3>
                <div className={style.pacotes}>
                    <Link to = {'/Sementinha'}>
                    <div className={style.pacoteMundos}>
                        <h3>Mundo <br /><span style={{ color: 'rgba(62, 164, 14, 1)' }}>Sementinhas</span></h3>
                        <img src={thumbnail} className={style.gaby2Selecao} alt="Gaby" />
                        <a href="#sementinhas">Acessar!</a>
                    </div>
                    </Link>
                   <Link to = {'/Girassol'}>
                   <div className={style.pacoteMundos}>
                        <h3>Mundo <br /><span style={{ color: 'rgba(188, 170, 10, 1)' }}>Girassol</span></h3>
                        <img src={mundoGira} className={style.gaby2Selecao} alt="Gaby" />
                        <a href="#girassol">Acessar!</a>
                    </div>
                   </Link>
                  
                </div>

                <div className={style.parte3Selecao}>
                    <p className={style.pack1}>O <span style={{ color: 'rgb(60, 164, 12)', textShadow: 'none', fontWeight: 'bold' }}>Mundo Sementinhas</span> contém pacotes de vídeos para o desenvolvimento de crianças com paralisia cerebral.</p>
                    <p className={style.pack2}>O <span style={{ color: 'rgb(179, 151, 11)', textShadow: 'none', fontWeight: 'bold' }}>Mundo Girassol</span> é dedicado aos pais que buscam qualquer tipo de apoio.</p>
                </div>

            </div>

        </div>
        </>
    );
}

export default App;
