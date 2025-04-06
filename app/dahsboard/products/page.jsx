import Search from "@/app/ui/dashboard/search/search"
import styles from "@/app/ui/dashboard/products/products.module.css"
import Link from "next/link"
import Image from "next/image"
import Pagination from "@/app/ui/dashboard/pagination/pagination"
import { fetchProducts } from "@/app/lib/data"
import { deleteProduct } from "@/app/lib/action"

const Products = async ({searchParams}) => {

  const params = await searchParams

  const q = params?.q || "";
  const page = params?.page || 1;
  
  const [products,count] = await fetchProducts(q, page);
  const newCount = count.length
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product"/>
        <Link href="products/add">
        <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key = {product.id}>
            <td>
              <div className={styles.product}>
                <Image src={ product.img || "/NoShop.jpg" } alt="No avatar" width={40} height={40} className={styles.productImage}/>
                {product.title}
              </div>
            </td>
            <td>
              {product.description}
            </td>
            <td>{product.price}</td>
            <td>{product.createdAt.toString().slice(4,16)}</td>
            <td>{product.stock}</td>
            <td>
              <div className={styles.buttons}>
              <Link href={`./products/${product.id}`}>
                <button className={`${styles.button} ${styles.view}`}>View</button>
              </Link>
              <form action={deleteProduct}>
                <input type="hidden" name="id" value={product.id} />
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


export default Products