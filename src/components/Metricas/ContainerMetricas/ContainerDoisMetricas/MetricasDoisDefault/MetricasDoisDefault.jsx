import style from "./MetricasDoisDefault.module.css";

const MetricasDoisDefault = ({ textoMetrica, numerosMetrica }) => {
  // Remove o símbolo '%' para obter apenas o valor numérico.
  const valorPercentual = numerosMetrica.replace('%', '');

  return (
    // Certifique-se de que a classe principal aqui é do CSS module.
    <div className={style.metricCard}>
      <div 
        className={style.progressCircle}
        // A "mágica" acontece aqui: definimos uma variável CSS '--p'
        // com o valor da nossa porcentagem.
        style={{ '--p': valorPercentual }}
      >
        <span className={style.percentage}>{numerosMetrica}</span>
      </div>
      <span className={style.label}>{textoMetrica}</span>
    </div>
  );
}

export default MetricasDoisDefault;