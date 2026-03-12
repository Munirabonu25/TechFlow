"use client";
import { useLanguage } from "../context/LanguageContext";
import Image from "next/image";
import problemsection from "../../../public/problemspng.png";
export default function Problems() {
    const { t } = useLanguage();

    return (
        <section id="problems" className="pt-16 md:pt-12 lg:pt-[64px] bg-white overflow-hidden">
            <div className="max-w-[380px] px-[20px] md:px-0 md:max-w-[648px] lg:max-w-[1090px] mx-auto">
                <div className="text-center mb-8 md:mb-8 lg:mb-12">
                    <h2 className="text-[32px] font-semibold text-[#030712]">
                        {t("Problems", "title")}
                    </h2>
                    <p className="lg:mt-[14px] w-[300px] mx-auto tracking-[0.02em] lg:text-wrap leading-[22px] md:mt-[12px] mt-[8px] text-[#1E2939] font-regular">
                        {t("Problems", "description")}
                    </p>
                </div>

                <div className="hidden md:flex w-full mx-auto items-center justify-center mb-8">
                    <Image width={1440} height={300} className="w-full h-auto object-contain" src={problemsection} alt="Illustration showing common business problems: repair order delays, inventory loss, and human errors" />
                </div>

                <div className="grid md:grid-cols-3 gap-6 lg:text-center md:text-left sm:text-left">
                    <div className="space-y-[8px] mx-auto w-full max-w-[320px]">
                        <Image width={160} height={110} className="block md:hidden mx-auto" src="/problem1.svg" alt="Lost repair orders icon" />
                        <h3 className="text-[20px] text-left font-semibold text-[#030712]">{t("Problems", "problem1")}</h3>
                        <p className="text-[16px] text-left text-[#364153] leading-[22px]">
                            {t("Problems", "problem1_desc")}
                        </p>
                    </div>
                    <div className="space-y-[8px] mx-auto w-full max-w-[320px]">
                        <Image width={160} height={110} className="block md:hidden mx-auto" src="/problem2.svg" alt="Lack of inventory control icon" />
                        <h3 className="text-[20px] text-left font-semibold text-[#030712]">{t("Problems", "problem2")}</h3>
                        <p className="text-[16px] text-left text-[#364153] leading-[22px]">
                            {t("Problems", "problem2_desc")}
                        </p>
                    </div>
                    <div className="space-y-[8px] mx-auto w-full max-w-[320px]">
                        <Image width={160} height={110} className="block md:hidden mx-auto" src="/problem3.svg" alt="Human error and slowdowns icon" />
                        <h3 className="text-[20px] text-left font-semibold text-[#030712]">{t("Problems", "problem3")}</h3>
                        <p className="text-[16px] text-left text-[#364153] leading-[22px]">
                            {t("Problems", "problem3_desc")}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
