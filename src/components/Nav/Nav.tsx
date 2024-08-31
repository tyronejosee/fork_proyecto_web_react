import { useState } from "react";
import logo from "../../assets/images/logo/logo.png";
import { NAV_ITEMS } from "../../utils/constants";

export function Nav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="py-5 px-0">
      <div className="container flex justify-between">
        <div className="logo">
          <img src={logo} alt="Logo image" />
        </div>
        <span className="md:hidden" id="btn-menu" onClick={toggleMenu}>
          Menu
        </span>
        <ul className={isOpen ? "active" : `hidden md:flex`}>
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                className="text-white md:text-paragraph-color"
                href={item.link}
              >
                {item.name}
              </a>
            </li>
          ))}

          <span
            className="font-semibold absolute right-[10px] top-[20px] md:hidden"
            id="btn-close"
            onClick={toggleMenu}
          >
            Close
          </span>
        </ul>
      </div>
    </nav>
  );
}
