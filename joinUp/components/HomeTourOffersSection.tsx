import Link from "next/link";
import TourOffers from "@/components/TourOffers";

export default function HomeTourOffersSection() {
  return (
    <section id="services" className="scroll-mt-24 bg-surface py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
              Послуги та тури
            </h2>
            <p className="mt-3 text-sm text-muted md:text-base">
              Актуальні пропозиції на популярні напрямки. Ціни орієнтовні —
              уточнюйте наявність у менеджера.
            </p>
          </div>
          <Link
            href="/services"
            className="shrink-0 text-sm font-semibold text-brand hover:underline"
          >
            Усі тури →
          </Link>
        </div>
        <TourOffers />
      </div>
    </section>
  );
}
