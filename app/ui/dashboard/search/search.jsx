"use client";

import { usePathname, useSearchParams, useRouter} from "next/navigation";
import styles from "./search.module.css"
import { MdSearch } from 'react-icons/md'
import { useDebouncedCallback } from "use-debounce";


const Search = ({placeholder}) => {
  const searchParams = useSearchParams()
  const {replace} = useRouter()
  const pathName = usePathname()

  const handleSearch = useDebouncedCallback((e) =>{

    const params = new URLSearchParams(searchParams)

    params.set("page", 1)
    
    if(e.target.value){
      params.set("q", e.target.value)
    }
    else{
      params.delete("q")
    }
    replace(`${pathName}?${params}`)
  },200)

  return (
    <div className={styles.container}>
        <MdSearch/>
        <input type="text" placeholder={placeholder} className={styles.input} onChange={handleSearch} />
    </div>
  )
}

export default Search