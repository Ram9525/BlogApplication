import React, { useState } from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ];

  return (
    <header className="py-4 bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg">
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <Logo width="70px" className="transition-transform duration-300 hover:scale-110" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Navigation */}
          <ul
            className={`absolute md:static top-16 left-0 w-full bg-blue-600 md:bg-transparent p-5 md:p-0 space-y-4 md:space-y-0 md:flex md:items-center md:space-x-6 transition-all duration-300 flex items-center justify-between md:justify-end gap-10 z-50 ${
              isOpen ? "block" : "hidden"
            } md:block`}
          >
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <button
                      onClick={() => {
                        navigate(item.slug);
                        setIsOpen(false);
                      }}
                      className="block px-5 py-2 text-white text-center font-semibold rounded-lg transition-all duration-300 hover:bg-white hover:text-blue-600 md:inline cursor-pointer"
                    >
                      {item.name}
                    </button>
                  </li>
                )
            )}
            {/* Logout Button */}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
