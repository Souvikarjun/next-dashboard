import styles from  "@/app/ui/dashboard/products/singleProduct/sigleProduct.module.css"
import Image from "next/image"

export default function SingleProductPage() {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
                <Image src="/NoShop.jpg" alt="user" fill/>
            </div>
            MyPhone
        </div>
        <div className={styles.formContainer}>
            <form action="" className={styles.form}>
                <label>Title</label>
                <input type="text" name="Title" placeholder="Myphone"/>
                <label>Price</label>
                <input type="number" name="Price" placeholder="10000000"/>
                <label>Stock</label>
                <input type="number" name="stock" placeholder="******"/>
                <label>Color</label>
                <input type="text" name="color" placeholder="blue"/>
                <label>Size</label>
                <input type="text" name="Size" placeholder="something"/>
                <select name="cat" id="cat">
                    <option value="general">Chose a Catagory</option>
                    <option value="kitchen">Kitchen</option>
                    <option value="phone">Phone</option>
                    <option value="computer">Computer</option>
                 </select>
                <label>Description</label>
                <textarea type="text" name="address" placeholder="Hostel 😭"/>
                <label>Catagory</label>
                <button >Update</button>
            </form>
        </div>
    </div>
  )
}
