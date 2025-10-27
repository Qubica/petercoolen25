import { Hero } from "./components/Hero/Hero";
import { Problem } from "./components/Problem/Problem";
import { TheValue } from "./components/TheValue/TheValue";
import { WhatIDeliver } from "./components/WhatIDeliver/WhatIDeliver";
import { HowWeWork } from "./components/HowWeWork/HowWeWork";
import { SelectedWork } from "./components/SelectedWork/SelectedWork";
import { About } from "./components/About/About";
import { FAQ } from "./components/FAQ/FAQ";
import { LogoMarquee } from "./components/LogoMarquee/LogoMarquee";
import { Benefits } from "./components/Benefits/Benefits";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Benefits /> */}
      <Problem />
      <WhatIDeliver />
      <TheValue />
      <SelectedWork />
      <LogoMarquee />
      <About />
      <HowWeWork />
      <FAQ />
    </>
  );
}
