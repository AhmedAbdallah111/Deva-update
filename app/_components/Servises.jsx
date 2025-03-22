import { motion } from "framer-motion";
import {
  FaUniversity,
  FaBookOpen,
  FaRegClipboard,
  FaGift,
  FaLightbulb,
  FaIdCard,
  FaUserCheck,
  FaMobileAlt,
  FaPlaneArrival,
  FaWallet,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import macq from "../../Public/images/macq-ser.jpg"; // تأكد من المسار الصحيح للصورة

const Servises = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "ar";

  const steps = [
    { icon: <FaUniversity />, text: t("القبول الجامعي المجاني") },
    { icon: <FaBookOpen />, text: t("الاستشارات التعليمية المجانية") },
    { icon: <FaRegClipboard />, text: t("خدمة المتابعة المجانية") },
    { icon: <FaGift />, text: t("باقة مجانية بقيمة 1000 دولار") },
    { icon: <FaLightbulb />, text: t("نصائح للتأقلم مع الثقافة التركية") },
    { icon: <FaIdCard />, text: t("اصدار الإقامة الطلابية") },
    { icon: <FaUserCheck />, text: t("تجربة تسجيل ميسرة") },
    { icon: <FaMobileAlt />, text: t("خط جوال مجاني") },
    { icon: <FaPlaneArrival />, text: t("خدمة الاستقبال من المطار") },
    { icon: <FaWallet />, text: t("فتح حساب بنكي للطلاب") },
  ];

  return (
    <>
      <div className="relative w-full -mb-5 h-[30px] z-10 bg-[#6a1d1d2e]">
        <div className="absolute right-0 top-0 w-full h-full bg-[length:50px_50px] bg-gradient-to-br from-transparent via-[#fff] to-transparent"></div>
      </div>

      <div className="flex flex-col items-center bg-[#dcc0c02c] py-32 p-6">
        <h1 className="text-3xl font-bold flex text-center mb-8 text-[#7a0066c6] w-fit py-4 px-6 rounded-tl-2xl border border-r-red-900 border-l-red-900 border-b-fuchsia-700 border-t-fuchsia-700 rounded-br-2xl bg-[#eed1e8] mx-auto">
          {t("بعض خدمتنا الطلابية")}
        </h1>

        <div className="flex mb-10">
          <Image
            src={macq}
            className="w-40 -mt-12 py-6 transform scale-x-[-1]"
            alt="macq"
          />
          <Image src={macq} className="w-40 -mt-12 py-6" alt="macq" />
        </div>

        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 1, duration: 0.5 }} // التأخير هنا
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-[#9fffb13f] text-[#7a0066] text-3xl rounded-full border-4 border-[#7a00663f]">
                {step.icon}
              </div>
              <div className="mt-6 text-gray-600 text-center font-medium text-lg">
                {step.text}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Servises;
