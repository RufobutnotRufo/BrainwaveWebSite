import React from "react";
import appleSvg from "../assets/appleIos.svg";
import googleSvg from "../assets/googleSvg.svg";
import mailSvg from "../assets/mailIcon.svg";
import passwordSvg from "../assets/passwordIcon.svg";
import robotImg from "../assets/robotImg.svg";

const NewAccount: React.FC = () => {
  return (
    <section
      className="bg-cover bg-center w-full h-full"
      style={{ backgroundImage: `url(${robotImg})` }}
    >
      <div className="container p-40">
        <div className="flex md:flex-row justify-around gap-10 breakpoint910:flex-col">
          <div className="flex flex-col gap-10 md:gap-8 md:text-center">
            <h1 className="font-sansSec font-normal text-5xl text-slate-100 max-w-[500px]">
              Join the AI revolution with Brainwave
            </h1>
            <p className="text-slate-300 font-sansSec font-normal text-base">
              Get started with Brainwave - AI chat app today and experience the
              power of AI in your conversations!
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 border-b-2 border-gray-400 py-2">
              <img alt="email-icon" src={mailSvg} className="w-5 h-5" />
              <input
                placeholder="Email"
                className="w-full pl-3 bg-transparent border-none outline-none"
              />
            </div>
            <div className="flex items-center gap-2 border-b-2 border-gray-400 py-2">
              <img alt="password-icon" src={passwordSvg} className="w-5 h-5" />
              <input
                placeholder="Password"
                type="password"
                className="w-full pl-3 bg-transparent border-none outline-none"
              />
            </div>
            <button className="w-full bg-white text-black rounded-md text-xs font-bold font-sansFirst py-2">
              SIGN IN
            </button>

            <div className="mt-10 text-center">
              <p className="font-sansSec text-gray-500">
                Or sign in with open accounts
              </p>
              <div className="flex gap-4 mt-4 justify-center">
                <img alt="apple-logo" src={appleSvg} className="w-8 h-8" />
                <img alt="google-logo" src={googleSvg} className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewAccount;
