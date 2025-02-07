import work1 from '../assets/work/chuckle.jpg';
import work2 from '../assets/work/coding.png';
import work4 from '../assets/work/recognition.jpg';
import work3 from '../assets/work/powerGrid.png';
import { Link } from 'react-router-dom';

const Work = () => {
  return (
    <div className="work scroll-mt-20" id="work">
      <div className="ml-3">
        <h1 className="mt-14 text-white text-4xl font-semibold">Work</h1>
        <h2 className="text-neutral-500 font-bold mt-4 text-xl">
          You&apos;re welcome to access my full work collection{' '}
          <Link to="/work" className="text-white cursor-pointer">
            here.
          </Link>{' '}
        </h2>

        <div className="mt-8 hover:opacity-80 transition duration-300 ease-in-out">
          <Link to="/work" className="text-neutral-200 text-xl">
            Explore <span className="text-[22px] font-bold">&#x2197;</span>
          </Link>
        </div>
      </div>

      <div className="work__cards mt-20 w-[90%] md:w-[85%] mx-auto grid grid-cols-1 gap-10 md:gap-12">
        <div className="work__card">
          <img src={work1} alt="work-pic" />
        </div>
        <div className="work__card">
          <img src={work2} alt="work-pic" />
        </div>
        <div className="work__card">
          <img src={work3} alt="work-pic" />
        </div>
        <div className="work__card">
          <img src={work4} alt="work-pic" />
        </div>
      </div>
    </div>
  );
};

export default Work;
