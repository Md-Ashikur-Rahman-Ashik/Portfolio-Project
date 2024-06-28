import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import About from "../About/About";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>IFRAN ISLAM</title>
      </Helmet>
      <Banner></Banner>
      <About></About>
    </div>
  );
};

export default Home;
