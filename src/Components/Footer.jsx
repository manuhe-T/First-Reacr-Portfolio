import x from '../assets/icons/x.png';
import linkedin from '../assets/icons/linkedin.png';
import instagram from '../assets/icons/instagram.png';

const Footer = () => {
  return (
    <div className=" md:w-[90%] md:mx-auto mt-20 scroll-mt-20" id="contact">
      <div className="mt-52 ml-3 mb-40">
        <span className="font-bold text-gray-400 text-[3rem] md:text-7xl">
          Nahom <span className="text-neutral-500">H.</span>
        </span>
        <h1 className="text-xl mt-16 text-gray-400 cursor-pointer hover:opacity-85">
          hi@nahom.co
          <span className="text-2xl text-gray-400 ">&#x2197;</span>
        </h1>
      </div>
      <div className="mt-32 mb-10 flex justify-between items-end ">
        <div>
          <h1 className="text-neutral-300 opacity-50 font-medium mx-3 mt-14 text-2xl">
            {' '}
            Adam &mdash; Ethiopia
          </h1>
          <h1 className="text-[15px] text-neutral-300 opacity-50 mt-8 mx-3">
            © 2025 — Manuhe Teshome
          </h1>
        </div>
        <div className="socials flex justify-end gap-2 md:gap-5 md:mr-10">
          <img src={x} alt="x" />
          <img src={linkedin} alt="linkedin" />
          <img src={instagram} alt="instagram" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
