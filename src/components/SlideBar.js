import "../App.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Slidebar() {
  const [select, setSelect] = useState(0);

  const scroll = (section) => {
    if (section === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="flex-none hidden lg:block  bg-black h-screen min-w-[25%] fixed ">
      <div className="nav flex  text-white text-lg mt-10 flex-col align-middle justify-center text-center w-full gap-5 overflow-hidden">
        <div data-aos="slide-down">
          <NavLink to={"/activity"}>
            <img
              src={require("../assets/myimages/chiefnenry.jpg")}
              alt="Charles I Omosegbon"
              title="Charles activity"
              className=" border-solid cursor-pointer h-[170px] border-[5px] border-stone-600 min-h-fit mx-auto"
            />
            <h3 className="text-white name py-4 font-medium ">
              Charles I Omosegbon
            </h3>
          </NavLink>
        </div>
        <p
          onClick={() => setSelect(0)}
          className={`cursor-pointer hover:text-blue-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
            select === 0 ? "text-blue-600 " : ""
          }`}
          data-aos="slide-right"
          data-aos-delay="200"
        >
          <NavLink
            to="#"
            onClick={() => {
              scroll("#");
            }}
          >
           Home
          </NavLink>
        </p>
        <p
          onClick={() => setSelect(1)}
          className={`cursor-pointer hover:text-blue-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
            select === 1 ? "text-blue-600 " : ""
          }`}
          data-aos-delay="600"
          data-aos="slide-left"
        >
          <NavLink
            to="#about"
            onClick={() => {
              scroll("about");
            }}
          >
           About Me
          </NavLink>
        </p>
        <p
          onClick={() => setSelect(2)}
          className={`cursor-pointer hover:text-blue-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
            select === 2 ? "text-blue-600 " : ""
          }`}
          data-aos="slide-right"
          data-aos-delay="1000"
        >
          <NavLink
            to="#resume"
            onClick={() => {
              scroll("resume");
            }}
          >
            Resume
          </NavLink>
        </p>
        <p
          onClick={() => setSelect(3)}
          className={`cursor-pointer hover:text-blue-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
            select === 3 ? "text-blue-600 " : ""
          }`}
          data-aos="slide-left"
          data-aos-delay="1400"
        >
          <NavLink
            to="#projects"
            onClick={() => {
              scroll("projects");
            }}
          >
             Projects
          </NavLink>
        </p>
        <p
          onClick={() => setSelect(4)}
          className={`cursor-pointer hover:text-blue-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
            select === 4 ? "text-blue-600 " : ""
          }`}
          data-aos="slide-right"
          data-aos-delay="1800"
        >
          <NavLink
            to="#contact"
            onClick={() => {
              scroll("contact");
            }}
          >
             Contact
          </NavLink>
        </p>
      </div>
      <div
        className="text-white flex flex-row gap-5 w-fit mx-auto pt-7"
        data-aos="slide-up"
        data-aos-delay="2300"
      >
        <div
          title="Github"
          onClick={() =>
            window.open("https://github.com/Chiefnenry", "_blank")
          }
        >
          <GitHubIcon className="cursor-pointer hover:scale-105" />
        </div>
        <div
          title="Instagram"
          onClick={() =>
            window.open("https://instagram.com/chief_nenry?igshid=OGQ5ZDc2ODk2ZA==", "_blank")
          }
        >
          {" "}
          <InstagramIcon className="cursor-pointer hover:scale-105" />
        </div>
        <div
          title="Linkedin"
          onClick={() =>
            window.open("https://www.linkedin.com/in/charles-omosegbon-12a4a7308", "_blank")
          }
        >
          {" "}
          <LinkedInIcon className="cursor-pointer hover:scale-105" />
        </div>
        <div
          title="Facebook"
          onClick={() =>
            window.open("https://x.com/chiefnenry", "_blank")
          }
        >
          <TwitterIcon className="cursor-pointer hover:scale-105" />
        </div>
      </div>
    </div>
  );
}
