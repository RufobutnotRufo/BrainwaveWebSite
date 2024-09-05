import { useState } from "react";
import logo from "../assets/logo.svg";
import burgerMenuLogo from "../assets/burger-menu-btn.svg";
import signInBtn from "../assets/sign-in-btn.svg";

const Header: React.FC = () => {
  const [burgerMenuToggle, setBurgerMenuToggle] = useState<boolean>(false);
  return (
    <header className="p-2">
      <div className="container p-2">
        <div className="flex items-center justify-between">
          <div>
            <img alt="Company Logo" src={logo} />
          </div>
          {burgerMenuToggle ? (
            <div>
              <ul className="flex flex-col gap-10 text-gray-500 text-xs font-semibold cursor-pointer bg-slate-800 p-10 text-center">
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
                  <button>
                    <img src={signInBtn} />
                  </button>
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
            <ul className="gap-10 text-gray-500 text-xs font-semibold cursor-pointer lg:block hidden burger-menu-825:flex">
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

          <div className="gap-5 text-gray-500 text-xs font-semibold cursor-pointer items-center lg:block hidden burger-menu-825:flex">
            <button>NEW ACCOUNT</button>
            <button>
              <img src={signInBtn} />
            </button>
          </div>

          <button className="lg:block flex burger-menu-825:hidden ">
            <img alt="menu-btn" src={burgerMenuLogo} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
