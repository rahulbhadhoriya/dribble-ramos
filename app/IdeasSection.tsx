export default function IdeasSection() {
  return (
    <section className="bg-gray-100 mt-[3rem] rounded-[40px] mx-[-4rem]">
      <div className="flex justify-between  mt-12 ">
        <div className="  my-12  ">
          <div
            className="text-4xl px-16 "
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-easing="linear"
          >
            Turning data into real
            <br />
            actions and ideas.
          </div>
          <div className="px-16 mt-16">
            <div
              className="flex justify-around  items-center my-6 rounded-2xl  bg-white py-4"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-easing="linear"
            >
              <div className="text-lg">Instant Insights</div>
              <div className="text-base bg-gray-200 px-4 py-2 rounded-full">
                +
              </div>
            </div>
            {/* <div>2</div> */}
            <div
              className="flex justify-around  items-center my-6 rounded-2xl   bg-white py-4"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-easing="linear"
            >
              <div className="text-lg">AI technology</div>
              <button className="text-base bg-gray-200 px-4 py-2 rounded-full">
                +
              </button>
            </div>
            <div
              className="flex justify-around  items-center my-6 rounded-2xl  bg-white py-4"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-easing="linear"
            >
              <div className="text-lg">Easy integration</div>
              <button className="text-base bg-gray-200 px-4 py-2 rounded-full">
                +
              </button>
            </div>
          </div>
        </div>
        <div className="w-3/5">pic</div>
      </div>
      <div
        className="text-[22rem] text-center text-red-500"
        data-aos="fade-right"
        data-aos-once="false"
        data-aos-duration="600"
      >
        Ramos
      </div>
    </section>
  );
}
