import Navbar from "@/components/Navbar";
import HomeworkHelpLanding from "@/components/Hero";
import TrustBadges from "@/components/TrustPage";
import HowItWorksFlow from "@/components/Accodation";
import ReachOut from "@/components/ReachOut";
import Studybay from "@/components/Studybay";
export default function Home() {
  return (
    <div className="bg-[#F5F3EF]">
      <Navbar /> 
      
      <HomeworkHelpLanding />
      <TrustBadges />
      <HowItWorksFlow />
      <ReachOut />
      
      <Studybay />
    </div>
  );
}
