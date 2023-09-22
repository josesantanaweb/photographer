"use client";
import Button from "@/components/button"

const Header = () => {
  return (
    <header className="relative h-[800px]">
      <div className="main container relative z-10 grid items-center justify-center h-full grid-cols-2 px-20 mx-auto bg-cover bg-photographer">
        <div className="relative z-10">
          <p className="mb-3 text-lg text-gray-200">Hello there !</p>
          <h1 className="mb-10 text-6xl font-bold text-gray-200 uppercase">
            I am Hector Colmenares
          </h1>
          <p className="mb-10 text-lg leading-8 text-gray-200">
            I am a Journalist from Venezuela living in Orlando, with the ability
            of graphic design and sport photographer
          </p>
          <div className="flex items-center gap-5 relative z-10">
            <Button label="My Works" onClick={() => console.log("")} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
