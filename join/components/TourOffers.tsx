import Image from "next/image";
import Link from "next/link";
import {
  PRICE_INCLUDES_ITEMS,
  PRICE_INCLUDES_NOTE,
} from "@togotravel/shared/data/priceIncludes";
import { tourDestinations } from "@togotravel/shared/data/tourOffers";

type TourOffersProps = {
  showIncludesBanner?: boolean;
};

export default function TourOffers({
  showIncludesBanner = true,
}: TourOffersProps) {
  return (
    <div className="tour-offers">
      {showIncludesBanner && (
        <p className="tour-offers__note tour-offers__note--top">
          {PRICE_INCLUDES_NOTE}
        </p>
      )}
      {tourDestinations.map((destination) => (
        <section key={destination.country} className="tour-destination">
          <h2 className="tour-destination__title">{destination.country}</h2>
          <div className="tour-offers__grid">
            {destination.offers.map((offer) => (
              <article key={offer.id} className="tour-offer-card">
                <div className="tour-offer-card__media">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    width={640}
                    height={400}
                    className="tour-offer-card__img"
                  />
                </div>
                <div className="tour-offer-card__body">
                  <h3 className="tour-offer-card__name">{offer.title}</h3>
                  <p className="tour-offer-card__text">{offer.description}</p>
                  <ul className="tour-offer-card__meta">
                    <li>
                      <span>Тривалість:</span> {offer.duration}
                    </li>
                    {offer.meal && (
                      <li>
                        <span>Харчування:</span> {offer.meal}
                      </li>
                    )}
                    <li className="tour-offer-card__price">
                      <span>Вартість:</span>{" "}
                      <strong className="tour-offer-card__price-value">
                        {offer.price}
                      </strong>
                    </li>
                  </ul>
                  <div className="tour-offer-card__includes">
                    <p className="tour-offer-card__includes-title">
                      Що входить у вартість
                    </p>
                    <ul className="tour-offer-card__includes-list">
                      {PRICE_INCLUDES_ITEMS.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <Link href="/#form" className="tour-offer-card__cta">
                    Забронювати
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
