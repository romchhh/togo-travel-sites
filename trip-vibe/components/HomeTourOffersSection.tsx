import Link from "next/link";
import TourOffers from "@/components/TourOffers";

export default function HomeTourOffersSection() {
  return (
    <section id="services" className="scroll-mt-24 bg-surface py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="mb-3 inline-flex rounded-full bg-terracotta/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-terracotta">
              оберіть відпочинок мрії
            </span>
            <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
              Послуги та тури
            </h2>
            <p className="mt-3 text-sm text-muted md:text-base">
              Готові пакети з ціною в гривні. Натисніть «Забронювати» — і ми
              підберемо дати вильоту.
            </p>
          </div>
          <Link
            href="/services"
            className="shrink-0 text-sm font-semibold text-terracotta hover:underline"
          >
            Усі тури →
          </Link>
        </div>
        <TourOffers />
      </div>
    </section>
  );
}
