"use client";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import Image from "next/image";
import border from "../../../public/border.svg";
export default function Hero() {
  const { t, locale } = useLanguage();
  const isRu = locale === "ru";

  return (
    <section className="container h-screen bg-[#F9FAFB]">
      <div className="relative max-w-7xl mx-auto h-full px-6 flex flex-col">
        <div className="relative  sm:text-wrap  z-10 pt-24 max-w-[620px]">
          <h1 className="text-[24px] md:text-[38px] leading-[28px] md:leading-[36px] lg:leading-[46px] text-center md:text-left lg:text-left font-semibold text-[#0F172A]">
            {isRu ? (
              <>
                <span className="text-[#1463E1]">{t("Hero", "title_highlight")}</span>
                {t("Hero", "title_start")}
              </>
            ) : (
              <>
                {t("Hero", "title_start")}
                <span className="text-[#1463E1]">{t("Hero", "title_highlight")}</span>
              </>
            )}
          </h1>

          <p className="mt-6 text-[16px] md:text-[14px] lg:text-[16px] text-center md:text-left lg:text-left text-[#475569]">
            {t("Hero", "description")}
          </p>

          <div className="mt-10 flex md:flex-row flex-col gap-5 sm:flex-col ">
            <Link
              href="#"
              className="bg-[#1463E1] text-center hover:bg-[#1D4ED8] text-white px-6 py-3 rounded-full font-medium shadow-lg transition"
            >
              {t("Hero", "button1")}
            </Link>

            <Link
              href="#"
              className="bg-white text-center px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition"
            >
              {t("Hero", "button2")}
            </Link>
          </div>

        </div>
        <div className="flex-1 flex items-end pt-6 md:pt-4 lg:pt-0 justify-end relative">
          <video
            src="/videocar.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full lg:absolute max-w-[1080px] object-contain  "
          />
          <div className="absolute bottom-0 right-0 ">
            <Image src={border} alt="border" />
          </div>
        </div>
      </div>
    </section>
  );
}