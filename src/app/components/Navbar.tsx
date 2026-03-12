"use client";
import Link from "next/link";
import { useState } from "react";
import { useLanguage, LOCALE_OPTIONS, Locale } from "../context/LanguageContext";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import globe from "../../../public/globus.svg";
import DemoModal from "./DemoModal";
export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
    const { locale, setLocale, t } = useLanguage();

    const navItems = [
        { nameKey: "problems", id: "problems" },
        { nameKey: "solutions", id: "solutions" },
        { nameKey: "workflow", id: "workflow" },
        { nameKey: "contact", id: "contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#F9FAFB] pt-[] to-[#F5F4F7]">
            <div className="max-w-[380px] px-[6px] md:px-0 md:max-w-[648px] lg:max-w-[1090px] mx-auto relative">
                <div className="flex items-center justify-between h-[72px]">

                    <Link href="/" className="flex items-center gap-2 focus:outline-none">
                        <Image src={logo} alt="logo" width={250} height={100} className="w-[200px] h-[100px]" />
                    </Link>


                    <div className="hidden lg:flex items-center gap-8 bg-white px-[34px] py-[10px] rounded-full absolute left-1/2 -translate-x-1/2 border border-[#D1D5DC] rounded-[32px] p-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.id}
                                href={`#${item.id}`}
                                className="text-[14px] hover:text-[#364153] text-[#030712] font-medium"
                            >
                                {t("Navbar", item.nameKey)}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden lg:flex items-center gap-5">
                        <div className="relative">
                            <Image src={globe} alt="globe" width={20} height={20} className="absolute left-2.5 top-1/2 -translate-y-1/2" />
                            <select
                                id="desktop-language-select"
                                value={locale}
                                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setLocale(e.target.value as Locale)}
                                className="appearance-none bg-[#F5F4F7] rounded-full pl-9 pr-7 py-2 text-[16px] font-medium text-[#030712] leading-[20px] cursor-pointer focus:outline-none "
                            >
                                {LOCALE_OPTIONS.map((opt) => (
                                    <option key={opt.code} value={opt.code}>
                                        {opt.shortLabel}
                                    </option>
                                ))}
                            </select>
                            <svg
                                className="w-4 h-4 text-[#030712] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </div>
                        <button
                            onClick={() => setIsDemoModalOpen(true)}
                            className="text-sm font-medium text-white bg-[#1463E1] cursor-pointer hover:bg-blue-700 px-6 py-2.5 rounded-full transition-colors"
                        >
                            {t("Navbar", "demo")}
                        </button>
                    </div>

                    <div className="flex lg:hidden items-center gap-3 sm:gap-4 ">
                        <button
                            onClick={() => setIsDemoModalOpen(true)}
                            className="hidden sm:inline-flex text-[14px] cursor-pointer font-medium text-white bg-[#1463E1] px-[28px] py-[13px] rounded-full transition-colors"
                        >
                            {t("Navbar", "demo")}
                        </button>

                        <button
                            className="p-2 rounded-md text-gray-800 cursor-pointer"
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {mobileOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {mobileOpen && (
                    <div className="lg:hidden absolute top-[76px] right-4 sm:right-6 w-[253px] bg-white h-[414px] rounded-[8px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden flex flex-col">

                        <div className="flex flex-col px-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.id}
                                    href={`#${item.id}`}
                                    className="block py-4 text-center text-[14px] font-medium text-[#0F172A] hover:text-[#1463E1] border-b border-gray-200"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {t("Navbar", item.nameKey)}
                                </Link>
                            ))}


                            <div className="flex justify-between items-center py-[24px] border-b border-gray-200">
                                {LOCALE_OPTIONS.map((opt) => (
                                    <button
                                        key={opt.code}
                                        onClick={() => {
                                            setLocale(opt.code);
                                            setMobileOpen(false);
                                        }}
                                        className={`flex-1 mx-1 p-[13px] rounded-md text-[14px] font-medium transition ${locale === opt.code
                                            ? "bg-[#1463E1] text-white"
                                            : "bg-transparent text-[#0F172A] hover:bg-gray-200"
                                            }`}
                                    >
                                        {opt.shortLabel}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-center py-[24px] items-center">
                            <button
                                onClick={() => {
                                    setIsDemoModalOpen(true);
                                    setMobileOpen(false);
                                }}
                                className="text-sm font-medium text-white flex items-center justify-center bg-[#1463E1] hover:bg-blue-700 w-[205px] h-[42px] rounded-full transition-colors"
                            >
                                {t("Navbar", "demo")}
                            </button>
                        </div>
                    </div>
                )}
                <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
            </div>
        </nav>
    );
}
