export default function StatsSections() {
  return (
    <section className="bg-gray-100 border-hidden rounded-[40px] mx-[-4rem] p-12">
      <div
        className="flex items-center justify-center"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        <div className="text-6xl w-3/5 my-20 text-start font-light ml-5">
          Your key to strategic
          <br /> sucess through analytics
        </div>

        <div className="text-2xl w-2/5 my-20 font-thin text-left">
          Ready for exciting, instanteneous,
          <br /> all-accessible insights in the real time?
        </div>
      </div>
      <div
        className="flex mx-5"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        <div className="bg-white flex shadow-lg justify-space w-3/5 border-solid border-1 border-gray-200 rounded-[20px] p-6">
          <div className=" w-1/2 my-10">
            <button className="bg-yellow-400 shadow-xl text-xs ml-5 p-3 rounded-xl text-black-500">
              Setting up reports
            </button>
            <div className="mt-10 mb-7 text-3xl ml-[20px]">
              Fast and easy access <br /> to analytics
            </div>
            <div
              className="text-base text-gray-400 ml-[20px] font-thin"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              One platform is the comprehensive <br /> system of
              solutions that will be the <br />
              first step towards the digitalization of <br />
              your bussiness!
            </div>
          </div>
          <div className="bg-slate-50 w-1/2 mt-10 border-solid border-1 border-gray-200 rounded-[10px] mr-[-4rem] "></div>
        </div>
        <div
          className="bg-black w-2/5 ml-[15px] rounded-[20px] text-white shadow-lg"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        ></div>
      </div>
      <div
        className="bg-grey-500 flex justify-center mt-16 items-center gap-4"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        <div className="text-3xl">
          Up to <span className="text-9xl">45%</span>
        </div>
        <div className="font-thin">
          Increase your analytic efficiency by up to 45%, Unique{' '}
          <br />
          algorith providein sight from data, reduce time for analysis
          <br /> and save time for making important, informed
          decisions
        </div>
      </div>
    </section>
  );
}
