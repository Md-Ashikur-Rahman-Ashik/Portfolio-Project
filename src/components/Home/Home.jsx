import { Helmet } from "react-helmet-async";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>IFRAN ISLAM</title>
      </Helmet>
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
};

export default Home;
