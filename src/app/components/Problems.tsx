"use client";
import { useLanguage } from "../context/LanguageContext";

export default function Problems() {
    const { t } = useLanguage();

    return (
        <section id="problems" className="pt-28 md:pt-40 lg:pt-16 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                        {t("Problems", "title")}
                    </h2>
                    <p className="mt-4 text-gray-500 font-medium">
                        {t("Problems", "description")}
                    </p>
                </div>

                <div className="hidden md:block w-full max-w-5xl mx-auto h-[250px] sm:h-[300px] flex items-center justify-center mb-16">
                    <img className="w-full h-full object-contain" src="/problemspart.svg" alt="" />
                </div>

                <div className="grid md:grid-cols-3 gap-10 lg:text-center md:text-left sm:text-left">
                    <div className="space-y-3">
                        <img className="block md:hidden mx-auto" src="/problem1.svg" alt="" />
                        <h3 className="text-lg text-left font-semibold text-gray-900">{t("Problems", "problem1")}</h3>
                        <p className="text-sm text-left text-left text-[#364153] leading-relaxed max-w-xs ">
                            {t("Problems", "problem1_desc")}
                        </p>
                    </div>
                    <div className="space-y-3">
                        <img className="block md:hidden mx-auto" src="/problem2.svg" alt="" />
                        <h3 className="text-lg text-left font-semibold text-gray-900">{t("Problems", "problem2")}</h3>
                        <p className="text-sm text-left text-[#364153] leading-relaxed max-w-xs sm:mx-0">
                            {t("Problems", "problem2_desc")}
                        </p>
                    </div>
                    <div className="space-y-3">
                        <img className="block md:hidden mx-auto" src="/problem3.svg" alt="" />
                        <h3 className="text-lg text-left font-semibold text-gray-900">{t("Problems", "problem3")}</h3>
                        <p className="text-sm text-left text-[#364153] leading-relaxed max-w-xs sm:mx-0">
                            {t("Problems", "problem3_desc")}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
