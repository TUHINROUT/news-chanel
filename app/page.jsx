import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import BreakingNews from "@/components/BreakingNews";
import Hero from "@/components/Hero";
import SideStories from "@/components/SideStories";
import NewsSection from "@/components/NewsSection";
import BannerAd from "@/components/BannerAd";
import AdBox from "@/components/AdBox";
import MostRead from "@/components/MostRead";
import LiveVideo from "@/components/LiveVideo";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { sections } from "@/data/home";

export default function HomePage() {
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />
      <BreakingNews />
      <main className="container layout">
        <div className="main-col">
          <div className="top-grid">
            <Hero />
            <SideStories />
          </div>
          {sections.map((s) => (<NewsSection key={s.key} section={s} />))}
          <BannerAd />
        </div>
        <aside className="aside">
          <AdBox />
          <MostRead />
          <LiveVideo />
          <Newsletter />
        </aside>
      </main>
      <Footer />
    </>
  );
}
