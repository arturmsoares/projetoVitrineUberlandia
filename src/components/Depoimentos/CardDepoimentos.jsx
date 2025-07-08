import React from 'react';
import style from './CardDepoimentos.module.css';

const CardDepoimentos = ({ depoimento, nome, avatar }) => {
  return (
    <div className={style.cardDepoimentos}>
      <div>
        <img src={avatar} alt={`Avatar de ${nome}`} className={style.avatarAutor} />
      </div>
      <div>
        <h4>{nome}</h4>
        <p>"{depoimento}"</p>
      </div>

    </div>
  );
};

export default CardDepoimentos;