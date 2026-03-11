"use client";
import Link from "next/link";
import { useState } from "react";
import { useLanguage, LOCALE_OPTIONS, Locale } from "../context/LanguageContext";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import globe from "../../../public/globus.svg";
export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { locale, setLocale, t } = useLanguage();

    const navItems = [
        { nameKey: "problems", id: "problems" },
        { nameKey: "solutions", id: "solutions" },
        { nameKey: "workflow", id: "workflow" },
        { nameKey: "contact", id: "contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#F9FAFB] pt-[] to-[#F5F4F7]">
            <div className="max-w-[335px] md:max-w-[648px] lg:max-w-[1090px] mx-auto relative">
                <div className="flex items-center justify-between h-[72px]">

                    <Link href="/" className="flex items-center gap-2">
                        <Image src={logo} alt="logo" width={250} height={100}/>
                    </Link>


                    <div className="hidden lg:flex items-center gap-8 bg-white border border-[#D1D5DC] px-[34px] py-[10px] rounded-full absolute left-1/2 -translate-x-1/2">
                        {navItems.map((item) => (
                            <Link
                                key={item.id}
                                href={`#${item.id}`}
                                className="text-[14px] text-[#030712] font-medium"
                            >
                                {t("Navbar", item.nameKey)}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden lg:flex items-center gap-5">
                        <div className="relative">
                           <Image src={globe} alt="globe" width={18} height={18} className="absolute left-2.5 top-1/2 -translate-y-1/2"/>
                            <select
                                id="desktop-language-select"
                                value={locale}
                                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setLocale(e.target.value as Locale)}
                                className="appearance-none bg-[#F5F4F7] rounded-full pl-9 pr-8 py-2 text-sm font-medium text-[#030712] cursor-pointer focus:outline-none "
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
                        <Link
                            href="#contact"
                            className="text-sm font-medium text-white bg-[#1463E1] hover:bg-blue-700 px-6 py-2.5 rounded-full transition-colors"
                        >
                            {t("Navbar", "demo")}
                        </Link>
                    </div>

                    <div className="flex lg:hidden items-center gap-3 sm:gap-4">
                        <Link
                            href="#contact"
                            className="hidden sm:inline-flex text-[14px] font-medium text-white bg-[#1463E1] px-[28px] py-[13px] rounded-full transition-colors"
                        >
                            {t("Navbar", "demo")}
                        </Link>

                        <button
                            className="p-2 rounded-md text-gray-800"
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
                    <div className="lg:hidden absolute top-[76px] right-4 sm:right-6 w-[280px] bg-white rounded-[8px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 overflow-hidden flex flex-col">
                        <div className="flex flex-col px-4 pt-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.id}
                                    href={`#${item.id}`}
                                    className="block py-4 text-center text-[14px] font-medium text-[#0F172A] hover:text-[#1463E1] border-b border-gray-200 "
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {t("Navbar", item.nameKey)}
                                </Link>
                            ))}
                        </div>

                        <div className="flex justify-between items-center px-4 py-5 mt-2">
                            {LOCALE_OPTIONS.map((opt) => (
                                <button
                                    key={opt.code}
                                    onClick={() => {
                                        setLocale(opt.code);
                                        setMobileOpen(false);
                                    }}
                                    className={`flex-1 mx-1 py-2 rounded-md text-[14px] font-medium transition ${locale === opt.code
                                        ? "bg-[#1463E1] text-white"
                                        : "bg-transparent text-[#0F172A] hover:bg-gray-50"
                                        }`}
                                >
                                    {opt.shortLabel}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
