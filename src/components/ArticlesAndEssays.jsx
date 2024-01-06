import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ArticlesAndEssays = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init();
  }, []);

  // Sample articles and essays data
  const articles = [
    {
      img: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fE1pdGlnYXRpb24lMjBTdHJhdGVnaWVzfGVufDB8fDB8fHww",
      title: "Why FederalPreserve.com?",
      content:
        "This domain is likely to hold and increase its value over time. Poor domain names lose traffic and new customer conversions to better domain named companies, Microsoft Research calls this effect 'domain bias in web search'.... ",
      link: "https://www.domainmarket.com/buynow/federalpreserve.com",
    },
    {
      img: "https://www.purplerock.xyz/Images/icon.png",
      title: "Utopia Unleashed, Beyond Reality",
      content:
        "Beyond the spectrum that our eyes perceive, In the space of dreams, where hopes weave,There lies PurpleRock, standing tall and free, A testament to what can be, a world of unity.Like the perfect society, it's....",
      link: "https://purplerock.xyz",
    },
    {
      img: "https://unitedmetaverse.xyz/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1528722828814-77b9b83aafb2%3Fixlib%3Drb-1.2.1%26q%3D80%26cs%3Dtinysrgb%26fm%3Djpg%26crop%3Dentropy&w=3840&q=75",
      title: "United Metaverse",
      content:
        "As the world continues to become more aware of the deep levels of corruption that exists many people are aligning themselves against it. Everyone is rooting for a better future, but not many are taking action to create the....",
      link: "https://unitedmetaverse.xyz",
    },
    {
      img: "https://minivanguard.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1454971567432-a11479bb5183%3Fixlib%3Drb-1.2.1%26q%3D80%26cs%3Dtinysrgb%26fm%3Djpg%26crop%3Dentropy&w=3840&q=75",
      title: "Small Steps, Mighty Impact",
      content:
        "What are mutual funds? A mutual fund is a company that pools money from many investors and invests the money in securities such as stocks, bonds, and short-term debt The combined holdings of the mutual fund are known as its....",
      link: "https://minivanguard.com",
    },
    {
      img: "https://worldeconomicquorum.com/_next/image?url=https%3A%2F%2Fwww.notion.so%2Fimage%2Fhttps%253A%252F%252Fwww.notion.so%252Fimages%252Fpage-cover%252Fnasa_earth_grid.jpg%3Ftable%3Dblock%26id%3D3689165b-733b-4e74-81d4-fe70c4343bb4%26cache%3Dv2&w=2048&q=75",
      title: "Global Voices Thrive for Global Prosperity",
      content:
        "A nexus of economic discourse, driving inclusive global growth. Many voices, one song they hum, For prosperity, together they come.Obviously when it comes to making global decisions, we need to allow the....",
      link: "https://worldeconomicquorum.com",
    },

    {
      img: "https://assets.website-files.com/6425e714870c813a4e49197c/6425e714870c810c84491992_Benevolent_G_720p%20(1).gif",
      title: "Leading with Soul, Governing with Heart",
      content:
        "Elevating governance with spirit and intention, for the collective soul of society. Beyond the mundane, where spirit does chart, A government thrives, with a soulful heart.The world needs a new global philosophy. We need to make.....",
      link: "https://soulgovernment.com",
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleArticles = showAll ? articles : articles.slice(0, 3);

  const handleShowMore = () => {
    setShowAll(!showAll);
  };

  return (
    <section className="container mx-auto my-20">
      <h2
        className="text-center mb-8 animated-gradient-text"
        data-aos="fade-up"
      >
        Articles and Essays
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {visibleArticles.map((article, index) => (
          <div key={index} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
            <div className="bg-white p-4 rounded shadow-md">
              <div className="mb-4">
                <img
                  src={article.img}
                  alt={article.title}
                  className="rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer w-full h-[350px] object-cover "
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
              <p className="text-gray-700 h-20 mb-4">{article.content}</p>
              <a
                href={article.link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:underline cursor-pointer "
              >
                <p className="pt-6 sm:pt-20 md:pt-7 lg:mt-10">Read More</p>
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* "Show More" button */}
      {articles.length > 3 && (
        <div className="text-center mt-8">
          <button
            onClick={handleShowMore}
            className="text-blue-500 hover:underline cursor-pointer"
            data-aos="fade-up"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  );
};

export default ArticlesAndEssays;
