import ProfileSection from "@/components/about/about";
import { AboutSection } from "@/components/homePage/AboutSection";

export default function AboutPage() {
  return (
    <div className="max-w-[1000px] w-full px-4 md:px-8 mx-auto pt-2">
      <ProfileSection />
      <AboutSection />
    </div>
  );
}
