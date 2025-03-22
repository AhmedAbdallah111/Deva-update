export default function DetailsPage() {
  return (
    <div className="space-y-6">
      {/* قسم معلومات الكلية */}
      <div className="border border-gray-300 rounded-xl overflow-hidden shadow-lg">
        <div className="bg-gradient-to-r from-purple-200 to-pink-100 px-4 py-3 text-right font-semibold text-[#a21caf] border-b border-gray-300">
          كلية الصيدلة
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 text-right text-gray-700 text-sm">
          {["بكالوريوس", "TR-NQF-HE: المستوى 7", "QF-EHEA: الدورة الثانية", "EQF-LLL: المستوى 7"]
            .map((text, index) => (
              <span key={index} className="p-3 border border-gray-300 font-medium bg-gray-50 whitespace-nowrap overflow-hidden text-ellipsis">
                {text}
              </span>
          ))}
        </div>
      </div>

      {/* عنوان قسم هيكل المقررات */}
      <h2 className="text-2xl text-right text-[#a21caf] font-bold">هيكل المقررات الدراسية مع النقاط المعتمدة</h2>

      {/* جدول المقررات الدراسية */}
      <div className="rounded-xl overflow-hidden shadow-lg overflow-x-auto"> 
        {/* عنوان الفصل الدراسي */}
        <div className="bg-gradient-to-r from-purple-200 to-pink-100 px-4 py-3 text-[#a21caf] font-semibold text-lg text-right min-w-[800px]">
          الفصل الدراسي الأول
        </div>

        {/* عناوين الأعمدة */}
        <div className="grid grid-cols-7 text-right bg-gray-200 text-gray-700 text-sm font-bold border border-gray-300 min-w-[800px]">
          {["رمز المقرر", "اسم المقرر", "اللغة", "المتطلبات المسبقة", "النظري", "العمل العملي", "النقاط المعتمدة"]
            .map((header, index) => (
              <span key={index} className="p-2 border border-gray-300 whitespace-nowrap">
                {header}
              </span>
          ))}
        </div>

        {/* بيانات المقررات */}
        {[
          ["ENG1003", "مهارات وإعداد التقارير الأكاديمية I", "الإنجليزية", "-", "2", "2", "4"],
          ["HST1001", "مبادئ أتاتورك وتاريخ الجمهورية التركية I", "الإنجليزية", "-", "2", "0", "2"],
          ["MAT1007", "الرياضيات للصيادلة", "الإنجليزية", "-", "2", "2", "3"],
          ["CHEM101", "الكيمياء العامة", "الإنجليزية", "-", "3", "2", "5"],
          ["BIO102", "مقدمة في علم الأحياء", "الإنجليزية", "-", "3", "2", "5"],
          ["PHYS105", "الفيزياء للصيدلة", "الإنجليزية", "-", "2", "2", "4"],
        ].map((course, index) => (
          <div 
            key={index} 
            className={`grid grid-cols-7 text-right text-gray-700 border border-gray-300 min-w-[800px] ${
              index % 2 === 0 ? "bg-white" : "bg-gray-50"
            } hover:bg-purple-50 transition`}
          >
            {course.map((item, i) => (
              <span 
                key={i} 
                className="p-2 border border-gray-300 whitespace-nowrap overflow-hidden text-ellipsis"
              >
                {i === 0 ? (
                  <a href="#" className="text-[#a21caf] font-medium hover:underline">
                    {item}
                  </a>
                ) : (
                  item
                )}
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* زر قراءة المزيد */}
      <div className="flex justify-center mt-6">
        <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold px-6 py-2 rounded-lg shadow-md hover:scale-105 transition-all">
          اقرأ المزيد
        </button>
      </div>
    </div>
  );
}