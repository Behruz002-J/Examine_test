import { Link, useLocation } from "react-router-dom"; // useLocation qo'shildi
import Logo from "/src/assets/logos/logo-findsweet copy.svg";

function Header() {
  const location = useLocation(); 

  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "Service", path: "/service" },
    { name: "Company", path: "/" },
    { name: "Career", path: "/career" },
    { name: "Blog", path: "/blog" },
    { name: "Contact us", path: "/contact" },
  ];

  return (
    <>
    <header className="bg-[#1D1E2C] text-white">
      <div className="max-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between">
        
        <div className="flex-shrink-0">
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-6 brightness-0 invert" />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-x-8 ml-[450px] h-full">
          {navLinks.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors relative flex items-center h-full pt-1
                  ${isActive ? "text-white" : "text-gray-400 hover:text-white"}`}
              >
                {isActive && (
                  <span className="absolute top-0 left-0 w-full h-[3px] bg-orange-400" />
                )}
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center group cursor-pointer border-l border-gray-700 pl-8 h-full">
          <span className="text-sm font-semibold text-orange-200 group-hover:text-white transition-colors">
            Clone project
          </span>
          <svg className="ml-2 w-4 h-4 text-orange-200 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>

      </div>
    </header>
    <main>
      <section></section>
    </main>
    </>
  );
}

export default Header;