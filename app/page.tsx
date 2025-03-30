import Navbar from "@/components/Navbar";
import HomeworkHelpLanding from "@/components/Hero";
import TrustBadges from "@/components/TrustPage";
export default function Home() {
  return (
    <div className="bg-[#F5F3EF]">
      <Navbar /> 
      <HomeworkHelpLanding />
      <TrustBadges />
    </div>
  );
}
