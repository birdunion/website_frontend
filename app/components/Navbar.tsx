import { useState } from "react";
import { NavLink } from "react-router";
import { FaTimes, FaBars } from "react-icons/fa";
import { LuBird } from "react-icons/lu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const active = "text-gray-200 font-semibold";
  const base = "transition hover:text-gray-400";

  return (
    <nav className="bg-red-800 dark:bg-red-950 border-b border-gray-600 shadow-md top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-lg font-bold text-white"
        >
          <LuBird className="text-white text-xl" />
          <span>The Bird Union</span>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <div className="space-x-4 text-sm text-white">
            <NavLink
              className={(isActive) => (isActive ? active : base)}
              to="/"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              className={(isActive) => (isActive ? active : base)}
              to="/faq"
              onClick={() => setMenuOpen(false)}
            >
              FAQ
            </NavLink>
            <NavLink
              className={(isActive) => (isActive ? active : base)}
              to="/blog"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </NavLink>
            <NavLink
              className={(isActive) => (isActive ? active : base)}
              to="/contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-xl cursor-pointer"
            title="menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden flex flex-row bg-red-800 dark:bg-red-950 border-t border-b border-gray-500 px-6 py-4 space-y-2 space-x-4 text-center">
            <NavLink
              className={(isActive) => (isActive ? active : base)}
              to="/"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              className={(isActive) => (isActive ? active : base)}
              to="/faq"
              onClick={() => setMenuOpen(false)}
            >
              FAQ
            </NavLink>
            <NavLink
              className={(isActive) => (isActive ? active : base)}
              to="/blog"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </NavLink>
            <NavLink
              className={(isActive) => (isActive ? active : base)}
              to="/contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
