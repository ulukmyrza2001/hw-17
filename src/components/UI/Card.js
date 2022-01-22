import React from 'react';

import './Card.css';

const Card = (props) => { //карточканы ороп турган UI компонент эч кандай логикасы жок жон гана орогуч (обертка)
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Card;
