import useTitle from "../../../Title/Title";
import Banner from "../../Banner/Banner";
import Gellary from "../../Gallery/Gellary";
import BestFeatures from "../../PersonalSection/BestFeatures/BestFeatures";
import OurBlog from "../../PersonalSection/OurBlog/OurBlog";
import TapPages from "../TabPages/TapPages";

const Home = () => {
    useTitle("Home")
    return (
        <div>
           <Banner></Banner>
           <TapPages></TapPages>
           <Gellary></Gellary>
           <BestFeatures></BestFeatures>
           <OurBlog></OurBlog>

        </div>
    );
};

export default Home;