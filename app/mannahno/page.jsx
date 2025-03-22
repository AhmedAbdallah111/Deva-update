"use client";
import AOS from "aos";
import { useEffect } from "react";

import "aos/dist/aos.css";
import Image from "next/image";
import cover from "../../Public/images/man.jpg";
import logo from "../../Public/images/logo-png.png";
import gapi from "../../Public/images/gapi.jpg";
import {
  FaGraduationCap,
  FaGlobe,
  FaUserTie,
  FaBookOpen,
  FaRecycle,
  FaHeart,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { GiTeamIdea } from "react-icons/gi";
import { SiPrefect } from "react-icons/si";
import { IoSchoolOutline } from "react-icons/io5";

import {
  FaHandHoldingHand,
  FaHandshakeSimple,
  FaHandsPraying,
} from "react-icons/fa6";
import { FiTrendingUp } from "react-icons/fi";
import trk from "../../Public/images/lmaza.jpg";

import Contact from "../_components/Contact";
import coveren from "../../Public/images/mannahno-en.jpg";
import coverfa from "../../Public/images/mannahno-fa.jpg";
import coverfr from "../../Public/images/mannahno-fr.jpg";
import covertr from "../../Public/images/mannahno-tr.jpg";
import coverru from "../../Public/images/mannahno-ru.jpg";
const images = {
  ar: {
    cover: cover,
  },
  en: {
    cover: coveren,
  },
  fr: {
    cover: coverfr,
  },
  fa: {
    cover: coverfa,
  },
  tr: {
    cover: covertr,
  },
  ru: {
    cover: coverru,
  },
};

const tips = [
  { title: "تمكين الطلاب أكاديميًا وثقافيًا", icon: FaGraduationCap },
  { title: "تأسيس اكبر هوية تعليمية عالمية", icon: FaGlobe },
  { title: "دعم تطوير المهارات الشخصية والقيادية", icon: FaUserTie },
  { title: "المساهمة في بناء مجتمع معرفي", icon: FaBookOpen },
  { title: "الاستدامة والمسؤولية المجتمعية", icon: FaRecycle },
];
const getImage = (lang, type) => {
  return images[lang]?.[type] || defaultImages[type];
};
import { useTranslation } from "react-i18next";
const mannahno = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "ar";
  useEffect(() => {
    AOS.init({
      duration: 800, // مدة التأثير
      once: true, // ظهور العنصر مرة واحدة فقط
    });
  }, []);
  const steps = [
    {
      id: 1,
      title: t("الثقة والاحترام المتبادل"),
      description: t(
        t("تبني علاقات قوية مع الطلاب تعتمد على الثقة، الاحترام، والمسؤولية")
      ),
      icon: <FaHandshakeSimple />,
    },
    {
      id: 2,
      title: t("النمو المستمر"),
      description: t(
        "تشجع على التعلم المستمر وتطوير مهارات الطلاب والمعلمين على حد سواء"
      ),
      icon: <FaHandsPraying />,
    },
    {
      id: 3,
      title: t("المسؤولية والالتزام"),
      description: t(
        "تحمل المسؤولية والالتزام بتقديم أفضل ما يمكن لضمان نجاح الطلاب في مسيرتهم التعليمية"
      ),
      icon: <FaHandHoldingHand />,
    },
    {
      id: 4,
      title: t("الابتكار"),
      description: t(
        "تسعى الشركة إلى تبني أساليب تعليمية حديثة ومبتكرة لضمان تجربة تعليمية متميزة"
      ),
      icon: <GiTeamIdea />,
    },
  ];
  const stepss = [
    {
      id: 5,
      title: t("النزاهة"),
      description: t(
        t("تعمل الشركة بصدق وشفافية في جميع تعاملاتها مع الطلاب والشركاء")
      ),
      icon: <FaHeart />,
    },
    {
      id: 6,
      title: t("الاستدامة"),
      description: t(
        "تسعى الشركة إلى تحقيق الاستدامة في تقديم التعليم والموارد بطريقة تواكب تطورات العصر"
      ),
      icon: <IoSchoolOutline />,
    },
    {
      id: 7,
      title: t("الالتزام بالجودة"),
      description: t(
        "تضمن الشركة تقديم خدمات تعليمية ذات معايير عالية تلبي احتياجات الطلاب"
      ),
      icon: <SiPrefect />,
    },
    {
      id: 8,
      title: t("الدعم الشامل"),
      description: t(
        "توفر بيئة تعليمية داعمة تساعد الطلاب على التفوق الأكاديمي والنمو الشخص"
      ),
      icon: <FiTrendingUp />,
    },
  ];
  const visibleSteps = steps.slice(0, 4);
  const visibleStepss = stepss.slice(0, 4);

  return (
    <>
      <Image
        src={getImage(currentLang, "cover")}
        className=" h-[90vh] pt-16 md:w-full max-sm:pt-16 max-sm:h-[70vh] max-lg:min-w-[80rem] max-sm:max-w-[80rem]  max-sm:object-cover"
      />
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
        <div className="absolute top-0 left-0 w-full h-1/3 bg-[#7a0066c6] clip-path-top">
          <Image
            className="mx-auto mt-8"
            src={logo}
            alt="logo"
            width={200}
            height={40}
            loading="lazy"
          />
        </div>
      </div>
      <div className="min-h-screen mt-28 flex justify-center bg-[#fff1f157] p-6">
        <div className="max-w-5xl w-full text-center">
          <div className="flex flex-col items-center mb-6">
            <h1 className="text-3xl font-bold text-center mb-6 text-[#7a0066c6] w-fit py-4  px-6 rounded-tl-2xl border border-r-red-900 border-l-red-900 border-b-fuchsia-700 border-t-fuchsia-700 rounded-br-2xl  bg-[#eed1e8] mx-auto">
              {t("ماهي")}
              <span className="text-yellow-600"> {t("أهدافنا ؟")}</span>
            </h1>
          </div>

          {/* الشبكة الخاصة بالكروت */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            {tips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`p-6 rounded-xl flex flex-col items-center shadow-2xl shadow-black 
          bg-gradient-to-r from-[#7a0066] via-[#ff9fbd] to-[#7a0066]
          ${
            index === Math.floor(tips.length / 2)
              ? "col-span-2 md:col-span-1 row-span-2 justify-center"
              : ""
          }
          ${
            index < Math.floor(tips.length / 2)
              ? "md:justify-self-start"
              : "md:justify-self-end"
          }`}
              >
                <tip.icon className="text-5xl mb-2 text-white" />
                <p className="text-xl font-medium text-center text-white">
                  {tip.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative min-h-screen bg-[#dcc0c0] grid  items-center p-6">
        {/* الخلفية */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('/images/man-trk.png')" }}
        ></div>

        {/* المحتوى */}
        <div className="relative rounded-tl-[5rem] max-w-4xl mr-16 w-full mt-10 bg-gradient-to-r from-[#7a0066] via-[#ff9fbd] to-[#7a0066]  p-6 rounded-2xl shadow-xl text-center">
          {/* عنوان */}
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl w-fit px-6 mx-auto font-bold border border-dashed py-1 border-r-red-900 border-l-red-900 border-b-fuchsia-700 border-t-fuchsia-700 rounded-br-2xl  bg-[#f8997d] text-white p-3 rounded-lg mb-4"
          >
            {t("رسالتنا")}
          </motion.h1>

          {/* الوصف */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg font-semibold pr-6 pl-12 text-[#efe9e9]"
          >
            {t(
              "مستشار تعليمي محترف يتمتع بخبرة واسعة، يكرس جهوده لمساندة الطلاب الأجانب الراغبين في الدراسة بتركيا، عبر تقديم فرص تعليمية متميزة وخدمات متكاملة تشمل توجيههم لاختيار التخصص الأمثل، تأمين القبول الجامعي، المساعدة في التسجيل والإقامة، مع توفير دعم مستمر يرافقهم طوال رحلتهم التعليمية وصولاً إلى التخرج، لضمان مستقبل أكاديمي ناجح."
            )}
            <br />
          </motion.p>
        </div>
        <div className="relative max-w-4xl rounded-tr-[5rem] w-full h-52 -mt-32 mr-[32rem] bg-gradient-to-r from-[#ff9fbd] via-[#7a0066] to-[#ff9fbd]  p-6 rounded-2xl shadow-xl text-center">
          {/* عنوان */}
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl w-fit px-6 mx-auto font-bold border border-dashed py-1 border-r-red-900 border-l-red-900 border-b-fuchsia-700 border-t-fuchsia-700 rounded-br-2xl  bg-[#f8997d] text-white p-3 rounded-lg mb-4"
          >
            {t("رؤيتنا")}
          </motion.h1>

          {/* الوصف */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg pr-12 pl-6 font-semibold text-[#efe9e9]"
          >
            {t(
              "بوابتك الأولى لتحقيق طموحاتك الأكاديمية في تركيا. نقدم خدمات متكاملة للطلاب الدوليين تشمل الاستشارات التعليمية، القبول الجامعي، والإرشاد الأكاديمي، مع التزام تام بالاحترافية والمصداقية"
            )}
            <br />
          </motion.p>
        </div>
        {/* أيقونات وأرقام */}
      </div>
      <div className="max-w-6xl mx-auto p-6 text-center relative mt-20">
        <h1 className="text-3xl font-bold text-center my-20 text-[#7a0066c6] w-fit py-4 px-6 rounded-tl-2xl border border-r-red-900 border-l-red-900 border-b-fuchsia-700 border-t-fuchsia-700 rounded-br-2xl bg-[#eed1e8] mx-auto">
          {t("بعض معاير ومبادئ Deva Education")}
        </h1>

        {/* الحاوية الرئيسية مع وضع relative لإتاحة رسم SVG */}
        <div className="relative">
          {/* خط SVG المستقيم الذي يربط بين الأرقام فقط */}
          <svg
            className="hidden md:block absolute top-0 left-0 w-full h-full pointer-events-none"
            viewBox="0 0 1000 200"
            preserveAspectRatio="none"
          >
            <line
              x1="60"
              y1="15"
              x2="900"
              y2="15"
              stroke="gray"
              strokeDasharray="8,5"
              strokeWidth="2"
            />
          </svg>

          {/* شبكة العرض لسطح المكتب */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-32 relative z-10">
            {visibleSteps.map((step, index) => (
              <div
                key={step.id}
                className="flex flex-col items-center"
                data-aos="fade-up"
                data-aos-delay={index * 1000} // تأخير العنصر بناءً على ترتيبه (1 ثانية لكل عنصر)
              >
                {/* الرقم داخل الدائرة */}
                <div className="w-12 h-12 flex items-center justify-center bg-[#e67297] text-white rounded-full">
                  {step.id}
                </div>
                {/* الأيقونة تظهر أسفل الرقم */}
                <div className="mt-3 text-5xl text-[#7a0066cb]">
                  {step.icon}
                </div>
                <h3 className="font-bold text-[#7a0066cb] text-xl mt-6 mb-1">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* عرض الجوال: خط عمودي مكسر */}
        <div className="md:hidden relative mt-8">
          <svg
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-28 pointer-events-none"
            viewBox="0 0 1 500"
            preserveAspectRatio="none"
          >
            <line
              x1="0.8"
              y1="5"
              x2="0.8"
              y2="200"
              stroke="gray"
              strokeDasharray="8,5"
              strokeWidth="1"
            />
          </svg>
        </div>
      </div>
      <div className="max-w-6xl mx-auto p-6 text-center relative mt-20">
        {/* الحاوية الرئيسية مع وضع relative لإتاحة رسم SVG */}
        <div className="relative">
          {/* خط SVG المستقيم الذي يربط بين الأرقام فقط */}
          <svg
            className="hidden md:block absolute top-0 left-0 w-full h-full pointer-events-none"
            viewBox="0 0 1000 200"
            preserveAspectRatio="none"
          >
            <line
              x1="60"
              y1="15"
              x2="900"
              y2="15"
              stroke="gray"
              strokeDasharray="8,5"
              strokeWidth="2"
            />
          </svg>

          {/* شبكة العرض لسطح المكتب */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-32 relative z-10">
            {visibleStepss.map((step, index) => (
              <div
                key={step.id}
                className="flex flex-col items-center"
                data-aos="fade-up"
                data-aos-delay={index * 1000} // تأخير العنصر بناءً على ترتيبه (1 ثانية لكل عنصر)
              >
                {/* الرقم داخل الدائرة */}
                <div className="w-12 h-12 flex items-center justify-center bg-[#e67297] text-white rounded-full">
                  {step.id}
                </div>
                {/* الأيقونة تظهر أسفل الرقم */}
                <div className="mt-3 text-5xl text-[#7a0066cb]">
                  {step.icon}
                </div>
                <h3 className="font-bold text-[#7a0066cb] text-xl mt-6 mb-1">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* عرض الجوال: خط عمودي مكسر */}
        <div className="md:hidden relative mt-8">
          <svg
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-28 pointer-events-none"
            viewBox="0 0 1 500"
            preserveAspectRatio="none"
          >
            <line
              x1="0.8"
              y1="5"
              x2="0.8"
              y2="200"
              stroke="gray"
              strokeDasharray="8,5"
              strokeWidth="1"
            />
          </svg>
        </div>
      </div>
      ); );
      <hr className="mx-auto w-10/12 pt-8" />
      <div className=" bg-gray-100 rounded-2xl h-auto py-9 mx-9 my-16 max-lg:w-[77rem]">
        <h1
          className="text-3xl font-semibold text-center  text-[#fff] w-fit py-4  px-6 rounded-tl-2xl border border-dashed  border-r-red-900 border-l-red-900 border-b-fuchsia-700 border-t-fuchsia-700 rounded-br-2xl  bg-[#822253] mb-8"
          style={{ fontFamily: "Exo 2, sans-serif" }}
        >
          {" "}
          {t("لماذا تختار Deva Education")}
        </h1>
        <motion.div
          className="flex justify-center text-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid ml-16 max-lg:mr-3">
            <motion.h1
              className="text-gray-700 font-bold px-1 py-2 leading-9"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              ✅{" "}
              {t(
                "الاحترافية والمصداقية: تقدم Deva Education خدمات استشارية موثوقة تعتمد على الشفافية والمصداقية في جميع مراحل القبول الجامعي."
              )}
            </motion.h1>

            <motion.h1
              className="text-gray-700 font-bold px-1 py-2 leading-9"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              ✅{" "}
              {t(
                "تقديم حلول متكاملة: من استشارات اختيار التخصص والجامعة، إلى متابعة طلب القبول والإقامة، نقدم لك حزمة متكاملة من الخدمات التعليمية"
              )}{" "}
            </motion.h1>

            <motion.h1
              className="text-gray-700 font-bold px-1 py-2 leading-9"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              ✅{" "}
              {t(
                "شراكات مع أفضل الجامعات: شراكاتنا الواسعة مع الجامعات التركية المرموقة تضمن لك الوصول إلى أفضل البرامج التعليمية بخصومات مميزة"
              )}
            </motion.h1>

            <motion.h1
              className="text-gray-700 font-bold px-1 py-2 leading-9"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              ✅{" "}
              {t(
                "دعم مخصص للطلاب: نؤمن بأن كل طالب لديه احتياجات فريدة، لذا نقدم استشارات مخصصة تراعي أهدافك الأكاديمية والمهنية"
              )}
            </motion.h1>

            <motion.h1
              className="text-gray-700 font-bold px-1 py-2 leading-9 max-lg:leading-10"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              ✅{" "}
              {t(
                "فريق ذو خبرة: يضم فريقنا نخبة من المستشارين التعليميين ذوي الخبرة في التعامل مع الطلاب الدوليين، لتقديم تجربة سلسة وناجحة"
              )}
            </motion.h1>
            <motion.h1
              className="text-gray-700 font-bold px-1 py-2 leading-9 max-lg:leading-10"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              ✅{" "}
              {t(
                "خدمات ما بعد القبول: لا ينتهي دورنا عند حصولك على القبول الجامعي بل نستمر في دعمك من خلال خدمات الإقامة و معادلة الشهادات والتوجيه"
              )}
              <br />
              {t("الأكاديمي واكتشاف أروع الأماكن الترفيهية والثقافية")}
            </motion.h1>
            <p className="text-2xl text-yellow-500 mx-auto font-bold py-6">
              {t("Deva Education – نرسم طريقك نحو مستقبل أكاديمي مشرق")}
            </p>
          </div>

          <Image
            src={trk}
            className="w-[31rem] h-[29rem] -mt-24 max-lg:w-"
            alt="Turkey Image"
          />
        </motion.div>
      </div>
      <Contact />
    </>
  );
};

export default mannahno;
