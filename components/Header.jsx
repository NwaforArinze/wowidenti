"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div>
          <h1 className="text-3xl text-[#0e1621]">
            wow<span className="font-semibold">identi</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="flex gap-10 align-middle items-center">
          <nav className="hidden md:flex gap-8 text-gray-700">
            <a href="#">Home</a>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
          </nav>

          {/* Desktop Button */}
          <button className="hidden md:block bg-[#3c83d3] text-white px-4 py-2 rounded-lg">
            Get Started
          </button>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col p-6 gap-4 text-gray-700">
            <a href="#" onClick={() => setMenuOpen(false)}>
              Home
            </a>
            <a href="#" onClick={() => setMenuOpen(false)}>
              Features
            </a>
            <a href="#" onClick={() => setMenuOpen(false)}>
              Pricing
            </a>
            <a href="#" onClick={() => setMenuOpen(false)}>
              Contact
            </a>

            <button className="bg-[#3c83d3] text-white px-4 py-2 rounded-lg mt-2">
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

// export default function Header() {
//   return (
//     <header className="border-b bg-white">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//         <h1 className="text-3xl text-[#0e1621]">
//           wow<span className="font-semibold">identi</span>
//         </h1>

//         <div className="flex gap-10 align-middle items-center">
//           <nav className="hidden md:flex gap-8 text-gray-600 text-lg">
//             <a href="#">Features</a>
//             <a href="#">How it Works</a>
//             <a href="#">Pricing</a>
//             <a href="#">Contact</a>
//           </nav>

//           <button className="bg-[#3c83d3] hover:bg-[#5d6774] text-white px-5 py-2 rounded-lg cursor-pointer">
//             Sign Up
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// }
