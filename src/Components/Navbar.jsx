import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="fixed top-0 w-[90%] md:w-[100%] md:left-0 md:right-0 md:mx-auto md:justify-between bg-transparent backdrop-blur-2xl py-5 z-1000 md:px-36">
      <div className="nav flex justify-between items-center text-gray-300 md:px-[12px] md:pr-10">
        <Link
          to="/"
          className="logo text-[15px] font-bold cursor-pointer text-neutral-300 opacity-85"
        >
          Manda.
        </Link>
        <nav className="flex items-center space-x-6 text-[15px]">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
