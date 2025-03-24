import React from "react";

const Header = () => {
  return (
    <header className="bg-primary p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Skip Hire</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
