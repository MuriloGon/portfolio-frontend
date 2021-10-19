import { useReducer, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { routes, routesPaths } from '../../utils/variables';
import NavItem from "./NavItem";
import { useSelector } from "react-redux";
import { RootState } from "../../slices";

const styles = {
  headerContainer: 'shadow-sm text-sm border-b-2 border-gray-500',
  mainWrapper: 'text-gray-800 font-semibold z-20',
  linksWrapper: 'mx-auto max-w-5xl grid grid-cols-nav-mobile sm:grid-cols-nav-desktop'
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const currentRoute = useSelector<RootState>(({ globalReducer: { currentRoute } }) => currentRoute);

  const showMenu = open ? "translate-0" : "-translate-x-full";


  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.mainWrapper}>
          <ul className={styles.linksWrapper}>
            <button className="px-5 row-start-1 col-start-3 col-end-4 sm:hidden " onClick={() => setOpen(!open)}>
              {open ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
            <div className="text-base row-start-1 col-start-2 col-end-3 sm:col-start-1 sm:col-auto text-center">
              <NavItem
                active={currentRoute === routes.home}
                to={routesPaths.home.path}
                text="Murilo Gonçalves" />
            </div>
            <div onClick={() => setOpen(false)} className={`fixed ${showMenu} transition-transform w-48 z-50 bg-white rounded-r-2xl rounded-b-2xl p-4 sm:p-0 sm:w-auto sm:transition-none h-screen sm:flex sm:justify-end sm:bg-none sm:translate-x-0 sm:static sm:h-auto sm:mt-0`}>
              <NavItem
                active={currentRoute === routes.projects}
                to={routesPaths.projects.path}
                text={routesPaths.projects.name} />
              <NavItem
                active={currentRoute === routes.contact}
                to={routesPaths.contact.path}
                text={routesPaths.contact.name} />
              <NavItem
                active={currentRoute === routes.login}
                to={routesPaths.login.path}
                text={routesPaths.login.name} />
            </div>
            {open && <div className="fixed w-screen h-screen bg-black opacity-50 backdrop-blur-md z-30 sm:hidden" onClick={() => setOpen(false)} />}
          </ul>
        </div>
      </header>
    </>
  );
}

export default Navbar;
