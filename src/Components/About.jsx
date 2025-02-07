import python from '../assets/skill/python.png';
import django from '../assets/skill/django.png';
import flutter from '../assets/skill/flutter.png';
import github from '../assets/skill/github.png';

const About = () => {
  return (
    <div
      className="mt-14 flex flex-col items-start md:flex-row md:w-[90%] md:mx-auto md:justify-between scroll-mt-20 "
      id="about"
    >
      <div className="flex flex-col md:h-[400px] md:justify-between ">
        <div className="h-[250px]">
          <p className="text-gray-300 text-[15px] custom-paragraph px-3 md:mt-5 mb-20">
            I&apos;m a versatile software developer specializing in back-end
            development,with skills in front-end tasks to create efficient and
            visually appealing solutions. I excel in modern programming
            languages and frameworks, ensuring clean code. I value collaboration
            and clear communication, and I&apos;m always eager to refine my
            skills and tackle new challenges.
          </p>
        </div>
        <div className="text-white flex space-x-6 mt-6 text-[13px]">
          <p className="cursor-pointer font-semibold">
            hi@nahome.co{' '}
            <span className="text-[16px] px-1 opacity-85">&#x2197;</span>{' '}
          </p>{' '}
          <p className="cursor-pointer font-semibold">
            Instagram{' '}
            <span className="text-[16px] px-1 opacity-85">&#x2197;</span>{' '}
          </p>
        </div>
      </div>

      <div className="cards mt-14 md:mt-0 mb-7 mx-auto md:ml-10">
        <div className="card bg-stone-900 shadow-lg">
          <img src={python} alt="card" />
        </div>
        <div className="card bg-stone-900 shadow-lg">
          <img src={django} alt="card" />
        </div>
        <div className="card bg-stone-900 shadow-lg">
          <img src={flutter} alt="card" />
        </div>
        <div className="card bg-stone-900 shadow-lg">
          <img src={github} alt="card" />
        </div>
      </div>
    </div>
  );
};

export default About;
