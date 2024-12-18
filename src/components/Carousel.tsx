import React, { useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: "/Linh-2.jpg",
      description: "In the heart of Boston's cadence, two souls converged, their paths unwinding like a gentle river through the cityscape. Moments of serendipity became their guide, where laughter echoed amidst the hum of daily life.",
    },
    {
      src: "/Linh-1.jpg",
      description: "Hand in hand, they wove their way through the familiar streets, each step a silent testament to the bond that grew between them. When the time was right, they took the leap, trading cobblestone for skyscrapers, and Boston’s charm for New York’s endless rhythm. ",
    },
    {
      src: "/Linh-26.jpg",
      description: "Amidst the urban sprawl, they found solace in each other's presence. Their love blossomed in the simplicity of shared routines and whispered promises under the city lights. In the grandeur of the mundane, Jack and Linh carved out a world that was theirs alone. ",
    },
    {
        src: "/Linh-33.jpg",
        description: "Not defined by grand gestures, but by the quiet strength found in everyday moments. Their love story, a tapestry of gentle touches and understanding glances, continues to unfold, a beautiful narrative of life's simplest yet most profound joys.",
      },
  ];

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative overflow-hidden w-full sm:h-auto xl:hidden">
      {/* Carousel Wrapper */}
      <h3 className="text-[#383B42] text-4xl mb-4 fraunces font-bold pt-4 text-center">Our Love Story</h3>

      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
          key={index}
          className="min-w-full flex flex-col items-center justify-center"
        >
          {/* Fixed Image Position */}
          <div className="w-96 h-100 md:h-[30rem] md:w-4/5 flex items-center justify-center overflow-hidden rounded-lg shadow-md bg-gray-100">
            <img
              src={image.src}
              alt={image.src}
              className="object-cover w-full h-full"
            />
          </div>
          {/* Text Content */}
          <div className="mt-4 text-center">
            <p className="text-[#383B42] avenir px-16 text-justify lg:px-32">{image.description}</p>
          </div>
        </div>
          // <div
          //   key={index}
          //   className="min-w-full flex flex-col items-center justify-center p-6"
          // >
          //   <img
          //     src={image.src}
          //     alt={image.title}
          //     className="w-full h-auto sm:max-h-96 object-cover rounded-lg shadow-md"
          //   />
          //   <div className="mt-4 text-center">
          //     <h3 className="text-[#383B42] text-4xl mb-4 didot font-bold pt-4">{image.title}</h3>
          //     <p className="text-[#383B42] avenir px-6">{image.description}</p>
          //   </div>
          // </div>
        ))}
      </div>

      {/* Controls */}
      <div className="absolute inset-0 flex justify-between items-center px-4">
        <button
          className="prev bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-full p-2"
          onClick={handlePrev}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          className="next bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-full p-2"
          onClick={handleNext}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;