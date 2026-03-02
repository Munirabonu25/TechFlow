"use client";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function CTA() {
    const { t } = useLanguage();

    const features = [
        {
            icon: (
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            ),
            titleKey: "opportunities",
            descKey: "opportunities_desc",
            offset: "translate-x-0"
        },
        {
            icon: (
                <div className="bg-red-500 rounded-full w-6 h-6 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                    </svg>
                </div>
            ),
            titleKey: "security",
            descKey: "security_desc",
            offset: "lg:-translate-x-8"
        },
        {
            icon: (
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            ),
            titleKey: "scalability",
            descKey: "scalability_desc",
            offset: "translate-x-0"
        }
    ];

    return (
        <section id="contact" className="py-10 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-[#F9FAFB] mb-4 rounded-[2rem] p-6 lg:p-16 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">


                    <div>
                        <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-gray-900 leading-[1.3] lg:leading-[1.2]">
                            {t("CTA", "title")}
                        </h2>
                        <p className="mt-6 text-gray-600 text-[15px] sm:text-base leading-relaxed max-w-md">
                            {t("CTA", "description")}
                        </p>

                        <div className="mt-10 flex flex-wrap lg:flex-nowrap md:flex-nowrap gap-4 items-center">
                            <Link
                                href="#"
                                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-[15px] text-nowrap font-semibold text-white bg-[#1C68E1] hover:bg-blue-700 transition-colors"
                            >
                                {t("CTA", "button1")}
                            </Link>
                            <Link
                                href="#"
                                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-[15px] text-nowrap font-semibold text-gray-900 bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
                            >
                                {t("CTA", "button2")}
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 lg:ml-auto w-full max-w-[420px]">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`bg-white rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex items-start gap-4 transform transition-all duration-300 ${feature.offset}`}
                            >
                                <div className="mt-1 shrink-0">
                                    {feature.icon}
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-[17px] font-bold text-gray-900">
                                        {t("CTA", feature.titleKey)}
                                    </h3>
                                    <p className="mt-1.5 text-[13px] text-gray-500 leading-relaxed font-medium">
                                        {t("CTA", feature.descKey)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </section>
    );
}
