"use client";

import Image from "next/image";
import Link from "next/link";
import { fueling, testimonals } from "@/public/Assets/icons";
import Footer from "../components/Footer";
import { getImagePath } from "../utils/basePath";

export default function About() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-sm border-b border-gray-800/50">
        <div className="max-w-[1400px] mx-auto px-6 py-6">
          <div className="flex items-center justify-between relative">
            {/* Left Navigation */}
            <div className="flex items-center gap-8 z-10">
              <Link href="/" className="text-gray-300 hover:text-white text-sm transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-gray-300 hover:text-white text-sm transition-colors">
                Services
              </Link>
              <Link href="/success-stories" className="text-gray-300 hover:text-white text-sm transition-colors">
                Success Stories
              </Link>
            </div>

            {/* Center Logo */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Link href="/">
                <img
                  src={getImagePath("/images/Finalized color-02.png")}
                  alt="Styxtech Systems Logo"
                  className="object-contain"
                  style={{ height: '170px', width: 'auto', marginTop:'20%' }}
                />
              </Link>
            </div>

            {/* Right Navigation */}
            <div className="flex items-center gap-6 z-10">
              <Link href="#blogs" className="text-gray-300 hover:text-white text-sm transition-colors">
                Blogs
              </Link>
              <Link href="#contact" className="text-white text-sm transition-colors font-medium">
                Contact
              </Link>

              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="I am looking for..."
                  className="bg-transparent border border-gray-700 rounded-full px-4 py-2 pr-10 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-gray-600 w-[200px]"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-32">
        {/* Hero Section */}
        <section className="relative max-w-[1400px] mx-auto px-6 py-20 min-h-[80vh] flex items-center justify-center">
          {/* Content */}
          <div className="text-center relative z-10">
            {/* SVG Text - Fueling Innovation with Passion and Technology */}
            <div className="flex justify-center items-center mb-12">
              <div
                className="w-full max-w-[1100px]"
                dangerouslySetInnerHTML={{ __html: fueling }}
              />
            </div>

            
          </div>
        </section>

        {/* Partners Section */}
        <section className="max-w-[1400px] mx-auto px-6 py-12">
          <div className="flex items-center justify-center">
            <Image
              src={getImagePath("/images/logos.png")}
              alt="Our Trusted Partners"
              width={1400}
              height={165}
              className="w-full h-auto opacity-70"
            />
          </div>
        </section>

        {/* Company Info Section */}
        <section className="max-w-[1400px] mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Text Content */}
            <div>
              <p className="text-gray-400 text-xs tracking-[0.3em] uppercase mb-6">
                ABOUT US
              </p>
              <h2 className="text-5xl lg:text-6xl font-semibold text-white mb-8 leading-tight">
                Styxtech Systems
              </h2>
            </div>

            {/* Right Side - Description */}
            <div>
              <p className="text-gray-400 text-base leading-relaxed">
                Styxtech Systems delivers seamless digital experiences and innovative platforms that create real business value. We empower our people to learn, grow, and build rewarding careers through strategy, authenticity, and strong governance.
              </p>
            </div>
          </div>

          {/* Meeting Image */}
          <div className="mt-12 rounded-3xl overflow-hidden">
            <Image
              src={getImagePath("/images/meeting.png")}
              alt="Team Meeting"
              width={1400}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="w-full bg-black py-20">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src={getImagePath("/images/ourvisonmission.png")}
                alt="Our Vision and Mission"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="max-w-[1400px] mx-auto px-6 py-20 overflow-hidden">
          <div className="mb-12">
            <p className="text-gray-400 text-xs tracking-[0.3em] uppercase mb-6">
              WHAT PEOPLE ARE SAYING
            </p>
            <div className="flex justify-between items-start mb-12">
              <h2 className="text-4xl lg:text-5xl font-semibold text-white">
                Testimonials
              </h2>
              <p className="text-gray-400 text-sm max-w-md leading-relaxed">
                Hear from our clients who have transformed their businesses with our cutting-edge digital solutions, driving efficiency, scalability, and market impact like never before.
              </p>
            </div>
          </div>

          {/* Testimonials SVG */}
          <div className="w-full overflow-hidden">
            <div
              className="w-full [&>svg]:w-full [&>svg]:h-auto [&>svg]:max-w-full"
              dangerouslySetInnerHTML={{ __html: testimonals }}
            />
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full bg-black py-20 overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6">
            {/* Header */}
            <div className="flex justify-between items-start mb-20">
              <div>
                <p className="text-gray-400 text-xs tracking-[0.3em] uppercase mb-6">
                  MEET OUR TEAM
                </p>
                <h2 className="text-5xl lg:text-6xl font-semibold text-white">
                  Team
                </h2>
              </div>
              <p className="text-gray-400 text-sm max-w-md leading-relaxed">
                Meet the minds behind our innovation—driving expertise, collaboration, and solutions that empower businesses to thrive.
              </p>
            </div>

            {/* Team Photos - Scattered Collage Layout - Rainbow Arc */}
            <div className="relative h-[650px] w-full flex items-center justify-center">
              {/* 1. Far Bottom Left - Dark Teal - Lowest point of arc */}
              <div className="absolute top-[320px] left-[5%] transform rotate-[-25deg] z-10">
                <div className="w-[160px] h-[195px] rounded-[24px] shadow-2xl bg-[#3a6565] overflow-hidden">
                  <img
                    src={getImagePath("/images/team/member-1.jpg")}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* 2. Left - Teal/Cyan - Mid arc */}
              <div className="absolute top-[130px] left-[14%] transform rotate-[-15deg] z-11">
                <div className="w-[160px] h-[195px] rounded-[24px] shadow-2xl bg-[#4a7a7a] overflow-hidden">
                  <img
                    src={getImagePath("/images/team/member-2.jpg")}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* 3. Left Center - Brown - Just below center */}
              <div className="absolute top-[100px] left-[28%] transform rotate-[-8deg] z-12">
                <div className="w-[160px] h-[195px] rounded-[24px] shadow-2xl bg-[#a0826a] overflow-hidden">
                  <img
                    src={getImagePath("/images/team/member-3.jpg")}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* 4. Center - John Henry - Highest point */}
              <div className="absolute z-20 top-[40px] left-1/2 transform -translate-x-1/2">
                <div className="w-[190px] h-[240px] rounded-[24px] shadow-2xl bg-[#dcdcdc] overflow-hidden">
                  <img
                    src={getImagePath("/images/team/member-center.jpg")}
                    alt="John Henry"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* 5. Right Center - Yellow - Just below center */}
              <div className="absolute top-[100px] right-[28%] transform rotate-[8deg] z-12">
                <div className="w-[160px] h-[195px] rounded-[24px] shadow-2xl bg-[#d9c65f] overflow-hidden">
                  <img
                    src={getImagePath("/images/team/member-4.jpg")}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* 6. Right - White - Mid arc */}
              <div className="absolute top-[130px] right-[14%] transform rotate-[15deg] z-11">
                <div className="w-[160px] h-[195px] rounded-[24px] shadow-2xl bg-[#ebebeb] overflow-hidden">
                  <img
                    src={getImagePath("/images/team/member-5.jpg")}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* 7. Far Bottom Right - Green - Lowest point of arc */}
              <div className="absolute top-[320px] right-[5%] transform rotate-[25deg] z-10">
                <div className="w-[160px] h-[195px] rounded-[24px] shadow-2xl bg-[#51c0a8] overflow-hidden">
                  <img
                    src={getImagePath("/images/team/member-6.jpg")}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text Below Center Card - Above Green Glow */}
              <div className="absolute z-20 top-[310px] left-1/2 transform -translate-x-1/2 text-center">
                <h3 className="text-white font-semibold text-xl mb-2">John Henry</h3>
                <p className="text-gray-400 text-sm">Head of the Department</p>
              </div>

              {/* Green glow effect - Below text, centered in arc */}
              <div className="absolute z-0 top-[360px] left-1/2 transform -translate-x-1/2 w-[500px] h-[80px] bg-[#c4d957] blur-[60px] opacity-75"></div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
