import React from 'react'
import styles from "./transaction.module.css"
import Image from 'next/image'


function Transaction() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <td>Name</td>
          <td>Status</td>
          <td>Date</td>
          <td>Amount</td>
        </thead>

        <tbody>
          <tr>
            <td>
              <div className={styles.user}>  
              <Image src="/NoAvatar.jpg" alt="no avatar" width={40} height={40} className={styles.userImage}/> 
              John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${ styles.pending}`}>Pending</span>
            </td>
            <td>14/02/2025</td>
            <td>$3.1416</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>  
              <Image src="/NoAvatar.jpg" alt="no avatar" width={40} height={40} className={styles.userImage}/> 
              John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${ styles.done}`}>Done</span>
            </td>
            <td>14/02/2025</td>
            <td>$3.1416</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>  
              <Image src="/NoAvatar.jpg" alt="no avatar" width={40} height={40} className={styles.userImage}/> 
              John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${ styles.cancelled}`}>Cancelled</span>
            </td>
            <td>14/02/2025</td>
            <td>$3.1416</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>  
              <Image src="/NoAvatar.jpg" alt="no avatar" width={40} height={40} className={styles.userImage}/> 
              John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${ styles.pending}`}>Pending</span>
            </td>
            <td>14/02/2025</td>
            <td>$3.1416</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Transaction