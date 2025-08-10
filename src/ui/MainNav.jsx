import { useEffect, useRef, useState } from "react";
import Logo from "./Logo.jsx";
import NavItem from "./NavItem.jsx";

const menuItems = [
  { to: "/about", label: "About" },
  { to: "/shop", label: "Shop" },
  { to: "/pages", label: "Pages" },
  { to: "/account", label: "Account" },
  { to: "/cart", label: "Cart" },
];

const MainNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef(null);

  // بستن سرچ وقتی بیرون کلیک میشه
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    };

    if (searchOpen) {
      setTimeout(() => {
        document.addEventListener("click", handleClickOutside);
      }, 0);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [searchOpen]);

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
      className={`top-0 z-50 h-20 w-full ${
        isScrolled ? "sticky bg-white" : "fixed bg-transparent"
      }`}
    >
      {/* منوی دسکتاپ */}
      <div className="hidden md:flex items-center justify-between h-full px-6 max-w-7xl mx-auto">
        {/* منوی سمت چپ (About, Shop, Pages) */}
        <ul className="flex items-center space-x-8 text-dark font-medium text-lg">
          {menuItems.slice(0, 3).map((item) => (
            <NavItem
              key={item.to}
              to={item.to}
              label={item.label}
              className="flex items-center w-fit justify-center"
            />
          ))}
        </ul>

        {/* لوگو در وسط */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* آیتم‌های سمت راست (Search, Account, Cart) */}
        <ul className="flex items-center space-x-8 text-dark font-medium text-lg">
          <li>
            {/* باکس سرچ داخل li */}
            <div className="relative flex items-center w-fit justify-center transition-all duration-200">
              {searchOpen && (
                <input
                  ref={searchRef}
                  type="text"
                  placeholder="Search Here..."
                  className="absolute right-full text-md px-2 py-1 focus:outline-none transition-all duration-500 border-b border-accent"
                  autoFocus
                />
              )}
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="whitespace-nowrap"
              >
                Search
              </button>
            </div>
          </li>

          {menuItems.slice(3).map((item) => (
            <NavItem
              key={item.to}
              to={item.to}
              label={item.label}
              className="flex items-center w-fit justify-center"
            />
          ))}
        </ul>
      </div>

      {/* دکمه منوی موبایل */}
      <button
        className="md:hidden absolute top-1/2 right-10 transform -translate-y-1/2 text-dark font-semibold text-3xlg"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
      >
        Menu
      </button>

      {/* منوی موبایل */}
      <div
        className={`fixed flex flex-col top-0 right-0 h-full w-96 bg-white shadow-md md:hidden transform transition-transform duration-300 ease-in-out z-60 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* دکمه بستن */}
        <div className="flex justify-end text-accent p-4">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-12 h-12 text-2xl font-bold flex items-center justify-center cursor-pointer border-4 border-transparent rounded-lg hover:text-dark active:border-blue-200"
          >
            ✕
          </button>
        </div>

        <div className="px-4 mb-8">
          <Logo />
        </div>

        <ul className="px-4 space-y-6">
          {menuItems.map((item) => (
            <NavItem key={item.to} to={item.to} label={item.label} />
          ))}
        </ul>
      </div>

      {/* Overlay برای بستن منوی موبایل */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50  md:hidden z-50"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default MainNav;
