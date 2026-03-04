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
        <div
            className="bg-[#F9FAFB] rounded-[28px] overflow-hidden p-8 sm:p-10 relative flex flex-col lg:flex-row group h-full min-h-[310px]"
            style={{ backgroundImage: 'url(/bgofsolutioncard.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="relative z-20 max-w-sm">
                <h3 className="text-[22px] font-bold text-[#0F172A] mb-3">{t("Solutions", "solution1")}</h3>
                <p className="text-[#64748B] text-[15px] leading-relaxed">
                    {t("Solutions", "solution1_desc")}
                </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:absolute lg:right-0 lg:bottom-0 lg:top-6 w-full lg:w-[65%] flex items-end justify-end pointer-events-none relative z-10">
                <Image
                    src={solution1}
                    alt={t("Solutions", "solution1")}
                    className="object-contain object-right-bottom max-w-full h-auto"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#F9FAFB] to-transparent pointer-events-none"></div>
            </div>
        </div>
    );

    const cardCRM = (
        <div
            className="bg-[#F9FAFB] rounded-[28px] overflow-hidden p-8 sm:p-10 relative flex flex-col group min-h-[310px] h-full"
            style={{ backgroundImage: 'url(/bgofsolutioncard.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="relative z-20 mb-8">
                <h3 className="text-[22px] font-semibold text-[#030712] mb-3">{t("Solutions", "solution2")}</h3>
                <p className="text-[#364153] text-[14px] leading-relaxed">
                    {t("Solutions", "solution2_desc")}
                </p>
            </div>
            <div className="mt-4 lg:mt-0 lg:absolute lg:right-0 lg:bottom-0 lg:top-6 w-full lg:w-[65%] flex items-end justify-end pointer-events-none relative z-10">
                <Image
                    src={solution2}
                    alt={t("Solutions", "solution2")}
                    className="object-contain w-[84%]"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#F9FAFB] to-transparent pointer-events-none"></div>
            </div>
        </div>
    );

    const cardPOS = (
        <div
            className="bg-[#F9FAFB] rounded-[28px] overflow-hidden p-8 sm:p-10 flex flex-col h-full relative group min-h-[310px]"
            style={{ backgroundImage: 'url(/bgofsolutioncard.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="relative z-20 mb-8">
                <h3 className="text-[22px] font-semibold text-[#030712] mb-3">{t("Solutions", "solution3")}</h3>
                <p className="text-[#364153] text-[14px] leading-relaxed">
                    {t("Solutions", "solution3_desc")}
                </p>
            </div>
            <div className="mt-auto flex relative justify-center pointer-events-none px-4 -mb-4 z-10">
                <Image
                    src={solution3}
                    alt={t("Solutions", "solution3")}
                    className="object-contain max-h-[220px]"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#F9FAFB] to-transparent pointer-events-none"></div>
            </div>
        </div>
    );

    const cardOmbor = (
        <div
            className="bg-[#F9FAFB] rounded-[28px] overflow-hidden p-8 sm:p-10 flex flex-col relative min-h-[200px] group"
            style={{ backgroundImage: 'url(/bgofsolutioncard.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="relative z-20">
                <h3 className="text-[22px] font-semibold text-[#030712] mb-3">{t("Solutions", "solution6")}</h3>
                <p className="text-[#364153] text-[14px] leading-relaxed">
                    {t("Solutions", "solution6_desc")}
                </p>
            </div>
            <div className="mt-auto absolute bottom-0 right-0 w-full flex justify-end pointer-events-none z-10">
                <Image
                    src={solution5}
                    alt={t("Solutions", "solution6")}
                    className="object-contain w-[43%]"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#F9FAFB] to-transparent pointer-events-none"></div>
            </div>
        </div>
    );
const cardAnalitika = (
    <div
        className="bg-[#F9FAFB] rounded-[28px] overflow-hidden p-8 sm:p-10 flex flex-col relative group min-h-[220px]"
        style={{ backgroundImage: 'url(/bgofsolutioncard.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
        {/* Matn qismi - z-index bilan rasm ustida turishini ta'minlaymiz */}
        <div className="relative z-20">
            <h3 className="text-[18px] md:text-[18px] lg:text-[22px] font-semibold text-[#030712] mb-2">
                {t("Solutions", "solution4")}
            </h3>
            <p className="text-[#364153] text-[14px] leading-relaxed max-w-[80%]">
                {t("Solutions", "solution4_desc")}
            </p>
        </div>

      
        <div className="absolute inset-x-0 bottom-0 lg:left-28 left-0 md:left-16 flex justify-center items-end h-[120px] pointer-events-none">
            <Image
                src={solution4}
                alt={t("Solutions", "solution4")}
                className="object-contain w-full h-full object-bottom" 
                
            />
            
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#F9FAFB] via-[#F9FAFB]/60 to-transparent z-10"></div>
        </div>
    </div>
);

    const cardSavdo = (
        <div
            className="bg-[#F9FAFB] rounded-[28px] overflow-hidden p-8 sm:p-10 flex flex-col relative h-full min-h-[310px]"
            style={{ backgroundImage: 'url(/bgofsolutioncard.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="relative z-20 mb-8">
                <h3 className="text-[22px] font-semibold text-[#030712] mb-3">{t("Solutions", "solution7")}</h3>
                <p className="text-[#364153] text-[14px] leading-relaxed">
                    {t("Solutions", "solution7_desc")}
                </p>
            </div>
            <div className="mt-auto absolute bottom-0 right-0 left-0 flex justify-center pointer-events-none z-10">
                <Image
                    src={solution6}
                    alt={t("Solutions", "solution7")}
                    className="object-contain w-[85%] rounded-b-[28px]"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#F9FAFB] to-transparent pointer-events-none"></div>
            </div>
        </div>
    );

    const cardOnline = (
        <div
            className="bg-[#F9FAFB] rounded-[28px] overflow-hidden p-8 sm:p-10 flex flex-col h-full relative group min-h-[530px]"
            style={{ backgroundImage: 'url(/bgofsolutioncard.svg)', backgroundSize: 'contain', backgroundPosition: 'center' }}
        >
            <div className="relative z-20 mb-8">
                <h3 className="text-[22px] font-semibold text-[#030712] mb-3">{t("Solutions", "solution5")}</h3>
                <p className="text-[#364153] text-[14px] leading-relaxed">
                    {t("Solutions", "solution5_desc")}
                </p>
            </div>
            <div className="mt-auto absolute bottom-4 left-0 p-6 right-0 flex justify-center items-end pointer-events-none -mx-4 z-10">
                <Image
                    src={solution7}
                    alt={t("Solutions", "solution5")}
                    className="object-contain w-[100%] max-w-none"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#F9FAFB] to-transparent pointer-events-none"></div>
            </div>
        </div>
    );

    return (
        <section id="solutions" className="py-24 bg-white">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-[40px] font-semibold text-[#030712] tracking-tight leading-tight">
                        {t("Solutions", "title")}
                    </h2>
                    <p className="mt-4 text-[#364153] font-regular text-lg">
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
