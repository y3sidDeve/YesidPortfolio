import React from "react";
import NavbarCustom from "../components/common/NavbarCustom";
import Spline from "@splinetool/react-spline";

import {
  JavaScript,
  Html,
  Css,
  Django,
  Tailwind,
  Bootstrap,
  Express,
  Git,
  Github,
  Supabase,
  Python,
  Mysql,
} from "../icons/Icons";

const Home = () => {
  return (
    <>
      <NavbarCustom />
      <div className="grid grid-cols-5">
        <div className="col-span-5 md:col-span-2 title flex flex-col justify-center items-center">
          <h1 className="text-5xl md:text-5xl lg:text-8xl 2xl:text-[9rem] 2xl:text-center px-4 mb-6  font-mono">
            Hi!, I'm <br /> <span>Yesid Bernal</span>
          </h1>

          <h2 className="text-foreground/50 text-3xl px-2">
            Full Stack Developer
          </h2>
        </div>
        <div className="col-span-3 cursor-pointer md:col-span-3 hidden md:block lg:block">
          <Spline scene="https://prod.spline.design/clFvbiAip0bV5ciZ/scene.splinecode" />
        </div>
      </div>

      <main className="container mx-auto">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-11">
          <div className="flex flex-col items-center px-11 mb-11">
            <h2 className="text-3xl md:text-3xl  text-foreground/90 mb-5">
              About Me
            </h2>
            <p className="text-foreground/50 bg-green-800/20 py-6 rounded-xl text-md md:text-lg px-4">
              I am a Full Stack Developer from Colombia, I love to learn and
              share my knowledge with others. <br />I like the world of
              development because I feel like I can create anything I can
              imagine, that inspires me to learn something new every day.
            </p>
          </div>
          <div className="flex flex-col items-center px-11">
            <h2 className="text-3xl md:text-3xl  text-foreground/90 mb-5">
              Skills
            </h2>
            <div className="container grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <JavaScript className="size-auto md:size-16 lg:size-20 hover:text-green-300 hover:scale-105 transition-all" />
              <Html className="size-auto md:size-16 lg:size-20 hover:text-green-300 hover:scale-105 transition-all " />
              <Css className="size-auto md:size-16 lg:size-20 hover:text-green-300 hover:scale-105 transition-all" />
              <Django className="size-auto md:size-16 lg:size-20 hover:text-green-300 hover:scale-105 transition-all" />

              <Python className="size-auto md:size-16 lg:size-20 hover:text-green-300 hover:scale-105 transition-all" />
              <Tailwind className="size-auto md:size-16 lg:size-20 hover:text-green-300 hover:scale-105 transition-all" />
              <Bootstrap className="size-auto md:size-16 lg:size-20 hover:text-green-300 hover:scale-105 transition-all" />
              <Express className="size-auto md:size-16 lg:size-20 hover:text-green-300 hover:scale-105 transition-all" />
              <Git className="size-auto md:size-16 lg:size-20 hover:text-green-300 hover:scale-105 transition-all" />

              <Github className="size-auto md:size-16 lg:size-20 hover:text-green-300 hover:scale-105 transition-all" />

              <Supabase className="size-auto md:size-16 lg:size-20 hover:text-green-300 hover:scale-105 transition-all" />
              <Mysql className="size-auto md:size-16 lg:size-20 hover:text-green-300 hover:scale-105 transition-all" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
