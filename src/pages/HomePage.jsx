import Sales from "components/Molecules/HomePage/Sales";
import Start from "components/Molecules/HomePage/Start";
import HowWorks from "components/Molecules/HomePage/HowWorks";
import NewProducts from "components/Molecules/HomePage/NewProducts";
import Instagram from "components/Molecules/HomePage/Instagram";
import Banners from "components/Molecules/HomePage/Banners";
import Trends from "components/Molecules/HomePage/Trends";
import TwoSections from "components/Molecules/HomePage/TwoSections";
import StartSell from "components/Molecules/HomePage/StartSell";
import Media from "components/Molecules/HomePage/Media";
import Advantages from "components/Molecules/HomePage/Advantages";
import Answers from "components/Molecules/HomePage/Answers";
import Subscribe from "components/Molecules/HomePage/Subscribe";

const HomePage = () => {
  return (
    <div>
      <Sales />
      <Start />
      <HowWorks />
      <NewProducts />
      <Banners />
      <Trends />
      <TwoSections />
      <StartSell />
      <Media />
      <Advantages />
      <Instagram />
      <HowWorks />
      <Answers />
      <Subscribe />
    </div>
  );
};

export default HomePage;
