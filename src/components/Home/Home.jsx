import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>IFRAN ISLAM</title>
      </Helmet>
      <Banner></Banner>
    </div>
  );
};

export default Home;
