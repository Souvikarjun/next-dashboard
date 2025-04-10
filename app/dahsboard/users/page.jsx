import Search from "@/app/ui/dashboard/search/search"
import styles from "@/app/ui/dashboard/users/user.module.css"
import Link from "next/link"
import Image from "next/image"
import Pagination from "@/app/ui/dashboard/pagination/pagination"
import { fetchUsers } from "@/app/lib/data"
import { deleteUser } from "@/app/lib/action"

const Users = async ({searchParams}) => {
  const params = await searchParams
  const q = params?.q || "";
  const page = params?.page || 1;

  const [users,count] = await fetchUsers(q, page);
    const newCount = count.length
  // console.log(users)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user"/>
        <Link href="users/add">
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
          {users.map((user) => (
            <tr key = {user.id}>
            <td>
              <div className={styles.user}>
                <Image src={user.img || "/NoAvatar.jpg"} alt="No avatar" width={40} height={40} className={styles.userImage}/>
                {user.username}
              </div>
            </td>
            <td>{user.email}</td>
            <td>{user.createdAt?.toString().slice(4,16)}</td>
            <td>{user.isAdmin ? "Admin" : "Client"}</td>
            <td>{user.isActive ? "Active" : "Passive"}</td>
            <td>
              <div className={styles.buttons}>
              <Link href={`./users/${user.id}`}>
                <button className={`${styles.button} ${styles.view}`}>View</button>
              </Link>
              <form action={deleteUser}>
                <input type="hidden" value={user.id} name="id"/>
                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
              </form>
              </div>
            </td>
          </tr>
        ))}
        </tbody>
        </table>

        <Pagination count={newCount}/>
    </div>
  )
}


export default Users