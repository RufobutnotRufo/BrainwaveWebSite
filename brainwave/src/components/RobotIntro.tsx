import robotImg from "../assets/robotImg.svg";

import list from '../assets/mobile-svg/MobileTab (1).svg'
import seacrh from '../assets/mobile-svg/MobileTab (2).svg'
import addList from '../assets/mobile-svg/MobileTab (3).svg'
import home from '../assets/mobile-svg/MobileTab.svg'

const RobotIntro: React.FC = () => {
  return (
    <section className="container flex justify-center relative">
      <div className="w-[1021px] h-[490px] bg-cover bg-no-repeat rounded-[20px]" style={{backgroundImage: `url(${robotImg})`}}>
        <div>
            <ul className="flex gap-[24px] border-10 border-2 pt-[8px] pr-[8px] pb-[8px] pl-[8px] bg-[#4740605E] absolute top-[340px] left-[70px] ">
                <li className="cursor-pointer"><img src={home}/></li>
                <li className="cursor-pointer"><img src={list}/></li>
                <li className="cursor-pointer"><img src={seacrh}/></li>
                <li className="cursor-pointer"><img src={addList}/></li>
            </ul>
        </div>

       <div className="absolute bottom-[50px] left-[33%]"><input className="w-[488px] h-[54px] rounded-[20px] bg-black bg-opacity-90 pl-[56px]" placeholder="AI is generating"/></div>


       <div>
        <div><img/></div>
        <div>
            <h4>Code generation</h4>
            <div>
                <div><img/>
                <img/>
                <img/></div>

                <p>1m ago</p>
                
            </div>
       </div>


       </div>
      </div>
    </section>
  );
};

export default RobotIntro;
