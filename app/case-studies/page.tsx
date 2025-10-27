"use client";

import Link from "next/link";
import Footer from "../components/Footer";
import { projectgoals } from "@/public/Assets/icons";

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
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
      <main>
        {/* Hero Section with Background Image - Leading American Manufacturer */}
        <section className="relative w-full h-screen pt-32 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/images/leadingamerican.png"
              alt="Leading American Manufacturer"
              className="w-full h-full object-cover"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 h-full flex flex-col justify-center">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-6 max-w-[800px]">
              Leading American Manufacturer
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 mb-4 max-w-[900px] font-light">
              Enhance the remote plant end-user experience and cost reduction.
            </p>
            <p className="text-sm lg:text-base text-gray-300 max-w-[900px] leading-relaxed">
              We&apos;ve helped to setup more consistent IT infrastructure support across the board, as well as significant organizational boost due to adherence to standard processes. Reduced time and cost of aligning skilled resources at remote plant locations.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-[1400px] mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Sidebar - Single card with all info */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 space-y-6">
                {/* Industry and Service - Side by Side */}
                <div className="grid grid-cols-2 gap-6">
                  {/* Industry */}
                  <div>
                    <h3 className="text-black font-semibold mb-2">Industry</h3>
                    <p className="text-gray-700 text-sm">Retail</p>
                  </div>

                  {/* Service */}
                  <div>
                    <h3 className="text-black font-semibold mb-2">Service</h3>
                    <p className="text-gray-700 text-sm">IT Infrastructure</p>
                  </div>
                </div>

                {/* Business type */}
                <div>
                  <h3 className="text-black font-semibold mb-2">Business type</h3>
                  <p className="text-gray-700 text-sm">Enterprise</p>
                </div>

                {/* Build your idea */}
                <div>
                  <h3 className="text-black font-semibold mb-2">Build your idea</h3>
                  <p className="text-gray-700 text-sm">Enterprise</p>
                </div>
              </div>
            </div>

            {/* Right Content - American Manufacturer Details */}
            <div className="lg:col-span-9">
              <h2 className="text-3xl lg:text-4xl font-light text-white mb-8">American Manufacturer</h2>

              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  The client is a leading American enterprise specializing in the manufacturing of electric and gas-powered golf carts and small utility vehicles. With a revenue of $246 million and a workforce of up to 5,000 employees, the company has established itself as a major player in the production of golf, personal, and utility vehicles. Headquartered in Augusta, Georgia, U.S., the client operates a vast global distribution network that includes more than 350 distributors and dealers.
                </p>

                <p>
                  As part of their growth and operational needs, the client was seeking a trusted partner to provide comprehensive IT support services. Their requirements included end-user support for break/fix issues, as well as guidance and troubleshooting assistance for resolving incidents and problems associated with End User Computing (EUC) equipment and software.
                </p>

                <p>
                  Additionally, the client required smart hand support for outage management and asset tracking of EUC devices. This involved provisioning devices for new joiners or relocated users, collecting devices from departing employees, and offering concierge services to support audio-visual requirements.
                </p>

                <p>
                  Another key requirement was maintaining the performance of the main IT server room, ensuring smooth operation of network nodes, and providing assistance with configuring access points (AP) in the factory. The support scope also extended to helping users resolve network-related issues, ensuring seamless day-to-day operations across their facilities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Project Goals Section */}
        <section className="w-full bg-black py-20">
          <div className="max-w-[1400px] mx-auto px-6">
            {/* Header */}
            <div className="flex justify-between items-start mb-16">
              <div>
                <h2 className="text-4xl lg:text-5xl font-light text-white mb-4">Project goals</h2>
                <p className="text-gray-400 text-lg">Smart Hand-Plant Support:</p>
              </div>
              <p className="text-gray-500 text-sm max-w-[300px]">
                Styx could help the client with
              </p>
            </div>

            {/* Goals Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Goal 1 - OS Imaging */}
              <div className="bg-[#0a0a0a] rounded-2xl p-6 border border-gray-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#c4d957] flex items-center justify-center flex-shrink-0">
                    <div className="text-black w-6 h-6" dangerouslySetInnerHTML={{ __html: projectgoals }} />
                  </div>
                  <h3 className="text-white font-semibold text-lg">OS Imaging</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Handling for equipment failures, including vendor management and warranty / non-warranty, faulty equipment health checks, coordination of vendor for service, monitoring-repair, providing real-time intervention to any event impairment.
                </p>
              </div>

              {/* Goal 2 - VC Room Support */}
              <div className="bg-[#0a0a0a] rounded-2xl p-6 border border-gray-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#c4d957] flex items-center justify-center flex-shrink-0">
                    <div className="text-black w-6 h-6" dangerouslySetInnerHTML={{ __html: projectgoals }} />
                  </div>
                  <h3 className="text-white font-semibold text-lg">VC Room Support</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Handling for equipment failures, including vendor management and warranty / non-warranty, faulty equipment health checks, coordination of vendor for service, monitoring-repair, providing real-time intervention to any event impairment.
                </p>
              </div>

              {/* Goal 3 - Onsite Assistance */}
              <div className="bg-[#0a0a0a] rounded-2xl p-6 border border-gray-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#c4d957] flex items-center justify-center flex-shrink-0">
                    <div className="text-black w-6 h-6" dangerouslySetInnerHTML={{ __html: projectgoals }} />
                  </div>
                  <h3 className="text-white font-semibold text-lg">Onsite Assistance</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Coordinate with third parties(e.g., n/w admin, Electricians and telecom specialists) concerning problems related to installation, relocation or change in IT infrastructure.
                </p>
              </div>

              {/* Goal 4 - Incident Management */}
              <div className="bg-[#0a0a0a] rounded-2xl p-6 border border-gray-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#c4d957] flex items-center justify-center flex-shrink-0">
                    <div className="text-black w-6 h-6" dangerouslySetInnerHTML={{ __html: projectgoals }} />
                  </div>
                  <h3 className="text-white font-semibold text-lg">Incident Management</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Maintain incidents and history and status up to date until the incident is resolved and inform end user of resolution. Escalate urgent, major incidents.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Value Differentiation Section */}
        <section className="w-full bg-[#0a0a0a] py-20">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <h2 className="text-4xl lg:text-5xl font-light text-white mb-8">
                  A Value Differentiation:
                </h2>

                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p>
                    The solution implementation brought consistent IT infrastructure support across the client&apos;s operations, strengthening organizational efficiency through standardized processes. By rendering skilled resources at remote plant locations, outage activities could be planned more effectively. Improved communication and coordination also made it easier to carry out IT-related activities, while basic LI system and network issues raised by end users were resolved quickly and efficiently.
                  </p>

                  <p>
                    Furthermore, the introduction of a single point of contact for all IT activities streamlined support at the factory level. Accurate documentation of requests and incidents provided better service visibility, while proper tracking of local assets ensured accountability. Onsite guidance and training helped end users resolve common &quot;how-to&quot; issues, reducing errors significantly. Additionally, the solution enhanced coordination with the client&apos;s third-party vendors, ensuring smoother IT operations overall.
                  </p>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/valuedifferenciation.png"
                    alt="Industrial Manufacturing Equipment"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Check our case studies Section */}
        <section className="w-full bg-black py-20">
          <div className="max-w-[1400px] mx-auto px-6">
            {/* Header */}
            <div className="flex justify-between items-start mb-16">
              <div>
                <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">CASE STUDIES</p>
                <h2 className="text-4xl lg:text-5xl font-light text-white">
                  Check our case studies
                </h2>
              </div>
              <div className="max-w-[400px]">
                <p className="text-gray-400 text-sm leading-relaxed">
                  Our case studies highlight real-world transformations—showing how strategy, technology, and expertise come together to drive growth and impact.
                </p>
              </div>
            </div>

            {/* Case Studies Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Case Study 1 - Global Fashion Retail Giant */}
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                  <img
                    src="/images/globalfashonretailer.png"
                    alt="Global Fashion Retail Giant"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl lg:text-3xl font-light text-white group-hover:text-[#c4d957] transition-colors">
                    Global Fashion<br />Retail Giant
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Ensuring uptime, ease of use, fixing problems and security before the user realize it.
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    We determined the combination of 2 different service models. Full-time onsite support and Remote IT Service Desk Support, to achieve tangible results.
                  </p>
                  <button className="text-white text-sm hover:text-[#c4d957] transition-colors flex items-center gap-2 group/btn">
                    Read more
                    <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Case Study 2 - Leading Industrial Pump Manufacturer */}
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                  <img
                    src="/images/leadingindustries.png"
                    alt="Leading Industrial Pump Manufacturer in Shanghai"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl lg:text-3xl font-light text-white group-hover:text-[#c4d957] transition-colors">
                    Leading Industrial Pump<br />Manufacturer in Shanghai
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Improve end-user productivity and resiliency.
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Residence
                  </p>
                  <button className="text-white text-sm hover:text-[#c4d957] transition-colors flex items-center gap-2 group/btn">
                    Read more
                    <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* View all case studies link */}
            <div className="flex justify-end">
              <Link
                href="/success-stories"
                className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2 group"
              >
                <span className="mr-2">→</span>
                View all case studies
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
