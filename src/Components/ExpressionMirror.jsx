// src/components/ExpressionMirror.js
import React, { useState } from 'react';
import Expression from './Expression';
import styles from './ExpressionMirror.module.css';

// Importe imagens de expressões
import smileImage from '../assets/smile.png';
import frownImage from '../assets/triste.png';
import surpriseImage from '../assets/surprise.avif';
import raiva from '../assets/surprise.avif';
import { Link } from 'react-router-dom';

const expressions = [
  { image: smileImage, label: 'Sorriso 😄' },
  { image: frownImage, label: 'Triste 🙁' },
  { image: surpriseImage, label: 'Surpreso 😮' },
];

const ExpressionMirror = () => {
  const [currentExpression, setCurrentExpression] = useState(0);

  const handleNextExpression = () => {
    setCurrentExpression((prev) => (prev + 1) % expressions.length);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Jogo do Espelho PACES🌻 </h1>
      <Expression
        expression={expressions[currentExpression].image}
        label={expressions[currentExpression].label}
      />
      <button className={styles.nextButton} onClick={handleNextExpression}>
        Próxima Expressão 🌻
      </button>

      <Link to = {'/Exercicio'}>
      <button>
        Seleionar Outro jogo
     </button>
      </Link>
     
    </div>
  );
};

export default ExpressionMirror;
