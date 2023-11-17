import React, { useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import AOS from "aos";
import "aos/dist/aos.css";

const InclusiveEconomySection = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init();
  }, []);

  const contentItems = [
    {
      title: "Global Poverty Alleviation Strategies",
      description:
        "Exploring effective strategies to alleviate poverty on a global scale.",
      image:
        "https://images.unsplash.com/photo-1444653389962-8149286c578a?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      articleLink:
        "https://www.weforum.org/global-poverty-alleviation-strategies",
    },
    {
      title: "Technological Innovations for Sustainable Development",
      description:
        "Examining the role of technology in achieving sustainable development goals worldwide.",
      image:
        "https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      articleLink:
        "https://www.weforum.org/technological-innovations-sustainable-development",
    },
    {
      title: "Climate Change Mitigation Initiatives",
      description:
        "Showcasing initiatives and policies aimed at mitigating the impacts of climate change globally.",
      image:
        "https://plus.unsplash.com/premium_photo-1686878940830-9031355ec98c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      articleLink:
        "https://www.weforum.org/climate-change-mitigation-initiatives",
    },
    {
      title: "Digital Transformation in Emerging Economies",
      description:
        "How digital transformation is driving economic growth in emerging economies.",
      image:
        "https://images.unsplash.com/photo-1594051107845-914bd919314b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      articleLink:
        "https://www.weforum.org/digital-transformation-emerging-economies",
    },
    {
      title: "Healthcare Access for Vulnerable Communities",
      description:
        "Ensuring access to quality healthcare for vulnerable communities worldwide.",
      image:
        "https://images.unsplash.com/photo-1695654402912-b2945fe32cab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      articleLink:
        "https://www.weforum.org/healthcare-access-vulnerable-communities",
    },
    {
      title: "Global Education Equality Initiatives",
      description:
        "Efforts to achieve education equality and promote learning opportunities globally.",
      image:
        "https://images.unsplash.com/photo-1591625992137-4923419701d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      articleLink:
        "https://www.weforum.org/global-education-equality-initiatives",
    },
    {
      title: "Sustainable Business Practices Worldwide",
      description:
        "Highlighting businesses adopting sustainable practices for a better global economy.",
      image:
        "https://images.unsplash.com/photo-1553073520-80b5ad5ec870?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      articleLink:
        "https://www.weforum.org/sustainable-business-practices-worldwide",
    },
    {
      title: "Youth Empowerment for a Brighter Future",
      description:
        "Empowering the youth with skills and opportunities for a brighter global future.",
      image:
        "https://images.unsplash.com/photo-1694884442915-f646b560288a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      articleLink: "https://www.weforum.org/youth-empowerment-brighter-future",
    },
    {
      title: "Global Economic Resilience Strategies",
      description:
        "Strategies to enhance global economic resilience in the face of uncertainties.",
      image:
        "https://images.unsplash.com/photo-1616259833791-9a8d5529a87c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      articleLink:
        "https://www.weforum.org/global-economic-resilience-strategies",
    },
    {
      title: "Ensuring Water Security Worldwide",
      description:
        "Initiatives to address water scarcity and ensure water security for all.",
      image:
        "https://plus.unsplash.com/premium_photo-1661488692348-ed1a1736c03a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      articleLink: "https://www.weforum.org/ensuring-water-security-worldwide",
    },
  ];

  return (
    <div className="bg-white rounded-lg p-6 mb-8">
      <h2
        className="text-center mb-8 animated-gradient-text"
        data-aos="fade-up"
      >
        Inclusive Economy
      </h2>
      {contentItems.map((item, index) => (
        <Disclosure key={index}>
          <div
            className="mb-4 cursor-pointer rounded-md shadow-sm hover:shadow-md p-4"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-60 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-600 mb-2">{item.description}</p>
            <a
              href={item.articleLink}
              className="text-blue-500 hover:underline"
            >
              Read more
            </a>
          </div>
        </Disclosure>
      ))}
    </div>
  );
};

export default InclusiveEconomySection;
