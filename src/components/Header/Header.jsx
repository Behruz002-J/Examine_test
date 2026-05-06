import { Link } from "react-router-dom";
import Logo from "/src/assets/logos/logo-findsweet.svg";

function Header() {
  const navItems = [
    { name: "Company", link: "/company" },
    { name: "Career", link: "/career" },
    { name: "Blog", link: "/blog" },
    { name: "InnerC", link: "/inner" },
  ];

  return (
    <>
    <header className="flex">
      
    <div className="items-center px-10 h-[100px] mx-auto flex max-w-[1440px]">
      
      <Link to="/">
        <img
          className="invert brightness-0"
          src={Logo}
          alt="logo"
        />
      </Link>

      <nav className="flex items-center gap-6">
        {navItems.map((item, index) => (
          <Link key={index} to={item.link} className="hover:text-orange-400">
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="flex items-center">
        <Link to='javascript:vodi(0)'>Clone project</Link>
      </div>
      
    </div>
    <div className="text-amber-600 flex">
  Tailwind ishlayaptimi?
</div>
    </header>
    </>
  );
}

export default Header;