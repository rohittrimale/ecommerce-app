import React from "react";
import image from "../assert/icon1.jpg";

const About = () => {
  return (
    <div className="md:mx-[10%] mx-[5%] lg:mx-[15%]">
      <div className="font-semibold font-metal-mania text-3xl text-center p-3">
        About
      </div>
      <div className="p-3  md:block flex flex-col gap-6">
        <div className="float-left flex flex-col justify-center items-center	m-4 p-2">
          <img
            src={image}
            alt="img"
            className="rounded-full  "
            height={200}
            width={200}
          />
          <div className="text-2xl text-center mt-2 font-bold">
            Rohit Trimalle
          </div>
        </div>

        <p className="mt-4">
          🚀 **Passionate Full Stack Developer | BTech in ENTC | Innovator &
          Problem Solver** Hello LinkedIn community! 👋 I'm Rohit Trimalle, a
          dynamic Full Stack Developer on a mission to blend innovation with
          technology. Armed with a BTech in ENTC, I'm dedicated to enhancing my
          skills and knowledge to make a meaningful impact. **💻 What I Bring:**
          - Expertise in Java, React, JavaScript, NodeJS, ExpressJs, and MySQL.
          - Proven track record in creating intuitive and seamless web
          applications. **🛠️ Project Wizardry:** - Crafted "FoodWala," a food
          ordering platform using React, Tailwind, Redux, and the Swiggy API. -
          Engineered a "Youtube Clone" with React, Tailwind, Redux, and YouTube
          API, delivering a personalized video experience. [Check it out!](
          <a
            href="https://clone-50045.web.app/"
            className="text-blue-800 font-semibold"
          >
            https://clone-50045.web.app/
          </a>
          ) **🌍 Internship Chronicles:** - Thrived at Tata Communication
          Limited, diving into tickets, GAM, CCNA, IP problem-solving. -
          Sharpened skills at The Spark Foundation, contributing to a
          groundbreaking Banking App using Android Studio. **🏆 Continuous
          Learner:** - Certified in Java and Web Development, always hungry for
          new challenges. <br />
          **🤝 Let's Connect:** - 📧 Email: rohittrimalle@gmail.com - 📱 Mobile:
          (+91) 9145263541 - [GitHub] ({" "}
          <a
            href="https://github.com/rohittrimale"
            className="text-blue-800 font-semibold"
          >
            https://github.com/rohittrimale
          </a>
          ) - [LinkedIn]({" "}
          <a
            href=" https://www.linkedin.com/in/rohit-trimalle/"
            className="text-blue-800 font-semibold"
          >
            https://www.linkedin.com/in/rohit-trimalle/
          </a>
          ) **🌟 Seeking Opportunities:** Eager to collaborate on exciting
          projects and contribute my skills to a forward-thinking organization.
          Let's connect, innovate, and build something amazing together! ---
          Feel free to modify this according to your preferences and add any
          additional details that you find relevant. Best of luck with your
          LinkedIn journey!
        </p>
      </div>
    </div>
  );
};

export default About;
