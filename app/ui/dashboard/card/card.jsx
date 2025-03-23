import React from 'react'
import {MdSupervisedUserCircle} from "react-icons/md"
import styles from "./card.module.css"

function Card() {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle />
      <div className={styles.texts}>
        <span className={styles.title}>Total Users</span>
        <span className={styles.number}> 10.290 </span>
        <span className={styles.detail}> <span className={styles.positive}>12%</span> More than previous day</span>
      </div>
    </div>
  )
}

export default Card