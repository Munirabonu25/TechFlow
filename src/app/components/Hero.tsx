"use client";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="container min-h-screen md:h-screen bg-[#F9FAFB]">
      <div className="relative max-w-7xl mx-auto h-full px-6 flex flex-col">

        <div className="relative sm:text-center md:text-left lg:text-left z-10 pt-16 md:pt-24 flex-100 max-w-[620px]">
          <h1 className="text-[36px] leading-[46px] font-semibold text-[#0F172A]">
            {t("Hero", "title")}
          </h1>

          <p className="mt-6 text-[16px] text-[#475569]">
            {t("Hero", "description")}
          </p>

          <div className="mt-10 flex md:flex-row flex-col gap-5 sm:flex-col ">
            <Link
              href="#"
              className="bg-[#1463E1] text-center hover:bg-[#1D4ED8] text-white px-8 py-4 rounded-full font-medium shadow-lg transition"
            >
              {t("Hero", "button1")}
            </Link>

            <Link
              href="#"
              className="bg-white text-center border border-gray-200 px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition"
            >
              {t("Hero", "button2")}
            </Link>
          </div>
        </div>

        <div className="flex-1 flex items-end justify-end relative">
          <video
            src="/videocar.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-[1080px] object-cover absolute object-contain"
          />
        </div>

      </div>
    </section>
  );
}