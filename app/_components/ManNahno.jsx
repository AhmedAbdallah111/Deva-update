"use client";
import Image from "next/image";
import logo from "../../Public/images/logo-png.png";
import { useTranslation } from "react-i18next";
import gapi from "../../Public/images/gapi.jpg";
import { motion } from "framer-motion";

const ManNahno = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="relative w-full -mb-5 h-[30px] z-10 bg-[#6a1d1d2e]">
        <div className="absolute right-0 top-0 w-full h-full bg-[length:50px_50px] bg-gradient-to-br from-transparent via-white to-transparent"></div>
      </div>
      <div className="relative w-full h-screen flex flex-col lg:flex-row items-center justify-between px-8 lg:px-20 py-10">
        {/* القسم الأول: النصوص */}
        <motion.div
          initial={{ opacity: 0, x: 100 }} // يبدأ من خارج الشاشة (يمين)
          whileInView={{ opacity: 1, x: 0 }} // يظهر عند التمرير
          transition={{ duration: 0.8, ease: "easeOut" }} // حركة سلسة
          viewport={{ amount: 0.2 }} // التفاعل عند ظهور 20% من العنصر
          className="lg:w-2/3 text-right mt-72"
        >
          <h1 className="text-5xl mt-20 font-bold text-[#7a0066c6]">
            {t("من هم Deva Education؟")}
          </h1>

          <p className="text-gray-500 pt-4 text-lg pl-4 mb-20 leading-7 font-semibold mt-4">
            {t(
              "تأسست Deva Education عام 2018 برؤية حديثة تهدف إلى إحداث نقلة نوعية في مجال الإرشاد الأكاديمي الدولي، من خلال تمكين الطلاب من اتخاذ قرارات واعية ومدروسة بشأن مسارهم التعليمي في تركيا. تؤمن Deva Education بأن التعليم هو مفتاح النجاح، لذا تقدم خدمات متكاملة تبدأ من التوجيه الأكاديمي الشخصي، مرورًا بمساعدة الطلاب في اختيار البرامج والجامعات التي تتناسب مع تطلعاتهم، وصولًا إلى تسهيل إجراءات التسجيل والإقامة في تركيا. ما يميز Deva Education هو التزامها بالابتكار والتحديث المستمر، حيث تقدم برامج إرشادية مصممة خصيصًا لتلبية احتياجات الطلاب، إضافة إلى تنظيم ورش عمل تدريبية وجلسات توجيه فردية تهدف إلى تطوير مهارات الطلاب الأكاديمية والشخصية. منذ انطلاقتها، ساعدت الشركة مئات الطلاب الدوليين في تحقيق أحلامهم الأكاديمية، بفضل شراكاتها القوية مع أبرز الجامعات التركية، وتقديمها فرصًا تعليمية مميزة تشمل منحًا وخصومات حصرية لجميع المراحل الدراسية."
            )}
          </p>
        </motion.div>

        {/* القسم الثاني: الصورة */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src={gapi}
            alt="Noug Product"
            className="max-w-md mr-[65%]  w-96 lg:max-w-lg"
          />
        </div>

        {/* منحنى الخلفية العلوي */}
      </div>
      <div className="relative w-full h-[30px] mt-16 z-10 bg-[#6a1d1d2e]">
        <div className="absolute right-0 top-0 w-full h-full bg-[length:50px_50px] bg-gradient-to-br from-transparent via-white to-transparent"></div>
      </div>
    </>
  );
};

export default ManNahno;
