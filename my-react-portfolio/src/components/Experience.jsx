import React from 'react';
import img1 from '../assets/background/img-125.jpg';
import img2 from '../assets/background/20241027_220352_0002.jpg';
import img3 from '../assets/background/20241027_220352_0002.jpg';

const Experience = () => {
  // Experience data
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Synq Tech (Freelancing)",
      duration: "2023 - Present",
      description:
        "• Write readable, reusable, and maintainable code \n• Demonstrable experience with developing web apps using modular development and scalable architectures as well as a strong focus on code readability and security/stability (i.e. testing)\n• Strong understanding of UI/UX principles and experience collaborating with design teams.\n•  Strong communication skills and the ability to work effectively within a team.\n• Solid understanding of JavaScript ES6 and either Node.js or React \n• Strong experience in backend API integrations.\n• Software Quality Assurance and Test Planning experience.\n •Good relational database skills (e.g. MySQL, MariaDB, PostgreSQL)",
      skills: ["Javascript", "React.js", "Next.js", "MongoDB", "Tailwind CSS", "HTML5"],
    },
    {
      title: "Frontend Developer",
      company: "Adobe",
      duration: "2022 - 2023",
      description:
        "• Familiarity with version control systems, especially Git. \n• Understanding of key website design principles and SEO optimisation \n• Strong understanding of UI/UX principles and experience collaborating with design teams.\n•  Strong communication skills and the ability to work effectively within a team.\n• Proficient in HTML5, CSS3(SaaS), and JavaScript(ES6). \n• Strong experience in backend API integrations.\n• Develop and maintain high-quality websites.",
      skills: ["HTML5", "CSS3", "Javascript(ES6)", "mySQL", "Adobe Creative Suite", "SEO" ],
    },
    {
      title: "IT Technician Intern",
      company: "Ingwebu Breweries",
      duration: "2021 - 2022",
      description:
        "• Perform routine system updates, backups, and patch management. \n• Solid experience with collaboration tools (Slack, teams, etc.), client VPNs, Windows firewall, Antivirus, Bitlocker and conferencing software (Zoom, WebEx, etc.) \n• Provide technical support for Microsoft 365 applications, including troubleshooting issues related to Office Suite tools, ERP and other software and technologies\n•  Strong communication skills and the ability to work effectively within a team.\n• Proficient in HTML, CSS, and JavaScript. \n• Strong experience in backend API integrations.\n• Develop and maintain high-quality websites.",
      skills: ["Python", "Skelet", "Threads", "Postgres"],
    },
  ];

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center mb-8">Experience</h1>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-gray-200 p-6 rounded-lg shadow-md flex flex-col md:flex-row">
            <div className="md:w-1/4 text-gray-600 text-sm mb-4 md:mb-0">
              {exp.duration}
            </div>
            <div className="md:w-3/4">
              <h2 className="text-2xl font-semibold text-gray-800">
                {exp.title} - {exp.company}
              </h2>
              <p className="text-gray-700 mb-4 p-2 text-lg leading-relaxed">  {exp.description.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}</p>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;