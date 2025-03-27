import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css"

const AddUser = () => {
  return (
    <div className={styles.container}>
        <form action="" className={styles.form}>
            <input type="text" placeholder="username" name="username" required/>
            <input type="email" placeholder="email" name="email" />
            <input type="password" placeholder="password" name="password" />
            <input type="phone" placeholder="phone" name="phone" />
            <select name="inAdmin" id="inAdmin">
                <option value={false}>Is Admin?</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>
            <select name="inActive" id="inActive">
                <option value={true}>Is Active?</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>
            <textarea name="address" id="address" cols="30" rows="10" placeholder="Address"></textarea>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default AddUser;