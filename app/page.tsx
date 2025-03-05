import { AboutSection } from "@/components/homePage/AboutSection";
import FavoriteProject from "@/components/homePage/FavoritesProject";
import { Hero } from "@/components/homePage/Hero";
import { SectionTwo } from "@/components/homePage/SectionTwo";

export default function Home() {
  return (
    <div className="max-w-7xl w-full px-4 md:px-8 mx-auto">
        <Hero />
        <SectionTwo />
        <AboutSection />
        <FavoriteProject />
    </div>
  );
}
