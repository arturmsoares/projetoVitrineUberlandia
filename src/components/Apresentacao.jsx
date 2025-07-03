const Apresentacao = ({tituloSecao, paragrafoSecao}) => {
    return (
        <section>
            <div>
                <h3>{tituloSecao}</h3>
            </div>
            <div>
                <p>{paragrafoSecao}</p>
            </div>
        </section>
    );
}

export default Apresentacao;