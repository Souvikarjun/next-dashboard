import React from 'react'
import styles from "./rightbar.module.css"
import Image from 'next/image'
import {MdPlayCircleFilled, MdReadMore} from "react-icons/md"

function Rightbar() {
  return (
    <div className={styles.container}>
     
      <div className={styles.item}>
        <div className={styles.bgcontainer}>
        <Image src="/astronaut.jpg" alt="Astronaut in the space" fill className={styles.bg}/>
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>🔥Easy</span>
          <h3 className={styles.title}>Yoo This is a Dashboard design</h3>
          <span className={styles.subtitle}>Lorem ipsum</span>
          <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.texts}>
          <span className={styles.notification}>🔥Easy</span>
          <h3 className={styles.title}>Yoo This is a Dashboard design</h3>
          <span className={styles.subtitle}>Lorem ipsum</span>
          <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button className={styles.button}>
            <MdReadMore />
            Watch
          </button>
        </div>
      </div>
    </div>
  )
}

export default Rightbar