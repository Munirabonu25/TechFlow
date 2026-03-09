"use client";
import { useLanguage } from "../context/LanguageContext";
import Image from "next/image";
import problemsection from "../../../public/problemsection.png";
export default function Problems() {
    const { t } = useLanguage();

    return (
        <section id="problems" className="pt-10 md:pt-12 lg:pt-14 bg-white overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-[32px] sm:text-[40px] font-semibold text-[#030712] tracking-tight">
                        {t("Problems", "title")}
                    </h2>
                    <p className="mt-4 text-[#64748B] font-medium">
                        {t("Problems", "description")}
                    </p>
                </div>

                <div className="hidden md:flex w-full mx-auto items-center justify-center mb-10">
                    <Image width={1440} height={300} className="w-full h-auto object-contain" src={problemsection} alt="Illustration showing common business problems: repair order delays, inventory loss, and human errors" />
                </div>

                <div className="grid md:grid-cols-3 gap-6 lg:text-center md:text-left sm:text-left">
                    <div className="space-y-[8px] mx-auto w-full max-w-[320px]">
                        <Image width={150} height={100} className="block md:hidden mx-auto" src="/problem1.svg" alt="Lost repair orders icon" />
                        <h3 className="text-lg text-left font-semibold text-[#030712]">{t("Problems", "problem1")}</h3>
                        <p className="text-sm text-left text-[#64748B] leading-relaxed">
                            {t("Problems", "problem1_desc")}
                        </p>
                    </div>
                    <div className="space-y-[8px] mx-auto w-full max-w-[320px]">
                        <Image width={150} height={100} className="block md:hidden mx-auto" src="/problem2.svg" alt="Lack of inventory control icon" />
                        <h3 className="text-lg text-left font-semibold text-[#030712]">{t("Problems", "problem2")}</h3>
                        <p className="text-sm text-left text-[#64748B] leading-relaxed">
                            {t("Problems", "problem2_desc")}
                        </p>
                    </div>
                    <div className="space-y-[8px] mx-auto w-full max-w-[320px]">
                        <Image width={150} height={100} className="block md:hidden mx-auto" src="/problem3.svg" alt="Human error and slowdowns icon" />
                        <h3 className="text-lg text-left font-semibold text-[#030712]">{t("Problems", "problem3")}</h3>
                        <p className="text-sm text-left text-[#64748B] leading-relaxed">
                            {t("Problems", "problem3_desc")}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
