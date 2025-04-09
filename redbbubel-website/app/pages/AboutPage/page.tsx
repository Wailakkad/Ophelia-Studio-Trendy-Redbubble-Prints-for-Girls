import { Hero } from "@/components/ui/animated-hero";
import { Feature108Demo } from "@/components/AboutPart";
import { QABackgroundPaths } from "@/components/ui/background-paths";

export default function AboutPage() {
  return (
    <div className="block">
      <Hero />
      <Feature108Demo/>
      <QABackgroundPaths/>
    </div>
  );
}