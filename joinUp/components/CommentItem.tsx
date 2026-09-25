"use client";

import Image, { StaticImageData } from "next/image";

export default function CommentItem({
  name,
  image,
  comment,
}: {
  name: string;
  image: StaticImageData;
  comment: string;
}) {
  return (
    <div className="mx-auto flex min-h-[250px] w-full max-w-sm items-center rounded-[1.75rem] bg-gradient-to-br from-brand to-brand-dark p-5 text-white shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)] sm:min-h-[300px] sm:max-w-4xl sm:p-8">
      <div className="flex w-full items-start gap-4 sm:gap-6">
        <Image
          src={image}
          alt={`${name} відгук`}
          width={60}
          height={60}
          className="h-[60px] w-[60px] flex-shrink-0 rounded-2xl object-cover ring-2 ring-white/30 sm:h-[120px] sm:w-[120px] sm:rounded-[1.25rem]"
        />
        <div className="min-w-0 flex-1">
          <h3 className="mb-2 font-display text-base font-semibold sm:mb-4 sm:text-2xl">
            {name}
          </h3>
          <p className="line-clamp-6 overflow-hidden text-sm leading-relaxed text-white/90 sm:line-clamp-none sm:text-lg">
            {comment}
          </p>
        </div>
      </div>
    </div>
  );
}
