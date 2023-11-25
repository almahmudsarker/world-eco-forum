import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Marquee from "react-fast-marquee";

// Initialize AOS
AOS.init();

const PartnershipsSection = () => {
  // Sample data for partnerships
  const partnerships = [
    "Persist Accelerator Investment: Persist Accelerator is a venture studio that leverages high-growth attention sources to  fast track the process of fundraising, brand-awareness, and finding product-market fit",
    "The Physical World and Digital World Are Merging: As we move deeper into the information age, more and more time is being spent on the digital playing field",
    "With great power comes not only great responsibility: As Persist and its operations continue moving forward we know all too well the opportunities towards distractions increase as well",
    "Current Status and Investment Opportunity: Persist is currently in the process of raising a $1.5M seed round to fund the development of the Persist App and the Persist Accelerator",
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
