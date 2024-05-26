'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DefaultTextAnimationTime } from './common/utils';
import { faLink } from '@fortawesome/free-solid-svg-icons';

export default function Navigation() {
  const getNavButtons = () => {
    const buttonList = [
      'Dashboard',
      'Reports',
      'Documents',
      'History',
      'Settings',
    ];
    return buttonList.map((item, index) => (
      <button
        data-aos="fade-up"
        data-aos-duration={DefaultTextAnimationTime}
        data-aos-easing="ease-in-out"
        data-aos-offset="1"
        key={item + index}
      >
        {item}
      </button>
    ));
  };
  return (
    <header className="bg-black p-2 text-white flex items-center justify-between m-[10px] rounded-2xl">
      <div
        className="font-bold pl-5 flex items-center gap-1"
        data-aos="fade-up"
        data-aos-duration={DefaultTextAnimationTime}
        data-aos-delay="500"
        data-aos-easing="ease-in-out"
      >
        <FontAwesomeIcon icon={faLink} size="xs" />
        <span>ramos</span>
      </div>
      <div className="flex gap-12 bg-slate-900 self-stretch p-4 rounded-lg text-xs text-light">
        {getNavButtons()}
      </div>
      <button
        className="bg-white text-x text-black py-2 px-4 rounded-xl mr-1"
        data-aos="fade-up"
        data-aos-duration={DefaultTextAnimationTime}
        data-aos-delay="500"
        data-aos-easing="ease-in-out"
        data-aos-offset="1"
      >
        {' '}
        Sign Up
      </button>
    </header>
  );
}
