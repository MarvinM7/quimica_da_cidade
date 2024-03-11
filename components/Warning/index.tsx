import Image from 'next/image';

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
      <Image
        className={styles.gif}
        src={'/gifs/gif1.gif'}
        alt={'Ciclista adoecendo'}
        width={320}
        height={320}
        unoptimized
      />
      <div className={`${leagueGhotic.className} ${styles.title}`}>{title}</div>
      <div className={styles.text}>{text}</div>
    </div>
  )
}

export default Warning;
