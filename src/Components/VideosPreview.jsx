import Styles from '../Components/VideosPreview.module.css';

function VideosPreview({ imagem_Videos, nome_Videos, especialidadeVideos, subtitulo_Videos, link_Videos, sobre_Videos, assuntos_Videos1, assuntos_Videos2, assuntos_Videos3, assuntos_Videos4, assuntos_Videos5, assuntos_Videos6, video_Introdutivo1, url_video}){
    return(
        <div className= {Styles.corpoTextoVideos}>

            <p className={Styles.fecharVideos}>Fechar</p>

            <img src={imagem_Videos} alt="" className={Styles.imagemVideos} />

            <h3 className={Styles.nome_Videos}>{nome_Videos} </h3> 

            <h4 className={Styles.especialidadeVideos}>{especialidadeVideos}</h4>

            <p className={Styles.subtitulo_Videos}>{subtitulo_Videos}</p>

            <a href={link_Videos} target="_blank" className={Styles.agendarVideos}>Adquira já!</a>

            <hr className={Styles.linhaVideos}/>

            <h3 className={Styles.sobre_mimVideos}>Sobre o pacote:</h3>

            <p className={Styles.paragrafoVideos}>{sobre_Videos}</p>

            <h3 className={Styles.sobre_mimVideos}>O que encontrar aqui?</h3>

            <p className={Styles.paragrafoVideos2}>{assuntos_Videos1}<br /></p>
            <p className={Styles.paragrafoVideos2}>{assuntos_Videos2}<br /></p>
            <p className={Styles.paragrafoVideos2}>{assuntos_Videos3}<br /></p>
            <p className={Styles.paragrafoVideos2}>{assuntos_Videos4}<br /></p>
            <p className={Styles.paragrafoVideos2}>{assuntos_Videos5}<br /></p>
            <p className={Styles.paragrafoVideos2}>{assuntos_Videos6}<br /></p>

            <h3 className={Styles.sobre_mimVideos}>Vídeo:</h3>

            <div className={Styles.meusVideosVideos}>
                <video controls poster={video_Introdutivo1}>    
                <source type='video/mp4' src={url_video}/>   
                </video>
            </div>
            
        </div>
    )
}

export default VideosPreview