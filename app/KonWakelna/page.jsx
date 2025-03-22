"use client";

import Image from "next/image";
import React, { useState } from "react";
import Lottie from "lottie-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import hadf from "../../Public/images/WhatsApp Image 2024-12-31 at 12.40.13 AM.jpeg";
import cov from "../../Public/images/كافر-الموقع-.jpg-8.jpg";
import emailjs from "@emailjs/browser";
import serch from "../../Public/images/man-search.jpg";
import { useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import { FaSchool } from "react-icons/fa";
import { BiSolidSchool } from "react-icons/bi";
import { MdLocalLibrary } from "react-icons/md";
import macq from "../../Public/images/macqq.jpg";
import logo from "../../Public/images/logo-png.png";
import { useTranslation } from "react-i18next";
import meet from "../../Public/images/meet.jpg";
import {
  FaGraduationCap,
  FaGlobe,
  FaUserTie,
  FaBookOpen,
  FaRecycle,
  FaHeart,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { GiLaptop, GiPlanetConquest } from "react-icons/gi";

const images = {
  ar: {
    cover: cov,
    hadf: hadf,
  },
  en: {
    cover: "/images/kon-en.jpg",
  },
  fr: {
    cover: "/images/kon-fr.jpg",
  },
  fa: {
    cover: "/images/kon-fa.jpg",
  },
  tr: {
    cover: "/images/kon-tr.jpg",
  },
  ru: {
    cover: "/images/kon-ru.jpg",
  },
};

const getImage = (lang, type) => {
  return images[lang]?.[type] || defaultImages[type];
};
const KonWakelna = () => {
  const sliderRef = useRef(null);
  const keenSliderRef = useRef(null);
  const keenSliderActiveRef = useRef(null);
  const keenSliderCountRef = useRef(null);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "ar";
  useEffect(() => {
    if (!sliderRef.current) return;

    keenSliderRef.current = new KeenSlider(
      sliderRef.current,
      {
        loop: true,
        defaultAnimation: {
          duration: 750,
        },
        slides: {
          origin: "center",
          perView: 1,
          spacing: 16,
        },
        breakpoints: {
          "(min-width: 640px)": {
            slides: {
              origin: "center",
              perView: 1.5,
              spacing: 16,
            },
          },
          "(min-width: 768px)": {
            slides: {
              origin: "center",
              perView: 1.75,
              spacing: 16,
            },
          },
          "(min-width: 1024px)": {
            slides: {
              origin: "center",
              perView: 3,
              spacing: 16,
            },
          },
        },
        created(slider) {
          slider.slides[slider.track.details.rel].classList.remove(
            "opacity-40"
          );
          keenSliderActiveRef.current.innerText = slider.track.details.rel + 1;
          keenSliderCountRef.current.innerText = slider.slides.length;
        },
        slideChanged(slider) {
          slider.slides.forEach((slide) => slide.classList.add("opacity-40"));
          slider.slides[slider.track.details.rel].classList.remove(
            "opacity-40"
          );
          keenSliderActiveRef.current.innerText = slider.track.details.rel + 1;
        },
      },
      []
    );

    return () => {
      keenSliderRef.current?.destroy();
    };
  }, []);

  const [phone, setPhone] = useState();

  const handleChange = (value) => {
    setPhone(value);
  };
  const [formData, setFormData] = useState({
    companyName: "",
    fullName: "",
    address: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const hhandleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert(t("كلمات المرور غير متطابقة"));
      return;
    }
    const serviceID = "service_m84rlq9"; // استبدل بـ Service ID من EmailJS
    const templateID = "template_ybufs6h"; // استبدل بـ Template ID من EmailJS
    const publicKey = "Jj_D5VUAIl5alBOat"; // استبدل بـ Public Key من EmailJS

    emailjs
      .send(
        serviceID,
        templateID,
        {
          company_name: formData.companyName,
          full_name: formData.fullName,
          address: formData.address,
          email: formData.email,
          phone: formData.phone,
        },
        publicKey
      )
      .then((response) => {
        alert(t("تم إرسال البريد الإلكتروني بنجاح!"));
        console.log("Success:", response.status, response.text);
      })
      .catch((error) => {
        alert(t("حدث خطأ، حاول مرة أخرى."));
        console.error("Error:", error);
      });
  };
  const symptoms = [
    t(
      "التحلي بالشفافية والوضوح في التعامل، مع الالتزام بالمعايير الأخلاقية والمهنية"
    ),
    t("احترام الالتزامات المتفق عليها، بما في ذلك المواعيد والجودة المطلوبة."),
    t("الالتزام بأهداف الشركة واستراتيجياتها."),
    t(
      "شركات وأفراد لديهم حس عالٍ بالمسؤولية ويؤمنون بأهمية العمل الخدمي الطلابي."
    ),
    t("المساهمة في تحقيق أهداف النمو والتوسع."),
  ];
  const tips = [
    { title: t("عمولات تنافسية ومكافآت مغرية"), icon: FaHandHoldingDollar },
    { title: t("سوق تعليمي متنامٍ وفرص غير محدودة"), icon: FaGlobe },
    { title: t("دعم تسويقي شامل"), icon: FaUserTie },
    { title: t("شراكة طويلة الأمد وثقة متبادلة"), icon: FaRecycle },
    {
      title: t("وصول مباشر إلى أفضل الجامعات في تركيا"),
      icon: GiPlanetConquest,
    },
    { title: t("نظام متابعة إلكتروني متطور"), icon: GiLaptop },
  ];

  const testimonials = [
    {
      name: t("مكاتب الخدمات العامة"),
      text: t("مؤسسات تقدم مجموعة واسعة من الخدمات للأفراد والشركات"),
      icon: <MdLocalLibrary className="w-12 h-12 text-[#e67297]" />,
    },
    {
      name: t("معاهد اللغات والتدريب"),
      text: t(
        "عاهد اللغات والتدريب لا تقتصر فقط على الدروس التقليدية، بل توفر أنشطة تفاعلية لتعزيز التعلم وجعل التجربة أكثر متعة وكفاءة"
      ),
      icon: <FaSchool className="w-20 h-12 text-[#e67297]" />,
    },
    {
      name: t("مستشارين اكادمين متميزين"),
      text: t(
        "احصل على التوجيه المثالي لمسارك التعليمي. نساعدك على اتخاذ قرارات صائبة تعزز فرص نجاحك الأكاديمي والمهني"
      ),
      icon: <FaUserCircle className="w-16 h-12 text-[#e67297]" />,
    },
    {
      name: t("شركات الخدمات الطلابية"),
      text: t(
        "مؤسسات متخصصة في تقديم الدعم والمساعدة للطلاب محليًا ودوليًا، بهدف تسهيل رحلتهم التعليمية "
      ),
      icon: <BiSolidSchool className="w-16 h-12 text-[#e67297]" />,
    },
  ];
  return (
    <>
      <div className="flex ">
        <Image
          src={getImage(currentLang, "cover")}
          className=" h-[80vh] pt-8 md:w-full max-sm:pt-16 max-sm:h-[70vh] max-lg:min-w-[80rem] max-sm:max-w-[80rem]  max-sm:object-cover"
          width={500}
          height={200}
        />
      </div>
      <div className="absolute  left-0 w-full h-1/3 bg-[#7a0066c0] clip-path-top">
        <Image
          className="mx-auto mt-8"
          src={logo}
          alt="logo"
          width={200}
          height={40}
          loading="lazy"
        />
      </div>
      <div className="min-h-screen mt-60 flex justify-center bg-[#fff1f157] p-6">
        <div className="max-w-5xl w-full text-center">
          <div className="flex flex-col items-center mb-6">
            <h1 className="text-3xl font-bold text-center mb-6 text-[#7a0066c6] w-fit py-4 px-6 rounded-tl-2xl border border-r-red-900 border-l-red-900 border-b-fuchsia-700 border-t-fuchsia-700 rounded-br-2xl bg-[#eed1e8] mx-auto">
              {t("ماهي")}
              <span className="text-yellow-600"> {t("أهدافنا ؟")}</span>
            </h1>
          </div>

          {/* الشبكة الخاصة بالكروت */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {tips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full h-full p-8 rounded-2xl flex flex-col items-center justify-center shadow-xl shadow-black bg-gradient-to-r from-[#7a0066] via-[#ff9fbd] to-[#7a0066]"
              >
                <tip.icon className="text-6xl mb-4 text-white" />
                <p className="text-2xl font-semibold text-center text-white">
                  {tip.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative w-full h-[30px] z-10 bg-[#6a1d1d57]">
        <div className="absolute right-0 top-0 w-full h-full bg-[length:50px_50px] bg-gradient-to-br from-transparent via-white to-transparent"></div>
      </div>
      <div className="bg-[#fff] flex justify-center items-center py-32 mt-20 px-6">
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-20 items-center">
          <div>
            <Image src={macq} className="h-32 w-32 mr-32 bg-gray-50" />
            <p className="text-gray-600 text-3xl text-center pl-1 ml-20 font-semibold mt-4">
              {t(
                "الاّن يمكنك تحقيق اداء مميز والانتشار في الأنشطة والمجالات الطلابية مع Deva"
              )}
            </p>
          </div>
          <div className="space-y-4 relative">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`bg-white p-4 rounded-lg  cursor-pointer shadow-2xl flex items-center space-x-4 ${
                  index === 0 || 1
                    ? "scale-105  shadow-3xl border-x-4 border-[#7a0066a2]"
                    : ""
                }`}
              >
                {testimonial.icon}
                <div>
                  <h4 className="font-bold pr-3 text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 pr-3 text-sm font-bold">
                    {testimonial.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative w-full h-[30px] z-10 bg-[#6a1d1d57]">
        <div className="absolute right-0 top-0 w-full h-full bg-[length:50px_50px] bg-gradient-to-br from-transparent via-white to-transparent"></div>
      </div>
      <div className="flex justify-center mt-16 items-center text-center h-16 text-5xl  text-fuchsia-950 font-bold max-sm:w-[79rem]">
        <h1 className="text-3xl font-bold flex text-center mb-6 text-[#7a0066c6] w-fit py-4  px-6 rounded-tl-2xl border border-r-red-900 border-l-red-900 border-b-fuchsia-700 border-t-fuchsia-700 rounded-br-2xl  bg-[#eed1e8] mx-auto">
          {t("عن من نبحث")}{" "}
          <p className="text-yellow-500">{t("من الوكلاء؟")} </p>{" "}
        </h1>
      </div>
      <div className="min-h-screen bg-[#fff1f157] flex items-center justify-center p-6">
        <div className="relative max-w-5xl w-full rounded-2xl">
          <div className="relative flex items-center px-6 gap-20 justify-center">
            <div className="w-80 h-60 bg-gradient-to-r from-[#7a0066] via-[#ff9fbd] to-[#7a0066] rounded-full flex items-center justify-center shadow-md">
              <Image
                src={serch}
                alt="المرأة المتألمة"
                className="w-72 h-60 object-cover animate-pulse rounded-full"
              />
            </div>
            <div className="absolute w-full h-full flex justify-around gap-20">
              <div className="flex flex-col -mt-20 items-center gap-32">
                {symptoms.slice(0, 2).map((symptom, index) => (
                  <div
                    key={index}
                    className="w-56 py-2 text-center text-white shadow-2xl px-10 bg-[#ee6892d4] rounded-full shadow-black"
                  >
                    {index + 1}. {symptom}
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center gap-12">
                {symptoms.slice(2, 3).map((symptom, index) => (
                  <div
                    key={index}
                    className="w-56 py-2 mt-[19rem] text-center text-white shadow-2xl px-10 bg-[#ee6892d4] rounded-full shadow-black"
                  >
                    {3}. {symptom}
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center -mt-20 gap-32">
                {symptoms.slice(3).map((symptom, index) => (
                  <div
                    key={index}
                    className="w-56 py-2 text-center  text-white shadow-2xl px-10 bg-[#ee6892d4] rounded-full shadow-black"
                  >
                    {4 + index}. {symptom}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[30px] z-10 bg-[#6a1d1d57]">
        <div className="absolute right-0 top-0 w-full h-full bg-[length:50px_50px] bg-gradient-to-br from-transparent via-white to-transparent"></div>
      </div>

      <div className="min-h-screen flex my-20 items-center max-lg:w-[79rem] justify-between p-6 py-12  rounded-lg max-sm:w-[79rem]">
        <form className="bg-white p-8 rounded-r-lg shadow-2xl w-[50%] space-y-6">
          <h2 className="text-2xl font-bold text-right mb-4">
            {t("معلومات الشركة")}
          </h2>

          {/* اسم الشركة و الوكيل */}
          <div className="flex space-x-4">
            <input
              required
              name="companyName"
              value={formData.companyName}
              onChange={hhandleChange}
              type="text"
              placeholder={t("اسم الشركة أو الوكيل")}
              className="p-3 border border-gray-300 rounded-lg text-gray-800 flex-1 ml-12 text-right"
            />
            <input
              required
              name="fullName"
              value={formData.fullName}
              onChange={hhandleChange}
              type="text"
              placeholder={t("الاسم الكامل")}
              className="p-3 border border-gray-300 rounded-lg text-gray-800 flex-1 text-right"
            />
          </div>

          {/* عنوان الشركة */}
          <div>
            <input
              name="address"
              value={formData.address}
              onChange={hhandleChange}
              type="text"
              placeholder={t("عنوان الشركة")}
              className="p-3 w-full border border-gray-300 text-gray-800 rounded-lg text-right"
            />
          </div>

          {/* معلومات التواصل */}
          <h2 className="text-2xl font-bold text-right">
            {t("معلومات التواصل")}
          </h2>
          <div className="flex space-x-4">
            <input
              type="text"
              name="email"
              required
              value={formData.email}
              onChange={hhandleChange}
              placeholder={t("البريد الإلكتروني")}
              className="p-3 border border-gray-300 rounded-lg flex-1 ml-9 text-gray-800 text-right"
            />
            <PhoneInput
              country={"eg"}
              value={phone}
              onChange={handleChange}
              inputClass="!border !bg-transparent !border-gray-300 !rounded-lg !w-full !h-14 !py-4 !px-4 "
              containerClass="w-full max-w-xs"
            />
          </div>

          {/* كلمة المرور */}
          <h2 className="text-2xl font-bold text-right"> {t("كلمة المرور")}</h2>
          <div className="flex space-x-4">
            <input
              required
              type="password"
              name="password"
              value={formData.password}
              onChange={hhandleChange}
              placeholder={t("إدخال كلمة المرور")}
              className="p-3 border border-gray-300 ml-6 rounded-lg flex-1 text-gray-800 text-right"
            />
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={hhandleChange}
              required
              placeholder={t("تأكيد كلمة المرور")}
              className="p-3 border border-gray-300 rounded-lg text-gray-800 flex-1 text-right"
            />
          </div>

          {/* زر الإرسال */}
          <button
            type="submit"
            value={sendEmail}
            className="w-full bg-[#7a0066c0] text-white p-3 rounded-lg hover:bg-[#7a0066fa] transition"
          >
            {t("إرسال الآن")}
          </button>

          {/* رابط تسجيل الدخول */}
        </form>
        <div className="w-full md:w-1/2 flex justify-center shadow-2xl">
          <div className="relative w-full h-full">
            <Image
              src={meet}
              alt="Background"
              className="w-full h-[82vh] object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-[#e789a7] bg-opacity-70 rounded-l-2xl"></div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default KonWakelna;
