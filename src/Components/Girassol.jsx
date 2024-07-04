

import React, { useState } from 'react';
import style from '../Components/Girassol.module.css';
import leandra from '../assets/leandra.jpg';
import luana from '../assets/luana.jpg';
import rafael from '../assets/rafael.jpg';
import VideosPreview from '../Components/VideosPreview.jsx';
import thumbnail from '../assets/thumbnail.jpg'
import florPaces from '../assets/BackgroundGira.svg'
import mundoGira from '../assets/mundoGirassol.jpg'
import CapaVideo from '../assets/CapaVideos.png'
 import Header from './Header.jsx';

function Girassol() {
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
                <h3><span style={{ color: 'rgba(4, 98, 98, 1)' }}><span style={{color: 'rgba(85, 191, 176, 1)'}}>MUNDO</span> GIRASSOL</span></h3>
                <p>Vídeos produzidos por profissionais especialmente para os pais de crianças com paralisia cerebral.</p>
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


                <div id='a' className={style.Packvids} onClick={() => handleDivClick('e')}>
                    <div style={{ backgroundImage: `url(${leandra})`}} className={style.profissionalPerfil_Video}></div>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${mundoGira})`, borderRadius: `30px`, width: `80%`}}>
                        {profissionalAtivo === 'e' && (
                            <VideosPreview
                                nome_Videos={"Meu primeiro pacote!"}
                                imagem_Videos={thumbnail}
                                video_Introdutivo1={CapaVideo}
                                especialidadeVideos={"Vídeo educacional"}
                                subtitulo_Videos={"Encontre o desenvolvimento necessário aqui!"}
                                link_Videos={"#"}
                                sobre_Videos={"Aqui você encontrará vídeos educacionais com uma validação de confiança!"}
                                assuntos_Videos1={'1 - O vídeo foi feito com muito amor e carinho, dedicado a cuidar de quem cuida'}
                                assuntos_Videos2={'2 - Com dicas para melhorar o seu dia a dia '}
                                assuntos_Videos3={'3 - como por exemplo: Gerenciar o seu stress'}
                                url_video={'https://paces-videos.s3.amazonaws.com/fisioterapia/videoLeandra.mp4'}
                               
                            />
                        )}
                    </div>
                    <h3 className={style.Packvids_nomeProfissional}>Cuidar de quem cuida</h3>
                    <p className={style.Packvids_especialidadeProfissional}>Dicas para viver melhor</p>
                    <a className={style.Packvids_conhecerProfissional}>Conhecer</a>
                </div>           

                

                <div className={style.maisVideos}><h3>Mais profissionais em breve!</h3></div>
            </div>
        </div>
        </>
    );
}

export default Girassol;
