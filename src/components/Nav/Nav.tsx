import { useState } from "react";
import logo from "../../assets/images/logo.png";

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
          <li>
            <a className="text-white md:text-paragraph-color" href="/">
              Demos
            </a>
          </li>
          <li>
            <a className="text-white md:text-paragraph-color" href="/">
              Pages
            </a>
          </li>
          <li>
            <a className="text-white md:text-paragraph-color" href="/">
              Projects
            </a>
          </li>
          <li>
            <a className="text-white md:text-paragraph-color" href="/">
              Blog
            </a>
          </li>
          <li>
            <a className="text-white md:text-paragraph-color" href="/">
              Blocks
            </a>
          </li>
          <li>
            <a
              className="text-white md:text-paragraph-color"
              href="documentation.html"
            >
              Documentation
            </a>
          </li>
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
