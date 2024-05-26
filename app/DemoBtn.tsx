export default function DemoBtn() {
  return (
    <div className="flex justify-between">
      <button
        className="bg-gray-100 text-black  text-xs rounded-xl mr-2 py-4 px-6  w-44"
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-easing="ease-in-back"
      >
        Request a demo
      </button>
      <button
        className="bg-red-500 text-white shadow-2xl text-xs rounded-xl py-4 px-6 w-44"
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-easing="ease-in-back"
      >
        start for free
      </button>
    </div>
  );
}
