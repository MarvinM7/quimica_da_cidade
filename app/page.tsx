import Image from 'next/image';

import Map from '@/components/Map';
import Chart from '@/components/Chart';

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

  const chartText = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.\nLorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.';
  const chartTitle = 'Lorem ipsum dolor sit amet';

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
        <Chart chartText={chartText} chartTitle={chartTitle} />
      </section>
    </main>
  );
}
