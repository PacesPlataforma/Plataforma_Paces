import React, { useState, useEffect } from 'react';
import Card from './Card';
import styles from './MemoryGame.module.css';
import { Link } from 'react-router-dom';

const initialCards = [
  { id: 1, pairId: 1, content: '🐶', flipped: false, matched: false },
  { id: 2, pairId: 1, content: '🐶', flipped: false, matched: false },
  { id: 3, pairId: 2, content: '🐱', flipped: false, matched: false },
  { id: 4, pairId: 2, content: '🐱', flipped: false, matched: false },
  { id: 5, pairId: 3, content: '🐰', flipped: false, matched: false },
  { id: 6, pairId: 3, content: '🐰', flipped: false, matched: false },
  { id: 7, pairId: 4, content: '🐻', flipped: false, matched: false },
  { id: 8, pairId: 4, content: '🐻', flipped: false, matched: false },
];

function MemoryGame() {
  const [memoryCards, setMemoryCards] = useState([]);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    setMemoryCards(shuffleArray([...initialCards]));
    startTimer();
  }, []);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  useEffect(() => {
    if (firstCard && secondCard) {
      setDisabled(true);
      if (firstCard.pairId === secondCard.pairId) {
        setMemoryCards(prevCards =>
          prevCards.map(card =>
            card.pairId === firstCard.pairId ? { ...card, matched: true, flipped: true } : card
          )
        );
        resetCards();
      } else {
        setTimeout(() => resetCards(), 1000);
      }
    }
  }, [firstCard, secondCard]);

  const shuffleArray = array => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleCardClick = card => {
    if (disabled || card.flipped || card.matched) return;

    if (!firstCard) {
      setMemoryCards(prevCards =>
        prevCards.map(c =>
          c.id === card.id ? { ...c, flipped: true } : c
        )
      );
      setFirstCard(card);
    } else if (!secondCard) {
      setMemoryCards(prevCards =>
        prevCards.map(c =>
          c.id === card.id ? { ...c, flipped: true } : c
        )
      );
      setSecondCard(card);
    }
  };

  const resetCards = () => {
    setFirstCard(null);
    setSecondCard(null);
    setMemoryCards(prevCards =>
      prevCards.map(c => (c.matched ? c : { ...c, flipped: false }))
    );
    setDisabled(false);
  };

  const resetGame = () => {
    setMemoryCards(shuffleArray([...initialCards]));
    setFirstCard(null);
    setSecondCard(null);
    setDisabled(false);
    setTime(0);
    setIsRunning(true);
  };

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const formatTime = () => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className={styles.memoryGame}>
      <div className={styles.header}>
        <div>Tempo: {formatTime()}</div>  
        <button onClick={resetGame}>Reiniciar</button>
      </div>

      <div className={styles.cardGrid}>
        {memoryCards.map(card => (
          <Card key={card.id} card={card} onClick={() => handleCardClick(card)} />
        ))}
      </div>
      <Link to = {'/Exercicio'}>
      <button>Selecionar outro Jogo</button>
      </Link>
    </div>
  );
}

export default MemoryGame;
