import Hero from "@/components/Hero";
import ProblemStatement from "@/components/ProblemStatement";
import FindingsCards from "@/components/FindingsCards";
import AgeDistribution from "@/components/AgeDistribution";
import DataVisualization from "@/components/DataVisualization";
import GeographicHotspots from "@/components/GeographicHotspots";
import AdditionalInsights from "@/components/AdditionalInsights";
import SolutionsTimeline from "@/components/SolutionsTimeline";
import ImpactMetrics from "@/components/ImpactMetrics";
import FraudAnalysis from "@/components/FraudAnalysis";
import Team from "@/components/Team";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemStatement />
      <FindingsCards />
      <AgeDistribution />
      <DataVisualization />
      <GeographicHotspots />
      <AdditionalInsights />
      <SolutionsTimeline />
      <ImpactMetrics />
      <FraudAnalysis />
      <Team />
      <CallToAction />
    </main>
  );
}
