import React, { useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS
AOS.init();

const YoungGlobalLeaders = () => {
  // AOS initialization on component mount
  useEffect(() => {
    AOS.refresh();
  }, []);

  const youngGlobalLeadersData = [
    {
      name: "Joud Abdel Majeid",
      title: "Head, Investment Stewardship, BlackRock",
      country: "United States",
      bio: "As the Senior Managing Director; Global Head, Investment Stewardship, BlackRock, Joud Abdel Majeid would likely be responsible for overseeing the international business operations of PetroChina, one of the largest oil and gas companies in the world. PetroChina is a major player in the energy sector, involved in various aspects of the oil and gas industry, including exploration, production, refining, and marketing.Typically, the role of a General Manager in such a position involves making strategic decisions, managing international business relationships, ensuring operational efficiency, and contributing to the company's overall growth and profitability.",
      image:
        "https://assets.weforum.org/sf_account/image/responsive_small_webp_JeKDSMsN-Uo7umq4L17j9xOmZM8BMCZgIUgWK7_DSzA.webp",
    },
    {
      name: "Faisal Abbas",
      title: "Editor-in-Chief, Arab News",
      country: "Saudi Arabia",
      bio: "Being in the position of Editor-in-Chief at Arab News, Faisal Abbas played a role in contributing to the media landscape in Saudi Arabia. His work would have involved addressing key issues, providing analysis, and offering a platform for diverse voices in the English-speaking community. He would have also been responsible for managing the editorial team and ensuring that the publication's content is in line with the company's vision and mission.",
      image:
        "https://assets.weforum.org/sf_account/image/responsive_small_webp_HBlKA27ec9J-8gUYwsqkfjts-FGSGN8reymT0J3tc70.webp",
    },
    {
      name: "Mohammed Alghanim",
      title: "Chief Executive Officer",
      country: "Kuwait",
      bio: "Mohammed Alghanim is a Young Global Leader committed to making a positive impact on the world. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      image:
        "https://assets.weforum.org/sf_account/image/responsive_small_webp_xVCOE1Qtkz_chxUaAjsYMCwRaZpsrPOy90-2NJoRULY.webp",
    },
    {
      name: "Daniel Ahn",
      title:
        "Global Fellow, The Woodrow Wilson International Center for Scholars",
      country: "United States",
      bio: "Daniel Ahn is a Young Global Leader committed to making a positive impact on the world. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      image:
        "https://assets.weforum.org/sf_account/image/responsive_small_webp_BcmGBydxf_Jrc0YidLSdRPm7bAUTWBL0pwaF8rGJ_EE.webp",
    },
  ];

  return (
    <div className="container mx-auto my-8 p-4">
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Young Global Leaders</h2>
        {youngGlobalLeadersData.map((leader, index) => (
          <Disclosure key={index}>
            <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-md mb-4">
              <div className="flex items-center">
                <img
                  src={leader.image}
                  alt={`${leader.name}'s profile`}
                  className="rounded-full h-12 w-12 mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{leader.name}</h3>
                  <p className="text-gray-600">Title: {leader.title}</p>
                  <p className="text-gray-600">Country: {leader.country}</p>
                </div>
              </div>
              <Disclosure.Button className="text-blue-500">
                Learn More
              </Disclosure.Button>
            </div>
            <Disclosure.Panel>
              <div className="p-4 bg-gray-100">
                <p>{leader.bio}</p>
              </div>
            </Disclosure.Panel>
          </Disclosure>
        ))}
      </section>
    </div>
  );
};

export default YoungGlobalLeaders;
