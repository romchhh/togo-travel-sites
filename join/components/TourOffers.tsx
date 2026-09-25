import Image from "next/image";
import Link from "next/link";
import { tourDestinations } from "@togotravel/shared/data/tourOffers";

export default function TourOffers() {
  return (
    <div className="tour-offers">
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
                      <span>Вартість:</span> {offer.price}
                    </li>
                  </ul>
                  <Link href="/#form" className="tour-offer-card__cta">
                    Забронювати
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
      <p className="tour-offers__note">
        Ціни орієнтовні. Актуальну вартість і наявність місць уточнюйте у
        менеджера перед бронюванням.
      </p>
    </div>
  );
}
