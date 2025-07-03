import ContainerUmMetricas from "./ContainerUmMetricas/ContainerUmMetricas.jsx";
import ContainerDoisMetricas from "./ContainerDoisMetricas/ContainerDoisMetricas.jsx";
import style from "./ContainerMetricas.module.css";

const ContainerMetricas = () =>{
    return(
        <div className={style.containerMetricas}>
            <ContainerUmMetricas/>
            <ContainerDoisMetricas/>
        </div>

    );
}

export default ContainerMetricas;