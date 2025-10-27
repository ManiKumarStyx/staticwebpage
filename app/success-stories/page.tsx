"use client";

import Link from "next/link";
import { sucessstories } from "@/public/Assets/icons";
import Footer from "../components/Footer";

export default function SuccessStories() {
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
              <Link href="#services" className="text-gray-300 hover:text-white text-sm transition-colors">
                Services
              </Link>
              <Link href="/success-stories" className="text-white text-sm transition-colors font-medium">
                Success Stories
              </Link>
            </div>

            {/* Center Logo */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Link href="/">
                <img
                  src="/images/Finalized color-02.png"
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
              <Link href="/about" className="text-gray-300 hover:text-white text-sm transition-colors">
                About Us
              </Link>
              <Link href="#contact" className="text-gray-300 hover:text-white text-sm transition-colors">
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
        <section className="relative max-w-[1400px] mx-auto px-6 py-20 min-h-[60vh] flex flex-col items-center justify-center">
          {/* Small Header Text */}
          <p className="text-gray-400 text-xs tracking-[0.3em] uppercase mb-8">
            REAL RESULTS, PROVEN IMPACT.
          </p>

          {/* Large SVG Title - Success Stories */}
          <div className="flex justify-center items-center mb-12 max-w-[1096px] w-full">
            <div
              className="w-full"
              dangerouslySetInnerHTML={{ __html: sucessstories }}
            />
          </div>

          {/* Description */}
          <p className="text-gray-400 text-center max-w-[800px] leading-relaxed text-base">
            Our success stories showcase how we help businesses achieve measurable growth through innovation, strategy, and technology—turning challenges into impactful results.
          </p>
        </section>

        {/* Partners/Logos Section */}
        <section className="max-w-[1400px] mx-auto px-6 py-12">
          <div className="flex items-center justify-center">
            <img
              src="/images/logos.png"
              alt="Our Trusted Partners"
              width={1400}
              height={165}
              className="w-full h-auto opacity-70"
            />
          </div>
        </section>

        {/* Case Studies Cards Section */}
        <section className="max-w-[1400px] mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1 - Global Fashion Retail Giant */}
            <div className="bg-black rounded-2xl overflow-hidden border border-gray-800">
              {/* Image */}
              <div className="relative h-[300px] overflow-hidden">
                <img
                  src="/images/globalfashonretailer.png"
                  alt="Global Fashion Retail Giant"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-light text-white mb-4">
                  Global Fashion<br />Retail Giant
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  Ensuring uptime, ease of use, fixing problems and security before the user realize it.
                </p>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  We determined the combination of 2 different service models. Full-time onsite support and Remote IT Service Desk Support, to achieve tangible results.
                </p>
                <Link
                  href="/case-studies"
                  className="text-white text-sm hover:text-[#c4d957] transition-colors inline-block"
                >
                  Read more
                </Link>
              </div>
            </div>

            {/* Card 2 - Largest Electronics Companies */}
            <div className="bg-black rounded-2xl overflow-hidden border border-gray-800">
              {/* Content - No Image */}
              <div className="p-8 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-light text-white mb-4">
                  Largest Electronics Companies in the World
                </h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  We automated document processing, significantly reducing manual effort across various business processes, improving efficiency, and providing end-to-end visibility of network devices by carefully auditing and migrating the equipments. The new centralized monitoring setup across the board will improve the security and performance as endorsed by 97% and reduced the total cost of ownership (TCO) by 25%.
                </p>
                <Link
                  href="/case-studies"
                  className="text-white text-sm hover:text-[#c4d957] transition-colors inline-block"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Case Studies Section */}
        <section className="max-w-[1400px] mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Case Study 1 - Leading American Manufacturer */}
            <div className="relative rounded-3xl overflow-hidden">
              {/* Background Image */}
              <div className="relative h-[550px]">
                <img
                  src="/images/leadingamerican.png"
                  alt="Leading American Manufacturer"
                  className="w-full h-full object-cover"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-semibold mb-4">
                  Leading American Manufacturer
                </h3>
                <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                  Enhance the remote plant end-user experience and cost reduction.
                </p>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  We&apos;ve helped to setup more consistent IT infrastructure support across the board, as well as significant organization at boost due to adherence to standard processes. Reduced time and cost of aligning skilled resources at remote plant locations.
                </p>
                <Link href="/case-studies/leading-american-manufacturer" className="text-white text-sm hover:text-[#c4d957] transition-colors">
                  Read more
                </Link>
              </div>
            </div>

            {/* Case Study 2 - Leading Industrial Pump Manufacturer */}
            <div className="relative rounded-3xl overflow-hidden">
              {/* Background Image */}
              <div className="relative h-[550px]">
                <img
                  src="/images/leadingindustries.png"
                  alt="Leading Industrial Pump Manufacturer in Shanghai"
                  className="w-full h-full object-cover"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-semibold mb-4">
                  Leading Industrial Pump Manufacturer in Shanghai
                </h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  Improving end-user productivity and resiliency.
                </p>
                <Link href="/case-studies/leading-industrial-pump-manufacturer" className="text-white text-sm hover:text-[#c4d957] transition-colors">
                  Read more
                </Link>
              </div>
            </div>
          </div>

          {/* View All Case Studies Link */}
          <div className="flex justify-end mt-12">
            <Link href="/case-studies" className="text-white text-base hover:text-[#c4d957] transition-colors flex items-center gap-2">
              <span>View all case studies</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
