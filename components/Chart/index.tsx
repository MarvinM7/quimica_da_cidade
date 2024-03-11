"use client"

import { useState } from 'react';

import { League_Gothic } from 'next/font/google';

import PopUp from "@/components/PopUp";

import neighborhoods from "@/constants/Neighborhoods";

import styles from "./Chart.module.css";

interface ChartProps {
  chartText: string;
  chartTitle: string;
}

const leagueGhotic = League_Gothic({
  weight: '400',
  subsets: ['latin'],
})

const Chart = ({chartText, chartTitle}: ChartProps) => {
  const constant = 30;
  const initialPopUp = {
    ivat: 0,
    neighborhood: '',
    show: false,
  }

  const [popup, setPopUp] = useState(initialPopUp)

  const block1 = (index: number) => {
    if (index === neighborhoods.length - 1) {
      return <div className={styles.barChartBlock1} style={{height: `${neighborhoods[index].value * constant}px`}}></div>;
    }

    if (neighborhoods[index].value < neighborhoods[index + 1].value) {
      return <div className={styles.barChartBlock1} style={{height: `${neighborhoods[index].value * constant}px`}}></div>;
    }

    if (neighborhoods[index].value > neighborhoods[index + 1].value) {
      return <div className={styles.barChartBlock1} style={{height: `${(neighborhoods[index + 1].value * constant)}px`}}></div>;
    }

    return null;
  }

  const block2 = (index: number) => {
    if (index === neighborhoods.length - 1) {
      return <div className={styles.barChartBlock2} style={{height: '0px'}}></div>;
    }

    if (neighborhoods[index].value < neighborhoods[index + 1].value) {
      return <div className={styles.barChartBlock2} style={{height: '0px'}}></div>;
    }

    if (neighborhoods[index].value > neighborhoods[index + 1].value) {
      return <div className={styles.barChartBlock2} style={{height: `${(neighborhoods[index].value * constant) - (neighborhoods[index + 1].value * constant)}px`}}></div>;
    }

    return null;
  } 


  const borderBottom = (index: number) => {
    if (index === neighborhoods.length - 1) {
      return <div className={styles.borderBottom1}></div>;
    }

    if (neighborhoods[index].value < neighborhoods[index + 1].value) {
      return <div className={styles.borderBottom1}></div>
    }

    if (neighborhoods[index].value > neighborhoods[index + 1].value) {
      return <div className={styles.borderBottom2} style={{marginLeft: '2px'}}></div>
    }

    return null
  }

  const borderRight = (index: number) => {
    if (index === 0) {
      return null;
    }

    if (neighborhoods[index].value < neighborhoods[index - 1].value) {
      return <div className={styles.borderBottom3} style={{height: `${(neighborhoods[index - 1].value * constant) - (neighborhoods[index].value * constant) + 4}px`, marginTop: '-4px'}}></div>;
    }

    return null;
  }

  return (
    <>
      <div className={styles.barChartContainer}>
        {neighborhoods.map((neighborhood, index) => {
          return (
            <div
              key={neighborhood.name}
              className={styles.barChartColumn}
              onMouseEnter={() => {
                setPopUp({
                  ivat: neighborhood.value,
                  neighborhood: neighborhood.name,
                  show: true,
                })
              }}
              onMouseLeave={() => {
                setPopUp(initialPopUp);
              }}
              style={{height: `${neighborhood.value * constant}px`}}
            >
              <PopUp
                ivat={popup.ivat}
                neighborhood={popup.neighborhood}
                show={popup.show && neighborhood.value === popup.ivat}
              />
              {block1(index)}
              {block2(index)}
              {borderBottom(index)}
              {borderRight(index)}
            </div>
          )
        })}
      </div>
      <div className={styles.chartInfo}>
        <div className={`${leagueGhotic.className} ${styles.chartTitle}`}>{chartTitle}</div>
        <div className={styles.chartText}>{chartText}</div>
      </div>
      <div className={styles.bottomBar} />
    </>
  )
}

export default Chart;
