import Image from 'next/image';

import Map from '@/components/Map';

import styles from "./page.module.css";

import { League_Gothic } from 'next/font/google';

const leagueGhotic = League_Gothic({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  const barTitle = 'A Química da Cidade';
  
  const infoTitle = 'Lorem ipsum dolor sit amet';
  const infoText = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.\nLorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.\nLorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.\nsLorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.';
  const infoBoxText = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.';

  const labelText = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.';

  const chartTitle = 'Lorem ipsum dolor sit amet';
  const chartText = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.\nLorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.';

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.titleBar}>
          <div className={`${leagueGhotic.className} ${styles.titleText}`}>
            {barTitle}
          </div>
        </div>
        <Image
          src={'/images/cityImage.png'}
          alt={'Imagem de prédios'}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          priority
        />
        <div className={styles.bottomBar} />
      </section>

      <section className={`${styles.section} ${styles.infoSection}`}>
        <div className={styles.info}>
          <div className={styles.infoTitle}>{infoTitle}</div>
          <div className={styles.infoText}>{infoText}</div>
        </div>
        <div className={styles.infoBox}>
          <div className={styles.infoBoxText}>{infoBoxText}</div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.mapSection}`}>
        <Map />
      </section>

      <section className={styles.label}>
        <div className={styles.labelText}>{labelText}</div>
      </section>

      <section className={styles.chartContainer}>
        <div className={styles.barChartContainer}>
          <div className={styles.barChartColumn} style={{height: '200px'}}>
            <div className={styles.barChartBlock1} style={{height: '200px'}}></div>
            <div className={styles.barChartBlock2} style={{height: '0px'}}></div>
            <div className={styles.borderBottom1}></div>
          </div>
          <div className={styles.barChartColumn} style={{height: '350px'}}>
            <div className={styles.barChartBlock1} style={{height: '142px'}}></div>
            <div className={styles.barChartBlock2} style={{height: '208px'}}></div>
            <div className={styles.borderBottom2} style={{marginLeft: '4px'}}></div>
          </div>
          <div className={styles.barChartColumn} style={{height: '150px'}}>
            <div className={styles.barChartBlock1} style={{height: '92px'}}></div>
            <div className={styles.barChartBlock2} style={{height: '58px'}}></div>
            <div className={styles.borderBottom2} style={{marginLeft: '4px'}}></div>
            <div className={styles.borderBottom3} style={{height: '208px', marginTop: '-8px'}}></div>
          </div>
          <div className={styles.barChartColumn} style={{height: '100px'}}>
            <div className={styles.barChartBlock1} style={{height: '100px'}}></div>
            <div className={styles.barChartBlock2} style={{height: '0px'}}></div>
            <div className={styles.borderBottom1}></div>
            <div className={styles.borderBottom3} style={{height: '58px', marginTop: '-8px'}}></div>
          </div>
          <div className={styles.barChartColumn} style={{height: '400px'}}>
            <div className={styles.barChartBlock1} style={{height: '192px'}}></div>
            <div className={styles.barChartBlock2} style={{height: '208px'}}></div>
            <div className={styles.borderBottom2} style={{marginLeft: '4px'}}></div>
          </div>
          <div className={styles.barChartColumn} style={{height: '200px'}}>
            <div className={styles.barChartBlock1} style={{height: '200px'}}></div>
            <div className={styles.barChartBlock2} style={{height: '0px'}}></div>
            <div className={styles.borderBottom1}></div>
            <div className={styles.borderBottom3} style={{height: '208px', marginTop: '-8px'}}></div>
          </div>
        </div>
        <div className={styles.chartInfo}>
          <div className={styles.chartTitle}>{chartTitle}</div>
          <div className={styles.chartText}>{chartText}</div>
        </div>
        <div className={styles.bottomBar} />
      </section>
    </main>
  );
}
