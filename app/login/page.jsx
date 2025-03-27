import styles from "@/app/ui/login/login.module.css" 

const login = () => {
    return (
      <div className={styles.container}>
        <form action="" className={styles.form}>
          <h1>Login</h1>
          <input type="text" placeholder="User Name" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
        </form>
      </div>
    )
}

export default login