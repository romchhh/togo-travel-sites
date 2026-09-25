import PublicImage from "@/components/PublicImage";

export default function WhyJoinUp() {
  const textItems = [
    {
      id: 1,
      text: "Тур від найбільшого туроператора",
      img: "/whyJoinUs/img1.jpeg",
    },
    {
      id: 2,
      text: "Індивідуальний підбір",
      img: "/whyJoinUs/img2.jpg",
    },
    {
      id: 3,
      text: "Вигідні умови покупки",
      img: "/whyJoinUs/img3.jpg",
    },
  ];

  return (
    <section id="pronas" className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-4 inline-flex rounded-full bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand">
            Про нас
          </span>
          <h2 className="font-display text-3xl font-bold text-ink md:text-5xl">
            Чому Join UP!
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3 md:gap-7">
          {textItems.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-[1.5rem] bg-white shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <PublicImage
                  src={item.img}
                  alt={item.text}
                  fill
                  className="transition duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
                <p className="absolute inset-x-0 bottom-0 p-5 font-display text-lg font-semibold text-white md:text-xl">
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
