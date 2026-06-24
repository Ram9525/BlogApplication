import React, { useState } from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Menu, X, Home, PenTool, BookOpen, LogIn, UserPlus } from "lucide-react";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", slug: "/", active: true, icon: Home },
    { name: "Login", slug: "/login", active: !authStatus, icon: LogIn },
    { name: "Signup", slug: "/signup", active: !authStatus, icon: UserPlus },
    { name: "All Posts", slug: "/all-posts", active: authStatus, icon: BookOpen },
    { name: "Add Post", slug: "/add-post", active: authStatus, icon: PenTool },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-gray-900/95 border-b border-gray-800 shadow-xl">
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <Logo width="50px" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent hidden sm:block">
              MegaBlog
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-2">
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className="flex items-center gap-2 px-4 py-2 text-gray-300 font-medium rounded-lg transition-all duration-200 hover:bg-gray-800 hover:text-blue-400 cursor-pointer"
                    >
                      <item.icon size={18} />
                      {item.name}
                    </button>
                  </li>
                )
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} className="text-gray-300" /> : <Menu size={24} className="text-gray-300" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-in slide-in-from-top duration-200">
            <ul className="flex flex-col gap-2">
              {navItems.map(
                (item) =>
                  item.active && (
                    <li key={item.name}>
                      <button
                        onClick={() => {
                          navigate(item.slug);
                          setIsOpen(false);
                        }}
                        className="flex items-center gap-3 w-full px-4 py-3 text-gray-300 font-medium rounded-lg transition-all duration-200 hover:bg-gray-800 hover:text-blue-400 cursor-pointer"
                      >
                        <item.icon size={20} />
                        {item.name}
                      </button>
                    </li>
                  )
              )}
              {authStatus && (
                <li className="pt-2 border-t border-gray-800">
                  <LogoutBtn />
                </li>
              )}
            </ul>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;