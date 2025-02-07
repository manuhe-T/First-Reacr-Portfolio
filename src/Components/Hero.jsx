import profilePic from '../assets/sudo.png';

const Hero = () => {
  return (
    <div
      className="text-white my-14 md:w-[90%] md:mx-auto md:justify-between scroll-mt-20"
      id="home"
    >
      <div className="desc flex items-center space-x-6 mt-[90px]">
        <div className="picDiv ml-5 ">
          <img className="pic" src={profilePic} alt="profile picture" />
        </div>
        <div className="">
          <h1 className="w-[350px] md:w-96 text-[14px] text-gray-500 mt-2 ml-3 custom-paragraph hidden sm:block">
            A software developer with a passion for building scalable and
            user-friendly applications.Specialize in back-end development.
          </h1>
        </div>
      </div>
      <div className="mt-44 ml-3">
        <span className="font-extrabold text-neutral-200 text-[3rem]">
          Nahom.
        </span>
        <h1 className="text-2xl text-gray-500">Full Stack Developer</h1>
        <h1 className="text-gray-500 mt-14"> Adam. Ethiopia</h1>
      </div>
    </div>
  );
};

export default Hero;
