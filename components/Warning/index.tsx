import { League_Gothic } from 'next/font/google';

import styles from './Warning.module.css';

interface WarningProps {
  text: string;
  title: string;
}

const leagueGhotic = League_Gothic({
  weight: '400',
  subsets: ['latin'],
})

const Warning = ({text, title}: WarningProps) => {
  return (
    <div className={styles.container}>
      <video className={styles.video} width="320" height="320" controls preload="none">
        <source src="/videos/video1.mp4" type="video/mp4" />
        Seu navegador não suporta tag de vídeo.
      </video>
      <div className={`${leagueGhotic.className} ${styles.title}`}>{title}</div>
      <div className={styles.text}>{text}</div>
    </div>
  )
}

export default Warning;
