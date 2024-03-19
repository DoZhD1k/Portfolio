import React from "react";
import GitHubCalendar from "react-github-calendar";
// import ItemLayout from "./ItemLayout";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      
      {/* <div
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs?username=DoZhD1k&theme=transparent&hide_border=true&title_color=c770f0&text_color=FFFFFF&icon_color=FEFE5B&text_bold=true"
            alt="DoZhD1k"
            loading="lazy"
          />
        </div>

        <div className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=DoZhD1k&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="DoZhD1k"
            loading="lazy"
          />
        </div>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      

        <div className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-streak-stats.herokuapp.com?user=DoZhD1k&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B"
            alt="DoZhD1k"
            loading="lazy"
          />
        </div> */}
      <GitHubCalendar
        username="DoZhD1k"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
