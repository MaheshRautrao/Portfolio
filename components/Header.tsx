// components/Header.tsx
import React from "react";
import { Sun } from "lucide-react";

interface HeaderProps {
  toggleTheme: () => void; // Define the type for the toggleTheme prop
}

const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  return (
    <header className="sticky top-0 z-10 backdrop-blur-sm bg-background/80 border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mahesh Rautrao</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:underline">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        {/* Add the toggle button here */}
        <button
          onClick={toggleTheme}
          className="ml-4 p-2 rounded-md bg-gray-200"
        >
          <Sun />
        </button>
      </div>
    </header>
  );
};

export default Header;
