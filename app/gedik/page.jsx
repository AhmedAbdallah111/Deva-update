"use client";
import Image from "next/image";
import cover from "../../Public/images/Gedik-1.jpg";
import logo from "../../Public/images/Gedik.jpg";
import altnnn from "../../Public/images/ged4.png";
import altsss from "../../Public/images/gd3.png";
import altn from "../../Public/images/gd2.png";
import alt from "../../Public/images/gd1.png";
import awrak from "../../Public/images/awark.jpg";
import { useTranslation } from "react-i18next";
const gedik = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || "ar"; // إذا لم يتم تحديد لغة، اجعل الافتراضية العربية
  return (
    <>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 my-10  -mt-0 pt-24 max-lg:w-[75rem] max-lg:mr-6">
        <div className="h-auto rounded-lg bg-gradient-to-r from-purple-50 to-pink-50  lg:col-span-2 max-[1366px]:grid-cols-1">
          <Image
            src={cover}
            className="w-[75rem] justify-center items-center mx-auto my-6 rounded-lg"
          />
          <Image
            src={logo}
            className="w-16 absolute mr-[30%] top-[91.5%] max-[1366px]:hidden max-lg:hidden max-sm:hidden"
          />

          <div className="flex text-center items-center justify-center">
            <h1 className="text-red-600 font-bold text-4xl mt-2 mb-1">
              {t("جامعة جيديك في تركيا")}{" "}
            </h1>
          </div>
          <div className="text-center flex justify-center items-center my-4">
            <svg
              className="size-5 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
            </svg>
            <h4 className="font-bold text-gray-800 text-xl">{t("إسطنبول")}</h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="size-9 pr-4 mt-1"
            >
              <path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z" />
            </svg>
            <a
              href="https://www.gedik.edu.tr"
              className="font-bold text-gray-800 text-xl pr-1"
            >
              {t("الموقع الرسمي للجامعة")}{" "}
            </a>
          </div>
        </div>
        <div className="h-auto rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 ml-4">
          <iframe
            className="w-11/12 mr-5 h-60 rounded-lg mt-4 max-sm:h-[30rem] max-lg:h-[30rem]"
            src="https://www.youtube.com/embed/spRPTsbrcF8?si=a2_R_lv5C0OjXUHK"
            allowFullScreen
          />

          <div className="flex justify-evenly my-4">
            <h1 className="font-bold text-3xl text-yellow-500 max-sm:text-5xl">
              {t("جامعة جيديك")}
            </h1>
          </div>
          <hr />
          <div className=" flex my-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="size-11 pr-4 mt-1 text-white"
            >
              <path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z" />
            </svg>
            <h1 className="font-bold text-gray-900 text-2xl pr-4 mt-2 max-sm:text-3xl">
              {t("التصنيف العالمي:")}
              <b className="text-xl text-gray-500 max-sm:text-3xl">6101</b>
            </h1>
          </div>
          <hr />
          <div className=" flex my-5">
            <svg
              className="size-11 pr-4 mt-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L512 185l0-121c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32l0 36.7L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1l32 0 0 69.7c-.1 .9-.1 1.8-.1 2.8l0 112c0 22.1 17.9 40 40 40l16 0c1.2 0 2.4-.1 3.6-.2c1.5 .1 3 .2 4.5 .2l31.9 0 24 0c22.1 0 40-17.9 40-40l0-24 0-64c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 64 0 24c0 22.1 17.9 40 40 40l24 0 32.5 0c1.4 0 2.8 0 4.2-.1c1.1 .1 2.2 .1 3.3 .1l16 0c22.1 0 40-17.9 40-40l0-16.2c.3-2.6 .5-5.3 .5-8.1l-.7-160.2 32 0z" />
            </svg>
            <h1 className="font-bold text-gray-900 text-2xl pr-4 mt-2 max-sm:text-3xl">
              {t("التصنيف المحلي:")}{" "}
              <b className="text-xl text-gray-500 max-sm:text-3xl">136</b>
            </h1>
          </div>
          <hr />
          <div className=" flex my-5">
            <svg
              className="size-11 pr-4 mt-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
            </svg>
            <h1 className="font-bold text-gray-900 text-2xl pr-4 mt-2 max-sm:text-3xl">
              {t("عدد البرامج الدراسية :")}

              <b className="text-xl text-gray-500 max-sm:text-3xl">96</b>
            </h1>
          </div>
          <hr />
          <div className=" flex my-5">
            <svg
              className="size-11 pr-4 mt-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M192 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm51.3 182.7L224.2 307l49.7 49.7c9 9 14.1 21.2 14.1 33.9l0 89.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-82.7-73.9-73.9c-15.8-15.8-22.2-38.6-16.9-60.3l20.4-84c8.3-34.1 42.7-54.9 76.7-46.4c19 4.8 35.6 16.4 46.4 32.7L305.1 208l30.9 0 0-24c0-13.3 10.7-24 24-24s24 10.7 24 24l0 55.8c0 .1 0 .2 0 .2s0 .2 0 .2L384 488c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-216-39.4 0c-16 0-31-8-39.9-21.4l-13.3-20zM81.1 471.9L117.3 334c3 4.2 6.4 8.2 10.1 11.9l41.9 41.9L142.9 488.1c-4.5 17.1-22 27.3-39.1 22.8s-27.3-22-22.8-39.1zm55.5-346L101.4 266.5c-3 12.1-14.9 19.9-27.2 17.9l-47.9-8c-14-2.3-22.9-16.3-19.2-30L31.9 155c9.5-34.8 41.1-59 77.2-59l4.2 0c15.6 0 27.1 14.7 23.3 29.8z" />
            </svg>
            <h1 className="font-bold text-gray-900 text-2xl pr-4 mt-2 max-sm:text-3xl">
              {t("عدد الطلاب :")}
              <b className="text-xl text-gray-500 max-sm:text-3xl">5538</b>
            </h1>
          </div>
          <hr />
          <div className=" flex my-5">
            <svg
              className="size-11 pr-4 mt-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path d="M381 114.9L186.1 41.8c-16.7-6.2-35.2-5.3-51.1 2.7L89.1 67.4C78 73 77.2 88.5 87.6 95.2l146.9 94.5L136 240 77.8 214.1c-8.7-3.9-18.8-3.7-27.3 .6L18.3 230.8c-9.3 4.7-11.8 16.8-5 24.7l73.1 85.3c6.1 7.1 15 11.2 24.3 11.2l137.7 0c5 0 9.9-1.2 14.3-3.4L535.6 212.2c46.5-23.3 82.5-63.3 100.8-112C645.9 75 627.2 48 600.2 48l-57.4 0c-20.2 0-40.2 4.8-58.2 14L381 114.9zM0 480c0 17.7 14.3 32 32 32l576 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 448c-17.7 0-32 14.3-32 32z" />
            </svg>
            <h1 className="font-bold text-gray-900 text-2xl pr-4 mt-2 max-sm:text-3xl">
              {t("عدد الطلاب الاجانب:")}
              <b className="text-xl text-gray-500 max-sm:text-3xl">50</b>
            </h1>
          </div>
        </div>
      </div>
      <div className="grid bg-gradient-to-r from-violet-50 h-auto w-[96%] mr-[2%] to-fuchsia-50 rounded-lg mt-9 max-sm:w-[75rem] max-sm:mr-6 max-lg:w-[75rem]">
        <div className="mr-5 bg-fuchsia-900 w-fit px-6 mt-5 h-14 rounded-tr-lg rounded-bl-lg">
          <h1 className="font-bold text-3xl text-yellow-500 pr-2 pl-4 py-2">
            {t("معلومات عامة عن جامعة جيديك")}{" "}
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          <div className=" rounded-l lg:col-span-2">
            <div className=" mr-5 mt-8  ">
              <h1 className="font-bold text-2xl text-fuchsia-950 ">
                {t("تاريخ التأسيس")}{" "}
              </h1>
            </div>

            <p className="text-gray-700 font-medium text-xl py-4 mr-5">
              {t(
                "تأسست جامعة اسطنبول جيدك في 06.04.2010 من قبل وقف جيدك التعليمية التابعة لمجموعة جيدك القابضة. تضم ستة كليات منها كلية الهندسة وكلية العلوم الإدارية وثلاث معاهد فنية ومعهد عالي لمرحلة الماجستير والدكتوراة."
              )}
            </p>
            <h1 className="font-bold text-2xl text-fuchsia-950 mr-5">
              {t("أحرمها الجامعية")}{" "}
            </h1>
            <p className="text-gray-700 font-medium text-xl py-4 mr-5">
              {t(
                "جامعة إسطنبول جيديك تمتلك حرمًا جامعيًا حديثًا ومجهزًا بأحدث المرافق لتلبية احتياجات الطلاب الأكاديمية والاجتماعية. إليك بعض التفاصيل حول الحرم الجامعي:"
              )}
              <hr className="my-2" />
              <br className="" />
              {t(
                "يقع الحرم الجامعي الرئيسي في إسطنبول، وهي مدينة حيوية توفر بيئة تعليمية متنوعة. يحتوي الحرم على مبانٍ حديثة تشمل قاعات دراسية، مختبرات، ومكتبات مزودة بالموارد العلمية."
              )}
              <br />
              <hr className="my-2" />
              <br />
              {t(
                "توفر الجامعة مكتبة مجهزة بمجموعة واسعة من الكتب والمراجع الورقية والرقمية، لتلبية احتياجات الطلاب والباحثين."
              )}
              <br />
              <hr className="my-2" />
              {t(
                "يحتوي الحرم الجامعي على مرافق رياضية متميزة، تشمل صالات رياضية وملاعب، لدعم الأنشطة البدنية والرياضية."
              )}
              <hr className="my-2" />
              {t(
                "تتوفر العديد من الخدمات مثل الكافيتيريات والمقاهي والمناطق المفتوحة للراحة والدراسة، ويتمتع الطلاب ببيئة تعليمية مريحة وشاملة."
              )}
              <br />
            </p>
          </div>
          <div className=" rounded-l">
            <Image src={altn} className="w-[40rem] mx-auto" />
          </div>
        </div>
      </div>
      <div className="grid bg-gradient-to-r from-violet-50 h-auto w-[96%] mr-[2%] to-fuchsia-50 rounded-lg mt-9 max-sm:w-[75rem] max-lg:w-[75rem]">
        <div className="w-[80%] max-sm:w-[100%] max-sm:mr-6">
          <div className="space-y-4">
            <details
              className="group border-s-4 border-fuchsia-800 bg-violet-100 p-6 [&_summary::-webkit-details-marker]:hidden max-lg:w-[75rem]"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h2 className="text-2xl font-bold text-fuchsia-950">
                  {t("لغات التدريس في جامعة جيديك؟")}{" "}
                </h2>

                <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 leading-relaxed text-xl font-bold text-gray-700">
                {t(
                  "اللغات المعتمدة في جامعة جيديك: الإنجليزية أو التركية، ويحدد ذلك بناءً على   التخصص المطلوب واختيار الطالب."
                )}
              </p>
              <Image src={altsss} className="mt-5 w-[40rem] mx-auto" />
            </details>
            <details
              className="group border-s-4 border-fuchsia-800 bg-violet-100 p-6 [&_summary::-webkit-details-marker]:hidden max-lg:w-[75rem]"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h2 className="text-2xl font-bold text-fuchsia-950">
                  {t("اعترافات جامعة جيديك")}
                </h2>

                <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>
              <h1 className="font-bold text-xl text-gray-800">
                {t(
                  "جامعة إسطنبول جيديك معترف بها من قبل مجلس التعليم العالي التركي (YÖK)، وهو الجهة الحكومية المسؤولة عن تنظيم التعليم العالي في تركيا. هذا الاعتماد يجعل شهاداتها مقبولة على المستوى الوطني، ويفتح الأبواب أمام الخريجين للعمل في تركيا أو استكمال دراستهم في جامعات أخرى داخل البلاد."
                )}
              </h1>
              <p className="mt-4 leading-relaxed text-xl font-bold text-gray-700">
                {t(
                  "بعض البرامج في الجامعة قد تكون معتمدة دوليًا من قبل جهات متخصصة في المجالات الأكاديمية المختلفة."
                )}
                <br />
                {t(
                  "بفضل اعتماد مجلس التعليم العالي التركي، يتمتع خريجو الجامعة بفرص معادلة شهاداتهم في العديد من الدول."
                )}
                <br />
                {t(
                  "الجامعة تسعى لتعزيز سمعتها الأكاديمية من خلال شراكات مع جامعات دولية، والمشاركة في برامج التبادل الطلابي مثل Erasmus+."
                )}
                <br />
                {t(
                  "برامج البكالوريوس، الماجستير، والدكتوراه التي تقدمها الجامعة تتوافق مع معايير التعليم العالي في تركيا."
                )}
              </p>
            </details>
            <details
              className="group border-s-4 border-fuchsia-800 bg-violet-100 p-6 [&_summary::-webkit-details-marker]:hidden max-lg:w-[75rem]"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h2 className="text-2xl font-bold text-fuchsia-950">
                  {t("السكن الطلابي في الجامعة")}
                </h2>

                <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 leading-relaxed text-xl font-bold text-gray-700">
                {t(
                  "جامعة إسطنبول جيديك توفر خيارات متعددة للسكن الطلابي، مع مراعاة توفير بيئة مريحة وآمنة تدعم الحياة الطلابية. إليك أهم المعلومات حول السكن الطلابي:"
                )}

                <br />
                {t(
                  "يقع السكن الطلابي بالقرب من الحرم الجامعي، مما يسهل على الطلاب الوصول إلى المحاضرات والمرافق الجامعية."
                )}

                <br />
                {t(
                  "تتوفر غرف فردية، مزدوجة، أو مشتركة (ثلاثية أو رباعية) لتلبية مختلف احتياجات الطلاب وميزانياتهم. الغرف مجهزة بأساسيات مثل السرير، المكتب، الكرسي، خزانة الملابس، وتوفير الإنترنت."
                )}
              </p>
              <Image src={alt} className="mt-5 w-[40rem] mx-auto" />
            </details>
            <details
              className="group border-s-4 border-fuchsia-800 bg-violet-100 p-6 [&_summary::-webkit-details-marker]:hidden max-lg:w-[75rem]"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h2 className="text-2xl font-bold text-fuchsia-950">
                  {t("الحياة الطلابية")}
                </h2>

                <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 leading-relaxed text-xl font-bold text-gray-700">
                {t(
                  "الحياة الطلابية في جامعة إسطنبول جيديك مليئة بالأنشطة والتجارب التي تساهم في خلق بيئة تعليمية واجتماعية غنية للطلاب. فيما يلي أهم جوانب الحياة الطلابية في الجامعة:"
                )}
                <p className="leading-relaxed font-medium text-[18px] text-gray-700">
                  <br />
                  {t(
                    "الجامعة تضم مجموعة متنوعة من الأندية الطلابية في مجالات مثل: الرياضة، الفن والمسرح، العلوم والتكنولوجيا."
                  )}
                </p>
                <p className="leading-relaxed font-medium text-[18px] text-gray-700">
                  {t(
                    "تُقام فعاليات مثل: مهرجانات طلابية دورية وحفلات موسيقية وعروض فنية."
                  )}
                </p>
                <p className="leading-relaxed font-medium text-[18px] text-gray-700">
                  {t(
                    "توفر الجامعة مرافق رياضية تشمل صالات رياضية وملاعب لكرة القدم وكرة السلة والتنس، وتُنظم بطولات رياضية داخلية وخارجية."
                  )}
                </p>
                <p className="leading-relaxed font-medium text-[18px] text-gray-700">
                  {t(
                    "الجامعة تُقدم خدمات خاصة للطلاب الدوليين، مثل: مكتب لمساعدتهم في التأقلم مع الحياة في تركيا."
                  )}
                </p>
              </p>

              <Image src={altn} className="mt-5 w-[40rem] mx-auto" />
            </details>
            <details
              className="group border-s-4 border-fuchsia-800 bg-violet-100 p-6 [&_summary::-webkit-details-marker]:hidden max-lg:w-[75rem]"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h2 className="text-2xl font-bold text-fuchsia-950">
                  {t("مميزات الدراسة في جامعة جيديك")}
                </h2>

                <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 leading-relaxed text-xl font-bold text-gray-700">
                {t(
                  "الدراسة في جامعة إسطنبول جيديك توفر العديد من المميزات التي تجعلها خيارًا جاذبًا للطلاب المحليين والدوليين. فيما يلي أبرز مميزات الدراسة في الجامعة:"
                )}
                <br />
                {t(
                  "تقدم الجامعة برامج أكاديمية عالية الجودة تتماشى مع معايير التعليم العالي التركية والدولية وتضم هيئة تدريسية متميزة تتألف من أساتذة وخبراء في مجالاتهم."
                )}
                <br />
                {t(
                  "توفر الجامعة برامج متنوعة في مرحلة البكالوريوس، الماجستير، والدكتوراه تشمل التخصصات الهندسة، العلوم الاجتماعية، إدارة الأعمال، الفنون الجميلة، وغيرها."
                )}
                <br />
                {t(
                  "تتمتع الجامعة بمرافق تعليمية متطورة تشمل مختبرات حديثة، مكتبات متقدمة، وقاعات دراسية مجهزة بأحدث التقنيات."
                )}
                <br />
                {t(
                  "تقدم الجامعة خدمات مخصصة للطلاب الدوليين، مثل المساعدة في الحصول على التأشيرات والإقامة، ودعم التأقلم مع البيئة الثقافية والاجتماعية."
                )}
              </p>

              <Image src={altnnn} className="mt-5 w-[40rem] mx-auto" />
            </details>
            <details
              className="group border-s-4 border-fuchsia-800 bg-violet-100 p-6 [&_summary::-webkit-details-marker]:hidden max-lg:w-[75rem]"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h2 className="text-2xl font-bold text-fuchsia-950">
                  {t("الأوراق المطلوبة للتقديم على جامعة جيديك")}
                </h2>

                <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <div className="flex flex-wrap gap-12 justify-center">
                <div className="absolute text-fuchsia-700 text-4xl font-bold mt-36 max-lg:text-2xl">
                  <p className="mr-6 max-lg:mr-16">{t("بكالوريوس")}</p>
                  <p className="text-2xl mt-16 text-center text-yellow-300 max-lg:w-[16rem]">
                    {t("شهادة الثانوية العامة")}
                    <br />
                    <hr className="my-1" />
                    {t("كشف الدرجات")}
                    <br />
                    <hr className="my-1" />
                    {t("جواز السفر")}
                    <br />
                    <hr className="my-1" />
                    {t("صور شخصية")}
                  </p>
                </div>
                <Image src={awrak} className="" />
                <div className="absolute text-fuchsia-700 mr-[45%] text-4xl font-bold mt-36 max-lg:mr-[40rem] max-lg:text-2xl">
                  <p className="mr-8  max-lg:mr-28">{t("ماجستير")}</p>
                  <p className="text-2xl mt-16 text-center text-yellow-300 max-lg:w-[16rem] max-lg:mr-8">
                    {t("شهادة البكالوريوس")}
                    <br />
                    <hr className="my-1" />
                    {t("كشف الدرجات")}
                    <br />
                    <hr className="my-1" />
                    {t("جواز السفر")}
                    <br />
                    <hr className="my-1" />
                    {t("صور شخصية")}
                  </p>
                </div>
                <div className="absolute text-fuchsia-700 ml-[45%] text-4xl font-bold mt-36 max-lg:ml-[40rem] max-lg:text-2xl">
                  <p className="mr-12 max-lg:mr-24">{t("دبلومة")}</p>
                  <p className="text-2xl mt-16 text-center text-yellow-300 max-lg:w-[16rem] max-lg:ml-8 ">
                    {t("شهادة الثانوية العامة")}
                    <br />
                    <hr className="my-1" />
                    {t("كشف الدرجات")}
                    <br />
                    <hr className="my-1" />
                    {t("جواز السفر")}
                    <br />
                    <hr className="my-1" />
                    {t("صور شخصية")}
                  </p>
                </div>
                <div className="absolute text-fuchsia-700 text-4xl mt-[40%] font-bold max-lg:mt-[38rem]  max-lg:text-2xl">
                  <p className="mr-5 max-lg:mr-20">{t("الدكتوراة")}</p>
                  <p className="text-2xl mt-16 text-center text-yellow-300 max-lg:w-[16rem] ">
                    {t("شهادة الماجستير")}
                    <br />
                    <hr className="my-1" />
                    {t("كشف الدرجات")}
                    <br />
                    <hr className="my-1" />
                    {t("جواز السفر")}
                    <br />
                    <hr className="my-1" />
                    {t("صور شخصية")}
                  </p>
                </div>
                <Image src={awrak} className="" />
                <Image src={awrak} className="" />
                <Image src={awrak} className="" />
              </div>
            </details>
            <details
              className="group border-s-4 border-fuchsia-800 bg-violet-100 p-6 [&_summary::-webkit-details-marker]:hidden max-lg:w-[75rem]"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h2 className="text-2xl font-bold text-fuchsia-950">
                  {t("كليات وتخصصات جامعة جيديك")}
                </h2>

                <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <details className="group [&_summary::-webkit-details-marker]:hidden w-[90%] bg-slate-100 my-5">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                  <h2 className="font-bold text-gray-800 text-3xl">
                    {t("دبلومة")}
                    <b className="text-red-500 font-bold text-2xl pr-6">
                      {t("مدة الدراسة عامان دراسي")}
                    </b>
                  </h2>

                  <svg
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>

                <section className="bg-white mt-5 rounded-lg">
                  <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 max-sm:grid-cols-2 max-">
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("العلاقات العامة والإعلان")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              2000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              1400$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("خدمات قمرة الطيران المدني")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              2000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              1400$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("الخدمات المصرفية والتأمين")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              2000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              1400$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("تصميم الجرافيك")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              2000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              1400$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("التخدير")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              2000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              1400$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("الإسعافات الأولية و الطوارئ")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              2000${" "}
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              1400$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("التجارة الدولية")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              2000${" "}
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              1400$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("الصحة والسلامة المهنية")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              2000${" "}
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              1400$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("تقنيات التصوير الطبي")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              2000${" "}
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              1400$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("برمجة الكومبيوتر")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              2000${" "}
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              1400$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("تكنلوجيا المعدات الطبية")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              2000${" "}
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              1400$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("السكرتاريا الطبية و التوثيق")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              2000${" "}
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              1400$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("تكنلوجيا البناء")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              2000${" "}
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              1400$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("الكهرباء")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              2000${" "}
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              1400$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("المحاسبة و الضرائب")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              2000${" "}
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              1400$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("تكنلوجيا أمن المعلومات")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              2000${" "}
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              1400$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("الطهو")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              2000${" "}
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              1400$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("تنمية الطفل")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              2000${" "}
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              1400$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                </section>
              </details>

              <details className="group [&_summary::-webkit-details-marker]:hidden w-[90%] bg-slate-100 my-5">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                  <h2 className="font-bold text-gray-800 text-3xl">
                    {t("بكالوريوس")}{" "}
                    <b className="text-red-500 font-bold text-2xl pr-6">
                      {t("مدة الدراسة 4اعوام دراسية")}
                    </b>
                  </h2>

                  <svg
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <section className="bg-white mt-5 rounded-lg">
                  <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 max-sm:grid-cols-2 max-">
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("هندسة الكمبيوتر")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              4000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2000$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("هندسة الكهرباء والاكترونيات")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              5000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2000$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("العمارة الداخلية والتصميم البيئي")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              4000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2000$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("الهندسة المدنية")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              4000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2000$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("الهندسة المدنية")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              4000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2000$
                            </p>
                          </div>
                        </div>
                      </blockquote>

                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("هندسة البرمجيات")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              4000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2000$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("الهندسة الصناعية")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              4000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2000$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("العمارة")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              4000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2000$
                            </p>
                          </div>
                        </div>
                      </blockquote>

                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("الحقوق")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              6000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              3000$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("نظم المعلومات الادارية")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              4000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2000$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("نظم المعلومات الادارية")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            الانجليزية{" "}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              4000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2400$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("العلوم السياسية والإدارة العامة")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              4000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2000$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("العلوم السياسية والإدارة العامة")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            الانجليزية{" "}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              4000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2750$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")}:
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("العلاقات الدولية")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              5000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2750$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("علم الاجتماع")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              4000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2000$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("علم النفس")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              4000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2000$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("تصميم الاتصالات المرئية")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              4000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2000$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("العلاج الطبيعي")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              4000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2000$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")}
                          </p>
                          :
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("التمريض")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              4000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2000$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")}
                          </p>
                          :
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("التغذية والحمية")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              4000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2000$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")}
                          </p>
                          :
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("هندسة الميكاترونكس")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            الانجليزية{" "}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              5000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2750$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")}
                          </p>
                          :
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("هندسة المعادن والمواد")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              4000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2000$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")}
                          </p>
                          :
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("التجارة الدولية والأعمال")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            الانجليزية{" "}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              5000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2750$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")}
                          </p>
                          :
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("تنمية الطفل")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              4000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2000$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                </section>
              </details>

              <details className="group [&_summary::-webkit-details-marker]:hidden w-[90%] bg-slate-100 my-5">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                  <h2 className="font-bold text-gray-800 text-3xl">
                    {t("ماجستير مع أطروحة")}
                    <b className="text-red-500 font-bold text-2xl pr-6">
                      {t("مدة الدراسة عامان دراسي")}
                    </b>
                  </h2>

                  <svg
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>

                <section className="bg-white mt-5 rounded-lg">
                  <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 max-sm:grid-cols-2 max-">
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("إدارة الأعمال")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              4000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2500$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("إدارة الأعمال")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            الانجليزية{" "}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              4000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              3000$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("العلوم السياسية والإدارة العامة")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              4000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2500$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("العلوم السياسية والإدارة العامة")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            الانجليزية{" "}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              4000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2500$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("الاحصاء وعلوم البيانات")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              4000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2500$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("الاحصاء وعلوم البيانات")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            الانجليزية{" "}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              4000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2000$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("العمارة الداخلية والتصميم البيئي")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              4000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2500$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("التربية البدنية والتدريس الرياضي")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              4000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2500$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("القانون العام")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              4000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2500$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("العمارة")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              4000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2500$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("فن الطهو وفنون الطهي")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            الانجليزية{" "}
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              4000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2500$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("هندسة الميكاترونكس")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              4000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2500$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("التسويق")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              4000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2500$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("الصحة والسلامة المهنية")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              4000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2500$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("علم النفس السريري")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              10000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              8500$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("القانون الخاص")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              4000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2500$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("الدراسات الإقليمية في العلاقات الدولية")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              4000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2500$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                </section>
              </details>
              <details className="group [&_summary::-webkit-details-marker]:hidden w-[90%] bg-slate-100 my-5">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                  <h2 className="font-bold text-gray-800 text-3xl">
                    {t("ماجستير بدون أطروحة")}
                    <b className="text-red-500 font-bold text-2xl pr-6">
                      {t("مدة الدراسة عام ونصف دراسي")}
                    </b>
                  </h2>

                  <svg
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>

                <section className="bg-white mt-5 rounded-lg">
                  <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 max-sm:grid-cols-2 max-">
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("إدارة الأعمال")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              3000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2750$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("إدارة الأعمال")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            الانجليزية{" "}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              3000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              3000$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("العلوم السياسية والإدارة العامة")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              3000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2750$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("العلوم السياسية والإدارة العامة")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            الانجليزية{" "}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              3000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2750$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("الاحصاء وعلوم البيانات")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              3000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2750$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("الاحصاء وعلوم البيانات")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            الانجليزية{" "}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              3000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2000$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("العمارة الداخلية والتصميم البيئي")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              3000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2750$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("التربية البدنية والتدريس الرياضي")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              3000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2750$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("القانون العام")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              3000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2750$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("العمارة")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              3000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2750$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("فن الطهو وفنون الطهي")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            الانجليزية{" "}
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              3000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2750$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("هندسة الميكاترونكس")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              3000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2750$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("التسويق")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              3000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2750$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("الصحة والسلامة المهنية")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              3000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2750$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("علم النفس السريري")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              10000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              8500$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("القانون الخاص")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              3000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2750$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("الدراسات الإقليمية في العلاقات الدولية")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              3000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              2750$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                </section>
              </details>

              <details className="group [&_summary::-webkit-details-marker]:hidden w-[90%] bg-slate-100 my-5">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                  <h2 className="font-bold text-gray-800 text-3xl">
                    {t("دكتوراه")}{" "}
                    <b className="text-red-500 font-bold text-2xl pr-6">
                      {t("مدة الدراسة 4 أعوام دراسية")}
                    </b>
                  </h2>

                  <svg
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>

                <section className="bg-white mt-5 rounded-lg">
                  <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 max-sm:grid-cols-2 max-">
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("إدارة الأعمال")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              6000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              6000$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("التربية البدنية والتدريس الرياضي")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              6000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              6000$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("هندسة الميكانيكا")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              6000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              6000$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("التربية البدنية والتدريس الرياضي")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              6000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              6000$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("العلوم السياسية والإدارة العامة")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              6000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              6000$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("الصحة والسلامة المهنية")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              6000${" "}
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              6000$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={logo}
                            className="size-14 rounded-full object-cover"
                          />

                          <div>
                            <div className="flex justify-center gap-0.5 text-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {t("جيديك")}{" "}
                            </p>
                          </div>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("التخصص")} :
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            {t("تقنيات الدفاع")}
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 flex">
                          <p className="text-gray-800 text-lg pl-1 font-semibold ">
                            {t("لغة الدراسة :")}
                          </p>
                          <p className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                            <b className="text-red-600">{t("التركية")}</b>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-4 text-gray-800 font-semibold text-lg">
                          {t("المصروفات الدراسية:")}{" "}
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("قبل الخصم :")}
                            <del className="text-gray-600 text-sm pr-1 mt-1 font-medium">
                              6000$
                            </del>
                          </div>
                          <div className="text-gray-700 text-sm pr-1 mt-1 font-medium flex">
                            {t("بعد الخصم :")}
                            <p className="text-red-600 text-sm pr-1 mt-1 font-medium">
                              6000$
                            </p>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                </section>
              </details>
            </details>
          </div>
        </div>
      </div>
    </>
  );
};

export default gedik;
