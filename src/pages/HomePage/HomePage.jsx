import Sales from "components/Atoms/HomePage/Sales";
import Start from "components/Atoms/HomePage/Start";
import HowWorks from "components/Atoms/HomePage/HowWorks";
import NewProducts from "components/Atoms/HomePage/NewProducts";
import Instagram from "components/Atoms/HomePage/Instagram";
import Banners from "components/Atoms/HomePage/Banners";
import Trends from "components/Atoms/HomePage/Trends";
import TwoSections from "components/Atoms/HomePage/TwoSections";
import StartSell from "components/Atoms/HomePage/StartSell";

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
      <Instagram />
    </div>
  );
};

export default HomePage;
