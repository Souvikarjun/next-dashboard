import { addProduct } from "@/app/lib/action";
import styles from "@/app/ui/dashboard/products/addProduct/addproduct.module.css"

const AddProduct = () => {
  return (
    <div className={styles.container}>
        <form action={addProduct} className={styles.form}>
            <input type="text" placeholder="title" name="title" required/>
            <select name="catagory" id="catagory">
                <option value="general">Chose a Catagory</option>
                <option value="kitchen">Kitchen</option>
                <option value="phone">Phone</option>
                <option value="computer">Computer</option>
            </select>
            <input type="number" placeholder="price" name="price" />
            <input type="number" placeholder="stock" name="stock" />
            <input type="text" placeholder="color" name="color" />
            <input type="text" placeholder="size" name="size" />
            <textarea name="description" id="description" cols="30" rows="10" placeholder="description"></textarea>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default AddProduct;
