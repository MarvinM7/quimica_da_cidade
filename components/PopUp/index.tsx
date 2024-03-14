"use client"

import React, { useEffect, useState } from 'react';

import Neighborhood from '@/types/Neighborhood';

import styles from './PopUp.module.css';

interface PopUpProps {
  data: Neighborhood[];
  show: boolean;
}

const PopUp = ({data, show}: PopUpProps) => {
  const [position, setPosition] = useState({
    top: 0,
    left: 0,
  });

  useEffect(() => {
    if (show) {
      let x;
      let y;
      document.onmousemove = function(event) {
        x = event.pageX;
        y = event.pageY;

        setPosition({
          top: y - 100,
          left: window.innerWidth - x > 420 ? x + 20 : window.innerWidth - 420,
        });
      }
    }
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <div className={styles.container} style={{top: position.top, left: position.left}}>
      <div className={styles.row}>
        <div className={styles.title}>Bairro</div>
        <div className={styles.title}>Valor (IAVT)<span>*</span></div>
      </div>
      {data.map((neighborhood) => (
        <div key={neighborhood.name} className={styles.row}>
          <div className={styles.text}>{neighborhood.name}</div>
          <div className={styles.text}>{`${neighborhood.iavt} m²/hab`}</div>
        </div>
      ))}
      <div className={styles.subtitle}>
        <div className={styles.text}><span>*</span>IAVT - Índice de Área Verde Total</div>
      </div>
    </div>
  )
}

export default PopUp;