import Navbar from "../components/navbar/Navbar";
import laptop from "../assets/laptop-balancing-with-purple-background-removebg-preview.png";
import "./landingPage.css";
import { ThemeProvider } from "../contexts/theme";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClose,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
const LaningPage = () => {
  const [theme, setTheme] = useState("light");
  const [show, setShow] = useState(false);
  const lightMode = () => {
    setTheme("light");
  };
  const darkMode = () => {
    setTheme("dark");
  };
  const handleClick = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(theme);
  }, [theme]);
  return (
    <ThemeProvider value={{ theme, lightMode, darkMode }}>
      <div className="hero">
        <header className="hero-container">
          <a href="#" className="uppercase font-bold text-xl text-mainColor">
            Code
          </a>
          <Navbar classNav="largeNav" />
          <button
            onClick={handleClick}
            className="text-black text-xl dark:text-white"
          >
            {theme === "light" ? (
              <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
            )}
          </button>
          <div className="block lg:hidden ">
            {show ? (
              <div>
                <span onClick={() => setShow(false)} className="themeBtn">
                  <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
                </span>
                <Navbar classNav="mobileNav" />
              </div>
            ) : (
              <span onClick={() => setShow(true)} className="themeBtn">
                <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
              </span>
            )}
          </div>
        </header>
        <div className="circle  " />
        <div className="main-content">
          <div>
            <h1 className="heading">
              A Modern Design Solution For{" "}
              <span className="text-mainColor uppercase">Startups</span>
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              quis adipisci doloremque.
            </p>
            <button className="btn">Explore More</button>
          </div>
          <img src={laptop} alt="laptop" className="relative floating" />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default LaningPage;
