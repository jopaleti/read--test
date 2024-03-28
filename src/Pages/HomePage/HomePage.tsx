import { useState, useEffect } from "react";
// Components
import Header from "../../Components/Header/hero";
import Features from "../../Components/Features/index";
import Cta from "../../Components/Cta";
import Footer from "../../Components/Footer";
import { ChevronUp } from "../../assets/icons";
// Hooks
// import useTitle from "../../Hooks/useTitle";
import useTitle from "../../Components/Hooks/useTitle";

const Homepage = () => {
  const [show, setShow] = useState(false);
  useTitle("Readiily");

  const scrollTop = () => {
    window.scrollY > 350 ? setShow(true) : setShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollTop);

    return () => window.removeEventListener("scroll", scrollTop);
  }, []);
  return (
    <main className="relative bg-white">
      <Header />
      <Features />
      <Cta />
      <Footer />

      <a
        className={`fixed md:hidden ${
          show ? "bottom-10" : "-bottom-20"
        } right-4 bg-black transition-all duration-500 text-white rounded-full p-4 sm:p-6`}
        href="#hero"
      >
        <ChevronUp className="w-6 h-6 sm:w-8 sm:h-8 stroke-white stroke-[4]" />
      </a>
    </main>
  );
};

export default Homepage;
