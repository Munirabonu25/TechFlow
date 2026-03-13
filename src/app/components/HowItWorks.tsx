"use client";
import { useLanguage } from "../context/LanguageContext";
import Image from "next/image";
import howworks1 from "../../../public/howworks1.svg";
import howworks2 from "../../../public/howworks2.svg";
import howworks3 from "../../../public/howworks3.svg";
import howworks4 from "../../../public/howworks4.svg";
import howworks5 from "../../../public/hhowworks5.svg";

export default function HowItWorks() {
    const { t } = useLanguage();

    const steps = [
        {
            id: "1",
            titleKey: "step1",
            descKey: "step1_desc",
            strokeColor: "text-orange-400/70",
            icon: (
                <Image src={howworks1} className="w-full h-full object-cover" alt="How It Works" width={28} height={28} />
            ),
        },
        {
            id: "2",
            titleKey: "step2",
            descKey: "step2_desc",
            strokeColor: "text-[#F33959]/70",
            icon: (
                <Image src={howworks2} className="w-full h-full object-cover" alt="How It Works" width={28} height={28} />
            ),
        },
        {
            id: "3",
            titleKey: "step3",
            descKey: "step3_desc",
            strokeColor: "text-green-500/70",
            icon: (
                <Image src={howworks3} className="w-full h-full object-cover" alt="How It Works" width={28} height={28} />
            ),
        },
        {
            id: "4",
            titleKey: "step4",
            descKey: "step4_desc",
            strokeColor: "text-yellow-400/70",
            icon: (
                <Image src={howworks4} className="w-full h-full object-cover" alt="How It Works" width={28} height={28} />
            ),
        },
        {
            id: "5",
            titleKey: "step5",
            descKey: "step5_desc",
            strokeColor: "text-blue-500/70",
            icon: (
                <Image src={howworks5} className="w-full h-full object-cover" alt="How It Works" width={28} height={28} />
            ),
        },
    ];

    return (
        <section id="workflow" className="py-[64px] md:py-[50px] lg:py-[128px] bg-[#030712]">
            <div className="max-w-[380px] md:max-w-[648px] lg:max-w-[1090px] mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-8">
                    <h2 className="text-[32px] sm:text-[36px] font-semibold tracking-tight text-[#F9FAFB]">
                        {t("Workflow", "title")}
                    </h2>
                    <p className="mt-4 text-[#99A1AF] max-w-[440px] mx-auto font-regular text-[16px] sm:text-base tracking-[0.02em] leading-[22px]">
                        {t("Workflow", "description")}
                    </p>
                </div>

                <div className="hidden md:flex justify-between relative">
                    {steps.map((step) => (
                        <div key={step.id} className="relative flex-1 flex flex-col items-center">

                            <div className="absolute top-5 left-0 w-full h-32 overflow-hidden pointer-events-none">
                                <svg fill="none" className={`w-full md:h-[45%] lg:h-[85%] ${step.strokeColor}`} strokeWidth="1.3" strokeDasharray="6 6">
                                    <defs>
                                        <linearGradient id={`fadeGrad-${step.id}`} x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="currentColor" stopOpacity="0.9" />
                                            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                    <ellipse cx="50%" cy="100%" rx="50%" ry="100%" stroke={`url(#fadeGrad-${step.id})`} />
                                </svg>
                            </div>

                            <div className={`relative z-10 w-18 h-16 rounded-xl flex items-center justify-center`}>
                                {step.icon}
                            </div>

                            <div className="relative z-10 w-[20px] h-[20px] rounded-full bg-[#374151] flex items-center justify-center ">
                                <span className="text-white text-[12px] font-medium">{step.id}</span>
                            </div>

                            <div className="mt-[12px] flex flex-col items-center text-center">
                                <h3 className="text-[#F9FAFB] font-semibold md:text-[14px] lg:text-[20px] tracking-[0.02em] mb-[4px]">
                                    {t("Workflow", step.titleKey)}
                                </h3>
                                <p className="text-[#99A1AF] md:text-[12px] lg:text-[16px] md:leading-[16px] lg:leading-[22px] tracking-[0.02em] max-w-[160px]">
                                    {t("Workflow", step.descKey)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="md:hidden flex flex-col sm:grid sm:grid-cols-2 gap-16 sm:gap-10 relative items-center">
                    {steps.map((step) => (
                        <div key={step.id} className="relative flex flex-col items-center text-center w-full">


                            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-[250px] h-[180px] overflow-hidden pointer-events-none sm:hidden">
                                <svg fill="none" className={`w-full h-[90%] ${step.strokeColor}`} strokeWidth="2" strokeDasharray="6 6">
                                    <defs>
                                        <linearGradient id={`fadeGradMob-${step.id}`} x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
                                            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                    <ellipse cx="50%" cy="100%" rx="50%" ry="85%" stroke={`url(#fadeGradMob-${step.id})`} />
                                </svg>
                            </div>


                            <div className={`relative z-10 w-17 h-17 rounded-2xl flex items-center justify-center mb-2`}>
                                {step.icon}
                            </div>
                            <div className="relative z-10 w-[26px] h-[26px] rounded-full bg-[#374151] flex items-center justify-center">
                                <span className="text-white text-[11px] font-semibold">{step.id}</span>
                            </div>
                            <h3 className="relative z-10 text-[#F9FAFB] font-semibold text-[20px] tracking-wide mb-2 mt-1">
                                {t("Workflow", step.titleKey)}
                            </h3>
                            <p className="relative z-10 text-[#99A1AF] text-[16px] leading-[22px] tracking-[-0.02em] max-w-[180px]">
                                {t("Workflow", step.descKey)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}