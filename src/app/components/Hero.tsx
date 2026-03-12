"use client";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import Image from "next/image";
import border from "../../../public/border.svg";
export default function Hero() {
  const { t, locale } = useLanguage();
  const isRu = locale === "ru";

  return (
    <section className="w-full sm:min-h-[600px] md:h-screen lg:h-screen bg-gradient-to-r from-[#F9FAFB] to-[#F5F4F7]">
      <div className="mx-auto relative h-full px-[10px] md:pl-[60px] md:pt-[14px] lg:pl-[215px] lg:pt-[50px] flex flex-col">
        <div className="relative  sm:text-wrap  z-10  md:max-w-[1320px] lg:max-w-[620px] max-w-[330px] mx-auto">
          <h1 className="text-[24px] md:text-[20px] leading-[30px] md:leading:[18px] lg:leading-[46px] lg:text-[32px] mt-[110px] md:mt-[20px] lg:mt-[70px] text-center md:text-left lg:text-left font-semibold text-[#030712]">
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

          <p className="mt-[12px] lg:mt-6 max-w-[450px] text-[16px] md:text-[14px] lg:text-[16px] text-center md:text-left lg:text-left text-[#1E2939]">
            {t("Hero", "description")}
          </p>  

          <div className="mt-[20px] md:mt-[50px] flex md:flex-row flex-col gap-[10px] sm:flex-col ">
            <Link
              href="#"
              className="bg-[#1463E1] text-center text-white px-[28px] py-[13px] rounded-[32px] font-medium leading-[20px]"
            >
              {t("Hero", "button1")}
            </Link>

            <Link
              href="#"
              className="bg-white text-[#030712] text-center px-[28px] py-[13px] rounded-[32px] font-medium leadingg-[20px]"
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
            className="w-full md:absolute max-w-[1050px] object-contain"
          />
          <div className="absolute bottom-0 right-0 ">
            <Image src={border} alt="border" />
          </div>
        </div>
      </div>
        
    </section>
  );
}