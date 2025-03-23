import styles from "./footer.module.css"


const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>Ghost</div>
        <div className={styles.text}>All Right Persarved</div>    
    </div>
  )
}

export default Footer;