import React from 'react';
import style from '../Components/TelaIncial.module.css'; 
import logo1 from '../assets/paces.svg';
import logo2 from '../assets/paces2.svg';
import gaby1 from '../assets/gaby1.png';
import gaby2 from '../assets/gaby2.png';
import unidos from '../assets/unidos.png';
import dados from '../assets/dados.png';
import bolha2 from '../assets/bolha2.svg';
import bolha3 from '../assets/bolha3.svg';
import seguro from '../assets/seguro.png';
import Memoria from '../assets/JogoMemoria.svg'
import thumbnail from '../assets/thumbnail.jpg'
import mundoGira from '../assets/mundoGirassol.jpg'
import CapaVideo from '../assets/CapaVideos.png'
import Espelho from '../assets/Espelho.svg'
import Header from './Header';
import { Link } from 'react-router-dom';

function TelaIncial() {
    return (
        <>
        <Header/>
        <div className={style.App}>

            <div className={style.parte1}>
                <div className={style.parte1Esquerda}>
                    <object className={style.pacesAnimado} type="image/svg+xml" data={logo1}></object>
                    <a>Clique e descubra!</a>
                </div>
                <div className={style.parte1Direita}>
                    <h3>Objetivos virtuosos!</h3>
                    <p>Com o objetivo de estimular o desenvolvimento das crianças com paralisia cerebral, oferecemos interações que podem ajudar os cuidadores a guiarem pequenos passos com amor e tranquilidade.</p>
                </div>
            </div>

            <div className={style.parte2}>
                <div className={style.parte2Esquerda}>
                    <h3>Conheça a <br /><span style={{ color: 'rgba(85, 190, 127, 1)' }}>PACES</span>!</h3>
                    <p>Conheça os serviços que oferecemos dentro da plataforma, siga o próximo passo!</p>
                </div>
                <div className={style.parte2Direita}>
                    <img src={gaby1} alt="Gaby" />
                </div>
            </div>

            <div className={style.parte3}>
                <div className={style.parte3Esquerda}>
                    <object className={style.pacesAnimado2} type="image/svg+xml" data={logo2}></object>
                    <h3>Porque</h3>
                    <h3>Pequenos</h3>
                    <h3>Passos</h3>
                    <h3><span style={{ color: 'rgba(142, 81, 221, 1)' }}>Importam</span></h3>
                </div>
                <div className={style.parte3Direita}>
                    <h3>Vídeos para desenvolver!</h3>
                    <p>Conheça os pacotes de vídeos produzidos por profissionais especializados que vão auxiliar a família inteira!</p>
                    <p id="sementinhas">O <span style={{ color: 'rgba(83, 202, 28, 1)' }}>Mundo Sementinhas</span> contém pacotes de vídeos para o desenvolvimento de crianças com paralisia cerebral.</p>
                    <p id="girassol">O <span style={{ color: 'rgba(223, 202, 11, 1)' }}>Mundo Girassol</span> é dedicado aos pais que buscam qualquer tipo de apoio.</p>
                </div>
            </div>

            <div className={style.parte4}>
                <h3>Acesse os vídeos de <span style={{ color: 'rgba(222, 239, 17, 1)' }}>desenvolvimento</span>!</h3>
                <div className={style.pacotes}>
                    <Link to = {'/Sementinha'}>
                        <div className={style.pacoteMundos}>
                            <h3>Mundo <br /><span style={{ color: 'rgba(62, 164, 14, 1)' }}>Sementinhas</span></h3>
                            <img src={thumbnail} className={style.gaby2} alt="Gaby" />
                            <a>Acessar!</a>
                        </div>
                    </Link>
                   
                   <Link to = {'/Girassol'}>
                   <div className={style.pacoteMundos}>
                        <h3>Mundo <br /><span style={{ color: 'rgba(188, 170, 10, 1)' }}>Girassol</span></h3>
                        <img src={mundoGira} className={style.gaby2} alt="Gaby" />
                        <a>Acessar!</a>
                    </div>
                   </Link>
                   
                </div>
                <div className={style.parte5}>
                    <h3>PRINCIPAIS <span style={{ color: 'rgba(4, 98, 98, 1)' }}>VÍDEOS</span></h3>
                    <p>Confira os principais vídeos da semana!</p>
                    <div className={style.botaoContainer}>
                        <button className={style.botao}>Sementinhas</button>
                        <button className={style.botao}>Girassol</button>
                    </div>
                    <article>
                        <div className={style.video1}>
                        <video controls poster={CapaVideo}>    
                        <source type='video/mp4' src={'https://paces-videos.s3.amazonaws.com/fisioterapia/videoLuana.mp4'}/>   
                         </video>
                        </div>
                        <div className={style.video1}>
                        <video controls  poster={CapaVideo}>    
                        <source type='video/mp4' src={'https://paces-videos.s3.amazonaws.com/educadores/videoGisele.mp4'}/>   
                         </video>
                        </div>
                        <div className={style.video1}>
                        <video controls  poster={CapaVideo}>    
                        <source type='video/mp4' src={'https://paces-videos.s3.amazonaws.com/educadores/Rafael.mp4'}/>   
                         </video>
                        </div>
                        
                    </article>
                </div>
            </div>

            <img src={bolha2} className={style.bolha} alt="Bolha" />

            <div className={style.parte6}>
                <h3>JOGOS ESTIMULANTES!</h3>
                <p>Aqui as crianças podem estimular o aprendizado enquanto se divertem! Separamos alguns jogos que ajudará nisso, confira!</p>
                <article>
                    <div className={style.joguinho}><img src={Memoria} alt="" /></div>
                    <div className={style.joguinho}><img src={Espelho} alt="" /></div>
                </article>
            </div>

            <img src={bolha3} className={style.bolha} alt="Bolha" />

            <h3 className={style.nossosValores}>NOSSOS <span style={{ color: 'rgba(4, 98, 98, 1)' }}>VALORES</span></h3>
            <p className={style.principaisVideos}>Confira os principais vídeos da semana!</p>
            <section className={style.parte7}>
                <div /* className={style.dadosfade-in} */>
                    <img src={dados} alt="Dados" />
                    <h3>Baseado em Dados</h3>
                    <p>Nos baseamos em estatísticas, <br /> dados confiáveis e aprovações <br /> profissionais para transmitir <br /> nossas informações.</p>
                </div>
                <div className={style.coluna}></div>
                <div /* className={style.unidosfade-in} */>
                    <img src={unidos} alt="Unidos" />
                    <h3>Baseado em Dados</h3>
                    <p>Nossa união é uma essência, <br /> acesse nossa comunidade <br /> disponível na plataforma e <br /> interaja com outras pessoas!</p>
                </div>
                <div className={style.coluna}></div>
                <div /* className={style.segurofade-in} */>
                    <img src={seguro} alt="Seguro" />
                    <h3>Baseado em Dados</h3>
                    <p>Asseguramos que dentro da <br /> nossa plataforma suas <br /> informações estarão protegidas <br /> e todo o conteúdo é autêntico!</p>
                </div>
            </section>

        </div>
        </>
    );
   
}

export default TelaIncial;
