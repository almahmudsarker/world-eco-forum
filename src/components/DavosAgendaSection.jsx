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
            FLIC TALENT
          </h1>
          <hr className="my-4" />
          <p className="text-left text-base md:text-lg">
            Plan for your future. As a growing influencer your social pages will
            become more and more vital to your career. Ultimately you eventually
            want to reach a point where you have an entire instagram team. Your
            DM's on these pages is what you wouldnt want leaked. One huge key
            factor is turning viewers into fans, in order to do you need to give
            the curious ones a chance to take a deeper look into your life.
            Factors such as your other achievements, philosophies, ideas,
            everything you display on the table will change the sticking power
            of the people you attract. Based on who you are attracting there is
            smaller or larger pools of people and these pools of people pertain
            to higher and lower quality level of people. Give people DEEPER ways
            to connect with who you are at the core. This is how you move from
            fans to followers to mercenaries. We call this the Talent
            Relationship Building Funnel: The goal is to let people down your
            personal Rabbithole. What do you truly care about, what do you truly
            want, most important why? If you let these visions out into the
            world, people will help them manifest into reality. Hated by many
            and loved by many aswell. True influence is in the superfans, who
            will go out of their way to push your ward your ideas given. True
            disciples. Your conversion ratio from new viewer to person who helps
            your conquest prevail needs to be maximized. **You are the 5 people
            you surround yourself with. Nowadays we surround ourselves with
            virtual friends
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
            Persist Accelerator
          </h1>
          <hr className="my-4" />
          <p className="text-left text-base md:text-lg">
            {" "}
            Persist Accelerator is a venture studio that leverages high-growth
            attention sources to  fast track the process of fundraising,
            brand-awareness, and finding product-market fit. We tap into our
            influential partners vast networks of established influence, and in
            return solidify their fame by attaching a real, value creating
            business to their name. As we saw with Fyre Festival, coordinating
            influencers is an amazing way to get the whole world talking and
            interested in a new idea. This is starting with a smaller more
            straightforward cash flow generation business leading to a proven
            model, and expanding our influencer network. At which point we will
            group venture larger projects in the tech space. Our founder was
            previously featured in yahoo news for building a 7 figure business
            in a year. He ran a bootstrapped venture studio for the past. As we
            move deeper into the information age, more and more time is being
            spent on the digital playing field. Human attention is what drives
            change, and markets. Society is undergoing a massive change in where
            human attention is being focused. We are working with young
            celebrities today who are becoming the legends of tomorrow. We not
            only provide a means to capture that opportunity full force and
            combine it with the meaningful backbone of a conscious community to
            provide guidance along the way. As Persist and its operations
            continue moving forward we know all too well the opportunities
            towards distractions increase as well.
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
