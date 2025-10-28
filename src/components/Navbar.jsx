// import { useState } from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
//         {/* Logo */}
//         <Link to="/" className="text-orange-500 font-bold text-2xl">
//           Coding Ninjas
//         </Link>

//         {/* Desktop Links */}
//         <div className="hidden md:flex space-x-6">
//           <Link to="/" className="hover:text-orange-500 font-medium">Home</Link>
//           <Link to="/courses" className="hover:text-orange-500 font-medium">Courses</Link>
//           <Link to="/about" className="hover:text-orange-500 font-medium">About</Link>
//           <Link to="/contact" className="hover:text-orange-500 font-medium">Contact</Link>
//         </div>

//         {/* Mobile Toggle */}
//         <div className="md:hidden">
//           <button onClick={() => setIsOpen(!isOpen)} className="text-orange-500 text-2xl">
//             ☰
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden px-4 pb-4 space-y-2">
//           <Link to="/" className="block hover:text-orange-500">Home</Link>
//           <Link to="/courses" className="block hover:text-orange-500">Courses</Link>
//           <Link to="/about" className="block hover:text-orange-500">About</Link>
//           <Link to="/contact" className="block hover:text-orange-500">Contact</Link>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;

// import { Link } from "react-router-dom";
// import logo from "../assets/hero.png"; 


// function Navbar() {
//   return (
//     <nav className="bg-white shadow-sm sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-2">
//           <img src={logo} alt="logo" className="h-6" />
//           <span className="font-bold text-lg text-gray-800">codingninjas</span>
//         </Link>

//         {/* Menu Items */}
//         {/* <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
//           <Link to="#">Job Bootcamp ▾</Link>
//           <Link to="#">IIT Certifications ▾</Link>
//           <Link to="#">New Launches ▾</Link>
//         </div> */}

//         <div className="hidden md:flex space-x-8 text-gray-700 font-medium relative z-50">
//       {/* Job Bootcamp */}
//       <div className="group relative">
//         <button className="hover:text-orange-500">Job Bootcamp ▾</button>
//         <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 py-2 w-64">
//           <Link
//             to="#"
//             className="block px-4 py-2 hover:bg-gray-100 text-sm"
//           >
//             Web Dev Bootcamp (MERN & SpringBoot)
//           </Link>
//           <Link
//             to="#"
//             className="block px-4 py-2 hover:bg-gray-100 text-sm"
//           >
//             Data Analytics Job Bootcamp
//           </Link>
//         </div>
//       </div>

//       {/* IIT Certifications */}
//       <div className="group relative">
//         <button className="hover:text-orange-500">IIT Certifications ▾</button>
//         <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 py-2 w-64">
//           <Link
//             to="#"
//             className="block px-4 py-2 hover:bg-gray-100 text-sm"
//           >
//             PG in Data Analytics (IIT Guwahati)
//           </Link>
//           <Link
//             to="#"
//             className="block px-4 py-2 hover:bg-gray-100 text-sm"
//           >
//             Generative AI (IITM TIH)
//           </Link>
//         </div>
//       </div>

//       {/* New Launches */}
//       <div className="group relative">
//         <button className="hover:text-orange-500">New Launches ▾</button>
//         <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 py-2 w-64">
//           <Link
//             to="#"
//             className="block px-4 py-2 hover:bg-gray-100 text-sm"
//           >
//             Full Stack Web + DSA + GenAI (IITM)
//           </Link>
//           <Link
//             to="#"
//             className="block px-4 py-2 hover:bg-gray-100 text-sm"
//           >
//             Advanced GenAI & Multi-Agent Systems
//           </Link>
//         </div>
//       </div>
//     </div>

//         {/* Login */}
//         <Link to="/login">
//           <button className="bg-orange-500 text-white px-5 py-2 rounded font-semibold hover:bg-orange-600 transition">
//             Login
//           </button>
//         </Link>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


// 

 import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/hero.png";
import LoginModal from "./LoginModal";

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="logo" className="h-6" />
            <span className="font-bold text-lg text-gray-800">codingninjas</span>
          </Link>

          {/* Dropdowns */}
          <div className="hidden md:flex space-x-6 items-center">
            {/* Job Bootcamp */}
            <div className="relative">
              <select
                className="appearance-none bg-transparent pr-4 text-gray-700 text-sm font-medium cursor-pointer focus:outline-none"
              >
                <option disabled selected>Job Bootcamp</option>
                <option>Web Dev Bootcamp (MERN & SpringBoot)</option>
                <option>Data Analytics Job Bootcamp</option>
              </select>
              <span className="absolute right-1 top-1/2 -translate-y-1/2 text-xs text-gray-500 pointer-events-none">▼</span>
            </div>

            {/* IIT Certifications */}
            <div className="relative">
              <select
                className="appearance-none bg-transparent pr-4 text-gray-700 text-sm font-medium cursor-pointer focus:outline-none"
              >
                <option disabled selected>IIT Certifications</option>
                <option>PG in Data Analytics (IIT Guwahati)</option>
                <option>Generative AI (IITM TIH)</option>
              </select>
              <span className="absolute right-1 top-1/2 -translate-y-1/2 text-xs text-gray-500 pointer-events-none">▼</span>
            </div>

            {/* New Launches */}
            <div className="relative">
              <select
                className="appearance-none bg-transparent pr-4 text-gray-700 text-sm font-medium cursor-pointer focus:outline-none"
              >
                <option disabled selected>New Launches</option>
                <option>Full Stack Web + DSA + GenAI (IITM)</option>
                <option>Advanced GenAI & Multi-Agent Systems</option>
              </select>
              <span className="absolute right-1 top-1/2 -translate-y-1/2 text-xs text-gray-500 pointer-events-none">▼</span>
            </div>
          </div>

          {/* Login Button */}
          <button
            onClick={() => setShowLogin(true)}
            className="bg-orange-500 text-white px-5 py-2 rounded font-semibold hover:bg-orange-600 transition"
          >
            Login
          </button>
        </div>
      </nav>

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </>
  );
}

export default Navbar;
