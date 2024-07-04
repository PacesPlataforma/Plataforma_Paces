// src/components/Card.jsx
import React from 'react';
import styles from './Card.module.css';
import img from '../assets/Cartão.svg'
function Card({ card, onClick }) {
  return (
    <div className={`${styles.card} ${card.flipped ? styles.flipped : ''}`} onClick={onClick}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront}>
          <img src={img} alt="" />
        </div>
        <div className={styles.cardBack}>
          {card.content}
        </div>
      </div>
    </div>
  );
}

export default Card;
