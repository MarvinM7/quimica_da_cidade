"use client"

import React, { useEffect, useState } from 'react';

import { Park } from '@/types';

import styles from './PopUpPark.module.css';

interface PopUpParkProps {
  data: Park[];
  show: boolean;
}

const PopUpPark = ({data, show}: PopUpParkProps) => {
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
          top: y - 150,
          left: window.innerWidth - x > 520 ? x + 20 : window.innerWidth - 520,
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
        <div className={styles.title}>Parque</div>
        <div className={styles.title}>Área total</div>
      </div>
      {data.map((park) => (
        <div key={park.name} className={styles.row}>
          <div className={styles.text}>{park.name}{`\n(${park.neighborhood})`}</div>
          <div className={styles.text}>{`${park.area}`}</div>
        </div>
      ))}
    </div>
  )
}

export default PopUpPark;