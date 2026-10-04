import type { Metadata } from "next";
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

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <MainBanner />
      <WhyJoinUp />
      <HomeTourOffersSection />
      <SliderContainer title="Гарячий тур" />
      <SliderContainer title="Раннє бронювання" />
      <CommentsContainer />
      <CallSection />
      <WhereToFind />
      <OnlyWithUsContainer />
      <RightSideButtons />
      <TelegramPopup />
    </div>
  );
}
