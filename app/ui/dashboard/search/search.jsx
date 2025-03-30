"use client";

import { usePathname, useSearchParams, useRouter} from "next/navigation";
import styles from "./search.module.css"
import { MdSearch } from 'react-icons/md'


const Search = ({placeholder}) => {
  const searchParams = useSearchParams()
  const {replace} = useRouter()
  const pathName = usePathname()

  const handleSearch = (e) =>{

    const params = new URLSearchParams(searchParams)
    
    if(e.target.params){
      params.set("q", e.target.value)
    }
    else{
      params.delete("q")
    }
    replace(`${pathName}?${params}`)
  }

  return (
    <div className={styles.container}>
        <MdSearch/>
        <input type="text" placeholder={placeholder} className={styles.input} onChange={handleSearch} />
    </div>
  )
}

export default Search