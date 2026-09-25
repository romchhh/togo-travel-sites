export default function CallSection() {
  return (
    <section className="bg-brand py-16 text-white md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center">
        <h2 className="font-display text-3xl font-bold md:text-4xl">
          Зручніше писати, ніж дзвонити?
        </h2>
        <p className="max-w-md text-base text-white/90 md:text-lg">
          Ми завжди на звʼязку у месенджері.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            className="ui-btn border border-white/30 bg-white px-7 py-3 text-sm font-semibold text-ink hover:bg-ink hover:text-white"
            href="https://t.me/Trip_Vibe_Tour"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
          </a>
          <a
            className="ui-btn border border-white/40 px-7 py-3 text-sm font-semibold text-white hover:bg-white hover:text-ink"
            href="https://wa.me/380997962663"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
