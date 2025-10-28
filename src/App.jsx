import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Offerings from "./components/Offerings";
import IITCertifications from "./components/IITCertifications";
import InternshipCertifications from './components/InternshipCertifications';
import NewLaunches from './components/NewLaunches';
import ExperienceSection from "./components/ExperienceSection";
// import StatsSection from "./components/StatsSection";
import StatsTimeline from "./components/StatsTimeline";
import WhyUs from "./components/WhyUs";
import CodingNinjasAdvantage from "./components/CodingNinjasAdvantage";
import PlacedStudents from "./components/PlacedStudents";
import Testimonials from "./components/Testimonials";
import TrustedByLearners from "./components/TrustedByLearners";
import LearningModel from "./components/LearningModel";
import DoubtResolutionSection from "./components/DoubtResolutionSection";
import MentorshipSection from "./components/MentorshipSection";
import LearnByDoingSection from "./components/LearnByDoingSection";
import DestinationSection from "./components/DestinationSection";
import LeadershipAndHackathonSection from "./components/LeadershipAndHackathonSection";
import EventsAndFacultySection from "./components/EventsAndFacultySection";
import CodingNinjasSpotlight from "./components/CodingNinjasSpotlight";
import NsdcPartnerSection from "./components/NsdcPartnerSection";
import CodingNinjasFooter from "./components/CodingNinjasFooter";
import Footer from "./components/footer";

function App() {
  return (
    <>
    <Navbar />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
      
      </Routes>

      <Offerings />
      <IITCertifications />
      <InternshipCertifications />
      <NewLaunches />
      <ExperienceSection />
   
      <StatsTimeline/>
      <WhyUs/>
       <CodingNinjasAdvantage />
       <PlacedStudents />
      <Testimonials />
      <TrustedByLearners />
      <LearningModel />
      <DoubtResolutionSection />
      <MentorshipSection />
      <LearnByDoingSection />
      <DestinationSection />
<LeadershipAndHackathonSection />
      <EventsAndFacultySection />
      <CodingNinjasSpotlight />
      <NsdcPartnerSection/>
      <CodingNinjasFooter />
      <Footer />
      </>
  );
}

export default App;
