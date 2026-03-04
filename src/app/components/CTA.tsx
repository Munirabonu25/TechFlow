"use client";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import Image from "next/image";
import samaradorlik from "../../../public/samaradorlik.svg";
import shieldCheck from "../../../public/Shield Check.svg";
import mastablanish from "../../../public/mastablanish.svg";
export default function CTA() {
    const { t } = useLanguage();

    const features = [
        {
            icon: (
                <Image src={samaradorlik} alt="Samaradorlik" width={28} height={28} />
            ),
            titleKey: "opportunities",
            descKey: "opportunities_desc",
            offset: "translate-x-0"
        },
        {
            icon: (
                <Image src={shieldCheck} alt="Shield Check" width={28} height={28} />
            ),
            titleKey: "security",
            descKey: "security_desc",
            offset: "lg:-translate-x-8"
        },
        {
            icon: (
                <Image src={mastablanish} alt="Mastablanish" width={24} height={24} />
            ),
            titleKey: "scalability",
            descKey: "scalability_desc",
            offset: "translate-x-0"
        }
    ];

    return (
        <section id="contact" className="py-10 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-9">
                <div className="bg-[#F9FAFB] mb-4 rounded-[2rem] p-6 lg:p-14 grid lg:grid-cols-2 gap-12 lg:gap-12 items-center">
                    <div>
                        <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold text-[#030712] leading-[1.3] lg:leading-[1.2]">
                            {t("CTA", "title")}
                        </h2>
                        <p className="mt-6 text-[#1E2939] text-[16px] sm:text-base leading-relaxed max-w-md">
                            {t("CTA", "description")}
                        </p>

                        <div className="mt-10 flex md:flex-row flex-col gap-5 sm:flex-col ">
                            <Link
                                href="#"
                                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-[15px] text-nowrap font-medium text-white bg-[#1C68E1] hover:bg-blue-700 transition-colors"
                            >
                                {t("CTA", "button1")}
                            </Link>
                            <Link
                                href="#"
                                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-[15px] text-nowrap font-medium text-gray-900 bg-white hover:bg-gray-50 transition-colors"
                            >
                                {t("CTA", "button2")}
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 md:ml-auto lg:ml-auto w-full max-w-[282px]">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`bg-white rounded-2xl p-5 flex items-center justify-center gap-4 ${feature.offset}`}
                            >
                                <div className="mt-1 shrink-0">
                                    {feature.icon}
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-[17px] font-semibold text-[#030712]">
                                        {t("CTA", feature.titleKey)}
                                    </h3>
                                    <p className="mt-1.5 text-[13px] text-[#4A5565] leading-relaxed font-medium">
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
