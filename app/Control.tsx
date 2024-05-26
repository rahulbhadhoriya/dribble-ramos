export default function Control() {
  return (
    <section>
      <div
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-easing="linear"
      >
        <div className="text-8xl ml-8 text-start mt-8">
          We give you full
        </div>
        <div className="text-8xl ml-8 mt-4 mb-8">
          <span className="text-gray-300 mr-[1rem]">control</span>
          over your data
        </div>
      </div>
      <div
        className="flex justify-center mx-9 gap-[.5rem]"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-easing="linear"
      >
        <div className="bg-gray-100  w-1/2 border-solid border-[0.1rem] border-gray-320 rounded-[2rem] grid justify-center text-center">
          <div className="bg-white mx-20 h-[20rem] w-[20rem] mt-12 border-solid border-gray-100 rounded-[2rem] ">
            image a
          </div>
          <div className="text-xl my-4">
            Improved customer service
          </div>
          <div className="text-[0.8rem] mb-6 text-black">
            Analytics help optamize service process by <br />
            providing information on how to improve interactions{' '}
            <br />
            with customer and increase their satisfaction.
          </div>
        </div>
        <div className="bg-gray-100  w-1/2    border-solid border-[0.1rem] border-gray-320 rounded-[2rem] grid justify-center text-center">
          <div className="bg-white  mx-20 h-[20rem] w-[20rem]  mt-12 border-solid border-gray-100 rounded-[2rem] ">
            image b
          </div>
          <div className="text-xl my-4">
            Monitoring key indicators
          </div>
          <div className="text-[0.8rem] mb-6 text-black">
            Analytics platform allow bussiness to track <br />
            KPIs an important tool for measuring success <br />
            and achieving goals.
          </div>
        </div>
      </div>
    </section>
  );
}
