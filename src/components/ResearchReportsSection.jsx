import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS
AOS.init();

const ResearchReportsSection = () => {
  const researchReports = [
    {
      title: "Global Economic Outlook",
      content:
        "Analyze current economic trends and their implications on a global scale. Provide forecasts for key economic indicators such as GDP growth, inflation, and employment.",
      link: "https://persistventure.notion.site/Business-Start-To-Finish-785e5457847b4ee2b14cfc6649d2f68f",
    },
    {
      title: "Policies for Economic Recovery",
      content:
        "Evaluate and propose policies for post-pandemic economic recovery. Discuss the role of fiscal and monetary measures in stimulating economic growth.",
      link: "https://persistventure.notion.site/How-To-Utilize-Students-Entrepreneurs-66c1990ed743492f9e167fd9edb1b307",
    },
    {
      title: "Innovation in Economic Models",
      content:
        "Explore innovative economic models that promote sustainability and inclusivity.Highlight examples of countries or regions successfully implementing new economic paradigms.",
      link: "https://persistventure.notion.site/Recruiting-CEO-s-a3aa3a98e44c4245b9f71dcb8bf17037",
    },
  ];

  return (
    <section className="container mb-8 shadow-lg" data-aos="fade-up">
      <h2 className="text-3xl text-white font-bold mb-4 text-center">
        Research Reports
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {researchReports.map((report, index) => (
          <div key={index} className="bg-white p-4 rounded shadow-md">
            <a href={report.link}>
              <h3 className="text-xl font-semibold mb-2">{report.title}</h3>
            </a>
            <p className="text-gray-600">{report.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResearchReportsSection;
