import { Disclosure } from "@headlessui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import ArticlesAndEssays from "./components/ArticlesAndEssays";
import ResearchReportsSection from "./components/ResearchReportsSection";
import VideosPodcastsSection from "./components/VideosPodcastsSection";
import InfographicsSection from "./components/InfographicsSection";
import DavosAgendaSection from "./components/DavosAgendaSection";
import InclusiveEconomySection from "./components/InclusiveEconomySection";
import YoungGlobalLeaders from "./components/YoungGlobalLeaders";
import PartnershipsSection from "./components/PartnershipsSection";
import Footer from "./components/Footer";
import backgroundImage from "./assets/lawrence-makoona-o_OMiYzkJMI-unsplash.jpg";

// Initialize AOS
AOS.init();

const App = () => {
  return (
    <>
      {/* Header Section */}
      <Header />
      <div className="bg-transparent min-h-screen">
        {/* Main Content Section */}
        <div className="mx-auto my-8">
          {/* Feature: Partnerships */}
          <section className="mb-8">
            <PartnershipsSection />
          </section>
          {/* Feature: Articles and Essays */}
          <section className="my-8">
            <ArticlesAndEssays />
          </section>

          {/* Sections for Key Initiatives */}
          <Disclosure>
            {/* Render Davos Agenda Section */}
            <DavosAgendaSection />
          </Disclosure>

          {/* Feature: Research Reports */}
          <section
            className="my-8 h-[700px] sm:[600px] md:h-[400px] bg-cover bg-center bg-no-repeat items-center flex justify-center w-full"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.5)",
            }}
          >
            <ResearchReportsSection />
          </section>

          {/* Feature: Videos and Podcasts */}
          {/* <section className="my-24">
            <VideosPodcastsSection />
          </section> */}

          {/* Feature: Infographics and Data Visualizations */}
          <section className="mb-8 container mx-auto">
            <InfographicsSection />
          </section>
          {/* Feature: Young Global Leaders */}
          {/* <section className="mb-8">
            <YoungGlobalLeaders />
          </section> */}

          <Disclosure>
            {/* Render Inclusive Economy Section */}
            <InclusiveEconomySection />
          </Disclosure>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
