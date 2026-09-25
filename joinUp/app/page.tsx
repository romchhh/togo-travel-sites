import HomeTourOffersSection from "@/components/HomeTourOffersSection";
import MainBanner from "@/components/MainBanner";
import OnlyWithUsContainer from "@/components/OnlyWithUsContainer";
import SliderContainer from "@/components/SliderContainer";
import WhyJoinUp from "@/components/WhyJoinUp";
import WhereToFind from "@/components/WhereToFind";
import RightSideButtons from "@/components/RightSideButtons";
import TelegramPopup from "@/components/TelegramPopup";
import CommentsContainer from "@/components/CommentsContainer";
import CallSection from "@/components/CallSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <MainBanner />
      <WhyJoinUp />
      <HomeTourOffersSection />
      <SliderContainer title="Гарячий тур" />
      <OnlyWithUsContainer type="type1" />
      <SliderContainer title="Раннє бронювання" />
      <CommentsContainer />
      <CallSection />
      <WhereToFind />
      <OnlyWithUsContainer type="type2" />
      <RightSideButtons />
      <TelegramPopup />
    </div>
  );
}
