import Image from "next/image";
import Link from "next/link";
import { tourDestinations } from "@togotravel/shared/data/tourOffers";

type TourOffersProps = {
  priceClassName?: string;
  ctaHref?: string;
};

export default function TourOffers({
  priceClassName = "text-brand",
  ctaHref = "/#form",
}: TourOffersProps) {
  return (
    <div className="space-y-10 pt-4">
      {tourDestinations.map((destination) => (
        <section key={destination.country}>
          <h2 className="font-display text-xl font-bold text-ink md:text-2xl">
            {destination.country}
          </h2>
          <div className="mt-4 grid gap-5 sm:grid-cols-2">
            {destination.offers.map((offer) => (
              <article
                key={offer.id}
                className="ui-card overflow-hidden border border-line bg-white"
              >
                <div className="relative aspect-[16/10] w-full bg-surface">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base font-bold leading-snug text-ink md:text-lg">
                    {offer.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {offer.description}
                  </p>
                  <dl className="mt-4 space-y-1 text-sm">
                    <div className="flex flex-wrap justify-between gap-2">
                      <dt className="text-muted">Тривалість</dt>
                      <dd className="font-medium text-ink">{offer.duration}</dd>
                    </div>
                    {offer.meal && (
                      <div className="flex flex-wrap justify-between gap-2">
                        <dt className="text-muted">Харчування</dt>
                        <dd className="font-medium text-ink">{offer.meal}</dd>
                      </div>
                    )}
                    <div className="flex flex-wrap items-baseline justify-between gap-2 border-t border-line pt-3">
                      <dt className="text-muted">Вартість</dt>
                      <dd className={`text-lg font-bold ${priceClassName}`}>
                        {offer.price}
                      </dd>
                    </div>
                  </dl>
                  <Link
                    href={ctaHref}
                    className="ui-btn ui-cta mt-4 inline-flex w-full items-center justify-center bg-brand px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark sm:w-auto"
                  >
                    Забронювати
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
      <p className="text-xs leading-relaxed text-muted">
        Ціни вказані орієнтовно на момент публікації. Актуальну вартість,
        наявність місць і умови харчування уточнюйте у менеджера перед
        бронюванням.
      </p>
    </div>
  );
}
