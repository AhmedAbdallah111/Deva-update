"use client";
import React, { useState } from "react";
import { FcSearch } from "react-icons/fc";
import { useTranslation } from "react-i18next";

const Dropdown = ({ options, selected, setSelected, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full md:w-1/3">
      <button
        onClick={toggleMenu}
        className="flex items-center w-full py-3 text-center rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-300 font-bold text-xl justify-center text-gray-600 hover:bg-gray-100 focus:outline-none"
      >
        {selected || <span className="text-sm md:text-lg">{placeholder}</span>}
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-56 overflow-y-auto z-[9999]">
          <ul className="py-1">
            {options.map((option, index) => (
              <li key={index}>
                <button
                  onClick={() => handleOptionClick(option)}
                  className="block px-6 py-4 text-[17px] text-gray-700 hover:bg-blue-100 w-full text-right transition-colors duration-200"
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Search = () => {
  const { t } = useTranslation();
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("");
  const [selectedLang, setSelectedLang] = useState("");

  const specialties = [
    t("الطب البشري"),
    t("الصيدلة"),
    t("طب الاسنان"),
    t("العلاج الطبيعي"),
    t("التمريض"),
    t("التخدير"),
    t("الاسعافات الاولية"),
    t("التغذية"),
    t("الهندسة الطبية"),
    t("هندسة المعمار"),
    t("هندسة الميكاترونكس"),
    t("هندسة الميكانيكا"),
    t("هندسة التصميم الداخلي"),
    t("الهندسة الصناعية"),
    t("هندسة السيارات"),
    t("هندسة الفضاء"),
    t("الهندسة الكميائية"),
    t("هندسة البرمجيات"),
    t("هندسة الذكاء الاصطناعي"),
    t("هندسة الكهرباء والاكترونيات"),
    t("هندسة المناظر الطبيعية"),
    t("الادارة الهندسية"),
    t("ادارة الاعمال"),
    t("اداره الخدمات اللوجستية"),
    t("امن المعلومات"),
    t("نظم المعلومات الادارية"),
    t("المسرح"),
    t("الموسيقي"),
    t("معلم الرياضيات"),
    t("معلم الكمياء"),
    t("تنمية الطفل"),
    t("الترجمة"),
    t("الصحافة"),
    t("الدعاية والاعلان"),
    t("تصميم الازياء"),
    t("تصميم الجرافيك"),
    t("الطيران"),
  ];

  const programs = [
    t("برنامج الماجستير"),
    t("برنامج البكالوريوس"),
    t("برنامج الدبلوم"),
    t("برنامج الدكتوراة"),
  ];
  const lang = [t("اللغة التركية"), t("اللغة الإنجليزية")];

  return (
    <>
      <div className="flex mb-24 flex-col md:flex-row mt-9 gap-6 items-center rounded-full w-11/12 md:w-10/12 h-auto md:h-28 z-50 border-4 border-[#7a0066c6] opacity-95 mx-auto py-12 px-6 md:px-16 bg-[#dddddd31] shadow-2xl">
        <Dropdown
          options={programs}
          selected={selectedProgram}
          setSelected={setSelectedProgram}
          placeholder={t("ابحث عن البرنامج الدراسي...🔎")}
        />
        <Dropdown
          options={lang}
          selected={selectedLang}
          setSelected={setSelectedLang}
          placeholder={t("ابحث عن لغة الدراسة...🔎")}
        />
        <Dropdown
          options={specialties}
          selected={selectedSpecialty}
          setSelected={setSelectedSpecialty}
          placeholder={t("ابحث عن تخصصك...🔎")}
        />
        <b className="text-[#7a0066c6] h-16 text-5xl">|</b>
        <a
          href={
            selectedProgram && selectedLang && selectedSpecialty
              ? "../search"
              : "#"
          }
          className={`bg-white rounded-full p-2 ${
            selectedProgram && selectedLang && selectedSpecialty
              ? "hover:bg-blue-500 hover:text-white transition-colors duration-300"
              : "opacity-50 cursor-not-allowed"
          }`}
          onClick={(e) => {
            if (!selectedProgram || !selectedLang || !selectedSpecialty) {
              e.preventDefault();
              alert(
                t(
                  "يرجى اختيار البرنامج الدراسي، لغة الدراسة، والتخصص قبل البحث!"
                )
              );
            }
          }}
        >
          <FcSearch className="size-16 px-2 animate-bounce mt-2 hover:cursor-pointer" />
        </a>
      </div>
    </>
  );
};

export default Search;
