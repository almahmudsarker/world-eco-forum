import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Marquee from "react-fast-marquee";

// Initialize AOS
AOS.init();

const PartnershipsSection = () => {
  // Sample data for partnerships
  const partnerships = [
    "Climate CEO Alliance: Cut Global Emissions 7% Annually to 2030 to Maintain Paris-Agreed Global Warming Limit",
    "Tropical Forest Alliance Facilitates Trade of ‘Deforestation-Free’ Soybeans from Brazil to China",
    "World Economic Forum Launches Global Initiative to Invest in Urban Innovation Ecosystems",
    "Generative AI to Enhance Creativity, Automate Routine Tasks for Future Jobs",
  ];

  return (
    <div className="mb-8">
      <div className="overflow-hidden">
        <Marquee>
          {partnerships.map((partner, index) => (
            <span
              key={index}
              className="inline-block mr-8 text-gray-600 font-medium"
            >
              * {partner}
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default PartnershipsSection;
