import TopNav from '../components/TopNav';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection'
import TabsCategory from '../components/TabsCategory';
import SellerSlider from '../components/GoodSellerSlider';
import JoinCard from '../components/Join';
import Footer from '../components/Footer';

export default function Gallery() {
  return (
      <div>
          <TopNav/>
          <Navbar />
          <HeroSection />
          <TabsCategory title='Our Gallery'/>
      <SellerSlider />
      <JoinCard />
      <Footer/>
    </div>
  )
}
