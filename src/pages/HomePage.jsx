import Sales from "components/Molecules/HomePage/Desktop/Sales";
import Start from "components/Molecules/HomePage/Desktop/Start";
import HowWorks from "components/Molecules/HomePage/Desktop/HowWorks";
import NewProducts from "components/Molecules/HomePage/Desktop/NewProducts";
import Instagram from "components/Molecules/HomePage/Desktop/Instagram";
import Banners from "components/Molecules/HomePage/Desktop/Banners";
import Trends from "components/Molecules/HomePage/Desktop/Trends";
import TwoSections from "components/Molecules/HomePage/Desktop/TwoSections";
import StartSell from "components/Molecules/HomePage/Desktop/StartSell";
import Media from "components/Molecules/HomePage/Desktop/Media";
import Advantages from "components/Molecules/HomePage/Desktop/Advantages";
import Answers from "components/Molecules/HomePage/Desktop/Answers";
import Subscribe from "components/Molecules/HomePage/Desktop/Subscribe";

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
