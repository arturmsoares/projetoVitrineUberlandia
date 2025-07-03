import style from './MetricasUmDefault.module.css';

function MetricasUmDefault({textoMetrica, numerosMetrica}) {
  return (
    <div className={style.metricaUnica}>
            <p>{textoMetrica}</p>
            <p>{numerosMetrica}</p>
    </div>

  );
}

export default MetricasUmDefault;