"use client";
import Image from "next/image";
import React from "react";
import logo from "../../Public/images/logo-png.png";
import { useTranslation } from "react-i18next";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <svg
        className="relative  h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#7a0066"
          fillOpacity="1"
          d="M0,288L48,266.7C96,245,192,203,288,186.7C384,171,480,181,576,202.7C672,224,768,256,864,261.3C960,267,1056,245,1152,218.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <footer className="bg-[#7a0066] text-white py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-36 px-4">
          {/* Logo & Description */}
          <div>
            <Image
              src={logo}
              alt="Logo"
              className="w-32 mr-8 -mt-6 justify-center"
            />
            <p className="text-lg font-semibold text-center text-gray-100">
              {t(
                " نقدم افضل طرق لمساعدة الطلاب علي التقدم للدراسة في تركيا وتأمين  القبول المجاني لهم "
              )}
            </p>
          </div>

          {/* Branches */}
          <div>
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">
              {t("فروعنا")}
            </h3>
            <ul className="space-y-5">
              <li>
                📍
                {t(
                  " فرع تركيا: منطقة صفاكوي، الفرع التجاري، إسطنبول، تركيا "
                )}{" "}
              </li>
              <li>
                📍
                {t(
                  "*فرع الجزائر:  حي 2068 مسكن (إسماعيل يفصح)،  عمارة 45، رقم 6، الطابق الثالث،  بلدية باب الزوار، الجزائر العاصمة، الجزائر"
                )}{" "}
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl  text-yellow-500 font-semibold mb-4">
              {" "}
              {t("تواصل معنا ")}
            </h3>
            <ul className="space-y-10">
              <li>البريد الإلكتروني: devaeducation1@gmail.com </li>
              <li>الهاتف:+90 537 289 97 74 📞</li>
              <li className="flex gap-16">
                <a
                  className="text-blue-500 bg-white p-2 rounded-2xl"
                  href="https://www.facebook.com/DEVASTUDY2022"
                >
                  <FaFacebook />
                </a>
                <a
                  className="text-green-500 bg-white p-2 rounded-2xl"
                  href="https://wa.me/905372899774"
                >
                  <FaWhatsapp />
                </a>
                <a
                  className="text-orange-500 bg-white p-2 rounded-2xl"
                  href="https://www.instagram.com/deva_education"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-xl text-yellow-500 font-semibold mb-4">
              {" "}
              {t("روابط مهمة ")}
            </h3>
            <div>
              <ul className="space-y-2 ">
                <li>
                  <a className=" transition hover:text-yellow-400" href="/">
                    {" "}
                    {t("الصفحة الرئيسية")}
                  </a>
                </li>
                <li>
                  <a
                    className=" transition hover:text-yellow-400"
                    href="/universitys"
                  >
                    {" "}
                    {t("الجامعات")}
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    className=" transition hover:text-yellow-400"
                    href="/khadamat"
                  >
                    {" "}
                    {t("الخدمات")}
                  </a>
                </li>
                <li>
                  <a
                    className=" transition hover:text-yellow-400"
                    href="/takass"
                  >
                    {" "}
                    {t("جميع التخصصات")}
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    className=" transition hover:text-yellow-400"
                    href="/mannahno"
                  >
                    {" "}
                    {t("من  نكون")}
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    className=" transition hover:text-yellow-400"
                    href="/KonWakelna"
                  >
                    {" "}
                    {t("كن شريكنا المعتمد ")}
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    className=" transition hover:text-yellow-400"
                    href="/madonatna"
                  >
                    {" "}
                    {t("المدوَّنات")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
      </footer>
    </>
  );
};

export default Footer;
