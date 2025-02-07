import About from '../Components/About';
import Hero from '../Components/Hero';
import MoreAboutMe from '../Components/MoreAboutMe';
import Skills from '../Components/Skills';
import Work from '../Components/Work';

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Work />
      <MoreAboutMe />
      <Skills />
    </div>
  );
};

export default LandingPage;
