import React from 'react';
import style from '../Components/Exercicio.module.css';
import desenvolva from '../assets/desenvolva.svg';
import Memoria from '../assets/JogoMemoria.svg'
import Espelho from '../assets/Espelho.svg'
import Header from './Header';
import { Link } from 'react-router-dom';

function App() {    
    return (
        <>
       <Header/>
        <div className={style.App}>
            <div className={style.parte1Exercicio}>
                <div className={style.parte1EsquerdaExercicio}>
                    <object className={style.pacesAnimado} type="image/svg+xml" data={desenvolva}></object>
                </div>
                <div className={style.parte1DireitaExercicio}>
                    <h3>Exercícios estimulantes!</h3>
                    <p>Aqui você encontrará exercícios para estimular o cerébro com jogos divertidos e dinâmicos!</p>
                </div>
            </div>

            <div className={style.parte2Exercicio}>
                <h3 className={style.selecionarMundo}>Selecione um <span style={{ color: 'rgb(255, 218, 53)' }}>Jogo</span></h3>
                <div className={style.pacotes}>
                    <Link to = {'/MemoryGame'}>
                    <div className={style.pacoteMundos}>
                        <h3>Jogo da <br /><span style={{ color: 'rgba(62, 164, 14, 1)' }}>Memória</span></h3>
                        <img src={Memoria} className={style.Memoria} alt="Gaby" />
                        <a href="#MemoryGame">Acessar!</a>
                    </div>
                    </Link>
                   <Link to = {'/ExpressionMirror'}>
                   <div className={style.pacoteMundos}>
                        <h3>Jogo do <br /><span style={{ color: 'rgba(188, 170, 10, 1)' }}>Espelho</span></h3>
                        <img src={Espelho} className={style.Memoria} alt="Gaby" />
                        <a href="#ExpressionMirror">Acessar!</a>
                    </div>
                   </Link>
                   
                </div>

                <div className={style.parte3Exercicio}>
                    <p className={style.pack1}>O <span style={{ color: 'rgb(60, 164, 12)', textShadow: 'none', fontWeight: 'bold' }}>O jogo da memória</span> é vital para crianças com paralisia cerebral, melhorando cognição e coordenação.</p>
                    <p className={style.pack2}>O <span style={{ color: 'rgb(179, 151, 11)', textShadow: 'none', fontWeight: 'bold' }}>O jogo do espelho</span> é essencial para crianças com paralisia cerebral, promovendo autoconsciência e coordenação.</p>
                </div>

                </div>
 
        </div>
        </>
    );
}

export default App;
