import { League_Gothic } from 'next/font/google';

import styles from './Footer.module.css';

interface FooterProps {
  text: string;
  title: string;
}

const leagueGhotic = League_Gothic({
  weight: '400',
  subsets: ['latin'],
})

const Footer = ({text, title}: FooterProps) => {
  return (
    <div className={styles.container}>
      <div className={`${leagueGhotic.className} ${styles.title}`}>{title}</div>
      <div className={styles.text}>{text}</div>
    </div>
  )
}

export default Footer;