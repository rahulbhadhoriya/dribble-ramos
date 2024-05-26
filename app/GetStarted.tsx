import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Control from './Control';
import DemoBtn from './DemoBtn';
import { faLink } from '@fortawesome/free-solid-svg-icons';

export default function GetStarted() {
  return (
    <section className="text-center my-16 mx-16 mb-[3rem] rounded-[2rem] flex flex-col items-center">
      <div
        className="bg-red-500 w-[5rem] h-[5rem] shadow-lg shadow-red-300 mt-10 mb-5 rounded-[1rem] flex items-center justify-center"
        data-aos="zoom-out"
        data-aos-duration="500"
      >
        <FontAwesomeIcon icon={faLink} size="lg" color="white" />
      </div>
      <div
        className="text-8xl mb-5"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-easing="ease-in-sine"
      >
        Get Started
      </div>
      <div className="text-base text-slate-400 mb-8">
        Turn information into advantage! State using
        <br />
        Ramos today. Sign up for free trail
      </div>
      <DemoBtn />
    </section>
  );
}
