import Image from "next/image";
import pharmacy from "../../../Public/images/saydala.jpg";

export default function PharmacyLayout({ children }) {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 mt-32 gap-6">
        {/* القسم الأول */}
        <div className="col-span-1 lg:col-span-4">
          {/* صورة الصيدلة */}
          <div className="bg-white p-6 shadow-lg rounded-2xl mb-9">
            <Image
              src={pharmacy}
              width={100}
              height={40}
              className="w-full h-56 object-cover"
              alt="صورة الصيدلة"
            />
          </div>

          {/* معلومات عن البرنامج */}
          <div className="bg-white p-6 shadow-lg rounded-2xl backdrop-blur-md">
            <h1 className="text-2xl font-bold text-gray-800 text-right">
              عن البرنامج
            </h1>

            <div className="mt-4 space-y-3 text-gray-600">
              {[
                { icon: "📊", text: "المستوى: بكالوريوس" },
                { icon: "⏳", text: "المدة: 5 سنوات" },
                { icon: "🌍", text: "اللغة: الإنجليزية" },
                { icon: "🏫", text: "نوع التعليم: داخل الحرم الجامعي" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-lg">
                  <span className="text-blue-500 text-xl">{item.icon}</span>
                  <p className="font-medium">{item.text}</p>
                </div>
              ))}
            </div>

            {/* زر التواصل */}
            <button className="mt-6 w-full bg-gradient-to-r from-pink-500 to-fuchsia-900 text-white py-3 rounded-lg shadow-md hover:scale-105 transition">
              تواصل معنا
            </button>
          </div>
        </div>

        {/* القسم الثاني */}
        <div className="col-span-1 lg:col-span-8 bg-white text-[#a21caf] shadow-lg rounded-2xl p-6">
          {/* علامات التبويب */}
          <div className="flex justify-end space-x-6 py-3 gap-7">
            {[
              { label: "التفاصيل", link: "/takass/details/Details" },
              { label: "نظرة عامة", link: "/takass/details/overview" },
            ].map((tab, index) => (
              <a
                key={index}
                href={tab.link}
                className="text-lg font-semibold hover:text-pink-600 transition relative after:block after:w-0 after:h-0.5 after:bg-pink-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                {tab.label}
              </a>
            ))}
          </div>
          <div className="w-full h-0.5 bg-gray-200 mb-5"></div>
          {children}
        </div>
      </div>
    </div>
  );
}
