import CampaignsSection from "@components/CampaignsSection";
import CTASection from "@components/CTASection";
import Footer from "@components/Footer";
import GomyCodeSection from "@components/GomyCodeSection";
import HeroBannerComponent from "@components/Hero-banner";
import IssuesSection from "@components/IssuesSection";
import NewsSection from "@components/NewsSection";
import StatsSection from "@components/StatsSection";
import TestimonialsSection from "@components/TestimonialsSection";

const LandingPage = () => {
  return (
    <>
      <section>
        <HeroBannerComponent />
        <GomyCodeSection />
        <IssuesSection />
        <StatsSection />
        <CampaignsSection />
        <TestimonialsSection />
        <NewsSection />
        <CTASection />
      </section>

      <Footer />
    </>
  );
};
export default LandingPage;
