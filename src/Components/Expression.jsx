// src/components/Expression.js
import React from 'react';
import styles from './Expression.module.css';

const Expression = ({ expression, label }) => (
  <div className={styles.expressionContainer}>
    <img src={expression} alt={label} className={styles.expressionImage} />
    <p className={styles.expressionLabel}>{label}</p>
  </div>
);

export default Expression;
