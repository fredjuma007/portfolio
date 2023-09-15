import React from 'react'

import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils'

export const Hero = () => {
  return ( 
  <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hello Friend, I'm Fred</h1>
        <p className={styles.description}>I'm a web developer with experience in using React and Node js.
            Reach out if you want to learn more and get your website done
        </p>
        <a href="mailto:fredjuma8@gmail.com" className={styles.contactBtn}>
            Contact Me</a>
    </div>
    <img src={getImageUrl('hero/heroImage.jpg')} alt="hero image of me" className={styles.heroImg} />
    <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
  </section>
    );
}
