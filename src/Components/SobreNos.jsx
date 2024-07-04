import React from 'react';
import style from '../Components/SobreNos.module.css';
import logo1 from '../assets/paces.svg';
import integrantes from '../assets/integrantes.png';
import intermentes from '../assets/intermentes.png';
import maduGaby from '../assets/gabyyy.png'
import Thau from '../assets/imgThauanny.png'
import Gu from '../assets/imgGustavo.png'
import Line from '../assets/imgAline.png'
import Madu from '../assets/imgMadu.png'
import Rodrigo from '../assets/imgRodrigo.png'
import Kaiky from '../assets/imgKaiky.png'
import Header from './Header';

function SobreNos() {
    return (
        <>
      <Header/>
        <div className={style.App}>

            <div className={style.parte1}>
                <div className={style.parte1Esquerda}>
                    <object className={style.pacesAnimado} type="image/svg+xml" data={logo1}></object>
                </div>
                <div className={style.parte1Direita}>
                    <h3>Conheça a gente!</h3>
                    <p>Semeados pelo PROA para transformar pequenos passos em grandes realizações, a PACES foi fundada por amigos inspirados a fomentar um desenvolvimento pleno, alcançar resultados incríveis e promover o apoio mútuo. Com paixão e dedicação, trabalhamos juntos para fazer a diferença na vida das famílias de crianças com paralisia cerebral.</p>
                </div>
            </div>

            <div className={style.parte2}>
                <div className={style.parte2Esquerda}>
                    <h3>Aqui somos <br /><span style={{ color: 'rgba(85, 190, 127, 1)' }}>nós</span>!</h3>
                    <p>Cada um traz consigo história de compaixão e empatia, todo esse amor foi dedicado à PACES!</p>
                </div>
                <div className={style.parte2Direita}>
                    <img src={integrantes} alt="Gaby" />
                </div>
            </div>


            <h3 className={style.nossosValores} style={{ color: 'rgba(18, 113, 84, 1)' }}>CONHEÇA A <span style={{ color: 'rgba(85, 190, 127, 1)' }}>GABY</span>!</h3>
            <section style={{ backgroundColor: "#h89" }} className={style.conhecaGaby}>
                <img className={style.imagemRedonda} src={maduGaby} />
                <p className={style.gabyParagrafo} >A Gaby foi diagnosticada com paralisia cerebral e é irmã de uma das integrantes da equipe Paces, a Maria Eduarda. A família dela foi nossa grande inspiração para desenvolver esta plataforma. Quando a Maria nos contou sobre o dia a dia e as dificuldades enfrentadas por sua família, nosso objetivo passou a ser ajudar e acolher a família da Maria com muito carinho e dedicação. </p>

            </section>
            <h3 className={style.nossosValores} style={{ color: 'rgba(18, 113, 84, 1)' }}>CONHEÇA OS <span style={{ color: 'rgba(85, 190, 127, 1)' }}>INTEGRANTES</span>!</h3>
            <div className={style.integrantesDesc}>
                <div className={style.integranteEspaco}>
                    <img className={style.imagemRedonda2} src={Line}/>
                    <h3 className={style.integrantesNome}>Aline Souza</h3><p className={style.integrantesParagrafo}>Desemvolvedora Front-end &  <br /> SEO</p>
                </div>
                <div className={style.integranteEspaco}>
                    <img className={style.imagemRedonda2}  src={Gu}/>
                    <h3 className={style.integrantesNome}>Gustavo Marques</h3><p className={style.integrantesParagrafo}>Scrum Master &  <br /> Desenvolvedor Front-end</p>
                </div>
                <div className={style.integranteEspaco}>
                    <img className={style.imagemRedonda2}  src={Kaiky}/>
                    <h3 className={style.integrantesNome}>Kaiky Leocadio</h3><p className={style.integrantesParagrafo}>Desenvolvedor Back-end &  <br /> Banco de dados</p>
                </div>
                <div className={style.integranteEspaco}>
                    <img className={style.imagemRedonda2}  src={Madu}/>
                    <h3 className={style.integrantesNome}>Maria Eduarda</h3><p className={style.integrantesParagrafo}>Desenvolvedor Back-end &  <br /> Banco de dados</p>
                </div>
                <div className={style.integranteEspaco}>
                    <img className={style.imagemRedonda2}  src={Rodrigo}/>
                    <h3 className={style.integrantesNome}>Rodrigo Matheus</h3><p className={style.integrantesParagrafo}>Financeiro &  <br /> Desenvolvedor Front-end</p>
                </div>
                <div className={style.integranteEspaco}>
                    <img className={style.imagemRedonda2}  src={Thau}/>
                    <h3 className={style.integrantesNome}>Thauanny Suzuki</h3><p className={style.integrantesParagrafo}>Produc Owner &  <br /> Desenvolvedor Front-end</p>
                </div>
            </div>
            <div className={style.parceriaIntermentes}>
            <h3 className={style.nossosValores} style={{ color: '#C9A0DC'}}>CONHEÇA NOSSA <span style={{ color: '#B66FD8' }}>PARCERIA</span>!</h3>
           <div className={style.conteudoParceria}>
           <img src={intermentes} /> <p className={style.parceriaParagrafo}>A Intermentes é uma plataforma que facilita o acesso à psicologia para que as pessoas possam cuidar da sua saúde mental. Para isso, oferecem sessões online com valores acessíveis para todos os públicos, diversidade de profissionais com especialidades variadas para diferentes situações, e a oportunidade para que pessoas sem condições financeiras também possam cuidar da sua mente, por meio da centralização de ONGs que oferecem esse cuidado gratuitamente.</p>
           </div>
           <a className={style.conhecerIntermentes}>Conhecer</a>
        
            </div>
        </div>
        </>
    );
}

export default SobreNos;
