import { useState } from "react";
import { ReactComponent as BellIcon } from "./assets/icons/bell.svg";
import { ReactComponent as MessengerIcon } from "./assets/icons/messenger.svg";
import { ReactComponent as CaretIcon } from "./assets/icons/caret.svg";
import { ReactComponent as PlusIcon } from "./assets/icons/plus.svg";
import { ReactComponent as CogIcon } from "./assets/icons/cog.svg";
import { ReactComponent as ChevronIcon } from "./assets/icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "./assets/icons/arrow.svg";
import { ReactComponent as BoltIcon } from "./assets/icons/bolt.svg";
import { ReactComponent as ProfileIcon } from "./assets/icons/profile.svg";

function App() {
  return (
    <>
      <Navbar>
        <NavItem icon={<PlusIcon />} />
        <NavItem icon={<BellIcon />} />
        <NavItem icon={<MessengerIcon />} />
        {/*
         * icons are not added as direct children of
         * because some nav items will be drop down menus.
         * The NavItem Children will be controlled by state.
         */}

        <NavItem icon={<CaretIcon />}>
          <DropdownMenu />
        </NavItem>
      </Navbar>
    </>
  );
}

function Navbar({ children }) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{children}</ul>
    </nav>
  );
}

function NavItem({ icon, children }) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {icon}
      </a>
      {/*conditionally render the children based on state */}
      {open && children}
    </li>
  );
}

function DropdownMenu() {
  function DropdownItem({ children, leftIcon, rightIcon }) {
    return (
      <a href="/" className="menu-item">
        <span className="icon-button">{leftIcon}</span>
        {children}
        <span className="icon-right">{rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown">
      <DropdownItem leftIcon={<ProfileIcon />}>My Profile</DropdownItem>
      <DropdownItem
        leftIcon={<CogIcon />}
        rightIcon={<ArrowIcon />}
      ></DropdownItem>
    </div>
  );
}

export default App;
