import React, { useState } from 'react';
import style from '../Components/Profissionais.module.css';
import luana from '../assets/luana.jpg';
import leandra from '../assets/leandra.jpg';
import gisele from '../assets/gisele.jpg';
import rafael from '../assets/rafael.jpg';
import daniela from '../assets/daniela.jpeg';
import Profissional from '../Components/Profissional.jsx';
import Header from '../Components/Header.jsx';
import '../Components/Fundoprofissionais.css'

function Profissionais() {
    const [profissionalAtivo, setProfissionalAtivo] = useState(null);

    const handleFiltroClick = (especialidadeId) => {
        const elementos = document.getElementsByClassName('Packvids');
        for (let i = 0; i < elementos.length; i++) {
            if (especialidadeId === 'g') { // 'g' para "Todos"
                elementos[i].style.display = 'block';
            } else if (elementos[i].id === especialidadeId) {
                elementos[i].style.display = 'block';
            } else {
                elementos[i].style.display = 'none';
            }   
        }
        setProfissionalAtivo(null);
    };

    const handleDivClick = (especialidadeId) => {
        if (profissionalAtivo === especialidadeId) {
            setProfissionalAtivo(null);
        } else {
            setProfissionalAtivo(especialidadeId);
        }
    };

    return (
        <>
        <Header/>
        <div className={style.App}>
            <div className={style.Packparte1}>
                <h3><span style={{ color: 'rgba(4, 98, 98, 1)' }}>PROFISSIONAIS</span></h3>
                <p>Os melhores e mais especializados profissionais à disposição para ajudar no desenvolvimento.</p>
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
                <div id='a' className={`${style.Packvids} Packvids`} onClick={() => handleDivClick('e')}>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${luana})` }}>
                        {profissionalAtivo === 'e' && (
                            <Profissional
                                nome_profissional={"Luana Matheus Sutt"}
                                imagem_profissional={luana}
                                especialidade={"Fisioterapeuta"}
                                numero_identificador={"CREFITO-3/ 355439-F"}
                                sobre_mim={"Graduada em fisioterapia pela universidade nove de julho Pós graduada pela fabic"}
                                minha_experiencia={""}
                                link_profissional={'https://calendly.com/meme-maker-p'}
                            />
                        )}
                    </div>
                    <h3 className={style.Packvids_nomeProfissional}>Luana M. Sutt</h3>
                    <p className={style.Packvids_especialidadeProfissional}>Fisioterapeuta</p>
                    <a className={style.Packvids_conhecerProfissional}>Conhecer</a>
                </div>  




                <div id='a' className={`${style.Packvids} Packvids`} onClick={() => handleDivClick('d')}>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${leandra})` }}>
                        {profissionalAtivo === 'd' && (
                            <Profissional
                                nome_profissional={"Leandra Dib Teixeira"}
                                imagem_profissional={leandra}
                                especialidade={"Fisioterapeuta"}
                                numero_identificador={"CREFITO: 3- 7076F"}
                                sobre_mim={"Fisioterapeuta formada pela UNICID em 2000, cursou pós graduação em Fisiologia do Exercício - na FMUSP; e Escutas antropológicas das infâncias - na FACON"}
                                minha_experiencia={"Yogaterapeuta pela Humaniversidade Holística.  Especialista no método de yoga restaurativa e práticas somáticas. Atua na área de desenvolvimento humano com atendimentos individuais e em grupo."}
                                link_profissional={'https://calendly.com/meme-maker-p'}
                            />
                        )}
                    </div>
                    <h3 className={style.Packvids_nomeProfissional}>Leandra Dib </h3>
                    <p className={style.Packvids_especialidadeProfissional}>Fisioterapeuta</p>
                    <a className={style.Packvids_conhecerProfissional}>Conhecer</a>
                </div>







                <div id='a' className={`${style.Packvids} Packvids`} onClick={() => handleDivClick('a')}>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${daniela})` }}>
                        {profissionalAtivo === 'a' && (
                            <Profissional
                                nome_profissional={"Daniela João Vicari Mituti"}
                                imagem_profissional={daniela}
                                especialidade={"Fisioterapeuta"}
                                numero_identificador={"CCREFITO: 4053-F"}
                                sobre_mim={""}
                                minha_experiencia={""}
                                link_profissional={'https://calendly.com/meme-maker-p'}
                            />
                        )}
                    </div>
                    <h3 className={style.Packvids_nomeProfissional}>Daniela João</h3>
                    <p className={style.Packvids_especialidadeProfissional}>Fisioterapeuta</p>
                    <a className={style.Packvids_conhecerProfissional}>Conhecer</a>
                </div>

                <div id='f' className={`${style.Packvids} Packvids`} onClick={() => handleDivClick('b')}>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${gisele})` }}>
                        {profissionalAtivo === 'b' && (
                            <Profissional
                                nome_profissional={"Gisele Pires Teixeira"}
                                imagem_profissional={gisele}
                                especialidade={"Educadora"}
                                numero_identificador={""}
                                sobre_mim={"Pedagoga, formada pela Pontifícia Universidade Católica, SP e pós graduada em psicopedagogia pela Censupeg e em Neurociência e Comportamento pela Pontifícia Universidade Católica, RS"}
                                minha_experiencia={"- Pedagogia diferenciada: maximizando a aprendizagem de todos os alunos - Instituto Singularidades - Formação Master Practitioner em PNL – Master Practitioner com Física Quântica e Visão Sistêmica - Certificação Parental em Disciplina Positiva- Inteligência Emocional - Convention com Daniel Goleman e Marshall Goldsmith - Neurociência na Sala de Aula - Instituto Singularidades - Curso Básico do Programa Sri Sathya Sai de Educação em Valores Humanos"}
                                link_profissional={'https://calendly.com/giselepires-calendly'}
                            />
                        )}
                    </div>
                    <h3 className={style.Packvids_nomeProfissional}>Gisele Pires Teixeira</h3>
                    <p className={style.Packvids_especialidadeProfissional}>Educadora</p>
                    <a className={style.Packvids_conhecerProfissional}>Conhecer</a>
                </div>

                <div id='f' className={`${style.Packvids} Packvids`} onClick={() => handleDivClick('c')}>
                    <div className={style.Packprofissional} style={{ backgroundImage: `url(${rafael})` }}>
                        {profissionalAtivo === 'c' && (
                            <Profissional
                                nome_profissional={"Rafael San Vicentea"}
                                imagem_profissional={rafael}
                                especialidade={"Psicomotricista"}
                                numero_identificador={""}
                                sobre_mim={"hdsnfjkhnkjdsbncvfjksbnjkbds"}
                                minha_experiencia={"jkrdshfgvokijhnjhoishdnvgfousdhbiobhsbfgjsbngfwjsnbgfnjj..."}
                                link_profissional={'https://calendly.com/rafaelsan-calendly'}
                            />
                        )}
                    </div>
                    <h3 className={style.Packvids_nomeProfissional}>Rafael San Vicente</h3>
                    <p className={style.Packvids_especialidadeProfissional}>Psicomotricista</p>
                    <a className={style.Packvids_conhecerProfissional}>Conhecer</a>
                </div>

                <div className={style.maisVideos}><h3>Mais profissionais em breve!</h3></div>
            </div>
        </div>
        </>
    );
}

export default Profissionais;
