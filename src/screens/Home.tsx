import TopNav from '../components/TopNav';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection'
import TabsCategory from '../components/TabsCategory';
import SellerSlider from '../components/GoodSellerSlider';
import JoinCard from '../components/Join';
import Footer from '../components/Footer';
import BrandStory from '../components/BrandStory';
import Acheivement from '../components/Acheivement';
import BetterSection from '../components/BetterSection';
export default function Home() {
  return (
      <div>
            <TopNav/>
          <Navbar />
          <HeroSection />
      <TabsCategory title='Our Premium Collection' />
          <BrandStory />
          <Acheivement/>
      <SellerSlider />
      
      <BetterSection/>
      <JoinCard />
      <Footer/>
    </div>
  )
}
