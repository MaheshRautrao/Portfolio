"use client";

import { useState } from "react"; // Import useState for managing dark mode
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "../styles/globals.css";

// Define the light theme
const lightTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "white", // Light mode background
        color: "black", // Light mode text color
      },
      "html, body": {
        transition: "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
      },
    },
  },
});

// Define the dark theme
const darkTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "gray.800", // Dark mode background
        color: "white", // Dark mode text color
      },
    },
  },
});

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev); // Toggle dark mode
  };

  return (
    <ChakraProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <div className={`min-h-screen`}>
        <Header toggleTheme={toggleTheme} />
        <main className="container mx-auto px-4 py-8">
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </ChakraProvider>
  );
}
