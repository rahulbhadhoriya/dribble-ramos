export default function Footer() {
  return (
    <footer>
      <div className="  bg-black mt-0 text-white pt-8 pb-12">
        <div
          className="flex justify-between px-8 py-8 items-center"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-easing="linear"
        >
          <ul className="flex justify-start gap-[1.5rem] text-slate-400">
            <li>About</li>
            <li>Why Us</li>
            <li>Platform</li>
            <li>Pricing</li>
            <li>Contacts</li>
          </ul>
          <h3
            className=" mr-[1rem] text-7xl "
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-easing="linear"
          >
            hello@ramos.com
          </h3>
        </div>
        <hr className="bg-gray-300" />
        <div className="flex justify-between text-white ">
          <div className="mt-[1rem] px-[2rem] w-1/2">
            <div
              className="flex gap-[5rem]  "
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-easing="linear"
            >
              <div className="grid ">
                <div className="text-[0.8rem]">
                  Warrensville Heights
                </div>
                <div className="text-[0.8rem] text-slate-400">
                  14418 Vineyard Drive, NC{' '}
                </div>
                <div className="text-[0.8rem] text-slate-400">
                  44128
                </div>
              </div>

              <div>
                <div className="text-[.8rem]">Saint Louis</div>
                <div className="text-[0.8rem] text-slate-400">
                  {' '}
                  1366 Penn Street
                </div>
                <div className="text-[0.8rem] text-slate-400">
                  63101
                </div>
              </div>
            </div>
            <p
              className="mt-[3rem] text-[8rem] "
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-easing="linear"
            >
              Ramos
              <span className=" text-[0.8rem] relative bottom-[4rem] font-[1500]">
                R
              </span>
            </p>
          </div>

          <div className="flex justify-between mt-[1rem] ">
            <div
              className="self-end pb-[5rem]  px-[3rem] text-[0.6rem] text-slate-400"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-easing="linear"
            >
              Privacy policy
            </div>
            <div
              className=" self-end pb-[5rem]  px-[3rem] text-[0.6rem] text-slate-400"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-easing="linear"
            >
              License agreement
            </div>
            <div>
              <ul
                className="grid justify-end mr-[1rem] gap-[1rem] px-[2rem] text-right"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-easing="linear"
              >
                <li>Linkedin</li>
                <li>Instagram</li>
                <li>Facebook</li>
              </ul>
            </div>

            {/* <div className="bg-white h-[4rem] w-[4rem]  rounded-[1rem]">
          bar
        </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
