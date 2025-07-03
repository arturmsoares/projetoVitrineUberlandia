import MetricasUmDefault from "./MetricasUmDefault/MetricasUmDefault"
import style from "./ContainerMetricas.module.css"


const ContainerMetricas = () => {
    return (
        <div className={style.containerMetricas}>
            <MetricasUmDefault
                textoMetrica="Seguidores"
                numerosMetrica="6.1k" />
            <MetricasUmDefault
                textoMetrica="Alcance"
                numerosMetrica="32k" />
            <MetricasUmDefault
                textoMetrica="Impressões"
                numerosMetrica="88k" />
            <MetricasUmDefault
                textoMetrica="Stories"
                numerosMetrica="4k" />
        </div>


    );
}

export default ContainerMetricas;