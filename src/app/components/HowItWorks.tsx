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
                <Image src={howworks2} className="w-full h-full" alt="How It Works" width={28} height={28} />
            ),
        },
        {
            id: "3",
            titleKey: "step3",
            descKey: "step3_desc",
            strokeColor: "text-green-500/70",
            icon: (
                <Image src={howworks3} className="w-full h-full" alt="How It Works" width={28} height={28} />
            ),
        },

        {
            id: "4",
            titleKey: "step4",
            descKey: "step4_desc",
            strokeColor: "text-yellow-400/70",
            icon: (
                <Image src={howworks4} className="w-full h-full" alt="How It Works" width={28} height={28} />
            ),
        },
        {
            id: "5",
            titleKey: "step5",
            descKey: "step5_desc",
            strokeColor: "text-blue-500/70",
            icon: (
                <Image src={howworks5} className="w-full h-full" alt="How It Works" width={28} height={28} />
            ),
        },
    ];

    return (
        <section id="workflow" className="py-24 bg-[#030712]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-20 text-white">
                    <h2 className="text-[32px] sm:text-[36px] font-bold tracking-tight">
                        {t("Workflow", "title")}
                    </h2>
                    <p className="mt-4 text-[#8B93A5] font-medium text-[15px] sm:text-base leading-relaxed">
                        {t("Workflow", "description")}
                    </p>
                </div>

                <div className="hidden lg:flex justify-between relative">
                    {steps.map((step) => (
                        <div key={step.id} className="relative flex-1 flex flex-col items-center">
                            <div className="absolute top-5 left-0 w-full h-26 overflow-hidden pointer-events-none">
                                <svg fill="none" className={`w-full h-[200%] ${step.strokeColor} opacity-50`} stroke="currentColor" strokeWidth="2" strokeDasharray="6 6">
                                    <ellipse cx="50%" cy="100%" rx="50%" ry="100%" />
                                </svg>
                            </div>


                            <div className={`relative z-10 w-15 h-15 rounded-xl flex items-center justify-center`}>
                                {step.icon}
                            </div>


                            <div className="relative z-10 mt-[80px] w-[26px] h-[26px] rounded-full bg-[#374151] flex items-center justify-center border-2 border-[#1E293B]">
                                <span className="text-white text-[11px] font-bold">{step.id}</span>
                            </div>


                            <div className="mt-5 flex flex-col items-center text-center">
                                <h3 className="text-white font-bold text-[17px] tracking-wide mb-2">
                                    {t("Workflow", step.titleKey)}
                                </h3>
                                <p className="text-[#8B93A5] text-[13px] leading-relaxed max-w-[160px]">
                                    {t("Workflow", step.descKey)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="lg:hidden grid sm:grid-cols-2 gap-10 relative">
                    {steps.map((step) => (
                        <div key={step.id} className="flex flex-col items-center text-center">
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6`}>
                                {step.icon}
                            </div>
                            <div className="w-[26px] h-[26px] mb-4 rounded-full bg-[#374151] flex items-center justify-center border-2 border-[#1E293B]">
                                <span className="text-white text-[11px] font-bold">{step.id}</span>
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2">
                                {t("Workflow", step.titleKey)}
                            </h3>
                            <p className="text-[#8B93A5] text-sm max-w-[200px]">
                                {t("Workflow", step.descKey)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
