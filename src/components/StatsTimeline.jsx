// import React from "react";
// import { motion } from "framer-motion";
// import { FaUserGraduate, FaBriefcase, FaRupeeSign, FaChartLine } from "react-icons/fa";

// const stats = [
//   {
//     icon: <FaUserGraduate className="text-white text-2xl" />,
//     bg: "bg-purple-600",
//     title: "1.5 Lac+ learners",
//     subtitle: "cracked dream roles at top tech companies",
//   },
//   {
//     icon: <FaBriefcase className="text-white text-2xl" />,
//     bg: "bg-green-600",
//     title: "1,400 Alumni in MAANG",
//     subtitle: "& more in 103/111 Unicorns",
//   },
//   {
//     icon: <FaRupeeSign className="text-white text-2xl" />,
//     bg: "bg-pink-600",
//     title: "1 Cr+ highest CTC",
//     subtitle: "after completing the course",
//   },
//   {
//     icon: <FaChartLine className="text-white text-2xl" />,
//     bg: "bg-blue-600",
//     title: "128% average hike",
//     subtitle: "via our placement cell",
//     button: true,
//   },
// ];

// const StatsTimeline = () => {
//   return (
//     <section className="bg-[#111] text-white py-24 relative">
//       {/* Vertical Line */}
//       <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-700 z-0" />

//       <div className="flex flex-col items-center gap-28 relative z-10">
//         {stats.map((item, index) => (
//           <motion.div
//             key={index}
//             className="flex flex-col items-center text-center group transition-transform duration-300 hover:-translate-y-2"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: index * 0.2 }}
//           >
//             {/* Icon */}
//             <div className={`w-14 h-14 ${item.bg} rounded-xl flex items-center justify-center shadow-lg z-10`} />
//             <div
//               className={`w-14 h-14 ${item.bg} rounded-xl flex items-center justify-center shadow-lg z-10 absolute -top-7`}
//             >
//               {item.icon}
//             </div>

//             {/* Text */}
//             <h3 className="text-3xl font-bold mt-14">{item.title}</h3>
//             <p className="text-gray-400 mt-2">{item.subtitle}</p>

//             {/* Button */}
//             {item.button && (
//               <button className="mt-6 bg-orange-500 text-white font-semibold px-6 py-2 rounded hover:bg-orange-600 transition">
//                 Explore offerings &uarr;
//               </button>
//             )}
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default StatsTimeline;


// import React from "react";
// import { motion } from "framer-motion";
// import { FaUserGraduate, FaBriefcase, FaRupeeSign, FaChartLine } from "react-icons/fa";

// const stats = [
//   {
//     icon: <FaUserGraduate className="text-white text-2xl" />,
//     bg: "bg-purple-600",
//     title: "1.5 Lac+ learners",
//     subtitle: "cracked dream roles at top tech companies",
//   },
//   {
//     icon: <FaBriefcase className="text-white text-2xl" />,
//     bg: "bg-green-600",
//     title: "1,400 Alumni in MAANG",
//     subtitle: "& more in 103/111 Unicorns",
//   },
//   {
//     icon: <FaRupeeSign className="text-white text-2xl" />,
//     bg: "bg-pink-600",
//     title: "1 Cr+ highest CTC",
//     subtitle: "after completing the course",
//   },
//   {
//     icon: <FaChartLine className="text-white text-2xl" />,
//     bg: "bg-blue-600",
//     title: "128% average hike",
//     subtitle: "via our placement cell",
//     button: true,
//   },
// ];

// const StatsTimeline = () => {
//   return (
//     <section className="bg-[#111] text-white py-24 relative">
//       {/* Vertical Line */}
//       <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-700 z-0" />

//       <div className="flex flex-col items-center gap-28 relative z-10">
//         {stats.map((item, index) => (
//           <motion.div
//             key={index}
//             className="flex flex-col items-center text-center group transition-transform duration-300 hover:-translate-y-2"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: index * 0.2 }}
//           >
//             {/* Icon */}
//             <div
//               className={`w-14 h-14 ${item.bg} rounded-xl flex items-center justify-center shadow-lg z-10 absolute -top-7`}
//             >
//               {item.icon}
//             </div>

//             {/* Text */}
//             <h3 className="text-2xl md:text-3xl font-bold mt-16 leading-tight">{item.title}</h3>
//             <p className="text-sm md:text-base text-gray-400 mt-2">{item.subtitle}</p>

//             {/* Button */}
//             {item.button && (
//               <button className="mt-6 bg-orange-500 text-white text-sm font-semibold px-6 py-2 rounded hover:bg-orange-600 transition">
//                 Explore offerings &uarr;
//               </button>
//             )}
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default StatsTimeline;



import React from "react";
import { motion } from "framer-motion";
import { FaUserGraduate, FaBriefcase, FaRupeeSign, FaChartLine } from "react-icons/fa";

const stats = [
  {
    icon: <FaUserGraduate className="text-white text-3xl" />,
    bg: "bg-purple-600",
    title: "1.5 Lac+ learners",
    subtitle: "cracked dream roles at top tech companies",
  },
  {
    icon: <FaBriefcase className="text-white text-3xl" />,
    bg: "bg-green-600",
    title: "1,400 Alumni in MAANG",
    subtitle: "& more in 103/111 Unicorns",
  },
  {
    icon: <FaRupeeSign className="text-white text-3xl" />,
    bg: "bg-pink-600",
    title: "1 Cr+ highest CTC",
    subtitle: "after completing the course",
  },
  {
    icon: <FaChartLine className="text-white text-3xl" />,
    bg: "bg-blue-600",
    title: "128% average hike",
    subtitle: "via our placement cell",
    button: true,
  },
];

const StatsTimeline = () => {
  return (
    <section className="bg-[#111] text-white py-28 px-4">
      <div className="max-w-3xl mx-auto text-center relative">
        {/* Vertical line from top to icon */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-20 w-0.5 bg-gray-600"></div>

        {stats.map((item, index) => (
          <motion.div
            key={index}
            className="mb-24 last:mb-0"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            {/* Icon */}
            <div className={`mx-auto mb-8 w-16 h-16 ${item.bg} rounded-xl flex items-center justify-center shadow-lg`}>
              {item.icon}
            </div>

            {/* Stat Text */}
            <h2 className="text-4xl sm:text-5xl font-extrabold">{item.title}</h2>
            <p className="text-gray-400 text-lg mt-3">{item.subtitle}</p>

            {/* Optional Button */}
            {item.button && (
              // <button className="mt-6 bg-orange-500 text-white font-semibold px-6 py-3 rounded hover:bg-orange-600 transition">
              //   Explore offerings &uarr;
              // </button>
              <a href="#offerings">
  <button className="bg-orange-500 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-orange-600 transition">
    Explore offerings &uarr;
  </button>
</a>

            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsTimeline;
