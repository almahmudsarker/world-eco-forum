import React, { useEffect } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS
AOS.init();

const VideosPodcastsSection = () => {
  // Run AOS initialization on component mount
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section className="container my-8 mx-auto">
      <h2
        className="text-center mb-8 animated-gradient-text"
        data-aos="fade-up"
      >
        Videos and Podcasts
      </h2>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4"
        data-aos="fade-up"
      >
        {/* Video 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/W5E2K7x5pGo?si=dk6t6Vyi685UX1gT"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">
              Experts Explain: What is AI? | Computer scientist Stuart Russell |
              WEF
            </h3>
            <p className="text-gray-700 text-sm">
              Stuart Russell is a world-leading computer scientist and a
              professor at the University of California, Berkeley. He’s also the
              author of the book Human Compatible. In this in-depth video
              interview, Professor Russell addresses our collective unease
              around the rise of artificial intelligence, exploring the impact
              on jobs and the scope of ‘general purpose’ AI, from the humble
              domestic thermostat to the attention-hungry bleeps and pings that
              keep us glued to our smartphones
            </p>
          </div>
        </div>

        {/* Video 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Mt2YYndU4uo?si=CsHwxtajP65dOpsy"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">
              The Future of Capital Markets | Ep 1 | Matthew Blake: The
              Democratization of Retail Investing
            </h3>
            <p className="text-gray-700 text-sm">
              The Future of Capital Markets is a five episode series that
              profiles global thought leaders on how capital markets can become
              more accessible to retail investors. Each episode explores topics
              such as the democratization of retail investing, leveraging
              technology for access, educating retail investors, building trust
              in capital markets and the future of retail investing.
            </p>
          </div>
        </div>

        {/* Video 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/bp_qH5WQgJk?si=pztp1823m_1jI7K3"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">
              Annual Meeting of the Global Future Councils 2023
            </h3>
            <p className="text-gray-700 text-sm">
              The World Economic Forum is the International Organization for
              Public-Private Cooperation. The Forum engages the foremost
              political, business, cultural and other leaders of society to
              shape global, regional and industry agendas. We believe that
              progress happens by bringing together people from all walks of
              life who have the drive and the influence to make positive change.
            </p>
          </div>
        </div>
        {/* Video 4 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/jaBkL6QDdBY?si=XQWJUExM10ZjqMmN"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">
              A Conversation with Janet L. Yellen, Secretary of the Treasury of
              the United States of America
            </h3>
            <p className="text-gray-700 text-sm">
              The World Economic Forum is the International Organization for
              Public-Private Cooperation. The Forum engages the foremost
              political, business, cultural and other leaders of society to
              shape global, regional and industry agendas. We believe that
              progress happens by bringing together people from all walks of
              life who have the drive and the influence to make positive change.
            </p>
          </div>
        </div>
        {/* Video 5 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/--P8yZZnmcQ?si=u5VtzhMmHro1c8hZ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">
              Saving Wildlife & Grasslands: East Africa's Maasai on nature
              preservation | Pioneers for Our Planet
            </h3>
            <p className="text-gray-700 text-sm">
              The World Economic Forum is the International Organization for
              Public-Private Cooperation. The Forum engages the foremost
              political, business, cultural and other leaders of society to
              shape global, regional and industry agendas. We believe that
              progress happens by bringing together people from all walks of
              life who have the drive and the influence to make positive change.
            </p>
          </div>
        </div>
        {/* Video 6 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/NY9pe6JB1R4?si=XphFx9oHBzTKP7uP"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">
              Welcome to the Annual Meeting of the Global Future Councils 2019
            </h3>
            <p className="text-gray-700 text-sm">
              The World Economic Forum and Government of the United Arab
              Emirates warmly welcome participants to the fourth Annual Meeting
              of the Global Future Councils. Opening Remarks by: - Børge Brende,
              President, World Economic Forum. - Mohammad Abdullah Al Gergawi,
              Minister of Cabinet Affairs and the Future of the United Arab
              Emirates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideosPodcastsSection;
