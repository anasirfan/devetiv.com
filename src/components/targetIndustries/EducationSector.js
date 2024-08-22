import React from 'react';

const EducationSector = ({ EducationSectorHeading, EducationSectorParagraph }) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl tracking-wide sm:text-2xl w-[50%] sm:w-full font-bold mb-8 text-black">{EducationSectorHeading}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-0">
        <div>
          {EducationSectorParagraph.slice(0, 3).map((item, index) => (
            <p key={index} className="mb-6 text-justify text-[#6C6C6C] opacity-85 text-[16px] sm:text-[14px]">
              {item.paragraph}
            </p>
          ))}
        </div>
        <div>
          {EducationSectorParagraph.slice(3).map((item, index) => (
            <p key={index} className="mb-6 text-justify text-[#6C6C6C] opacity-85 text-[16px] sm:text-[14px]">
              {item.paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationSector;
