// Invite.tsx
import React from "react";

interface InviteProps {
  location: string;
  date: string;
  hotel: string;
}

const EventInvite: React.FC<InviteProps> = ({ location, date, hotel }) => {
  return (
    <div
      className="w-5/9 p-2 h-screen parallax-full sm:relative pt-50 flex items-center justify-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(228, 169, 159, 0.3), rgba(228, 169, 159, 0.3)), url('../Linh-22.jpg')",
        backgroundBlendMode: "multiply",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" relative items-center justify-center p-6">
        <svg
          preserveAspectRatio="none"
          data-bbox="20 22.998 159.999 154.001"
          viewBox="20 22.998 159.999 154.001"
          height="700"
          width="700"
          xmlns="http://www.w3.org/2000/svg"
          data-type="shape"
          role="presentation"
          aria-hidden="true"
          aria-label=""
        >
          <g fill="white">
            <path d="M41.738 43.211c-7.63 7.267-12.885 16.332-16.793 26.264a88.408 88.408 0 0 0-4.269 14.32c-1.152 5.536-.471 11.527-.524 17.169-.095 10.175.363 19.968 4.238 29.259 5.261 12.614 14.036 21.442 24.834 29.185 4.869 3.491 10.149 6.492 15.704 8.976 2.062.922 4.163 1.191 6.294 1.969 2.715.992 5.481 2.448 8.282 3.201a100.91 100.91 0 0 0 15.258 2.864c8.405.914 16.893.76 25.107-.533 8.501-1.338 15.248-4.801 22.763-8.654 3.978-2.039 9.222-3.535 12.753-6.313a65.83 65.83 0 0 0 14.476-15.804 61.038 61.038 0 0 0 6.484-13.201c5.813-16.587 3.873-36.003-.158-52.834-3.377-14.103-12.213-26.871-23.598-36.647-2.747-2.359-5.951-2.739-8.954-4.726-3.086-2.042-5.978-5.68-9.247-7.28-5.713-2.796-11.638-4.877-17.537-6.108-4.194-.875-8.697-1.297-13.372-1.319-12.2-.056-25.566 2.615-37.625 7.073-9.15 3.386-17.549 6.884-24.116 13.139z"></path>
          </g>
        </svg>
        <div className="absolute inset-20 items-center justify-center text-center">
          <p className="text-xl avenir animate-slideFromTop">
            Together with their families
          </p>
          <h1 className="p-8 text-5xl md:text-9xl didot italic text-[#383B42] uppercase text-center animate-slideFromBottom">
            Jack
            <span className="md:block">
              <span className="text-custom-pink"> & </span> Linh
            </span>
          </h1>
          <p className="text-xl avenir animate-slideFromBottom delay-5">
            joyfully invite you to their wedding celebrations
          </p>
          <p className="text-4xl mt-4 fraunces text-center font-bold text-custom-pink">
            {date}
          </p>
          <h1 className="text-xl avenir text-[#383B42] text-center">
            At {hotel}, {location}
          </h1>
        </div>
        {/* <p className="text-xl avenir animate-slideFromTop">
          Together with their families
        </p>
        <h1 className="p-8 text-5xl md:text-9xl didot italic text-[#383B42] uppercase text-center animate-slideFromBottom">
          Jack
          <span className="md:block">
            <span className="text-custom-pink"> & </span> Linh
          </span>
        </h1>
        <p className="text-xl avenir animate-slideFromBottom delay-5">
          joyfully invite you to their wedding celebrations
        </p>
        <p className="text-4xl mt-4 fraunces text-center font-bold text-custom-pink">
          {date}
        </p>
        <h1 className="text-xl avenir text-[#383B42] text-center">
          At {hotel}, {location}
        </h1> */}
      </div>
    </div>
    // <div
    //   className="w-5/9 p-2 h-screen parallax-full sm:relative pt-50"
    //   style={{
    //     backgroundImage:
    //       "linear-gradient(rgba(228, 169, 159, 0.3), rgba(228, 169, 159, 0.3)), url('../Linh-22.jpg')",
    //     backgroundBlendMode: "multiply",
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //   }}
    // >
    //   <div className="bg-white justify-center items-center w-1/2">
    //     <div className="w-full flex flex-col justify-center items-center p-6">
    //       <p className="text-xl avenir animate-slideFromTop">
    //         Together with their families
    //       </p>
    //       <h1 className="p-8 text-5xl md:text-9xl didot italic  text-[#383B42] uppercase text-center animate-slideFromBottom">
    //         Jack
    //         <span className="md:block">
    //           <span className="text-custom-pink"> & </span> Linh
    //         </span>
    //       </h1>
    //       <p className="text-xl avenir animate-slideFromBottom delay-5">
    //         joyfully invite you to their wedding celebrations
    //       </p>
    //     </div>
    //     <p className="text-4xl mt-4 fraunces text-center font-bold text-custom-pink">
    //       {date}
    //     </p>

    //     <h1 className=" text-xl avenir text-[#383B42] text-center">
    //       At {hotel}, {location}
    //     </h1>
    //   </div>
    // </div>
  );
};

export default EventInvite;
