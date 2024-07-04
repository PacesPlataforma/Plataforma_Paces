

import React, { useState } from 'react';
import style from '../Components/Sementinha.module.css';
import luana from '../assets/luana.jpg';
import daniela from '../assets/daniela.jpeg';
import gisele from '../assets/gisele.jpg';
import rafael from '../assets/rafael.jpg';
import VideosPreview from '../Components/VideosPreview.jsx';
import thumbnail from '../assets/thumbnail.jpg'
import florPaces from '../assets/BackgroundGira.svg'
import Header from './Header.jsx';
/* import videoRafael from 'https://paces-videos.s3.amazonaws.com/educadores/Rafael.mp4'
 */import CapaVideo from '../assets/CapaVideos.png'
/* import videoGisele from 'https://paces-videos.s3.amazonaws.com/educadores/videoGisele.mp4'
import videoLuana from 'https://paces-videos.s3.amazonaws.com/fisioterapia/videoLuana.mp4'
import videoDaniela from 'https://paces-videos.s3.amazonaws.com/fisioterapia/videoDaniela.mp4' */

function Sementinha() {
    const [profissionalAtivo, setProfissionalAtivo] = useState(null);

    const handleFiltroClick = (especialidadeId) => {
        const elementos = document.getElementsByClassName({Packvids});
        for (let i = 0; i < elementos.length; i++) {
            if (especialidadeId === 'g') { // 'g' para "Todos"
                elementos[i].style.display = 'block';
            } else if (elementos[i].id === especialidadeId) {
                elementos[i].style.display = 'block';
            } else {
                elementos[i].style.display = 'none';
            }
        }
        // Ao mudar o filtro, desativa o profissional ativo
        setProfissionalAtivo(null);
    };

    const handleDivClick = (especialidadeId) => {
        if (profissionalAtivo === especialidadeId) {
            setProfissionalAtivo(null); // Desativa o profissional se clicado novamente
        } else {
            setProfissionalAtivo(especialidadeId); // Ativa o novo profissional clicado
        }
    };

    return (
        <>
        <Header/>
        <div className={style.Sementinha}>
            <div className={style.Packparte1}>
                <h3><span style={{ color: 'rgba(4, 98, 98, 1)' }}><span style={{color: 'rgba(85, 191, 176, 1)'}}>MUNDO</span> SEMENTINHAS</span></h3>
                <p>Vídeos produzidos por profissionais especialmente para crianças com paralisia cerebral.</p>
            </div>

            <div className={style.filtrar}>
                    <a className={style.botaoFiltrar} onClick={() => handleFiltroClick('g')}>Todos</a>
                    <a className={style.botaoFiltrar} onClick={() => handleFiltroClick('a')}>Fisioterapia</a>
                    <a className={style.botaoFiltrar} onClick={() => handleFiltroClick('b')}>Fonoaudiologia</a>
                    <a className={style.botaoFiltrar} onClick={() => handleFiltroClick('c')}>Musicoterapia</a>
                    <a className={style.botaoFiltrar} onClick={() => handleFiltroClick('d')}>Terapia Ocupacional</a>
                    <a className={style.botaoFiltrar} onClick={() => handleFiltroClick('e')}>Psicologia</a>
                    <a className={style.botaoFiltrar} onClick={() => handleFiltroClick('f')}>Educação</a>
                </div>
            <div className={style.Packparte2}>
                <img src={florPaces} className={style.backgroundPackparte2} />


                <div id='a' className={style.Packvids} onClick={() => handleDivClick('c')}>
                    <div style={{ backgroundImage: `url(${luana})`}} className={style.profissionalPerfil_Video}></div>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${thumbnail})`, borderRadius: `30px`, width: `80%`}}>
                        {profissionalAtivo === 'c' && (
                            <VideosPreview
                                nome_Videos={"Meu primeiro pacote!"}
                                imagem_Videos={thumbnail}
                                video_Introdutivo1={CapaVideo}
                                especialidadeVideos={""}
                                subtitulo_Videos={"Como controlar o tronco!"}
                                link_Videos={"#"}
                                sobre_Videos={"Aqui você encontrará vídeos educacionais com uma validação de confiança!"}
                                assuntos_Videos1={'1 - Terá dicas de como aprimorar e controlar o tronco.'}
                                url_video={'https://paces-videos.s3.amazonaws.com/fisioterapia/videoLuana.mp4'}
                            />
                        )}
                    </div>
                    <h3 className={style.Packvids_nomeProfissional}>Controle do tronco</h3>
                    <p className={style.Packvids_especialidadeProfissional}>Como aprimorar o tronco</p>
                    <a className={style.Packvids_conhecerProfissional}>Conhecer</a>
                </div>



                

                <div id='f' className={style.Packvids} onClick={() => handleDivClick('a')}>
                    <div style={{ backgroundImage: `url(${gisele})`}} className={style.profissionalPerfil_Video}></div>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${thumbnail})`, borderRadius: `30px`, width: `80%`}}>
                        {profissionalAtivo === 'a' && (
                            <VideosPreview
                                nome_Videos={"Meu primeiro pacote!"}
                                imagem_Videos={thumbnail}
                                video_Introdutivo1={CapaVideo}
                                especialidadeVideos={"Vídeo educacional"}
                                subtitulo_Videos={"Encontre o desenvolvimento necessário aqui!"}
                                link_Videos={"#"}
                                sobre_Videos={"Aqui você encontrará vídeos educacionais com uma validação de confiança!"}
                                assuntos_Videos1={'1 - Realizar uma massinha caseira pode estimular e desenvolver diversos aspectos.'}
                                url_video={'https://paces-videos.s3.amazonaws.com/educadores/videoGisele.mp4'}

                            />
                        )}
                    </div>
                    <h3 className={style.Packvids_nomeProfissional}>Massinha caseira</h3>
                    <p className={style.Packvids_especialidadeProfissional}>Estimulando e se divertindo</p>
                    <a className={style.Packvids_conhecerProfissional}>Conhecer</a>
                </div>





                <div id='a' className={style.Packvids} onClick={() => handleDivClick('b')}>
                    <div style={{ backgroundImage: `url(${daniela})`}} className={style.profissionalPerfil_Video}></div>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${thumbnail})`, borderRadius: `30px`, width: `80%`}}>
                        {profissionalAtivo === 'b' && (
                            <VideosPreview
                                nome_Videos={"Meu primeiro pacote!"}
                                imagem_Videos={thumbnail}
                                video_Introdutivo1={CapaVideo}
                                especialidadeVideos={"Vídeo educacional"}
                                subtitulo_Videos={"Encontre o desenvolvimento necessário aqui!"}
                                link_Videos={"#"}
                                sobre_Videos={"Aqui você encontrará vídeos educacionais com uma validação de confiança!"}
                                assuntos_Videos1={'1 - É importante ter uma informação segura e dicas sobre o dia a dia que fazem toda diferença.'}
                                url_video={'https://paces-videos.s3.amazonaws.com/fisioterapia/videoDaniela.mp4'}

                            />
                        )}
                    </div>
                    <h3 className={style.Packvids_nomeProfissional}>Melhorando o dia a dia</h3>
                    <p className={style.Packvids_especialidadeProfissional}>Subtítulo do vídeo</p>
                    <a className={style.Packvids_conhecerProfissional}>Conhecer</a>
                </div>

                <div id='f' className={style.Packvids} onClick={() => handleDivClick('d')}>
                    <div style={{ backgroundImage: `url(${rafael})`}} className={style.profissionalPerfil_Video}></div>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${thumbnail})`, borderRadius: `30px`, width: `80%`}}>
                        {profissionalAtivo === 'd' && (
                            <VideosPreview
                                nome_Videos={"Meu primeiro pacote!"}
                                imagem_Videos={thumbnail}
                                video_Introdutivo1={CapaVideo}
                                especialidadeVideos={"Vídeo educacional"}
                                subtitulo_Videos={"Encontre o desenvolvimento necessário aqui!"}
                                link_Videos={"#"}
                                sobre_Videos={"Aqui você encontrará vídeos educacionais com uma validação de confiança!"}
                                assuntos_Videos1={'1 - Um boliche em casa pode ser muito divertido e estimulante para o seu pequeno.'}
                                url_video={'https://paces-videos.s3.amazonaws.com/educadores/Rafael.mp4'}

                            />
                        )}
                    </div>
                    <h3 className={style.Packvids_nomeProfissional}>Boliche em casa</h3>
                    <p className={style.Packvids_especialidadeProfissional}>Estimulando e se divertindo</p>
                    <a className={style.Packvids_conhecerProfissional}>Conhecer</a>
                </div>


                <div className={style.maisVideos}><h3>Mais profissionais em breve!</h3></div>
            </div>
        </div>
        </>
    );
}

export default Sementinha;
