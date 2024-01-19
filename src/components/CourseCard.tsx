import React, { useState } from "react";
import Rating from "./Rating";
import { Icon } from "@iconify/react";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";

const courseCardData = [
  {
    name: "Samuel",
    image: image1,
    isFavChecked: true,
  },
  {
    name: "Adlane",
    image: image2,
    isFavChecked: false,
  },
  {
    name: "Fleur",
    image: image3,
    isFavChecked: false,
  },
  {
    name: "Florent",
    image: image4,
    isFavChecked: false,
  },
];

const CourseCard = () => {
  const [myFav, setFav] = useState<boolean>(false);

  const toggleIconHeart = () => {
    setFav(!myFav);
  };

  return (
    <div>
      <div className="mx-auto sm:p-10 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
          {courseCardData.map((course) => (
            <div className="rounded overflow-hidden">
              <div className="relative">
                <a href="/">
                  <img
                    className="w-full rounded-3xl"
                    src={course.image}
                    alt="Sunset in the mountains"
                  />
                  <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 "></div>
                </a>
                <a href="#!">
                  <div className="absolute bottom-0 left-0  px-8 py-6 text-black font-semibold text-3xl">
                    {course.name}
                  </div>
                </a>

                <a href="!#">
                  <div className="text-sm absolute top-0 right-0  text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-1 mr-1">
                    {course.isFavChecked ? (
                      <Icon
                        icon="mdi:heart"
                        fontSize={24}
                        className="text-violet-500"
                        onClick={toggleIconHeart}
                      />
                    ) : (
                      <Icon
                        icon="mdi:heart-outline"
                        fontSize={24}
                        onClick={toggleIconHeart}
                      />
                    )}
                  </div>
                </a>
              </div>
              <div className="mt-4">
                <a
                  href="/"
                  className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
                >
                  <p className="font-normal">
                    <span className="font-bold">
                      Best View in Newyork City -{" "}
                    </span>
                    hides the input. Useful to clear the the rating
                  </p>
                </a>
                <div className="flex items-center justify-start">
                  <Rating />
                  <p className="mx-3"> • </p>
                  <p> 58 avis </p>
                </div>
                <p className="text-gray-500 text-sm mt-4">
                  The city that never sleeps
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
