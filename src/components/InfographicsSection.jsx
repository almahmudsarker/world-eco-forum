import React from "react";
import aos from "aos";
import "aos/dist/aos.css";

const InfographicsSection = () => {
  aos.init();

  const incomeData = [
    { country: "USA", percentiles: [10, 30, 20, 25, 15], averageIncome: 60000 },
    {
      country: "China",
      percentiles: [5, 20, 30, 25, 20],
      averageIncome: 15000,
    },
    { country: "India", percentiles: [2, 15, 30, 35, 18], averageIncome: 8000 },
    // Add more countries and data as needed
  ];

  const infographicData = [
    {
      technology: "Holy Vibe Contest",
      percentage: 70,
      image:
        "https://images.unsplash.com/photo-1612198273689-b437f53152ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21hcnRwaG9uZSUyMGltYWdlLmpwZ3xlbnwwfHwwfHx8MA%3D%3D",
      link: "https://holyvible.com",
    },
    {
      technology: "World Vibe Web",
      percentage: 60,
      image:
        "https://images.unsplash.com/photo-1531765408077-9a1f85f90df1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGludGVybmV0JTIwaW1hZ2UuanBnfGVufDB8fDB8fHww",
      link: "https://worldvibeweb.org",
    },
    {
      technology: "Decentralized Intelligence Agency",
      percentage: 40,
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGlnaXRhbCUyMGxpdGVyYWN5JTIwaW1hZ2UuanBnfGVufDB8fDB8fHww",
      link: "https://dia.wiki",
    },
    {
      technology: "Powering Innovation",
      percentage: 30,
      image:
        "https://images.unsplash.com/photo-1547032175-7fc8c7bd15b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluZmx1ZW5jZXJ8ZW58MHx8MHx8fDA%3D",
      link: "https://powerhouse.army",
    },
    {
      technology: "Deathless Casa",
      percentage: 20,
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U29jaWFsJTIwTWVkaWF8ZW58MHx8MHx8fDA%3D",
      link: "https://persistventure.notion.site/Deathless-Casa-6ee28ca96ee746cfa814738531badc6b",
    },
    {
      technology: "young visionaries",
      percentage: 10,
      image:
        "https://images.unsplash.com/photo-1613294326794-e7c74fe886e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udGVudCUyMGNyZWF0b3J8ZW58MHx8MHx8fDA%3D",
      link: "https://tadpool.org",
    },
  ];

  return (
    <>
      <h2
        className="text-center mb-2 animated-gradient-text mt-32"
        data-aos="fade-up"
      >
        Infographics And Data Visualizations
      </h2>
      {/* <section className="py-16">
        <div className="container mx-auto">
          <div
            className=" p-6 rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h2 className="text-3xl font-bold mb-4">
              Climate Change Impact Map
            </h2>
            <div className="relative overflow-hidden rounded-lg">
              <a href="https://web3venturestudio.com">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Climate Change Impact Map"
                  className="w-full h-auto rounded-lg"
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                />
              </a>
            </div>
            <p className="mt-4 text-gray-700">
              World map highlighting regions most affected by climate change.
            </p>
            <div className="mt-6 flex justify-between">
              <div className="flex items-center">
                <span className="bg-red-500 h-2 w-2 rounded-full mr-2"></span>
                <p className="text-sm">Temperature Changes</p>
              </div>
              <div className="flex items-center">
                <span className="bg-blue-500 h-2 w-2 rounded-full mr-2"></span>
                <p className="text-sm">Sea Level Rise</p>
              </div>
              <div className="flex items-center">
                <span className="bg-yellow-500 h-2 w-2 rounded-full mr-2"></span>
                <p className="text-sm">Extreme Weather Events</p>
              </div>
            </div>
            <p className="mt-4 text-gray-700">
              Illustrate the urgency of addressing climate change and its
              diverse impacts.
            </p>
          </div>
        </div>
      </section> */}

      {/* Global Income Inequality Chart */}
      {/* <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-8" data-aos="fade-up">
          Global Income Inequality Chart
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          data-aos="fade-up"
        >
          {incomeData.map((countryData, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                {countryData.country}
              </h3>
              <div className="flex flex-col space-y-2">
                {countryData.percentiles.map((percentile, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 text-gray-700"
                    data-aos="fade-right"
                  >
                    <div className="w-16 bg-gray-300 h-6 relative">
                      <div
                        className="bg-blue-500 h-full absolute"
                        style={{ width: `${percentile}%` }}
                      ></div>
                    </div>
                    <span>{`${percentile}%`}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-gray-600">
                Average Income: ${countryData.averageIncome.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div> */}

      {/* Technology adoption infographic */}
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4">
          Technology Adoption Infographic
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {infographicData.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-md shadow-md"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <a href={item.link}>
                <img
                  src={item.image}
                  alt={`${item.technology} Image`}
                  className="w-full h-32 object-cover mb-4 rounded-md"
                />
              </a>

              <h3 className="text-xl font-semibold mb-2">{item.technology}</h3>
              <p className="text-gray-600">Adoption: {item.percentage}%</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InfographicsSection;
