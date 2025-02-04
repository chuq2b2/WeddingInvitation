import Image from "next/image";
import useScrollAnimation from "../../components/hooks/useScrollAnimation";

export default function Gallery() {
  useScrollAnimation();

  return (
    <>
      <div className="flex flex-col justify-center items-center py-32">
        <p className="fraunces text-2xl lg:text-4xl lg:w-1/2 px-16 font-semibold text-[#383B42] text-center animate-fadeIn">
          “And now here is my secret, a very simple secret: It is only with the
          heart that one can see rightly; what is essential is invisible to the
          eye."
        </p>
        <p className="avenir text-md pt-4 animate-fadeIn">
          Antoine de Saint-Exupéry
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid gap-4 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 fade-in-up opacity-0">
          <div className=" p-10 text-center">
            <img src="/Linh-20.jpg" />
          </div>
          <div className=" p-10 text-center">
            <img src="/Linh-19.jpg" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 fade-in-up  opacity-0">
          <div className=" p-10 text-center">
            <img src="/Linh-6.jpg" />
          </div>
          <div className=" p-10 text-center">
            <img src="/Linh-27.jpg" />
          </div>
          <div className=" p-10 text-center">
            <img src="/Linh-15.jpg" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 fade-in-up  opacity-0">
          <div className=" p-10 text-center">
            <img src="/Linh-17.jpg" />
          </div>
          <div className=" p-10 text-center">
            <img src="/Linh-18.jpg" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 fade-in-up  opacity-0">
          <div className=" p-10 text-center">
            <img src="/Linh-34.jpg" />
          </div>
          <div className=" p-10 text-center">
            <img src="/Linh-14.jpg" />
          </div>
          <div className=" p-10 text-center">
            <img src="/Linh-8.jpg" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 fade-in-up  opacity-0">
          <div className=" p-10 text-center">
            <img src="/Linh-33.jpg" />
          </div>
          <div className=" p-10 text-center">
            <img src="/Linh-26.jpg" />
          </div>
        </div>
      </div>
    </>
  );
}
