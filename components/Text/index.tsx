import Image from 'next/image';

import { League_Gothic } from 'next/font/google';

import styles from './Text.module.css';

const leagueGhotic = League_Gothic({
  weight: '400',
  subsets: ['latin'],
})

interface TextProps {
  text: string;
  title: string;
}

const Text = ({text, title}: TextProps) => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        src={'/images/image3.png'}
        alt={'Racismo ambiental'}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '50%', height: 'auto' }}
        priority
      />
      <div className={`${leagueGhotic.className} ${styles.title}`}>{title}</div>
      <div className={styles.text}>{text}</div>
    </div>
  )
}

export default Text;