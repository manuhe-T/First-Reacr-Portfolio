const Skills = () => {
  return (
    <div className="text-white flex items-start justify-between mt-14 mx-2  md:w-[90%] md:mx-auto md:justify-end md:gap-48 relative">
      <div className="soft--skill">
        <div className="skill--div">
          <p className="title">Leadership</p>
          <p className="sub--title">Guiding Teams</p>
        </div>
        <div className="skill--div">
          <p className="title">Communication</p>
          <p className="sub--title">Clear Collaboration</p>
        </div>
        <div className="skill--div">
          <p className="title">Time Management</p>
          <p className="sub--title">Task Prioritization</p>
        </div>
        <div className="skill--div">
          <p className="title">Emotional Intelligence</p>
          <p className="sub--title">Interpersonal Skills</p>
        </div>
        <div className="skill--div">
          <p className="title">Creativity</p>
          <p className="sub--title">Innovative Thinking</p>
        </div>
      </div>
      <div className="experience">
        <div className="skill--div">
          <p className="title">Development</p>
          <p className="sub--title">Code Creation</p>
        </div>
        <div className="skill--div">
          <p className="title">Design</p>
          <p className="sub--title">Visual Planning</p>
        </div>
        <div className="skill--div">
          <p className="title">Integration</p>
          <p className="sub--title">System Merging</p>
        </div>
        <div className="skill--div">
          <p className="title">Collaboration</p>
          <p className="sub--title">Team Coordination</p>
        </div>
        <div className="skill--div">
          <p className="title">Consulting</p>
          <p className="sub--title">Expert Guidance</p>
        </div>
      </div>
      <div className="hidden lg:inline absolute left-2.5 bottom-0">
        <p className=" custom-h1 inline mt-16 text-gray-300 cursor-pointer hover:opacity-85 md:mx-auto text-center">
          Connect with Linkedin{' '}
          <span className="text-[22px] px-0">&#x2197;</span>
        </p>
      </div>
    </div>
  );
};

export default Skills;
