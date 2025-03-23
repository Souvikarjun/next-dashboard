import Search from "@/app/ui/dashboard/search/search"
import styles from "@/app/ui/dashboard/users/user.module.css"
import Link from "next/link"
import Image from "next/image"
import Pagination from "@/app/ui/dashboard/pagination/pagination"

const Users = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user"/>
        <Link href="@/app/dahsboard/users/add">
        <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/NoAvatar.jpg" alt="No avatar" width={40} height={40} className={styles.userImage}/>
                Ghosty
              </div>
            </td>
            <td>
              ghostheaddead@gmail.com
            </td>
            <td>23/3/2025</td>
            <td>Admin</td>
            <td>active</td>
            <td>
              <div className={styles.buttons}>
              <Link href="/">
                <button className={`${styles.button} ${styles.view}`}>View</button>
              </Link>
                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/NoAvatar.jpg" alt="No avatar" width={40} height={40} className={styles.userImage}/>
                Ghosty
              </div>
            </td>
            <td>
              ghostheaddead@gmail.com
            </td>
            <td>23/3/2025</td>
            <td>Admin</td>
            <td>active</td>
            <td>
              <div className={styles.buttons}>
              <Link href="/">
                <button className={`${styles.button} ${styles.view}`}>View</button>
              </Link>
                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
        </table>

        <Pagination />
    </div>
  )
}


export default Users