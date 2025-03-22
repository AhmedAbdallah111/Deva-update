"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useTranslation } from "react-i18next";

export default function Tatata() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const lang = i18n.language;
  const slides = [
    {
      img: "/images/doctor.jpg",
      title: t("التخصصات الطبية"),
      description: t(
        " التخصصات الطبية تشمل مجموعة واسعة من المجالات التي يركز كل منها على جانب معين من الرعاية الصحية وهناك العديد من التخصصات الأخرى التي تغطي مجالات مختلفة من الرعاية الصحية"
      ),
      features: ["طب بشري", "صيدله", "تمريض", "العلاج الطبيعي"],
    },
    {
      img: "/images/handsa.jpg",
      title: t("التخصصات الهندسية"),
      description: t(
        " التخصصات الهندسية تشمل مجموعة من المجالات التي تركز على تصميم وبناء الأنظمة والهياكل التكنولوجية ويمكن تقسيم كل مجال إلى تخصصات دقيقة أخرى بناءً على نوع المشاريع والأنظمة المستهدفة"
      ),
      features: [
        "الهندسه الطبيه",
        "هندسه البرمجيات",
        "هندسه الميكاترونكس",
        "هندسه الميكانيكا",
      ],
    },
    {
      img: "/images/businesses.jpg",
      title: t("التخصصات الأدارية"),
      description: t(
        "إذا كنت طالبًا مهتمًا بالإدارة، يمكنك بدء رحلتك التعليمية بتحديد المجال الذي يلبي اهتماماتك وطموحاتك وإليك بعض المجالات التي يمكنك دراستها والتخصص فيها"
      ),
      features: [
        "ادارة الاعمال",
        "نظم المعلومات الادارية",
        "ادارة الخدمات اللوجستية",
        "الادارة الهندسية",
      ],
    },
    {
      img: "/images/coch.jpg",
      title: t("التخصصات الرياضية "),
      description: t(
        "الرياضية تشمل مجموعة من المجالات التي تركز على تحليل وتطويرالمهارات البدنية والعقلية من خلال الأنشطة الرياضية وتتفرع هذه التخصصات إلى مجالات دقيقة أخرى بناءً على نوع الرياضة والأنشطة الممارسة، وكذلك الجوانب الأكاديمية والصحية المرتبطة بكل منها"
      ),
      features: ["التدريب الرياضي"],
    },
    {
      img: "/images/tayran.jpg",
      title: t("تخصصات الطيران"),
      description: t(
        "تخصصات الطيران تشمل مجموعة من المجالات التي تركز على تصميم وتشغيل وصيانة الطائرات، فضلاً عن العمليات المتعلقة بالطيران وتغطي هذه التخصصات جوانب مختلفة من عالم الطيران، وهي تتطور باستمرار لتواكب التقدم التكنولوجي والاحتياجات المتزايدة في صناعة الطيران"
      ),
      features: [" هندسه الطيران", "اداره الطيران ", "خدمات الطيران المدني"],
    },
    {
      img: "/images/texher.jpg",
      title: t("تخصصات العلوم العامة"),
      description: t(
        "تخصصات التدريس والعلوم العامة تشمل مجالات متعددة تهدف إلى إعداد الأفراد لتعليم مختلف المواد العلمية وتطوير مهارات البحث العلمي و هذه التخصصات تشكل حجر الأساس للعديد من الوظائف الأكاديمية والعلمية، وتساعد في تعزيز المعرفة"
      ),
      features: [
        "تخصص الرياضيات",
        "اللغه التركيه وادابها",
        "تخصص رياض اطفال",
        "الترجمة",
      ],
    },
  ];
  return (
    <>
      <div className="relative w-full h-[30px] z-10 bg-[#6a1d1d2e]">
        <div className="absolute right-0 top-0 w-full h-full bg-[length:50px_50px] bg-gradient-to-br from-transparent via-white to-transparent"></div>
      </div>
      <h1 className="text-3xl font-bold text-center my-4 text-[#7a0066c6] w-fit py-4  px-6 rounded-tl-2xl border border-r-red-900 border-l-red-900 border-b-fuchsia-700 border-t-fuchsia-700 rounded-br-2xl  bg-[#eed1e8] mx-auto">
        {t("اختر تخصصك")}
      </h1>
      <section className="min-h-screen bg-white flex items-center justify-center p-8">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          className="w-full max-w-6xl"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  <div className=" rounded-lg p-2 relative">
                    <img
                      src={slide.img}
                      alt="Happy Kid"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl md:text-4xl mb-9 font-bold text-[#7a0066]">
                    {slide.title}
                  </h2>
                  <p className="mt-4 text-gray-600">{slide.description}</p>
                  <ul className="mt-6 space-y-2">
                    {slide.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-lg text-gray-500 pb-6 gap-2"
                      >
                        ✅ {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="../takass"
                    className=" font-semibold text-lg bg-[#7a0066] text-white py-2 px-6 mt-9 rounded-tl-2xl rounded-br-2xl  hover:bg-[#7a0066af]"
                  >
                    {t("المزيد")}
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <div className="relative w-full -mb-5 h-[30px] z-10 bg-[#6a1d1d2e]">
        <div className="absolute right-0 top-0 w-full h-full bg-[length:50px_50px] bg-gradient-to-br from-transparent via-[#fff] to-transparent"></div>
      </div>
    </>
  );
}
