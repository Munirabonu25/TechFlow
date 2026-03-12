"use client";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { useState } from "react";
import Image from "next/image";
import samaradorlik from "../../../public/samaradorlik.svg";
import shieldCheck from "../../../public/Shield Check.svg";
import mastablanish from "../../../public/mastablanish.svg";
import DemoModal from "./DemoModal";
export default function CTA() {
    const { t } = useLanguage();
    const [modalMode, setModalMode] = useState<"demo" | "consultation" | null>(null);

    const features = [
        {
            icon: (
                <Image src={samaradorlik} alt="Samaradorlik" width={32} height={32} />
            ),
            titleKey: "opportunities",
            descKey: "opportunities_desc",
            offset: "translate-x-0"
        },
        {
            icon: (
                <Image src={shieldCheck} alt="Shield Check" width={32} height={32} />
            ),
            titleKey: "security",
            descKey: "security_desc",
            offset: "md:-translate-x-6 lg:-translate-x-8"
        },
        {
            icon: (
                <Image src={mastablanish} alt="Mastablanish" width={32} height={32} />
            ),
            titleKey: "scalability",
            descKey: "scalability_desc",
            offset: "translate-x-0"
        }
    ];

    return (
        <section id="contact" className="my-[60px] md:my-[80px] lg:mt-[64px] lg:mb-[80px] bg-white">
            <div className="max-w-[380px] px-[6px] md:px-0 md:max-w-[648px] lg:max-w-[1090px] mx-auto ">
                <div className="bg-[#F9FAFB] mb-4 text-center md:text-left lg:text-left rounded-[16px] md:rounded-[24px] lg:rounded-[16px] p-6 md:p-8 lg:p-8 grid md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-4 lg:gap-2 items-center">
                    <div>
                        <h2 className="text-[20px] md:text-[20px] max-w-[480px] tracking-[0.02em] sm:text-3xl lg:text-[32px] font-semibold text-[#030712] leading-[1.3] lg:leading-[42px]">
                            {t("CTA", "title")}
                        </h2>
                        <p className="mt-[16px] text-[#1E2939] tracking-[0.02em] font-regular md:text-[14px] sm:text-base leading-[22px] hidden lg:block">
                            {t("CTA", "description")}
                        </p>

                        <p className="mt-[16px] text-[#1E2939] text-[14px] tracking-[0.02em] font-regular text-base leading-[16px] lg:hidden">
                            {t("CTA", "descriptionMobile")}
                        </p>

                        <div className="mt-8 md:mt-10 lg:mt-16 flex flex-col md:flex-row gap-4 md:gap-2 lg:gap-5">
                            <button
                                onClick={() => setModalMode("demo")}
                                className="inline-flex md:hidden lg:inline-flex cursor-pointer items-center justify-center px-[28px] md:px-[16px] lg:px-[28px] py-[13px] md:py-[10px] lg:py-[13px] rounded-[32px] text-[16px] md:text-[14px] lg:text-[16px] text-nowrap leading-[20px] font-medium text-white bg-[#1463E1]"
                            >
                                {t("CTA", "button1")}
                            </button>
                            <button
                                onClick={() => setModalMode("demo")}
                                className="hidden md:inline-flex lg:hidden cursor-pointer items-center justify-center px-[28px] md:px-[16px] lg:px-[28px] py-[13px] md:py-[10px] lg:py-[13px] rounded-[32px] text-[16px] md:text-[14px] lg:text-[16px] text-nowrap leading-[20px] font-medium text-white bg-[#1463E1]"
                            >
                                {t("CTA", "buttonlaptop1")}
                            </button>
                            <button
                                onClick={() => setModalMode("consultation")}
                                className="inline-flex cursor-pointer items-center justify-center px-[28px] md:px-[16px] lg:px-[28px] py-[13px] md:py-[10px] lg:py-[13px] rounded-[32px] text-[16px] md:text-[14px] lg:text-[16px] text-nowrap leading-[20px] font-medium text-[#1E2939] bg-white "
                            >
                                {t("CTA", "button2")}
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-[12px] md:ml-auto lg:ml-auto w-full md:max-w-[260px] lg:max-w-[292px] sm:min-w-[260px]">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`bg-white md:px-[24px] rounded-[12px] text-left px-[12px] py-[8px] flex items-center justify-center gap-4 ${feature.offset}`}
                            >
                                <div className="mt-1 shrink-0">
                                    {feature.icon}
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-[20px] font-semibold text-[#030712] leading-[24px] tracking-[0.02em] ">
                                        {t("CTA", feature.titleKey)}
                                    </h3>
                                    <p className="mt-[8px] text-[12px] text-[#4A5565] leading-[16px] font-medium">
                                        {t("CTA", feature.descKey)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
            <DemoModal isOpen={!!modalMode} mode={modalMode || "demo"} onClose={() => setModalMode(null)} />
        </section>
    );
}
