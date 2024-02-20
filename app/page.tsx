import dynamic from "next/dynamic";

import styles from "./page.module.css";

import { Joti_One } from 'next/font/google';


const LazyMap = dynamic(() => import("@/components/Map"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const jotiOne = Joti_One({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.titleBar}>
        <div className={`${jotiOne.className} ${styles.titleText}`}>
          {'A Química da Cidade'}
        </div>
      </div>
      
      <div className={styles.content}>
        <div className={styles.molImages}></div>
        <div className={styles.modalBar}>
          <div className={styles.modalText}>
            {'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.\nLorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'}
          </div>
        </div>
      </div>

      <div id="map" className={styles.mapContainer}>
        <LazyMap />
      </div>

      <div className={styles.descriptionBar}>
        <div className={styles.descriptionText}>
          {'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'}
        </div>
      </div>
    </main>
  );
}
