import About from "../src/components/About";
import CustomText from "../src/components/CustomText";
import Interests from "../src/components/Interests";
import { CreativePageBanner } from "../src/components/PageBanner";
import ResumeSection from "../src/components/ResumeSection";
import Service from "../src/components/Service";
import {
  CodingSkills,
  DesignSkills,
  KnowledgeSkills,
  LanguagesSkills,
} from "../src/components/Skills";
import Layout from "../src/layout/Layout";
const ResumeCreative = () => {
  const typingAnimation = [
    `<span class="typed-bread"> <a href="#">Home</a>  / Resume </span>`,
  ];
  return (
    <Layout>
      {/* Section Started */}
      <CreativePageBanner pageName={"Resume"} typingData={typingAnimation} />
      {/* Section About */}
      <About />
      {/* Section Service */}
      <Service />
      {/* Section Pricing */}
      <ResumeSection />
      {/* Section Design Skills */}
      <DesignSkills />
      {/* Section Languages Skills */}
      <LanguagesSkills />
      {/* Section Coding Skills */}
      <CodingSkills />
      {/* Section Interests */}
      <Interests />
    </Layout>
  );
};
export default ResumeCreative;
