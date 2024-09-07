import { useState } from "react";
import logo from "../assets/logo.svg";
import burgerMenuLogo from "../assets/burger-menu-btn.svg";
import signInBtn from "../assets/sign-in-btn.svg";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [burgerMenuToggle, setBurgerMenuToggle] = useState<boolean>(false);

  const toggleBurgerMenu = () => {
    setBurgerMenuToggle(!burgerMenuToggle);
  };
  return (
    <header className="p-2">
      <div className="container p-2">
        <div className="flex items-center justify-between">
          <div>
            <img alt="Company Logo" src={logo} />
          </div>
          {burgerMenuToggle ? (
            <div>
              <ul className="flex flex-col gap-10 text-gray-500 text-xs font-semibold cursor-pointer bg-slate-800 p-10 text-center ">
                <li>
                  <a>FEATURES</a>
                </li>
                <li>
                  <a>PRICING</a>
                </li>
                <li>
                  <a>HOW TO USE</a>
                </li>
                <li>
                  <a>ROADMAP</a>
                </li>
                <li>
                  <Link to="/signin">
                    <img src={signInBtn} />
                  </Link>
                </li>
                <li>
                  <button>NEW ACCOUNT</button>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}

          <div>
            <ul className="gap-10 text-gray-500  font-sansFirst text-xs font-semibold cursor-pointer lg:block hidden burger-menu-825:flex">
              <li>
                <a>FEATURES</a>
              </li>
              <li>
                <a>PRICING</a>
              </li>
              <li>
                <a>HOW TO USE</a>
              </li>
              <li>
                <a>ROADMAP</a>
              </li>
            </ul>
          </div>

          <div className="font-sansFirst gap-5 text-gray-500 text-xs font-semibold cursor-pointer items-center lg:block hidden burger-menu-825:flex">
            <button>NEW ACCOUNT</button>
            <Link to="/signin">
              <img src={signInBtn} />
            </Link>
          </div>

          <button
            className="lg:block flex burger-menu-825:hidden"
            onClick={toggleBurgerMenu}
          >
            <img alt="menu-btn" src={burgerMenuLogo} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
