// import Dashboard from "@/app/dahsboard/page"
import Image from "next/image";
import styles from "./sidebar.module.css"
import MenuLink from "./menuLink/menuLink";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout
}
from "react-icons/md"



const menuItem =[
  {
    title: "Pages",
    list: [
      { 
        title: "Dashboard",
        path: "/dahsboard",
        icon: <MdDashboard />
      },
      { 
        title: "User",
        path: "/dahsboard/users",
        icon: <MdSupervisedUserCircle />
      },
      { 
        title: "Products",
        path: "/dahsboard/products",
        icon: <MdShoppingBag />
      },
      { 
        title: "Transaction",
        path: "/dahsboard/transactions",
        icon: <MdAttachMoney />
      },

    ],
  },

  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "./dahsboard/revenue",
        icons: <MdWork />
      },
      {
        title: "Reports",
        path: "./dahsboard/reports",
        icons: <MdWork />
      },
      {
        title: "Teams",
        path: "./dahsboard/teams",
        icons: <MdPeople />
      },
    ]
  },

  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "./dahsboard/settings",
        icons: <MdOutlineSettings />
      },
      {
        title: "Help",
        path: "./dahsboard/help",
        icons: <MdHelpCenter />
      },
    ]
  }
];

export const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image className={styles.userImage} src="/NoAvatar.jpg" alt ="" width="50" height="50"/>
        <div className={styles.userDetail}>
          <span className={styles.userName}>Ghost</span>
          <span className={styles.userTitle}>Admin</span>
        </div>
      </div>
    <ul className={styles.list}>
      {menuItem.map(cat => (<li key={cat.title}>
        <span className={styles.cat}>{cat.title}</span>
        {cat.list.map(item =>(
          <MenuLink item={item} key = {item.title}/>
        ))}
      </li>))}
    </ul>
    <button className={styles.logout} >
      <MdLogout/>
      Logout
    </button>
    </div>
  )
}
