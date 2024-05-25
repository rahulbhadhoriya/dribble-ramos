export default function Lastpaage() {
  return (
    <div className=" w-[80] bg-white border-solid border-[0.1rem] border-gray-50 mx-16 mb-[3rem] rounded-[2rem]">
      <div
        className=""
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-easing="linear"
      >
        <div className="text-8xl ml-8 text-start mt-8 tracking-widest">
          We give you full
        </div>
        <div className="text-8xl ml-8 mt-4 mb-8 tracking-widest">
          <span className="text-gray-300 mr-[1rem]">control</span>
          over your data
        </div>
      </div>
      <main
        className="flex justify-center mx-9 gap-[.5rem]"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-easing="linear"
      >
        <div className="bg-gray-100  w-1/2 border-solid border-[0.1rem] border-gray-320 rounded-[2rem] grid justify-center text-center">
          <div className="bg-white mx-20 h-[20rem] w-[20rem] mt-12 border-solid border-gray-100 rounded-[2rem] ">
            image a
          </div>
          <div className="text-xl my-4">Improved customer service</div>
          <div className="text-[0.8rem] mb-6 text-black">
            Analytics help optamize service process by <br />
            providing information on how to improve interactions <br />
            with customer and increase their satisfaction.
          </div>
        </div>
        <div className="bg-gray-100  w-1/2    border-solid border-[0.1rem] border-gray-320 rounded-[2rem] grid justify-center text-center">
          <div className="bg-white  mx-20 h-[20rem] w-[20rem]  mt-12 border-solid border-gray-100 rounded-[2rem] ">
            image b
          </div>
          <div className="text-xl my-4">Monitoring key indicators</div>
          <div className="text-[0.8rem] mb-6 text-black">
            Analytics platform allow bussiness to track <br />
            KPIs an important tool for measuring success <br />
            and achieving goals.
          </div>
        </div>
      </main>
      <div className="grid justify-items-center text-center  mt-8">
        <div
          className="bg-red-500 w-[5rem] h-[5rem] shadow-lg shadow-red-300 mt-10 mb-5 rounded-[1rem]"
          data-aos="zoom-out"
          data-aos-duration="800"
        ></div>
        <div
          className="text-8xl mb-5"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
        >
          Get Started
        </div>
        <p className="text-base text-slate-400">
          Turn information into advantage! State using
          <br />
          Ramos today. Sign up for free trail
        </p>
        <div className="flex justify-center gap-2 py-8">
          <button
            className="bg-gray-100 text-black  text-xs rounded-xl px-5   py-3 "
            data-aos="zoom-in"
            data-aos-duration="200"
          >
            Request a demo
          </button>
          <button
            className="bg-red-500 text-white text-xs rounded-xl px-5  py-3"
            data-aos="zoom-in"
            data-aos-duration="200"
          >
            Start for free
          </button>
        </div>
      </div>
      <footer>
        <div className="  bg-black mt-0 text-white rounded-bl-[2rem] rounded-br-[2rem] pt-8 pb-12">
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
              className=" mr-[1rem] text-[2rem] "
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
                  <div className="text-[0.8rem]">Warrensville Heights</div>
                  <div className="text-[0.8rem] text-slate-400">
                    14418 Vineyard Drive, NC{" "}
                  </div>
                  <div className="text-[0.8rem] text-slate-400">44128</div>
                </div>

                <div>
                  <div className="text-[.8rem]">Saint Louis</div>
                  <div className="text-[0.8rem] text-slate-400">
                    {" "}
                    1366 Penn Street
                  </div>
                  <div className="text-[0.8rem] text-slate-400">63101</div>
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
    </div>
  );
}
