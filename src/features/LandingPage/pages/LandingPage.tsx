import CampaignsSection from "@components/CampaignsSection";
import CTASection from "@components/CTASection";
import Header from "@components/Header";
import HeroBannerComponent from "@components/Hero-banner";
import IssuesSection from "@components/IssuesSection";
import NewsSection from "@components/NewsSection";
import StatsSection from "@components/StatsSection";
import TestimonialsSection from "@components/TestimonialsSection";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-16">
        <HeroBannerComponent />

        <IssuesSection />
        <StatsSection />
        <CampaignsSection />
        <TestimonialsSection />
        <NewsSection />
        <CTASection />
      </main>

      {/* <Footer /> */}
    </div>
  );
};
export default LandingPage;
