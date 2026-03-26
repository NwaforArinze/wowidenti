import Image from "next/image";
import logo from "@/public/logo.webp";
import { Facebook, Twitter, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#1e2c40] to-[#243a55] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 text-gray-400">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <Image src={logo} alt="logo" />

            <p className="text-sm  mb-6 mt-4">
              Smart biometric attendance and identity verification system
              designed for modern organizations.
            </p>

            <div className="flex gap-4">
              <a className="p-2 bg-white/10 rounded-full hover:bg-blue-500 transition">
                <Facebook size={18} />
              </a>

              <a className="p-2 bg-white/10 rounded-full hover:bg-blue-500 transition">
                <Twitter size={18} />
              </a>

              <a className="p-2 bg-white/10 rounded-full hover:bg-blue-500 transition">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>

            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Features</li>
              <li className="hover:text-white cursor-pointer">How It Works</li>
              <li className="hover:text-white cursor-pointer">Pricing</li>
              <li className="hover:text-white cursor-pointer">Sign Up</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>

            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Features</li>
              <li className="hover:text-white cursor-pointer">How It Works</li>
              <li className="hover:text-white cursor-pointer">Support</li>
              <li className="hover:text-white cursor-pointer">Documentation</li>
            </ul>
          </div>

          {/* Email */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get In Touch</h3>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>support@wowidenti.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+1 234 567 8900</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2026 Wowidenti. All rights reserved.</p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>

            <span className="hover:text-white cursor-pointer">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
