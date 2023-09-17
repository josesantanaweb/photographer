"use client";
import Button from "@/components/button"

const Header = () => {
  return (
    <header className="relative h-[800px]">
      <div className="container relative z-10 grid items-center justify-center h-full grid-cols-2 px-20 mx-auto bg-cover bg-photographer">
        <div>
          <p className="mb-3 text-lg text-gray-500">Hello there !</p>
          <h1 className="mb-10 text-6xl font-bold text-gray-200 uppercase">
            I'm Martin Dan
          </h1>
          <p className="mb-10 text-lg leading-8 text-gray-500">
            I am professional photographer based on New York, creating
            dreamscapes with black, white and shades in-between.
          </p>
          <div className="flex items-center gap-5">
            <Button label="My Works" onClick={() => console.log('')}/>
            <Button label="Contact Me" onClick={() => console.log('')} variant="secondary"/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
