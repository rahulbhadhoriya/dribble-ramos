import DemoBtn from './DemoBtn';

export default function EfficiencySection() {
  return (
    <section className="my-16">
      <div
        className="px-16"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        <div className="text-9xl  text-start">
          Maximize{' '}
          <span className="text-gray-300 mr-4">efficiency</span>
        </div>
        <div className="text-9xl  text-start">with our intuitive</div>
      </div>
      <div className="px-[4rem] flex justify-between mb-[6rem] mt-8">
        <div className="flex justify-center items-center">
          <div
            className="w-[120px] h-[120px] bg-gray-100 rounded-full z-10 grid justify-center items-center "
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-easing="linear"
          >
            <div className="text-white bg-red-500 inline-block px-[0.4rem] py-[0.2rem] rounded-lg -rotate-45 ">
              z
            </div>
          </div>
          <div
            className="w-[120px] h-[120px] bg-yellow-400 relative left-[-1rem] rounded-full text-[0.5rem] grid justify-center items-center "
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-easing="linear"
          >
            <div className="text-center">
              <span className="text-[0.8rem]">45%</span>
              <br />
              system grow
              <br />
              faster
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center bg-yellow-400 rounded-[3rem] overflow-hidden h-[7rem] w-[20rem]">
          <button
            className="text-6xl text-nowrap"
            data-aos="fade-left"
            data-aos-easing="ease-in-sine"
            data-aos-offset="100"
          >
            This is for analytics services
          </button>
        </div>
      </div>
      <hr />
      <div className="px-16 mt-12 mb-8 flex justify-between items-center">
        <div
          className="text-black font-thin"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-easing="linear"
        >
          Explore traffic source, page behaviour, conversation and
          more to gain deep insight
          <br /> into your audience.With us, your business doesn&#39;t
          just adopt- it evolves
        </div>
        <DemoBtn />
      </div>
    </section>
  );
}
