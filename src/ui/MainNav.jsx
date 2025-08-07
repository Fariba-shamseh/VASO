import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const MainNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // پاک کردن event listener وقتی کامپوننت unmount میشه
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={` top-0 z-50 h-20 w-full transition-all duration-500 ${
        isScrolled ? "sticky bg-white" : "fixed bg-transparent"
      }`}
    >
      <ul className="flex flex-row items-center justify-center text-dark  transition-colors font-medium text-lg space-x-2 ">
        <NavItem to="/about" label="About" />
        <NavItem to="/shop" label="Shop" />
        <NavItem to="/pages" label="Pages" />

        <li>
          <Link
            to="/home"
            className="flex items-center justify-center w-60 gap-3 px-6 py-2 mx-14 rounded-lg transition-colors"
          >
            <img
              src="/images/main-logo.png"
              alt="VASO"
              className="h-14 w-auto"
            />
          </Link>
        </li>

        <NavItem to="/search" label="Search" />
        <NavItem to="/account" label="Account" />
        <NavItem to="/cart" label="Cart" />
      </ul>
    </nav>
  );
};

const NavItem = ({ to, label }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex items-center w-40 gap-3 px-5 py-2 rounded-lg justify-center hover:text-accent ${
            isActive ? "text-accent" : ""
          }`
        }
      >
        <span>{label}</span>
      </NavLink>
    </li>
  );
};

export default MainNav;
