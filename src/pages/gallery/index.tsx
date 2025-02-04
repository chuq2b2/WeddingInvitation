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
        {[
          ["/Linh-20.jpg", "/Linh-19.jpg"], // 2 Images
          ["/Linh-6.jpg", "/Linh-27.jpg", "/Linh-15.jpg"], // 3 Images
          ["/Linh-17.jpg", "/Linh-18.jpg"], // 2 Images
          ["/Linh-34.jpg", "/Linh-14.jpg", "/Linh-8.jpg"], // 3 Images
          ["/Linh-33.jpg", "/Linh-26.jpg"], // 2 Images
        ].map((row, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 sm:grid-cols-${index % 2 === 0 ? "2" : "3"} gap-4 fade-in-up`}
          >
            {row.map((src, idx) => (
              <div key={idx} className="p-10 text-center">
                <Image 
                  src={src} 
                  width={400} 
                  height={600} 
                  alt={`Gallery Image ${idx}`} 
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}