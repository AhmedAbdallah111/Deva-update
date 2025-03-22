"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Coursel = () => {
  const { t } = useTranslation();

  const categories = [
    { id: "all", name: "الكل" },
    { id: "diploma", name: "الدبلومة" },
    { id: "bachelor", name: "البكالوريوس" },
    { id: "master", name: "الماجستير" },
    { id: "phd", name: "الدكتوراه" },
  ];

  const images = {
    diploma: [
      { src: "/images/التمريض-موقع.jpg", title: t("التمريض"), type: "medical" },
      {
        src: "/images/fam-removebg-preview.png",
        title: t("صحة الفم والاسنان"),
        type: "medical",
      },
      {
        src: "/images/kalya-removebg-preview.png",
        title: t("غسيل الكلي"),
        type: "medical",
      },
      {
        src: "/images/esaaf-removebg-preview.png",
        title: t(" الاسعافات الاولية"),
        type: "medical",
      },
      {
        src: "/images/doc-takhader-removebg-preview.png",
        title: "التخدير",
        type: "medical",
      },
      {
        src: "/images/tahlel-removebg-preview.png",
        title: "تقنيات المخابر الطبية",
        type: "medical",
      },
      {
        src: "/images/basaryat.jpg",
        title: "البصريات",
        type: "medical",
      },
      {
        src: "/images/mogohrat-removebg-preview.png",
        title: "تصميم المجوهرات",
        type: "engineering",
      },
      {
        src: "/images/masrfya-removebg-preview.png",
        title: "المصرفية والتأمين",
        type: "business",
      },
      {
        src: "/images/debloma-bus-removebg-preview.png",
        title: "ادارة الاعمال",
        type: "business",
      },
    ],
    bachelor: [
      { src: "/images/saydala.jpg", title: t("صيدلة"), type: "medical" },
      { src: "/images/asnan.jpg", title: "طب الأسنان", type: "medical" },
      { src: "/images/basry.jpg", title: "طب بشري", type: "medical" },
      {
        src: "/images/علاج-موقع.jpg",
        title: " العلاج الطبيعي",
        type: "medical",
      },
      {
        src: "/images/takzya.jpg",
        title: "  التغذية والحمية",
        type: "medical",
      },
      {
        src: "/images/handsaTaby.jpg",
        title: "الهندسة الطبية",
        type: "engineering",
      },
      {
        src: "/images/zakaasany.jpg",
        title: "الذكاء الاصطناعي",
        type: "engineering",
      },
      {
        src: "/images/mekaatros.jpg",
        title: "هندسة الميكاترونكس",
        type: "engineering",
      },
      {
        src: "/images/handsa tayran.jpg",
        title: "هندسة الطيران",
        type: "engineering",
      },
      {
        src: "/images/WhatsApp Image 2025-01-16 at 11.42.01 PM.jpeg",
        title: "هندسة الفضاء",
        type: "engineering",
      },

      {
        src: "/images/barmga.jpg",
        title: "هندسة البرمجيات",
        type: "engineering",
      },
      {
        src: "/images/WhatsApp Image 2025-01-16 at 11.42.07 PM.jpeg",
        title: "هندسة المناظر الطبعية",
        type: "engineering",
      },
      {
        src: "/images/WhatsApp Image 2025-01-16 at 11.42.02 PM.jpeg",
        title: "الهندسة الغذاائية",
        type: "engineering",
      },
      {
        src: "/images/WhatsApp Image 2025-01-16 at 11.42.02 PM (2).jpeg",
        title: "هندسة الكهرباء والالكترونيات",
        type: "engineering",
      },
      {
        src: "/images/c.jpg",
        title: "هندسة السيارات",
        type: "engineering",
      },
      {
        src: "/images/mekaneka.jpg",
        title: "هندسة الميكانيكا",
        type: "engineering",
      },
      {
        src: "/images/emara.jpg",
        title: "هندسة المعمار",
        type: "engineering",
      },
      {
        src: "/images/tasmem.jpg",
        title: "هندسة التصميم",
        type: "engineering",
      },
      {
        src: "/images/handsaKemya.jpg",
        title: "هندسة الكمياء",
        type: "engineering",
      },
      {
        src: "/images/التجارة-الدولية.jpg",
        title: " التجارة الدولية",
        type: "business",
      },
      {
        src: "/images/kadmatlag.jpg",
        title: "ادارة الخدمات اللوجستية",
        type: "business",
      },
      {
        src: "/images/امن-المعلومات.jpg",
        title: "امن المعلومات",
        type: "business",
      },
      {
        src: "/images/nzm.jpg",
        title: "نظم المعلومات الادارية",
        type: "business",
      },
      {
        src: "/images/edaraHandsa.jpg",
        title: "الادارة الهندسية",
        type: "business",
      },
      {
        src: "/images/edara2.jpg",
        title: "الادارة الرياضية",
        type: "business",
      },
      {
        src: "/images/ادارة-الاعمال.jpg",
        title: "ادارة الاعمال",
        type: "business",
      },
      {
        src: "/images/edara1.jpeg",
        title: "الادراة الطبية",
        type: "business",
      },
    ],
    master: [
      {
        src: "/images/debloma-bus-removebg-preview.png",
        title: "ادارة الاعمال",
        type: "business",
      },
      { src: "/img8.jpg", title: "هندسة كهربائية", type: "engineering" },
    ],
    phd: [
      {
        src: "/images/debloma-bus-removebg-preview.png",
        title: "ادارة الاعمال",
        type: "business",
      },
    ],
  };

  const [activeCategory, setActiveCategory] = useState("all");

  const getImages = () => {
    let selectedImages =
      activeCategory === "all"
        ? Object.values(images).flat()
        : images[activeCategory] || [];

    // إزالة التكرار باستخدام Set بناءً على العنوان
    const uniqueImages = [];
    const seenTitles = new Set();

    selectedImages.forEach((item) => {
      if (!seenTitles.has(item.title)) {
        seenTitles.add(item.title);
        uniqueImages.push(item);
      }
    });

    // تصنيف الصور حسب المجال
    const groupedByType = {};
    uniqueImages.forEach((item) => {
      if (!groupedByType[item.type]) {
        groupedByType[item.type] = [];
      }
      groupedByType[item.type].push(item);
    });

    // إنشاء قائمة مرتبة تحتوي على العناوين والمحتوى
    return Object.keys(groupedByType).flatMap((type) => [
      {
        type: "header",
        title:
          type === "medical"
            ? "التخصصات الطبية"
            : type === "engineering"
            ? "التخصصات الهندسية"
            : type === "business"
            ? "التخصصات الإدارية"
            : type === "literary"
            ? "التخصصات الأدبية والتربوية"
            : "التخصصات العامة",
      },
      ...groupedByType[type],
    ]);
  };

  return (
    <div className="flex mb-56">
      {/* Sidebar */}
      <div className="w-1/5 h-[100vh] shadow-lg bg-gradient-to-b from-[#e8b2c3] to-[#f6f4f5] text-center border-r-8 border-[#e8b2c3] rounded-l-3xl text-2xl font-semibold text-gray-700 p-5 pr-0 space-y-6 sticky top-0">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`block w-full p-3 text-center rounded-l-full transition-all duration-300 ${
              activeCategory === category.id
                ? "bg-[#7a0066] text-white shadow-md scale-105"
                : "hover:bg-[#a35b7a] hover:text-white"
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Images Section */}
      <div className="flex-1 grid grid-cols-3 mr-5 bg-gradient-to-b from-[#f6f4f5] to-[#a19b9a10] gap-12 gap-y-16 p-5 rounded-xl shadow-md">
        {getImages().map((item, index) =>
          item.type === "header" ? (
            <div
              key={index}
              className="col-span-3 bg-[#eed1e8] py-2 rounded-3xl text-2xl font-bold text-[#7a0066] text-center my-4"
            >
              {item.title}
            </div>
          ) : (
            <div
              key={index}
              className="text-center  transform transition duration-300 hover:scale-105"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-72 h-56 rounded-lg rounded-b-none border border-[#7a00663e] shadow-xl transition duration-300 hover:shadow-2xl"
              />
              {/* اسم التخصص */}
              <p className="text-lg w-72 rounded-lg rounded-b-none rounded-t-none text-center py-2 font-semibold text-white bg-gradient-to-r from-[#b83280] to-[#7a0066] shadow-md">
                {item.title}
              </p>
              {/* زر اقرأ المزيد بنفس الخلفية */}
              <a
                href="../takass/details"
                className="flex items-center justify-center cursor-pointer w-72 py-2 text-white font-semibold bg-gradient-to-r from-[#b83280] to-[#7a0066] rounded-b-xl shadow-md transition duration-300 hover:from-[#7a0066] hover:to-[#45193d]"
              >
                اقرأ المزيد
                <span className="text-xl text-white">➡️</span>
              </a>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Coursel;
