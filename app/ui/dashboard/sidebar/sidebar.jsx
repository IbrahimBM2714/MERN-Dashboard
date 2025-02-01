import MenuLink from "./menuLink";
import styles from "./sidebar.module.css";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
      },
      {
        title: "Users",
        path: "/dashboard/users",
      },
      {
        title: "Products",
        path: "/dashboard/products",
      },
      {
        title: "Transactions",
        path: "/dashboard/transaction",
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
      },
      {
        title: "Help",
        path: "/dashboard/help",
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <div className={styles.userDetail}>
          <span>John Doe</span>
          <span>Administrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} />
            ))}
          </li>
        ))}
      <button className={styles.logout}>Logout</button>
      </ul>

    </div>
  );
};

export default Sidebar;
