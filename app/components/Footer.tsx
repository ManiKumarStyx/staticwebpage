"use client";

import { styxtech } from "@/public/Assets/icons";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate email
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 3000);
      return;
    }

    setStatus("loading");

    try {
      // Send email to info@styxtech.systems
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setMessage("Thank you for subscribing!");
        setEmail("");
        setTimeout(() => {
          setStatus("idle");
          setMessage("");
        }, 3000);
      } else {
        throw new Error("Subscription failed");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 3000);
    }
  };

  return (
    <footer className="w-full bg-black pt-16 pb-8 border-t border-[#1a1a1a]">
      <div className="max-w-[1600px] mx-auto px-6">
        {/* Newsletter Section */}
        <div className="mb-16 pb-8 border-b border-[#1a1a1a]">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-white text-lg font-normal">Join our newsletter to keep up</h3>
              <h3 className="text-white text-lg font-normal">to date with us!</h3>
            </div>
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading"}
                className="bg-transparent border border-gray-700 rounded-lg px-6 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#c4d957] w-[300px] disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-[#c4d957] text-black px-8 py-3 rounded-lg font-medium hover:bg-[#d4e967] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
          {message && (
            <div className={`mt-4 text-sm text-right ${status === "success" ? "text-[#c4d957]" : "text-red-400"}`}>
              {message}
            </div>
          )}
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 relative">
          {/* Logo and Social Links */}
          <div>
            <img
              src="/images/Finalized color-02.png"
              alt="Styxtech Systems Logo"
              className="w-full max-w-[280px] h-auto object-contain brightness-110 -mb-8"
            />
            <p className="text-gray-300 text-base leading-relaxed max-w-sm mb-6">
              Smart solutions that power your digital future
            </p>
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-[#c4d957] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#d4e967] transition-colors">
                <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </div>
              <div className="w-10 h-10 bg-[#c4d957] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#d4e967] transition-colors">
                <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <div className="w-10 h-10 bg-[#c4d957] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#d4e967] transition-colors">
                <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm hover:text-[#c4d957] cursor-pointer transition-colors">IT Infrastructure</li>
              <li className="text-gray-400 text-sm hover:text-[#c4d957] cursor-pointer transition-colors">Security</li>
              <li className="text-gray-400 text-sm hover:text-[#c4d957] cursor-pointer transition-colors">Workplace Empowerment</li>
              <li className="text-gray-400 text-sm hover:text-[#c4d957] cursor-pointer transition-colors">End User Support Services</li>
            </ul>
          </div>

          {/* Industry Column */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4">Industry</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm hover:text-[#c4d957] cursor-pointer transition-colors">Automotive</li>
              <li className="text-gray-400 text-sm hover:text-[#c4d957] cursor-pointer transition-colors">Banking and Capital Markets</li>
              <li className="text-gray-400 text-sm hover:text-[#c4d957] cursor-pointer transition-colors">Healthcare</li>
              <li className="text-gray-400 text-sm hover:text-[#c4d957] cursor-pointer transition-colors">Manufacturing</li>
              <li className="text-gray-400 text-sm hover:text-[#c4d957] cursor-pointer transition-colors">Telecom, Media and Entertainment</li>
              <li className="text-gray-400 text-sm hover:text-[#c4d957] cursor-pointer transition-colors">Rental</li>
            </ul>
          </div>

          {/* About us Column */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4">About us</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm hover:text-[#c4d957] cursor-pointer transition-colors">About Us</li>
              <li className="text-gray-400 text-sm hover:text-[#c4d957] cursor-pointer transition-colors">Global Office</li>
            </ul>
          </div>
        </div>

        {/* Large Watermark Text */}
        <div className="relative overflow-hidden mb-8 w-full max-w-full">
          <div
            className="w-full h-auto flex items-center justify-center"
            dangerouslySetInnerHTML={{
              __html: styxtech.replace(
                '<svg',
                '<svg class="w-full h-auto max-w-full"'
              )
            }}
          />
        </div>

        {/* Bottom Bar */}
        <div className="flex justify-between items-center pt-6 border-t border-[#1a1a1a]">
          <p className="text-gray-500 text-sm">© 2024 STYLXTECH-systems. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="text-gray-500 text-sm hover:text-[#c4d957] transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 text-sm hover:text-[#c4d957] transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-sm hover:text-[#c4d957] transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
