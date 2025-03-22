"use client";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import cover from "../../Public/images/كافر-7.jpg";

const sections = [
  {
    id: 1,
    title: "تخصص التمريض في تركيا",
    subtitle: "بناء مستقبل مهني ناجح",
    description:
      "يُعَدُّ تخصص التمريض في تركيا من المجالات التي تحظى بإقبال كبير نظرًا للجودة العالية للتعليم والتدريب العملي المكثف الذي تقدمه الجامعات. تُقدِّم الجامعات التركية برامج متطورة تُركز على المهارات السريرية، الأخلاقيات المهنية، واستخدام التكنولوجيا الحديثة في الرعاية الصحية، مما يضمن تأهيل الخريجين لسوق العمل محليًا ودوليًا.",
  },
  {
    id: 2,
    title: "مميزات دراسة التمريض في تركيا",
    subtitle: "تعليم ذو جودة عالية واعتراف دولي بالشهادات",
    description:
      "يتم تدريب الطلاب في مستشفيات ومراكز صحية متطورة، مما يُساعدهم على اكتساب الخبرة العملية اللازمة لمزاولة المهنة فور التخرج تعتمد الجامعات التركية على مناهج تعليمية حديثة تشمل الجوانب النظرية والتطبيقية، مع فرص تدريب سريري مكثف في المستشفيات والمراكز الصحية وتحظى كليات التمريض في تركيا بترتيب جيد عالميًا، مما يجعل الشهادة مُعتمدة في مختلف الدول، خاصة في أوروبا والشرق الأوسط",
  },
  {
    id: 3,
    title: "مدة الدراسة واللغة",
    subtitle: "توفير اسهل الطرق للدراسة",
    description:
      " دراسة التمريض في تركيا أربع سنوات، وقد يُضاف إليها سنة تحضيرية في حال كانت الدراسة بلغة غير لغة الطالب. تُقدِّم بعض الجامعات البرامج باللغة التركية أو الإنجليزية، مما يُتيح للطلاب فرصة اختيار اللغة التي تناسبهم يحظى خريجو التمريض في تركيا بفرص عمل واسعة، حيث يُمكنهم العمل في المستشفيات الحكومية والخاصة والمراكز الصحية والعيادات والمؤسسات البحثية والمختبرات الطبية والعمل الدولي في أوروبا والشرق الأوسط نظرًا للاعتراف بشهاداتهم",
  },
];

const Detalis = () => {
  const controls = useAnimation();
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const sectionElements = document.querySelectorAll(".section");
      sectionElements.forEach((section, index) => {
        const { offsetTop, clientHeight } = section;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + clientHeight
        ) {
          setVisibleIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Image
        src={cover}
        className="max-sm:h-[60vh] max-sm:min-w-[80rem] pt-12 max-lg:min-w-[80rem] max-lg:pt-10"
      />
      <h1 className=" text-3xl font-bold mx-auto tracking-wide rounded-tl-2xl mt-28 border border-dashed  border-r-red-900 border-l-red-900 border-b-fuchsia-700 border-t-fuchsia-700 rounded-br-2xl text-center items-center max-lg:w-[40rem] max-lg:mr-80 text-[#7A0066CB] bg-[#eed1e8] w-2/4 p-2">
        نظرة عامة عن التخصص داخل الجامعات التركية
      </h1>
      <hr className=" my-2" />
      <div className="min-h-screen bg-[#6a1d1d2e] text-gray-900 p-6">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="section bg-[#fff] shadow-2xl py-6 pl-16 rounded-2xl grid grid-cols-12 gap-4 mt-10"
            initial={{ opacity: 0 }}
            animate={visibleIndex === index ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="col-span-3 bg-[#7a0066] text-white py-16  flex flex-col items-center">
              <motion.div className="text-7xl font-bold">
                0{section.id}
              </motion.div>
            </div>
            <div className="col-span-9 mr-12 pt-6">
              <motion.h2 className="text-3xl text-yellow-600 font-semibold">
                {section.title}
              </motion.h2>
              <p className="text-gray-600 text-lg font-semibold mt-2">
                {section.subtitle}
              </p>
              <motion.p className="mt-4 text-gray-700 leading-relaxed">
                {section.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className=" mx-auto flex flex-col lg:flex-row-reverse gap-6 p-6 bg-gray-100 min-h-screen">
        <div className="w-full bg-white p-4 rounded-lg shadow-lg text-right mb-4">
          <h3 className="text-xl font-bold text-[#7a0066]">
            التمريض (إنجليزي)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
            <p>
              <span className="font-semibold">المستوى:</span> بكالوريوس
            </p>
            <p>
              <span className="font-semibold">TR-NQF-HE:</span> المستوى 6
            </p>
            <p>
              <span className="font-semibold">QF-EHEA:</span> الدورة الأولى
            </p>
            <p>
              <span className="font-semibold">EQF-LLL:</span> المستوى 6
            </p>
          </div>
        </div>
        {/* الجدول */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full lg:w-3/4">
          <h2 className="text-2xl font-bold mb-4 text-[#7a0066]">
            هيكل الدورة مع الساعات
          </h2>
          <h1 className="bg-[#7a006640] text-gray-800 py-2 pr-2 text-xl font-medium">
            الفصل الدراسي الاول{" "}
          </h1>
          <table className="w-full mb-12 border-collapse border border-gray-800 text-right">
            <thead>
              <tr className="bg-[#7a0066] text-white">
                <th className="border p-3">رمز المادة</th>
                <th className="border p-3">اسم المادة</th>
                <th className="border p-3">اللغة</th>
                <th className="border p-3">نظري</th>
                <th className="border p-3">عملي</th>
                <th className="border p-3">الساعات</th>
                <th className="border p-3">ECTS</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border">
                <td className="border p-3">ENG1003</td>
                <td className="border p-3">
                  مهارات الاتصال والتقارير الأكاديمية 1
                </td>
                <td className="border p-3">إنجليزي</td>
                <td className="border p-3">2</td>
                <td className="border p-3">2</td>
                <td className="border p-3">3</td>
                <td className="border p-3">4</td>
              </tr>
              <tr className="border">
                <td className="border p-3">HST1001</td>
                <td className="border p-3">
                  مبادئ أتاتورك وتاريخ الجمهورية التركية 1
                </td>
                <td className="border p-3">إنجليزي</td>
                <td className="border p-3">2</td>
                <td className="border p-3">0</td>
                <td className="border p-3">2</td>
                <td className="border p-3">2</td>
              </tr>
              <tr className="border">
                <td className="border p-3">NTD1105</td>
                <td className="border p-3">علم الأحياء الطبي وعلم الوراثة</td>
                <td className="border p-3">إنجليزي</td>
                <td className="border p-3">2</td>
                <td className="border p-3">0</td>
                <td className="border p-3">2</td>
                <td className="border p-3">4</td>
              </tr>
              <tr className="border">
                <td className="border p-3">NUR1001</td>
                <td className="border p-3">مقدمة في التمريض</td>
                <td className="border p-3">إنجليزي</td>
                <td className="border p-3">2</td>
                <td className="border p-3">0</td>
                <td className="border p-3">2</td>
                <td className="border p-3">5</td>
              </tr>
              <tr className="border">
                <td className="border p-3">NUR1003</td>
                <td className="border p-3">علم وظائف الأعضاء</td>
                <td className="border p-3">إنجليزي</td>
                <td className="border p-3">2</td>
                <td className="border p-3">0</td>
                <td className="border p-3">2</td>
                <td className="border p-3">4</td>
              </tr>
              <tr className="border">
                <td className="border p-3">NUR1005</td>
                <td className="border p-3">التشريح 1</td>
                <td className="border p-3">إنجليزي</td>
                <td className="border p-3">2</td>
                <td className="border p-3">2</td>
                <td className="border p-3">3</td>
                <td className="border p-3">6</td>
              </tr>
              <tr className="border">
                <td className="border p-3">NUR1007</td>
                <td className="border p-3">الكيمياء الحيوية</td>
                <td className="border p-3">إنجليزي</td>
                <td className="border p-3">2</td>
                <td className="border p-3">0</td>
                <td className="border p-3">2</td>
                <td className="border p-3">3</td>
              </tr>
              <tr className="border">
                <td className="border p-3">TLL1003</td>
                <td className="border p-3">اللغة التركية وآدابها 1</td>
                <td className="border p-3">تركي</td>
                <td className="border p-3">2</td>
                <td className="border p-3">0</td>
                <td className="border p-3">2</td>
                <td className="border p-3">2</td>
              </tr>
            </tbody>
          </table>
          <h1 className="bg-[#7a006640] text-gray-800 py-2 pr-2 text-xl font-medium">
            الفصل الدراسي الثاني{" "}
          </h1>

          <table className="w-full border-collapse border border-gray-800 text-right">
            <thead>
              <tr className="bg-[#7a0066] text-white">
                <th className="border p-3">رمز المادة</th>
                <th className="border p-3">اسم المادة</th>
                <th className="border p-3">اللغة</th>
                <th className="border p-3">نظري</th>
                <th className="border p-3">عملي</th>
                <th className="border p-3">الساعات</th>
                <th className="border p-3">ECTS</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border">
                <td className="border p-3">ENG1003</td>
                <td className="border p-3">
                  مهارات الاتصال والتقارير الأكاديمية 1
                </td>
                <td className="border p-3">إنجليزي</td>
                <td className="border p-3">2</td>
                <td className="border p-3">2</td>
                <td className="border p-3">3</td>
                <td className="border p-3">4</td>
              </tr>
              <tr className="border">
                <td className="border p-3">HST1001</td>
                <td className="border p-3">
                  مبادئ أتاتورك وتاريخ الجمهورية التركية 1
                </td>
                <td className="border p-3">إنجليزي</td>
                <td className="border p-3">2</td>
                <td className="border p-3">0</td>
                <td className="border p-3">2</td>
                <td className="border p-3">2</td>
              </tr>
              <tr className="border">
                <td className="border p-3">NTD1105</td>
                <td className="border p-3">علم الأحياء الطبي وعلم الوراثة</td>
                <td className="border p-3">إنجليزي</td>
                <td className="border p-3">2</td>
                <td className="border p-3">0</td>
                <td className="border p-3">2</td>
                <td className="border p-3">4</td>
              </tr>
              <tr className="border">
                <td className="border p-3">NUR1001</td>
                <td className="border p-3">مقدمة في التمريض</td>
                <td className="border p-3">إنجليزي</td>
                <td className="border p-3">2</td>
                <td className="border p-3">0</td>
                <td className="border p-3">2</td>
                <td className="border p-3">5</td>
              </tr>
              <tr className="border">
                <td className="border p-3">NUR1003</td>
                <td className="border p-3">علم وظائف الأعضاء</td>
                <td className="border p-3">إنجليزي</td>
                <td className="border p-3">2</td>
                <td className="border p-3">0</td>
                <td className="border p-3">2</td>
                <td className="border p-3">4</td>
              </tr>
              <tr className="border">
                <td className="border p-3">NUR1005</td>
                <td className="border p-3">التشريح 1</td>
                <td className="border p-3">إنجليزي</td>
                <td className="border p-3">2</td>
                <td className="border p-3">2</td>
                <td className="border p-3">3</td>
                <td className="border p-3">6</td>
              </tr>
              <tr className="border">
                <td className="border p-3">NUR1007</td>
                <td className="border p-3">الكيمياء الحيوية</td>
                <td className="border p-3">إنجليزي</td>
                <td className="border p-3">2</td>
                <td className="border p-3">0</td>
                <td className="border p-3">2</td>
                <td className="border p-3">3</td>
              </tr>
              <tr className="border">
                <td className="border p-3">TLL1003</td>
                <td className="border p-3">اللغة التركية وآدابها 1</td>
                <td className="border p-3">تركي</td>
                <td className="border p-3">2</td>
                <td className="border p-3">0</td>
                <td className="border p-3">2</td>
                <td className="border p-3">2</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* الكارد */}
        <div className="bg-white sticky top-20  p-6 rounded-lg shadow-lg w-full lg:w-1/4 flex flex-col items-center text-center">
          <Image
            src="/images/esaaf-removebg-preview.png"
            alt="صورة التخصص"
            width={200}
            height={200}
            className="mb-4 rounded-lg"
          />
          <p className="text-xl font-bold  text-[#7a0066]">
            {" "}
            تفاصيل البرنامج الدراسي
          </p>
          <div className="mt-4 w-full text-gray-800 text-right text-lg">
            <p className="border-b py-2">
              <span className="font-semibold">المدة:</span> 4 سنوات
            </p>
            <p className="border-b py-2">
              <span className="font-semibold">اللغة:</span> إنجليزي
            </p>
            <p className="py-2">
              <span className="font-semibold">المستوى:</span> بكالوريوس
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detalis;
