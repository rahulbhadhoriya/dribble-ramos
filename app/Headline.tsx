import laptopImg from './assets/laptop.jpg';
import Image from 'next/image';

import {
  faBolt,
  faChartSimple,
  faEllipsis,
  faPlay,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Headline() {
  return (
    <section className="text-black text-9xl py-12 px-10 text-center my-20">
      <div className="flex items-center ml-32 relative ">
        <div className="flex items-center justify-center">
          <span
            className="bg-slate-200 rounded-full w-[120px] h-[120px] flex items-center justify-center"
            data-aos="rotate-anim3"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-easing="ease-in-out"
          >
            <FontAwesomeIcon
              icon={faBolt}
              color="red"
              fontSize={'3rem'}
            />
          </span>
          <span
            className="bg-red-500 rounded-full w-[120px] h-[120px] relative flex items-center justify-center right-3"
            data-aos="rotate-anim3"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-easing="ease-in-out"
          >
            <FontAwesomeIcon
              icon={faEllipsis}
              fontSize={'3rem'}
              color="white"
            />
          </span>
        </div>
        <div
          data-aos="fade"
          data-aos-duration="2000"
          data-aos-delay="500"
          data-aos-easing="ease-in-out"
        >
          Analytics
        </div>
        <div
          className="absolute text-xs top-4 right-0"
          data-aos="fade"
          data-aos-duration="2000"
          data-aos-delay="500"
          data-aos-easing="ease-in-out"
        >
          <div className="relative h-[150px] w-[350px]">
            <div className="bg-red-500 border-s rounded-full h-10 w-10 absolute top-[-14px] left-[-14px] flex items-center justify-center">
              <FontAwesomeIcon
                icon={faPlay}
                fontSize={'0.75rem'}
                color="white"
              />
            </div>
            <Image
              className="rounded-2xl"
              src={laptopImg}
              alt="laptop image"
              /*  height={150}
              width={300} */
            />
          </div>
        </div>
      </div>
      <div
        className="flex gap-5"
        data-aos="fade"
        data-aos-duration="2000"
        data-aos-delay="500"
        data-aos-easing="ease-in-out"
      >
        that
        <span className="text-slate-300">helps</span>
        you
      </div>
      <div
        className="flex justify-end"
        data-aos="fade"
        data-aos-duration="2000"
        data-aos-delay="500"
        data-aos-easing="ease-in-out"
      >
        shape
        <span
          className="bg-yellow-400 rounded-full w-[120px] h-[120px] flex items-center justify-center mx-3 relative top-1"
          data-aos="rotate-anim3"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-easing="ease-in-out"
        >
          <FontAwesomeIcon
            icon={faChartSimple}
            fontSize={'2rem'}
            color="black"
          />
        </span>
        the future
      </div>
    </section>
  );
}
