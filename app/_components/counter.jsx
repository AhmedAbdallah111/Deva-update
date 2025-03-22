"use client";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { useState, useEffect, useRef } from "react";

import {
  FcClock,
  FcGraduationCap,
  FcFactory,
  FcBusinessman,
} from "react-icons/fc";
import { useTranslation } from "react-i18next";

const Counter = () => {
  const { t } = useTranslation();
  const stats = [
    {
      icon: <FcClock className="h-6 w-6 mx-auto" />,
      label: "عدد سنوات الخبرة",
      value: 15,
      color: "text-[#7a0066e0] border-[#7a0066e0]",
    },
    {
      icon: <FcGraduationCap className="h-6 w-6 mx-auto" />,
      label: "القبول الجامعي",
      value: 170000,
      color: "text-[#a4133c] border-[#a4133c]",
    },
    {
      icon: <FcFactory className="h-6 w-6 mx-auto" />,
      label: "فروعنا",
      value: 5,
      color: "text-[#fe6d73] border-[#fe6d73]",
    },
    {
      icon: <FcBusinessman className="h-6 w-6 mx-auto" />,
      label: "مستشار اكاديمي",
      value: 55,
      color: "text-[#ffa62b] border-[#ffa62b]",
    },
  ];
  // triggerOnce: false → إعادة التشغيل كل مرة يكون العنصر مرئيًا
  // threshold: 0.5 → العداد يبدأ عندما يظهر نصف العنصر

  const [counts, setCounts] = useState(stats.map(() => 0));
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          stats.forEach((stat, index) => {
            let start = 0;
            const end = stat.value;
            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                clearInterval(timer);
                start = end;
              }
              setCounts((prev) => {
                const newCounts = [...prev];
                newCounts[index] = Math.floor(start);
                return newCounts;
              });
            }, 16);
          });
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex justify-center items-center bg-gray-50" ref={ref}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-28 p-12">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center bg-white shadow-2xl rounded-xl p-6 border-t-4 ${stat.color}`}
          >
            <div className="absolute -top-5 bg-white p-2 rounded-full border shadow-md text-xl">
              {stat.icon}
            </div>
            <h3 className="text-gray-600 text-xl font-semibold mb-4 mt-6">
              {stat.label}
            </h3>
            <p className={`text-3xl font-bold ${stat.color}`}>
              {counts[index]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
