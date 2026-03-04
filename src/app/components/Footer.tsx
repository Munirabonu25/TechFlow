"use client";
import Link from "next/link";
import Image from "next/image";
import Insatgram from "../../../public/Instagram.svg";
import LinkedIn from "../../../public/LinkedIn.svg";
import Facebook from "../../../public/Facebook.svg";
import Phone from "../../../public/phonecalling.svg";
import letter from "../../../public/Letter.svg";
import location from "../../../public/location.svg";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
    const { t, tNested } = useLanguage();

    return (
        <footer className="bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#F9FAFB] rounded-[2rem] p-6 lg:p-8 flex flex-col lg:flex-row gap-10">

                <div className="bg-[#1C68E1] rounded-3xl p-8 text-white flex flex-col justify-between w-full lg:w-[350px] min-h-[300px]">
                    <div>
                        <h2 className="text-3xl font-medium mb-4">{t("Footer", "title")}</h2>
                        <p className="text-[#EEF8FF] text-[14px] leading-relaxed max-w-[260px]">
                            {t("Footer", "description")}
                        </p>
                    </div>
                    <div className="flex gap-3 mt-12">

                        <Link href="#" className="w-8 h-8 rounded text-[#1C68E1] bg-white flex items-center justify-center hover:bg-blue-50 transition-colors">
                            <Image src={Facebook} alt="Facebook" width={24} height={24} />
                        </Link>

                        <Link href="#" className="w-8 h-8 rounded text-[#1C68E1] bg-white flex items-center justify-center hover:bg-blue-50 transition-colors">
                            <Image src={Insatgram} alt="Instagram" width={24} height={24} />
                        </Link>

                        <Link href="#" className="w-8 h-8 rounded text-[#1C68E1] bg-white flex items-center justify-center hover:bg-blue-50 transition-colors">
                            <Image src={LinkedIn} alt="LinkedIn" width={24} height={24} />
                        </Link>

                    </div>
                </div>


                <div className="flex-1 flex flex-col justify-between pt-6 lg:pt-8 lg:pl-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">

                        <div>
                            <h3 className="text-[#030712] font-medium mb-5 tracking-tight">{tNested("Footer", "links", "product")}</h3>
                            <ul className="space-y-4">
                                <li><Link href="#" className="text-[14px] text-[#364153]">{tNested("Footer", "links", "opportunities")}</Link></li>
                                <li><Link href="#" className="text-[14px] text-[#364153]">{tNested("Footer", "links", "tariffs")}</Link></li>
                                <li><Link href="#" className="text-[14px] text-[#364153]">{tNested("Footer", "links", "integrations")}</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[#030712] font-medium mb-5 tracking-tight">{tNested("Footer", "links", "company")}</h3>
                            <ul className="space-y-4">
                                <li><Link href="#" className="text-[14px] text-[#364153]">{tNested("Footer", "links", "about")}</Link></li>
                                <li><Link href="#" className="text-[14px] text-[#364153]">{tNested("Footer", "links", "partners")}</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[#030712] font-medium mb-5 tracking-tight">{tNested("Footer", "links", "contact")}</h3>
                            <ul className="space-y-5">
                                <li className="flex items-center gap-3">
                                    <Image src={Phone} alt="Phone" width={24} height={24} />    
                                    <a href="tel:+998712000000" className="text-[15px] text-[#364153] ">+998 (71) 200-00-00</a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Image src={letter} alt="Letter" width={24} height={24} />         
                                    <a href="mailto:info@techflow.uz" className="text-[15px] text-[#364153] ">info@techflow.uz</a>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Image src={location} alt="Location" width={24} height={24} />
                                    <span className="text-[14px] text-[#364153] leading-snug pr-4">
                                        {tNested("Footer", "links", "address")}
                                    </span  >
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className="mt-16 lg:mt-auto pt-8">
                        <p className="text-[13px] text-[#4A5565] ">
                            {tNested("Footer", "links", "copyright")}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
