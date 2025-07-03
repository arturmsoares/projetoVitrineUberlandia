import style from './MetricasUmDefault.module.css';

function MetricasUmDefault({textoMetrica, numerosMetrica}) {
  return (
    <div>
            <p>{textoMetrica}</p>
            <p className={style.numMetrica}>{numerosMetrica}</p>
    </div>

  );
}

export default MetricasUmDefault;