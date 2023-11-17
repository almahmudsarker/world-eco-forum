import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS
AOS.init();

const DavosAgendaSection = () => {
  // Trigger AOS animations on component mount
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div className="container mx-auto mb-20">
      <h2
        className="text-3xl text-center mb-4 mt-12 md:mt-20 animated-gradient-text"
        data-aos="fade-up"
      >
        Davos Agenda
      </h2>

      <div className="flex flex-col md:flex-row my-8 md:my-16 space-y-4 md:space-y-0 md:space-x-8">
        <img
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="1000"
          src="https://images.unsplash.com/photo-1616164744625-2fa2759e86b4?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="banner"
          className="w-full md:w-1/2 h-64 md:h-[600px] object-cover rounded-md shadow-xl"
        />

        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="w-full md:w-1/2"
        >
          <h1 className="text-2xl md:text-4xl font-bold text-left py-4">
            Role of International Collaboration
          </h1>
          <hr className="my-4" />
          <p className="text-left text-base md:text-lg">
            Economic Impact: <br />
            Analyze how geopolitical decisions and tensions influence global
            economic trends. Explore the effects on trade, investment, and
            economic growth. Discuss potential scenarios for economic
            cooperation or isolation. <br />
            Security and Defense: <br />
            Examine the implications of geopolitical discussions on global
            security and defense strategies. Discuss the role of international
            organizations in addressing security threats and fostering peace.{" "}
            <br />
            Humanitarian Challenges: <br />
            Explore how geopolitical factors contribute to or mitigate
            humanitarian challenges, including migration, refugees, and human
            rights violations. Discuss efforts to address these challenges
            through international collaboration. <br />
            Technological Landscape: <br />
            Consider how geopolitical considerations impact the global
            technology landscape, including issues such as data governance,
            cybersecurity, and the race for technological dominance. Discuss
            collaborative approaches to managing technological advancements.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row lg:flex-row mt-8 md:mt-16 space-y-4 md:space-y-0 md:space-x-8">
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="w-full md:w-1/2"
        >
          <h1 className="text-2xl md:text-4xl font-bold text-left py-4">
            Implications on the Global Stage
          </h1>
          <hr className="my-4" />
          <p className="text-left text-base md:text-lg">
            {" "}
            Economic Impact: <br />
            Analyze how geopolitical decisions and tensions influence global
            economic trends. Explore the effects on trade, investment, and
            economic growth. Discuss potential scenarios for economic
            cooperation or isolation. <br />
            Security and Defense: <br />
            Examine the implications of geopolitical discussions on global
            security and defense strategies. Discuss the role of international
            organizations in addressing security threats and fostering peace.{" "}
            <br />
            Humanitarian Challenges: <br />
            Explore how geopolitical factors contribute to or mitigate
            humanitarian challenges, including migration, refugees, and human
            rights violations. Discuss efforts to address these challenges
            through international collaboration. <br />
            Technological Landscape: <br />
            Consider how geopolitical considerations impact the global
            technology landscape, including issues such as data governance,
            cybersecurity, and the race for technological dominance. Discuss
            collaborative approaches to managing technological advancements.
          </p>
        </div>

        <img
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="1000"
          src="https://images.unsplash.com/photo-1601040966345-72adcec5d2e1?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="banner"
          className="w-full md:w-1/2 h-64 md:h-[600px] object-cover rounded-md shadow-xl"
        />
      </div>
    </div>
  );
};

export default DavosAgendaSection;
