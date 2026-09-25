"use client";

import ContactDrawer from "@/components/ContactDrawer";
import { useState } from "react";

export default function AboutPage() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  

  return (
    <div>
      {/* <section className="relative bg-red-500 text-white h-[80vh] flex items-end ">
        <div className="container mx-auto px-4 max-w-6xl pb-12">
          <div className="max-w-xl ">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 ">
              Ми створюємо незабутні спогади
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Ми не просто організовуємо поїздки — ми створюємо унікальні й
              незабутні враження, які назавжди залишаються в серці кожного
              мандрівника
            </p>

            <div
              className="inline-block"
              data-b24-form="click/114/he03qc"
              data-skip-moving="true"
            >
              <a
                onClick={() => setDrawerOpen(true)}
                className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-red-500 transition cursor-pointer"
              >
                Забронювати тур
              </a>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-red-500 uppercase tracking-wide text-sm font-semibold mb-2">
              Чому обирають нас?
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ми найкращі в туризмі
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              TripVibe — команда відданих професіоналів, які працюють у сфері
              туризму понад 10 років. Ми об’єдналися, щоб створити
              новий, 100% британський бренд, який не лише розуміє потреби
              британців, а й створює подорожі, що стають
              незабутніми спогадами.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-terracotta rounded-2xl shadow-lg p-20 ">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-bold text-white">
                Ми завжди раді допомогти вам!
              </h2>
              <p className="mt-3 text-white">
                Професіонали проконсультують вас за лічені хвилини!
              </p>
            </div>

            {/* Button */}
            <div>
              <a
                onClick={() => setDrawerOpen(true)}
                href="#form"
                className="inline-block px-6 py-3 bg-mudblue text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                Обрати тур
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="relative bg-red-500 text-white h-[80vh] flex items-end">
        <div className="container mx-auto px-4 max-w-6xl pb-12">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 ">
              Залишилися запитання?
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Потрібна допомога? Зверніться до нашої служби підтримки — і ми відповімо на ваш
              запит якомога швидше!
            </p>

            <div
              className="inline-block"
              data-b24-form="click/114/he03qc"
              data-skip-moving="true"
            >
              <a className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-red-500 transition cursor-pointer">
                Написати
              </a>
            </div>
          </div>
        </div>
      </section> */}
      <ContactDrawer open={isDrawerOpen} onClose={() => setDrawerOpen(false)} />
    </div>
  );
}
