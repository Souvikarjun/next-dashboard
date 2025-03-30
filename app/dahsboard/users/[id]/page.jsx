import { fetchUsers } from "@/app/lib/data"
import styles from  "@/app/ui/dashboard/users/singleUser/sigleUser.module.css"
import Image from "next/image"

export default async function SingleUserPage() {
    const users = await fetchUsers()
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
                <Image src="/NoAvatar.jpg" alt="user" fill/>
            </div>
            Ghost
        </div>
        <div className={styles.formContainer}>
        
            <form action="" className={styles.form}>
                <label>Usename</label>
                <input type="text" name="uername" placeholder="Ghost"/>
                <label>Email</label>
                <input type="email" name="email" placeholder="ghostdeadhead@gmail.com"/>
                <label>Password</label>
                <input type="password" name="password" placeholder="******"/>
                <label>Phone</label>
                <input type="text" name="phone" placeholder="8910869034"/>
                <label>Address</label>
                <textarea type="text" name="address" placeholder="Hostel 😭"/>
                <label>Is Admin?</label>
                <select name="isAdmin" id="isAdmin">
                    <option value={true}>Yes</option>
                    <option value={false}>NO</option>
                </select>
                <label>Is Active?</label>
                <select name="icActive" id="isActive">
                    <option value={true}>Yes</option>
                    <option value={false}>NO</option>
                </select>
                <button >Update</button>
            </form>
        </div>
    </div>
  )
}
