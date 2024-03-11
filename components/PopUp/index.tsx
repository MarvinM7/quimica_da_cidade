"use client"

import { useEffect, useState } from 'react';

import styles from './PopUp.module.css';

interface PopUpProps {
  neighborhood: string;
  ivat: number;
  show: boolean;
}

const PopUp = ({ivat, neighborhood, show}: PopUpProps) => {
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
          left: window.innerWidth - x > 200 ? x : window.innerWidth - 200,
        });
      }
    }
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <div className={styles.container} style={{top: position.top, left: position.left}}>
      <div className={styles.text}>{neighborhood}</div>
      <div className={styles.text}>{`${ivat} m²/hab`}</div>
    </div>
  )
}

export default PopUp;