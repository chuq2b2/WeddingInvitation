import React, { useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: "/Linh-2.jpg",
      description:
      "Jack and Linh first met in Boston, USA in 2019, where their love story began. What started as a Coffee Meets Bagel date quickly turned into something deeper as they navigated their early days together. "
    },
    {
      src: "/Linh-5.jpg",
      description:
      "Then came the pandemic, a time that brought unexpected challenges but also the chance to grow closer. They spent those uncertain months side by side, sharing laughter, resilience, and the ups and downs of their early 20s."
    },
    {
      src: "/Linh-1.jpg",
      description:
        "Life continued to evolve, with career changes and the big move to New York City in 2022. There, they have both pursued new opportunities.",
    },
    {
      src: "/Linh-22.jpg",
      description:
        "Linh is currently pursuing her PhD in Biomedical Sciences while Jack is working full time in finance and pursuing his part-time MBA. They have continued to lean on each other as they build a life in a city full of endless possibilities. ",
    },
    {
      src: "/Linh-26.jpg",
      description:
        "Along the way, they welcomed a maltipoo “Vivy” to their family, whose wagging tail brought even more joy to their everyday lives. After 4 years of growing together, they decided to take the next step and tie the knot on Aug 18th, 2023 in New York City.",
    },
    {
      src: "/Linh-33.jpg",
      description:
        "Now when the time is right, they decided to hold the wedding ceremonies to celebrate their love with their families and friends in Linh’s hometown (Hanoi, Vietnam), and Jack’s family’s hometown (Guangzhou, China)",
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
      <h3 className="text-[#383B42] text-4xl mb-4 fraunces font-bold pt-4 text-center">
        Our Love Story
      </h3>

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
              <p className="text-[#383B42] avenir px-16 text-justify lg:px-32">
                {image.description}
              </p>
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
