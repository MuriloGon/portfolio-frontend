import { useState } from "react";
import { Link } from "react-router-dom";

const styles = {
  linkContainer: "h-11 flex items-center px-4 justify-center sm:justify-start  hover:text-red-500",
  linkItem: "flex items-center",
  linkActive: "text-yellow-500"
}

function NavItem({ to, text, active = false }: { to: string, text: string, active?: boolean }) {
  const activeLink = active ? styles.linkActive : '';
  return (
    <Link className={styles.linkContainer} to={to}>
      <li className={`${styles.linkItem} ${activeLink}`}>
        {text}
      </li>
    </Link>
  );
}

export default NavItem;
