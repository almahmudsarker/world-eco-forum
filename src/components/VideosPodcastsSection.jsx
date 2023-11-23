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
        {/* Video 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/C50o5BoTwxM?si=1ok7i8HML08fmhu5"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">
              Youth, Innovation and the UN: A conversation with Brock Pierce
            </h3>
            <p className="text-gray-700 text-sm">
              During this engaging dialogue, Brock Pierce, in collaboration with
              distinguished United Nations delegates, delves into the concept of
              nurturing a "startup" nation and fostering the essential culture
              and policies vital for a nation's development and prosperity.
            </p>
          </div>
        </div>
        {/* Video 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/4Nm0llZz47U?si=k1Xr7Smdqn-nnsbt"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">
              Content Creators Are Becoming BILLIONAIRES | Shaan Puri | Pomp
              Podcast CLIPS
            </h3>
            <p className="text-gray-700 text-sm">
              Pomp writes a daily letter to over 140,000 investors about
              business, technology, and finance. He breaks down complex topics
              into easy to understand language while sharing opinions on various
              aspects of each industry. You can subscribe at
              https://pomp.substack.com/
            </p>
          </div>
        </div>

        {/* Video 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/6Hoo38Fr07g?si=ArnAysDPFAscxy5_"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">
              SHAAN PURI: Make Millions As A Solopreneur (My First Million on
              Creator Lab)
            </h3>
            <p className="text-gray-700 text-sm">
              Shaan Puri is an entrepreneur, investor & top 50 podcast host. He
              was the CEO of Bebo when they sold to Twitch (Amazon) where he's
              now a senior director of product. He invests in startups +
              recently raised $2.5mil for his "rolling fund" in 11 days, just
              from a tweet.
            </p>
          </div>
        </div>

        {/* Video 4 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/1n4zkdfKUAE?si=sg_jRaz5QhNhjOAy"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">
              BlackRock: The Company that Owns the World. The world's largest
              shadow bank
            </h3>
            <p className="text-gray-700 text-sm">
              During the 2008 Meltdown when the government bailed out
              too-big-to-fail giants like Bear Stearns, AIG, Fannie Mae, Freddie
              Mac - who did they hire to analyze and clean up the mess? Another
              giant financial firm by the name of BlackRock, lead by a very well
              connected billionaire by the name of Larry Fink. BlackRock was
              award these key government contracts to help with the meltdown
              with no competitive bidding while being enveloped in secrecy
            </p>
          </div>
        </div>
        {/* Video 5 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/I2O7blSSzpI?si=5ZHFohy8E_FYyRor"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">
              Cicada 3301: An Internet Mystery | The Internet's Most Mysterious
              Secret
            </h3>
            <p className="text-gray-700 text-sm">
              Cicada 3301 is a nickname given to an organization that, on three
              occasions, has posted a set of puzzles to recruit codebreakers
              from the public. The first internet puzzle started on January 4,
              2012, on 4chan and ran for nearly a month. A second round began
              one year later on January 4, 2013, and a third round following the
              confirmation of a fresh clue posted on Twitter on January 4, 2014.
            </p>
          </div>
        </div>
        {/* Video 6 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ViGcwiW7rfY?si=RbdH2ZUCn52YGCc7"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">
              BINARY DREAMS: How A.I. Sees the Universe when machines begin to
              question their origins?
            </h3>
            <p className="text-gray-700 text-sm">
              In this short film created with generative art, we explore how
              artificial intelligence sees the universe, its creators, and its
              potential futures. I believe the emergence of artistic A.I. has
              touched off a new era for art that could be as profound as the
              first cave paintings, 50,000 years ago. If these artistic
              capabilities are possible after only a few decades of A.I.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideosPodcastsSection;
