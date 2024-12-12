import React from "react";
import java from "../../public/java.png";
import react from "../../public/reactjs.png";
import mongoDb from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import css from "../../public/css.jpg";
import html from "../../public/html.png";
import javascript from "../../public/javascript.png";

const Portfolio = () => {
  const cardItem = [
    {
      id: 4,
      logo: react,
      name: "ReactJs",
      projects: [
       
        {
          name: "Animated Website",
          projectLink: "https://animatedwebsite-henna.vercel.app/",
          sourceLink: "https://github.com/shambhu-pandey/74-animated-website",
        },
        {
          name: "Register page",
          projectLink: "https://signup-react-self.vercel.app/",
          sourceLink: "https://github.com/shambhu-pandey/signup-react",
        },
        {
          name: "Google - keep",
          projectLink: "https://google-keep-react-wheat.vercel.app/",
          sourceLink: "https://github.com/shambhu-pandey/google-keep-react",
        },
        {
          name: "Increment - decrement",
          projectLink: "https://increment-decrement-react.vercel.app/",
          sourceLink: "https://github.com/shambhu-pandey/increment---decrement-react",
        },
        {
          name: "Slot Machine Game",
          projectLink: "https://slot-machine-game-phi.vercel.app/",
          sourceLink: "https://github.com/shambhu-pandey/slot-machine-game",
        },
        {
          name: "Api Pokemon",
          projectLink: "https://api-pokemon-react-xi.vercel.app/",
          sourceLink: "https://github.com/shambhu-pandey/Api-pokemon-react",
        },
        {
          name: "Accordian",
          projectLink: "https://basic-accordian-react.vercel.app/",
          sourceLink: "https://github.com/shambhu-pandey/basic-accordian-react",
        },
        {
          name: "Basic form",
          projectLink: "https://basic-form-react.vercel.app/",
          sourceLink: "https://github.com/shambhu-pandey/basic-form-react",
        },
      ],
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
      projects: [
        {
          name: "Calculate BMI Index",
          projectLink: "https://thriving-melba-a54b3c.netlify.app/",
          sourceLink: "https://github.com/shambhu-pandey",
        },
        {
          name: "Colour Scheme Switcher",
          projectLink: "https://helpful-pixie-110b0f.netlify.app/",
          sourceLink: "https://github.com/shambhu-pandey",
        },
        {
          name: "Your Local Time",
          projectLink: "https://starlit-torte-d52f12.netlify.app/",
          sourceLink: "https://github.com/shambhu-pandey",
        },
        {
          name: "Todo App",
          projectLink: "https://iridescent-maamoul-991ec0.netlify.app/",
          sourceLink: "https://github.com/shambhu-pandey",
        },
      ],
    },
    {
      id: 1,
      logo: html,
      name: "HTML",
      projects: [
        {
          name: "Myntra Home Page Clone",
          projectLink: "https://fastidious-tiramisu-9b13aa.netlify.app/",
          sourceLink: "hhttps://github.com/shambhu-pandey",
        },
        {
          name: "Dhaba Famous Food",
          projectLink: "https://joyful-profiterole-3d8804.netlify.app/",
          sourceLink: "https://github.com/shambhu-pandey",
        },
        {
          name: "Cards design",
          projectLink: "https://gilded-flan-bdc0f4.netlify.app/",
          sourceLink: "https://github.com/shambhu-pandey",
        },
      ],
    },
    {
      id: 2,
      logo: css,
      name: "CSS and Bootstrap",
      projects: [
        {
          name: "Digital Solution",
          projectLink: "https://project-digital-sol-main.vercel.app/",
          sourceLink: "https://github.com/shambhu-pandey/project-digital-solution",
        },
        {
          name: "Myntra Home Page Clone",
          projectLink: "https://fastidious-tiramisu-9b13aa.netlify.app/",
          sourceLink: "https://github.com/shambhu-pandey",
        },
      ],
    },
    
    
    // {
    //   id: 5,
    //   logo: express,
    //   name: "Express",
    //   projects: [
    //     {
    //       name: "Express Project",
    //       projectLink: "https://project-express.vercel.app/",
    //       sourceLink: "https://github.com/your-repo/express-project",
    //     },
      
    //   ],
    // },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <h1 className="text-3xl font-bold mb-5 text-center">Portfolio</h1>
      <span className="underline font-semibold mb-5 block text-center">Featured Projects</span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
        {cardItem.map(({ id, logo, name, projects }) => (
          <div
            className="border border-gray-300 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-200"
            key={id}
          >
            <img
              src={logo}
              className="w-20 h-20 mb-4 mx-auto rounded-full border-2"
              alt={`${name} logo`}
            />
            <h2 className="font-bold text-xl text-center mb-2">{name}</h2>
            <div className="flex flex-col space-y-4">
              {projects.map((project, index) => (
                <div key={index} className="text-center">
                  <p className="text-md font-semibold">{project.name}</p>
                  <div className="flex justify-center space-x-2 mt-1">
                    <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-3 py-1 rounded">
                        View Project
                      </button>
                    </a>
                    <a href={project.sourceLink} target="_blank" rel="noopener noreferrer">
                      <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-3 py-1 rounded">
                        Source Code
                      </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
