import Banner from "../../Banner/Banner";
import Gellary from "../../Gallery/Gellary";
import PersonalSection1 from "../../PersonalSection/PersonalSection1/PersonalSection1";
import PersonalSection2 from "../../PersonalSection/PersonalSection2/PersonalSection2";
import TapPages from "../TabPages/TapPages";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Gellary></Gellary>
           <TapPages></TapPages>
           <PersonalSection1></PersonalSection1>
           <PersonalSection2></PersonalSection2>

        </div>
    );
};

export default Home;