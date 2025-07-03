import React from "react";
import Apresentacao from "../Apresentacao";
import style from "./Metricas.module.css";
import ContainerMetricas from "./ContainerMetricas/ContainerMetricas";



export const SectionMetricas = () => {
  return (
    <section className={style.sectionMetricas}>
        <Apresentacao
         tituloSecao="Metricas"
         paragrafoSecao="Números que conectam: veja como impactamos pessoas e ampliamos o alcance da sua marca."/>

        <div>
            <ContainerMetricas />
        </div>

    </section>
  );
};
