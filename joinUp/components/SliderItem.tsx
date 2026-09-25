import PublicImage from "@/components/PublicImage";

export default function SliderItem({
  destination,
  image,
  isActive,
  onClick,
}: {
  destination: string;
  image: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={`relative flex-shrink-0 cursor-pointer transition-all duration-500 ${
        isActive ? "md:w-80 w-full" : "md:w-64 w-full"
      }`}
      onClick={onClick}
    >
      <div className="overflow-hidden rounded-[1.35rem] bg-white shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
        <div className="relative h-40 overflow-hidden md:h-60">
          <PublicImage
            src={image}
            alt={destination}
            fill
            className="transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="bg-ink px-4 py-4 text-center text-white md:px-6 md:py-5">
          <h3 className="mb-3 font-display text-lg font-bold md:mb-4 md:text-xl">
            {destination}
          </h3>
          <button className="ui-btn w-full bg-brand px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark md:py-3 md:text-base">
            Підібрати тур
          </button>
        </div>
      </div>
    </div>
  );
}
