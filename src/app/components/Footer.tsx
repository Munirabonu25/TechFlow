"use client";
import Link from "next/link";
import Image from "next/image";
import Insatgram from "../../../public/Instagram.svg";
import LinkedIn from "../../../public/LinkedIn.svg";
import Facebook from "../../../public/Facebook.svg";
import Phone from "../../../public/phonecalling.svg";
import letter from "../../../public/Letter.svg";
import location from "../../../public/location.svg";
import logofooter from "../../../public/logofooter.svg";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
    const { t, tNested } = useLanguage();

    return (
        <footer className="bg-white max-w-[380px]  md:max-w-[648px] lg:max-w-[1090px] mx-auto py-[32px]">
            <div className="sm:p-3 md:p-1 lg:p-0 px-[6px] md:px-0 flex flex-col lg:flex-row gap-6">

                <div className="bg-[#1C68E1] rounded-[16px] p-[32px] md:p-[40px] lg:p-[32px] text-white flex flex-col md:flex-row lg:flex-col justify-between md:items-end lg:items-start w-full lg:w-[350px] min-h-[300px] md:min-h-[180px] lg:min-h-[300px]">
                    <div className="md:max-w-[340px] lg:max-w-none">
                        <Image src={logofooter} alt="Logo Footer" width={170} height={32} />
                        <p className="text-[#EEF8FF] mt-[16px] md:mt-[24px] lg:mt-[16px] font-medium text-[16px] md:text-[18px] lg:text-[16px] leading-[22px] md:leading-[26px] lg:leading-[22px]">
                            {t("Footer", "description")}
                        </p>
                    </div>
                    <div className="flex gap-3 mt-12 md:mt-0 lg:mt-12">

                        <Link href="https://www.facebook.com/">
                            <Image src={Facebook} alt="Facebook" width={24} height={24} className="md:w-[32px] md:h-[32px] lg:w-[24px] lg:h-[24px]" />
                        </Link>

                        <Link href="https://www.instagram.com/">
                            <Image src={Insatgram} alt="Instagram" width={24} height={24} className="md:w-[32px] md:h-[32px] lg:w-[24px] lg:h-[24px]" />
                        </Link>

                        <Link href="https://www.linkedin.com/">
                            <Image src={LinkedIn} alt="LinkedIn" width={24} height={24} className="md:w-[32px] md:h-[32px] lg:w-[24px] lg:h-[24px]" />
                        </Link>

                    </div>
                </div>


                <div className="bg-[#F9FAFB] rounded-[16px] flex-1 flex flex-col justify-between">

                    <div className="p-[30px] flex flex-col mt-[20px] md:mt-0 md:flex-row md:gap-20 gap-6 flex-wrap md:flex-nowrap">

                        <div>
                            <h3 className="text-[#030712] font-medium mb-[32px] leading-[22px] text-[16px] ">{tNested("Footer", "links", "product")}</h3>
                            <ul className="space-y-4">
                                <li><Link href="#" className="text-[14px] text-nowrap text-[#364153]">{tNested("Footer", "links", "opportunities")}</Link></li>
                                <li><Link href="#" className="text-[14px] text-nowrap text-[#364153]">{tNested("Footer", "links", "tariffs")}</Link></li>
                                <li><Link href="#" className="text-[14px] text-nowrap text-[#364153]">{tNested("Footer", "links", "integrations")}</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[#030712] font-medium mb-[32px] leading-[22px] text-[16px] ">{tNested("Footer", "links", "company")}</h3>
                            <ul className="space-y-4">
                                <li><Link href="#" className="text-[14px] text-nowrap text-[#364153]">{tNested("Footer", "links", "about")}</Link></li>
                                <li><Link href="#" className="text-[14px] text-nowrap text-[#364153]">{tNested("Footer", "links", "partners")}</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[#030712] font-medium mb-[32px] leading-[22px] text-[16px] ">{tNested("Footer", "links", "contact")}</h3>
                            <ul className="space-y-5">
                                <li className="flex items-center gap-3">
                                    <Image src={Phone} alt="Phone" width={20} height={20} />
                                    <a href="tel:+998712000000" className="text-[14px] font-regular leading-[16px] tracking-[0.02em] text-[#364153] ">+998 (71) 200-00-00</a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Image src={letter} alt="Letter" width={20} height={20} />
                                    <a href="mailto:info@techflow.uz" className="text-[14px] font-regular leading-[16px] tracking-[0.02em] text-[#364153] ">info@techflow.uz</a>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Image src={location} alt="Location" width={20} height={20} />
                                    <span className="text-[14px] text-[#364153] font-regular leading-[16px] tracking-[0.02em] ">
                                        {tNested("Footer", "links", "address")}
                                    </span  >
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className="mt-16 lg:mt-auto pt-8 pl-[30px] pb-[30px]">
                        <p className="text-[13px] text-[#4A5565] ">
                            {tNested("Footer", "links", "copyright")}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
