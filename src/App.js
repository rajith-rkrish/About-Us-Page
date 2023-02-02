import Banner from "../src/Component/bannerBlock/bannerBlock";
import bannerData from "../src/Component/bannerBlock/bannerData";
import Counter from "../src/Component/MainSection/Counter/counterSection";
import MapsAndForm from "../src/Component/MainSection/maps/Section3MapsAndForm";
import Footer from "../src/Component/Footer/FooterMain.jsx";
import Cards from "../src/Component/MainSection/Cards/caseCard";
import ImageCard from "../src/Component/imageCard/imageCard";
import Wrk from "../src/Component/Wrkwith/Wrk";
import JK from "../src/Component/JKlucent/JKlucent";
import ContactSection from "../src/Component/ContactSection/contactSection";
function App() {
  return (
    <>
      <Banner data={bannerData} />
      <JK />
      <Counter />
      <Cards />
      <ImageCard />
      <Wrk />
      <MapsAndForm />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
