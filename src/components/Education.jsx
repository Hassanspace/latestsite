import React from "react";
import comsats from "/icons/comsats.jpg";
import dps from "/icons/dps.jpeg";
import educators from "/icons/educators.jpeg";
import finish from "/icons/finish.jpg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: "rgba(0, 0, 0, 0.3)",
          color: "#fff",
          backdropFilter: "blur(10px)",
          border: "2px solid rgba(0, 0, 0, 0.5)", // Border around the box
          borderRadius: "15px", // Border radius
          boxShadow: "0px 0px 10px rgba(0, 0, 255, 0.3), 0 6px 6px rgba(0, 0, 0, 0.2)", // Shadow with mixed colors
        }}
        contentArrowStyle={{ borderRight: "15px solid rgba(0, 0, 0, 0.8)" }}
        date="2022 - present"
        iconStyle={{
          background: "rgba(0, 0, 0, 0.8)",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 0 10px rgba(0, 0, 255, 0.6)",
          borderRadius: "50%", // Ensures the icon is circular
        }}
        icon={
          <img
            src={comsats}
            alt="COMSATS Logo"
            className="rounded-full h-full w-full"
          />
        }
      >
        <div className="flex flex-row-reverse gap-2">
          <h3 className="vertical-timeline-element-title md:text-2xl text-xl font-bold">
            COMSATS UNIVERSITY ISLAMABAD, Sahiwal Campus
          </h3>
          <img
            className="rounded-lg md:h-[60px] md:w-[80px] h-[50px] w-[70px]"
            src={comsats}
            alt=""
          />
        </div>
        <h4 className="vertical-timeline-element-subtitle">
          Bachelors in Software Engineering
        </h4>
        <h5 className="vertical-timeline-element-subtitle">
          Sep 2022 - Sep 2026
        </h5>
        <h5 className="font-bold">Grade: 3.5 / 4 CGPA</h5>
        <p>
          I am currently pursuing a Bachelor's degree in Software Engineering at
          COMSATS University Islamabad, Sahiwal Campus, Pakistan. I have
          completed 4 semesters and have a CGPA of 3.5/4. I have taken courses
          in Programming Fundamentals, Data Structures and Algorithms,
          Object-Oriented Programming among others. I am learning and working on
          exciting projects with a team of talented developers.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: "rgba(0, 0, 0, 0.3)",
          color: "#fff",
          backdropFilter: "blur(10px)",
          border: "2px solid rgba(0, 0, 0, 0.5)", // Border around the box
          borderRadius: "15px", // Border radius
          boxShadow: "0px 0px 10px rgba(0, 0, 255, 0.3), 0 6px 6px rgba(0, 0, 0, 0.2)", // Shadow with mixed colors
        }}
        contentArrowStyle={{ borderRight: "7px solid rgba(0, 0, 0, 0.8)" }}
        date="2020 - 2022"
        iconStyle={{
          background: "rgba(0, 0, 0, 0.8)",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 0 10px rgba(0, 0, 255, 0.6)",
          borderRadius: "50%", // Ensures the icon is circular
        }}
        icon={
          <img
            src={dps}
            alt="DPS Logo"
            className="rounded-full h-full w-full"
          />
        }
      >
        <div className="flex flex-row-reverse gap-2">
          <h3 className="vertical-timeline-element-title md:text-2xl text-xl font-bold">
            DIVISIONAL PUBLIC SCHOOL AND COLLEGE, Sahiwal
          </h3>
          <img
            className="rounded-lg md:h-[60px] md:w-[80px] h-[50px] w-[70px]"
            src={dps}
            alt=""
          />
        </div>
        <h4 className="vertical-timeline-element-subtitle">
          FSC PRE ENGINEERING
        </h4>
        <h5 className="vertical-timeline-element-subtitle">
          Sep 2020 - Sep 2022
        </h5>
        <h5 className="font-bold">Grade: 82.5%</h5>
        <p>
          I completed my class 12 high school education at DPS Sahiwal,
          Pakistan, where I studied Pre-Engineering.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: "rgba(0, 0, 0, 0.3)",
          color: "#fff",
          backdropFilter: "blur(10px)",
          border: "2px solid rgba(0, 0, 0, 0.5)", // Border around the box
          borderRadius: "15px", // Border radius
          boxShadow: "0px 0px 10px rgba(0, 0, 255, 0.3), 0 6px 6px rgba(0, 0, 0, 0.2)", // Shadow with mixed colors
        }}
        contentArrowStyle={{ borderRight: "7px solid rgba(0, 0, 0, 0.8)" }}
        date="2018 - 2020"
        iconStyle={{
          background: "rgba(0, 0, 0, 0.8)",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 0 10px rgba(0, 0, 255, 0.6)",
          borderRadius: "50%", // Ensures the icon is circular
        }}
        icon={
          <img
            src={educators}
            alt="The Educators Logo"
            className="rounded-full h-full w-full"
          />
        }
      >
        <div className="flex flex-row-reverse gap-2">
          <h3 className="vertical-timeline-element-title md:text-2xl text-xl font-bold">
            THE EDUCATORS (BOYS CAMPUS), Sahiwal
          </h3>
          <img
            className="rounded-lg md:h-[60px] md:w-[80px] h-[50px] w-[70px]"
            src={educators}
            alt=""
          />
        </div>
        <h4 className="vertical-timeline-element-subtitle">
          MATRIC WITH BIOLOGY
        </h4>
        <h5 className="vertical-timeline-element-subtitle">
          Sep 2018 - Sep 2020
        </h5>
        <h5 className="font-bold">Grade: 97.5%</h5>
        <p>
          I completed my class 10 school education at Educators Sahiwal,
          Pakistan, where I studied Science.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        iconStyle={{
          background: "rgba(16, 204, 82, 0.8)",
          color: "#fff",
          boxShadow: "0 0 15px rgba(16, 204, 82, 0.8)",
        }}
        icon={<img
            src={finish}
            alt="The Educators Logo"
            className="rounded-full h-full w-full"
          />}
      />
    </VerticalTimeline>
  );
};

export default Education;
