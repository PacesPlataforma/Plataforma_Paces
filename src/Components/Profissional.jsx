import Styles from '../Components/Profissional.module.css';

function Profissional({ nome_profissional, imagem_profissional, especialidade, sobre_mim, numero_identificador, minha_experiencia, link_profissional}){
    return(
        <div className= {Styles.corpoTextoModal}>

            <p className={Styles.fecharModal}>Fechar</p>

            <img src={imagem_profissional} alt="" className={Styles.imagemModal} />

            <h3 className={Styles.nome_profissionalModal}>{nome_profissional} </h3> 

            <h4 className={Styles.especialidadeModal}>{especialidade}</h4>

            <p className={Styles.numero_identificadorModal}>{numero_identificador}</p>

            <a href={link_profissional} target="_blank" className={Styles.agendarModal}>Agendar sessão</a>

            <hr className={Styles.linhaHorizontal}/>

            <h3 className={Styles.sobre_mimModal}>Sobre mim:</h3>

            <p className={Styles.paragrafoModal}>{sobre_mim}</p>

            <h3 className={Styles.sobre_mimModal}>Minha experiência:</h3>

            <p className={Styles.paragrafoModal}>{minha_experiencia}</p>

            <h3 className={Styles.sobre_mimModal}>Meus pacotes:</h3>

            <div className={Styles.meusVideosModal}>
                <div className={Styles.meusVideosDivModal}></div>
                <div className={Styles.meusVideosDivModal}></div>
            </div>
            
        </div>
    )
}

export default Profissional