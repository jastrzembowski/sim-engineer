import React from "react";
import { MdPeople } from "react-icons/md";
import { FaBuilding, FaRocket, FaAward } from "react-icons/fa";
import {MdOutlineDesignServices, MdHealthAndSafety} from "react-icons/md";
import {FiMinimize2} from "react-icons/fi";
import about from "../images/about.webp";
import fixedbg from "../images/fixed-bg.jpg";

export default function home() {
  return (
    <>
      <div className="w-full h-auto bg-hero bg-cover bg-center flex flex-col justify-around">
        <div className="md:pl-16 flex flex-col md:pr-16 mt-8  ml-8 mr-8">
          <div className="w-32 h-32 rounded-full bg-lime-400"></div>
          <h1 className="text-5xl text-white m-5 font-bold">Smart</h1>
          <h1 className="text-5xl text-white m-5 font-bold">Engineering</h1>
          <h1 className="text-5xl text-white m-5 font-bold">Quality</h1>

          <div className="flex flex-row w-full md:justify-center overflow-x-scroll md:overflow-x-hidden md:flex-wrap scrollbar-none">
            <div
              className="min-w-card w-card h-card flex flex-col bg-lime-400 m-8
         text-black justify-center items-center text-center shadow-lg"
            >
              <MdPeople className="text-5xl text-lime-800" />
              <h2 className="uppercase text-lime-900 font-light text-2xl">
                About us
              </h2>
              <p className="font-light pt-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
                tenetur!
              </p>
            </div>
            <div
              className="min-w-card w-card h-card flex flex-col bg-lime-400 m-8
         text-black justify-center items-center text-center shadow-lg"
            >
              <FaBuilding className="text-5xl text-lime-800 " />
              <h2 className="uppercase text-lime-900 font-light text-2xl">
                Company
              </h2>
              <p className="font-light pt-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
                tenetur!
              </p>
            </div>
            <div
              className="min-w-card w-card h-card flex flex-col bg-lime-400 m-8
         text-black justify-center items-center text-center shadow-lg"
            >
              <FaRocket className="text-5xl text-lime-800 " />
              <h2 className="uppercase text-lime-900 font-light text-2xl">
                Our Mission
              </h2>
              <p className="font-light pt-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
                tenetur!
              </p>
            </div>
            <div
              className="min-w-card w-card h-card flex flex-col bg-lime-400 m-8
         text-black justify-center items-center text-center shadow-lg"
            >
              <FaAward className="text-5xl text-lime-800 " />
              <h2 className="uppercase text-lime-900 font-light text-2xl">
                Awards
              </h2>
              <p className="font-light pt-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
                tenetur!
              </p>
            </div>
          </div>
        </div>
      </div>
      <article className="w-full h-auto flex flex-row pt-20 bg-neutral-800 pl-12 justify-around">
        <div className="flex flex-col w-3/5">
          <div className="w-32 h-32 rounded-full bg-lime-400"></div>
          <h2 className="text-5xl mt-8 text-lime-400 font-semibold">About</h2>
          <p className="text-white text-xl font-thin leading-loose mt-8 mb-8">
            We are innovative engineering design office, based on up to date
            computer-aided technology (CAE), expert knowledge and profesional
            experience. ​<br />
            We operate in new energy solutions (LCNG, H2) engineering design and
            optimisation for our Customers at each R&D level of products and
            services development.
          </p>
          <button className="p-3 pl-6 pr-6 w-fit text-neutral-800 font-semibold bg-lime-400 rounded-xl ">
            Read more
          </button>
        </div>
        <img
          src={about}
          alt="about worker"
          className="rounded-full w-96 h-96 mr-16"
        />
      </article>
      <article className="w-full h-auto flex flex-col pt-20 bg-neutral-800 pl-12 justify-around">
        <h2 className="mb-20 text-lime-400 text-4xl w-3/5 ml-16 font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores neque
          nemo dicta inventore harum laboriosam pariatur enim nihil accusantium
          aspernatur ducimus totam, vel voluptas sit!
        </h2>
      </article>
<div className="w-full h-90 bg-break min-h-90 bg-fixed bg-cover">
  
  </div>      <article className="w-full h-auto flex flex-col pt-20 bg-neutral-800 pl-12 justify-around">
        <h2 className="text-lime-400 text-7xl mt-12 ml-10 font-semibold">
          Lorem ipsum dolor sit. Lorem, ipsum.
        </h2>
        <div className="flex flex-row w-full justify-between items-center">
          <div className="flex flex-col">
            <div className="flex m-12 items-center">
              <MdOutlineDesignServices className="text-8xl text-white mr-8" />
              <div className="flex flex-col">
                <p className="text-6xl text-lime-400 ">Design</p>
                <p className="text-m text-white ml-1 mt-2 font-thin">
                  Top quality LNG/H2 equipment and process design from Concept
                  Development through CAE to Prototype.
                </p>
              </div>
            </div>{" "}
            <div className="flex m-12 items-center">
              <FiMinimize2 className="text-8xl text-white mr-8" />
              <div className="flex flex-col">
                <p className="text-6xl text-lime-400 ">Optimalisation</p>
                <p className="text-m text-white ml-1 mt-2 font-thin">
                  Robust optimisation of designed solutions based on CAE tools
                  (FEA, CFD, DEM) and experienced proffesional team.
                </p>
              </div>
            </div>{" "}
            <div className="flex m-12 items-center">
              <MdHealthAndSafety className="text-8xl text-white mr-8" />
              <div className="flex flex-col">
                <p className="text-6xl text-lime-400 ">Safety</p>
                <p className="text-m text-white ml-1 mt-2 font-thin">
                  Safety engineering based on up to date numerical simulation
                  CFD approaches
                </p>
              </div>
            </div>
          </div>
          <img
            src={about}
            alt="about worker"
            className="rounded-full w-96 h-96 mr-16"
          />
        </div>
      </article>
    </>
  );
}
