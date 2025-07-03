import React from "react";
import Apresentacao from "../Apresentacao";
import ContainerMetricas from "./ContainerMetricas/ContainerMetricas.jsx";
import style from "./Metricas.module.css";


const SectionMetricas = () => {
  return (
    <section className={style.sectionMetricas}>

        <Apresentacao
          tituloSecao="Metricas"
          paragrafoSecao="Números que conectam: veja como impactamos pessoas e ampliamos o alcance da sua marca." />
        
        <ContainerMetricas />




    </section>
  );
};

export default SectionMetricas;
