"use client";
import Image from "next/image";
import image1 from "../../../public/Rectangle.svg";
import image2 from "../../../public/Rectangle2.svg";
import image3 from "../../../public/Rectangle3.svg";
import { useLanguage } from "../context/LanguageContext";

export default function ForWhom() {
    const { t } = useLanguage();

    const audiences = [
        {
            id: "dealers",
            titleKey: "card1",
            image: image1,
        },
        {
            id: "autoparks",
            titleKey: "card2",
            image: image2,
        },
        {
            id: "autoservices",
            titleKey: "card3",
            image: image3,
        },
    ];

    return (
        <section id="for-whom" className="py-24 bg-[radial-gradient(circle_at_bottom,_#1463E1_-90%,_#030712_30%)] bg-[#030712] ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <h2 className="text-[32px] sm:text-[36px] font-semibold text-[#F9FAFB] tracking-tight">
                        {t("ForWhom", "title")}
                    </h2>
                    <p className="mt-4 text-[#99A1AF] font-medium text-[16px] sm:text-base">
                        {t("ForWhom", "description")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-8">
                    {audiences.map(({ id, titleKey, image }) => (
                        <div
                            key={id}
                            className="group cursor-pointer flex flex-col"
                        >

                            <div className="w-full relative rounded-[20px] overflow-hidden aspect-[16/10] mb-5">
                                <Image
                                    src={image}
                                    alt={t("ForWhom", titleKey)}
                                    className="w-full h-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/60 to-transparent pointer-events-none opacity-50"></div>
                            </div>

                            <h3 className="text-start text-[19px] font-semibold text-[#F9FAFB] tracking-wide">
                                {t("ForWhom", titleKey)}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
