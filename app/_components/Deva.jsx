"use client";
import Image from "next/image";
import Counter from "./counter";
import Test from "./Test";
import Contact from "./Contact";
import Qustiton from "./Qustiton";
import Gamat from "./Gamat";
import ManNahno from "./ManNahno";
import Tatata from "./Tatata";
import Search from "./Search";
import Servises from "./Servises";

function Deva() {
  return (
    <>
      <Search />
      <Counter />
      <Qustiton />
      <Gamat />
      <Servises />

      <Tatata />
      <Test />
      <ManNahno />
      <Contact />
    </>
  );
}

export default Deva;
