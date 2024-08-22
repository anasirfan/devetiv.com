import React from "react";
import member1 from "../../../public/assets/images/about/team/member1.png";
import member2 from "../../../public/assets/images/about/team/member2.png";
import member3 from "../../../public/assets/images/about/team/member3.png";
import member4 from "../../../public/assets/images/about/team/member4.png";
import Image from "next/image";

const Team = () => {
  const team = [
    {
      id: 1,
      img: member1,
      name: "Liza Ben",
      position: "Legal / IP",
      linkedIn: "#",
    },
    {
      id: 2,
      img: member2,
      name: "David P",
      position: "Financial",
      linkedIn: "#",
    },
    {
      id: 3,
      img: member3,
      name: "Laura",
      position: "Marketing",
      linkedIn: "#",
    },
    {
      id: 4,
      img: member4,
      name: "William",
      position: "Talent / HR",
      linkedIn: "#",
    },
  ];

  return (
    <div  data-aos="fade-up" className="bg-[#04445F] h-[750px] py-16 mb-72 sm:h-auto sm:rounded-3xl sm:py-8 sm:mb-12 md:h-[550px]">
      <div data-aos="fade-up" className="w-[90%] mx-auto">
        <hr className="text-white py-2 sm:mt-6"></hr>
        <p className="heading-6 py-4 text-white text-[32px] sm:text-[20px] sm:w-[90%] sm:mx-auto">Team</p>
        <div  className="flex justify-around space-x-80 items-center sm:flex-col sm:space-x-0 sm:space-y-2 md:space-x-40 ">
          <h3 className="text-[40px] font-semibold tracking-wide sm:text-[25px] md:text-[25px] md:w-[120%]  ">
            A Team of Vetted Experts
          </h3>
          <p className="font-thin sm:px-4">
            We’ve assembled an experienced team of experts that you can draw
            upon to help you in your journey including:
          </p>
        </div>
        <div className="z-[99] bg-[#F0F2F4] px-16 py-10 h-[600px] rounded-3xl my-12 sm:h-auto md:h-[420px]">
          <div className="flex w-[100%] mx-auto space-x-7 space-y-6 items-end sm:flex-col sm:items-center sm:space-x-0 ">
            {team.map((member) => (
              <div  data-aos="fade-up" key={member.id} className="basis-1/4 flex flex-col h-[450px]">
                <Image
                  src={member.img}
                  alt={member.name}
                  className="basis-5/6 h-[419px] w-[328px] sm:rounded-2xl sm:h-[300px] sm:w-[250px] md:basis-2/4  md:rounded-2xl"
                />
                <div key={member.id} className="flex basis-1/6 py-4 space-x-4">
                  <div className="w-[2px] h-[50px] bg-gray-300 "></div>
                  <div className="flex flex-col items-start">
                    <p className="heading-6 font-bold text-[20px] text-black">
                      {member.name}
                    </p>
                    <p className="text-[#9C9C9C] text-[14px]">
                      {member.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
