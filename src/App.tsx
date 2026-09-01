import { LoadingScreen } from "./components/LoadingScreen";
import { ScrollProgress } from "./components/ScrollProgress";
import { CursorGlow } from "./components/animations/CursorGlow";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Hero } from "./sections/Hero";
import { MenuCarousel } from "./sections/MenuCarousel";
import { StorySection } from "./sections/StorySection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { GallerySection } from "./sections/GallerySection";
import { ReviewsSection } from "./sections/ReviewsSection";
import { VisitSection } from "./sections/VisitSection";

function App() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <MenuCarousel />
        <StorySection />
        <ExperienceSection />
        <GallerySection />
        <ReviewsSection />
        <VisitSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
