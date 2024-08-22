import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import testimonial from "../../../public/assets/images/about/testimonial.png";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 3,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    centerPadding: '5%',
    centerMode: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const testimonials = [
    {
      name: "Agnes Remi",
      role: "Back-end developer at MyDodow",
      text: " Dico is finally addressing a long time problem we had when building Uls. It's ease of use and workflow seems really intuitive. Promising! ",
      date: "2021.03.02",
      image: testimonial, // Replace with the actual image URL
    },
    {
      name: "Agnes Remi",
      role: "Back-end developer at MyDodow",
      text: " Dico is finally addressing a long time problem we had when building Uls. It's ease of use and workflow seems really intuitive. Promising! ",
      date: "2021.03.02",
      image: testimonial, // Replace with the actual image URL
    },
    {
      name: "Agnes Remi",
      role: "Back-end developer at MyDodow",
      text: " Dico is finally addressing a long time problem we had when building Uls. It's ease of use and workflow seems really intuitive. Promising! ",
      date: "2021.03.02",
      image: testimonial, // Replace with the actual image URL
    },

    {
      name: "Agnes Remi",
      role: "Back-end developer at MyDodow",
      text: " Dico is finally addressing a long time problem we had when building Uls. It's ease of use and workflow seems really intuitive. Promising! ",
      date: "2021.03.02",
      image: testimonial, // Replace with the actual image URL
    },
    {
      name: "Agnes Remi",
      role: "Back-end developer at MyDodow",
      text: " Dico is finally addressing a long time problem we had when building Uls. It's ease of use and workflow seems really intuitive. Promising! ",
      date: "2021.03.02",
      image: testimonial, // Replace with the actual image URL
    },
    {
      name: "Agnes Remi",
      role: "Back-end developer at MyDodow",
      text: " Dico is finally addressing a long time problem we had when building Uls. It's ease of use and workflow seems really intuitive. Promising! ",
      date: "2021.03.02",
      image: testimonial, // Replace with the actual image URL
    },
    {
      name: "Agnes Remi",
      role: "Back-end developer at MyDodow",
      text: "<<< Dico is finally addressing a long time problem we had when building Uls. It's ease of use and workflow seems really intuitive. Promising! ",
      date: "2021.03.02",
      image: testimonial, // Replace with the actual image URL
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <Slider {...settings} className="">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md px-16 py-8 mx-8 custom-slide sm:px-2 md:px-2"
          >
            <div className="flex  mb-4 sm:flex-col sm:space-y-8 sm:justify-center md:flex-col md:space-y-12 md:justify-center">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={200}
                height={200}
                className="flex w-16 h-16 rounded-full mr-4 sm:self-center md:self-center "
              />
              <div className="flex flex-col space-y-2 px-2">
                <h3 className="text-lg font-bold text-black">
                  {testimonial.name}
                </h3>
                <p className="text-[#B9B9B9] text-[14px]">{testimonial.role}</p>
                <p className="text-gray-900 leading-[18px]">{testimonial.text}</p>
                <div className="flex items-center pt-6">
                  <div className="bg-gray-200 rounded-full px-3 py-1 text-gray-700 text-xs font-bold mr-2">
                    Dico user
                  </div>
                  <span className="text-gray-500 pt-[1px]">, {testimonial.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
