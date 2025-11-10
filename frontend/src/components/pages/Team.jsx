import AboutUsSection from '@components/sections/about/AboutUsSection';
import Expert from '@components/sections/team/Expert';
import TeamHero from '@components/sections/team/TeamHero';
import exportAboutImage from '@assets/expert-about.png'
import BrandSection from '@components/sections/about/BrandSection';

const Team = () => {
  return (
    <div className="min-h-screen">
      <TeamHero />
      <Expert/>
      <AboutUsSection
        image={exportAboutImage}
        title="Meet Our Dedicated Team"
        subtitle="Our team of skilled professionals drives excellence, innovation, and reliability across every logistics solution we deliver."
        showButton={false}
      />
      <BrandSection/>
    </div>
  );
};

export default Team;
