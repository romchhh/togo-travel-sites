import Link from "next/link";
import TourOffers from "@/components/TourOffers";

export default function HomeTourOffersSection() {
  return (
    <section id="services" className="home-tour-offers">
      <div className="home-tour-offers__inner">
        <div className="home-tour-offers__head">
          <div>
            <h2 className="home-tour-offers__title">Послуги та тури</h2>
            <p className="home-tour-offers__lead">
              Актуальні пропозиції на популярні напрямки. Ціни орієнтовні —
              уточнюйте наявність у менеджера.
            </p>
          </div>
          <Link href="/services" className="home-tour-offers__all">
            Усі тури →
          </Link>
        </div>
        <TourOffers />
      </div>
    </section>
  );
}
