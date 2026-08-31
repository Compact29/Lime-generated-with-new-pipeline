import AppDownloadBanner from "../../components/app_download_banner/AppDownloadBanner.jsx";
import SiteFooter from "../../components/site_footer/SiteFooter.jsx";
import SiteHeader from "../../components/site_header/SiteHeader.jsx";
import AppStepsSection from "./components/app_steps_section/AppStepsSection.jsx";
import CitiesSection from "./components/cities_section/CitiesSection.jsx";
import HomeHero from "./components/home_hero/HomeHero.jsx";
import LatestNewsSection from "./components/latest_news_section/LatestNewsSection.jsx";
import PrinciplesSection from "./components/principles_section/PrinciplesSection.jsx";
import VehiclesSection from "./components/vehicles_section/VehiclesSection.jsx";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="refactored-page refactored-page--home">
      <SiteHeader variant="default" />
      <HomeHero variant="default" />
      <VehiclesSection variant="default" />
      <AppStepsSection variant="default" />
      <CitiesSection variant="default" />
      <PrinciplesSection variant="default" />
      <LatestNewsSection variant="default" />
      <AppDownloadBanner variant="default" />
      <SiteFooter variant="default" />
    </div>
  );
}
