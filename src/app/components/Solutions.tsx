"use client";
import Image from "next/image";
import solution1 from "../../../public/solutionfirstimg.svg";
import solution2 from "../../../public/solutionsecondimg.svg";
import solution3 from "../../../public/solutionthirdimg.svg";
import solution4 from "../../../public/solutionfourtimg.svg";
import solution5 from "../../../public/solutionfiftimg.svg";
import solution6 from "../../../public/solutionsixtimg.svg";
import solution7 from "../../../public/seventsolutionimg.svg";
import { useLanguage } from "../context/LanguageContext";

export default function Solutions() {
    const { t } = useLanguage();

    const cardService = (
        <div className="bg-[#F8F9FB] rounded-[28px] overflow-hidden p-8 sm:p-10 relative flex flex-col lg:flex-row group min-h-[340px] h-full">
            <div className="relative z-10 max-w-sm">
                <h3 className="text-[22px] font-bold text-[#0F172A] mb-3">{t("Solutions", "solution1")}</h3>
                <p className="text-[#64748B] text-[15px] leading-relaxed">
                    {t("Solutions", "solution1_desc")}
                </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:absolute lg:right-0 lg:bottom-0 lg:top-6 w-full lg:w-[65%] flex items-end justify-end pointer-events-none">
                <Image
                    src={solution1}
                    alt={t("Solutions", "solution1")}
                    className="object-contain object-right-bottom max-w-full h-auto group-hover:scale-105 transition-transform duration-500"
                />
            </div>
        </div>
    );

    const cardCRM = (
        <div className="bg-[#F8F9FB] rounded-[28px] overflow-hidden p-8 sm:p-10 relative flex flex-col group min-h-[340px] h-full">
            <div className="relative z-10 mb-8">
                <h3 className="text-[22px] font-bold text-[#0F172A] mb-3">{t("Solutions", "solution2")}</h3>
                <p className="text-[#64748B] text-[15px] leading-relaxed">
                    {t("Solutions", "solution2_desc")}
                </p>
            </div>
            <div className="mt-4 lg:mt-0 lg:absolute lg:right-0 lg:bottom-0 lg:top-6 w-full lg:w-[65%] flex items-end justify-end pointer-events-none">
                <Image
                    src={solution2}
                    alt={t("Solutions", "solution2")}
                    className="object-contain w-[90%] group-hover:-translate-y-2 transition-transform duration-500"
                />
            </div>
        </div>
    );

    const cardPOS = (
        <div className="bg-[#F8F9FB] rounded-[28px] overflow-hidden p-8 sm:p-10 flex flex-col h-full relative group">
            <div className="relative z-10 mb-8">
                <h3 className="text-[22px] font-bold text-[#0F172A] mb-3">{t("Solutions", "solution3")}</h3>
                <p className="text-[#64748B] text-[15px] leading-relaxed">
                    {t("Solutions", "solution3_desc")}
                </p>
            </div>
            <div className="mt-auto flex justify-center pointer-events-none px-4 -mb-4">
                <Image
                    src={solution3}
                    alt={t("Solutions", "solution3")}
                    className="object-contain max-h-[220px] group-hover:scale-105 transition-transform duration-500"
                />
            </div>
        </div>
    );

    const cardOmbor = (
        <div className="bg-[#F8F9FB] rounded-[28px] overflow-hidden p-8 sm:p-10 flex flex-col relative h-[320px] group">
            <div className="relative z-10">
                <h3 className="text-[22px] font-bold text-[#0F172A] mb-3">{t("Solutions", "solution6")}</h3>
                <p className="text-[#64748B] text-[15px] leading-relaxed">
                    {t("Solutions", "solution6_desc")}
                </p>
            </div>
            <div className="mt-auto absolute bottom-0 right-0 w-full flex justify-end pointer-events-none">
                <Image
                    src={solution5}
                    alt={t("Solutions", "solution6")}
                    className="object-cover h-[180px] object-right-bottom group-hover:scale-105 transition-transform duration-500"
                />
            </div>
        </div>
    );

    const cardAnalitika = (
        <div className="bg-[#F8F9FB] rounded-[28px] overflow-hidden p-8 sm:p-10 flex flex-col relative group">
            <div className="relative z-10 mb-8">
                <h3 className="text-[22px] font-bold text-[#0F172A] mb-3">{t("Solutions", "solution4")}</h3>
                <p className="text-[#64748B] text-[15px] leading-relaxed">
                    {t("Solutions", "solution4_desc")}
                </p>
            </div>
            <div className="mt-auto flex justify-center pointer-events-none px-6 pb-2">
                <Image
                    src={solution4}
                    alt={t("Solutions", "solution4")}
                    className="object-contain w-full max-h-[160px] group-hover:-translate-y-2 transition-transform duration-500"
                />
            </div>
        </div>
    );

    const cardSavdo = (
        <div className="bg-[#F8F9FB] rounded-[28px] overflow-hidden p-8 sm:p-10 flex flex-col relative h-full min-h-[380px] group">
            <div className="relative z-10 mb-8">
                <h3 className="text-[22px] font-bold text-[#0F172A] mb-3">{t("Solutions", "solution7")}</h3>
                <p className="text-[#64748B] text-[15px] leading-relaxed">
                    {t("Solutions", "solution7_desc")}
                </p>
            </div>
            <div className="mt-auto absolute bottom-0 right-0 left-0 flex justify-center pointer-events-none">
                <Image
                    src={solution6}
                    alt={t("Solutions", "solution7")}
                    className="object-contain w-[85%] group-hover:-translate-y-2 transition-transform duration-500 rounded-b-[28px]"
                />
            </div>
        </div>
    );

    const cardOnline = (
        <div className="bg-[#F8F9FB] rounded-[28px] overflow-hidden p-8 sm:p-10 flex flex-col h-full relative group min-h-[600px]">
            <div className="relative z-10 mb-8">
                <h3 className="text-[22px] font-bold text-[#0F172A] mb-3">{t("Solutions", "solution5")}</h3>
                <p className="text-[#64748B] text-[15px] leading-relaxed">
                    {t("Solutions", "solution5_desc")}
                </p>
            </div>
            <div className="mt-auto absolute bottom-4 left-0 right-0 flex justify-center items-end pointer-events-none -mx-4">
                <Image
                    src={solution7}
                    alt={t("Solutions", "solution5")}
                    className="object-contain w-[100%] max-w-none group-hover:scale-[1.03] transition-transform duration-500"
                />
            </div>
        </div>
    );

    return (
        <section id="solutions" className="py-24 bg-white">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-[40px] font-bold text-gray-900 tracking-tight leading-tight">
                        {t("Solutions", "title")}
                    </h2>
                    <p className="mt-4 text-[#64748B] font-medium text-lg">
                        {t("Solutions", "description")}
                    </p>
                </div>

                {/* Mobile and Tablet Layout */}
                <div className="flex flex-col md:grid md:grid-cols-2 gap-6 lg:hidden">
                    <div className="flex flex-col gap-6">
                        {cardService}
                        {cardPOS}
                        {cardOmbor}
                        {cardAnalitika}
                    </div>
                    <div className="flex flex-col gap-6">
                        {cardCRM}
                        {cardOnline}
                        {cardSavdo}
                    </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:flex flex-col gap-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2">{cardService}</div>
                        <div className="lg:col-span-1">{cardCRM}</div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="flex flex-col gap-6">
                            {cardPOS}
                            {cardOmbor}
                        </div>
                        <div className="flex flex-col gap-6">
                            {cardAnalitika}
                            {cardSavdo}
                        </div>
                        <div className="lg:col-span-1">
                            {cardOnline}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
