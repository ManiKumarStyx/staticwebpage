"use client";

import Link from "next/link";
import { useState } from "react";
import { servicespage } from "@/public/Assets/icons";
import Footer from "../components/Footer";
import { getImagePath } from "../utils/basePath";

export default function Services() {
  const [selectedDate, setSelectedDate] = useState<number>(15);
  const [selectedMonthYear, setSelectedMonthYear] = useState<string>("AUG, 2025");
  const [selectedTimezone, setSelectedTimezone] = useState<string>("Central European Time (8:12 PM)");

  // Generate month-year options for current year and next 5 years
  const generateMonthYearOptions = (): string[] => {
    const currentYear = new Date().getFullYear();
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const options: string[] = [];

    for (let year = currentYear; year <= currentYear + 5; year++) {
      months.forEach(month => {
        options.push(`${month}, ${year}`);
      });
    }

    return options;
  };

  const monthYearOptions = generateMonthYearOptions();

  const timezones = [
    "Pacific Time (PT) - UTC-8",
    "Mountain Time (MT) - UTC-7",
    "Central Time (CT) - UTC-6",
    "Eastern Time (ET) - UTC-5",
    "Central European Time (CET) - UTC+1",
    "India Standard Time (IST) - UTC+5:30",
    "Japan Standard Time (JST) - UTC+9",
    "Australian Eastern Time (AET) - UTC+10",
    "Greenwich Mean Time (GMT) - UTC+0",
    "British Summer Time (BST) - UTC+1",
    "China Standard Time (CST) - UTC+8",
    "Korea Standard Time (KST) - UTC+9",
  ];

  const handleScheduleCall = () => {
    if (!selectedDate) {
      alert("Please select a date");
      return;
    }

    const [monthPart, yearPart] = selectedMonthYear.split(", ");
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const monthIndex = monthNames.indexOf(monthPart);
    const year = yearPart;

    const dateStr = `${year}-${String(monthIndex + 1).padStart(2, '0')}-${String(selectedDate).padStart(2, '0')}`;
    const startTime = `${dateStr}T10:00:00`;
    const endTime = `${dateStr}T11:00:00`;

    const title = "Meeting with Styxtech Systems";
    const details = "Scheduled consultation call";
    const location = "Online";

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startTime.replace(/[-:]/g, '')}/${endTime.replace(/[-:]/g, '')}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;

    const outlookCalendarUrl = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(title)}&startdt=${startTime}&enddt=${endTime}&body=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;

    const choice = confirm("Add to Google Calendar? (OK for Google, Cancel for Outlook)");

    if (choice) {
      window.open(googleCalendarUrl, '_blank');
    } else {
      window.open(outlookCalendarUrl, '_blank');
    }
  };

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
              <Link href="/services" className="text-white text-sm transition-colors font-medium">
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
        <section className="relative w-full px-6 py-20 min-h-[60vh] flex items-center justify-center">
          {/* Large SVG Title - Our services */}
          <div className="flex justify-center items-center">
            <div
              dangerouslySetInnerHTML={{ __html: servicespage }}
            />
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="w-full py-20 px-6 lg:px-12">
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-[1600px] mx-auto">
            {/* Vertical Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-700 transform -translate-x-1/2 hidden lg:block z-10"></div>

            {/* Migration & Transformation - Left Side */}
            <div className="relative flex flex-col justify-center items-center px-12 lg:px-20 py-16 lg:py-24 bg-[#0a0a0a] min-h-[600px]">
              <div className="max-w-[500px]">
                <p className="text-[#4A9FDB] text-xs tracking-[0.25em] uppercase mb-8">
                  IT INFRASTRUCTURE
                </p>
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light mb-10 tracking-tight text-white">
                  Migration & Transformation
                </h2>
                <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                  Our Migration & Transformation services help businesses seamlessly adopt Public, Private, and Edge cloud strategies with agility, security, and efficiency. Using agile methods, hyper-automation, and proven practices, we fast-track workload migration, optimize performance, and drive cost efficiency. With tailored solutions, reusable enablers, and a focus on customer value, we deliver faster speed-to-market, greater ROI, and reliable scalability across hybrid environments.
                </p>
              </div>
            </div>

            {/* Image Placeholder - Right Side */}
            <div className="relative bg-gray-200 min-h-[600px] flex items-center justify-center">
              {/* This is where the actual image would go */}
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-200"></div>
            </div>

            {/* Image Placeholder - Left Side */}
            <div className="relative bg-gray-200 min-h-[600px] flex items-center justify-center">
              {/* This is where the actual image would go */}
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-200"></div>
            </div>

            {/* RIIM - Right Side */}
            <div className="relative flex flex-col justify-center items-center px-12 lg:px-20 py-16 lg:py-24 bg-[#0a0a0a] min-h-[600px]">
              <div className="max-w-[500px]">
                <p className="text-[#4A9FDB] text-xs tracking-[0.25em] uppercase mb-8">
                  IT INFRASTRUCTURE
                </p>
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light mb-10 tracking-tight text-white">
                  RIIM
                </h2>
                <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                  Our Remote IT Infrastructure Management (RIIM) services deliver scalable, cloud-based solutions with low-latency global connectivity, seamless integration with existing systems, and managed SOC support. We provide risk and security insights, strengthen productivity and address VPN and disaster recovery needs—enabling financial institutions to innovate with embedded finance, digital assets, and modern payment solutions while enhancing customer experiences and building scalable, secure platforms.
                </p>
              </div>
            </div>

            {/* Data Center & Cloud Computing - Left Side */}
            <div className="relative flex flex-col justify-center items-center px-12 lg:px-20 py-16 lg:py-24 bg-[#0a0a0a] min-h-[600px]">
              <div className="max-w-[500px]">
                <p className="text-[#4A9FDB] text-xs tracking-[0.25em] uppercase mb-8">
                  IT INFRASTRUCTURE
                </p>
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light mb-10 tracking-tight text-white">
                  Data Center & Cloud Computing
                </h2>
                <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                  Our Remote IT Infrastructure Management (RIIM) services deliver scalable, cloud-based solutions with low-latency global connectivity, seamless integration with existing systems, and managed SOC support. We provide risk and security insights, strengthen productivity, and address VPN and disaster recovery needs—enabling financial institutions to innovate with embedded finance, digital assets, and modern payment solutions while enhancing customer experiences and building scalable, secure platforms.
                </p>
              </div>
            </div>

            {/* Image Placeholder - Right Side */}
            <div className="relative bg-gray-200 min-h-[600px] flex items-center justify-center">
              {/* This is where the actual image would go */}
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-200"></div>
            </div>

            {/* Image Placeholder - Left Side */}
            <div className="relative bg-gray-200 min-h-[600px] flex items-center justify-center">
              {/* This is where the actual image would go */}
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-200"></div>
            </div>

            {/* TaaS - Right Side */}
            <div className="relative flex flex-col justify-center items-center px-12 lg:px-20 py-16 lg:py-24 bg-[#0a0a0a] min-h-[600px]">
              <div className="max-w-[500px]">
                <p className="text-[#4A9FDB] text-xs tracking-[0.25em] uppercase mb-8">
                  IT INFRASTRUCTURE
                </p>
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light mb-10 tracking-tight text-white">
                  TaaS
                </h2>
                <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                  Our Testing as a Service (TaaS) helps accelerate development, reduce costs, and ensure flawless performance through cloud-based environments that enable SaaS compatibility, API interoperability, and scalable testing. With capabilities like process and QoS management, on-demand test environments, diverse test solutions, execution services, and monitoring, we deliver end-to-end quality backed by skilled resources, managed services, and governance aligned with financial, insurance, and telecom industry standards.
                </p>
              </div>
            </div>

            {/* DRaaS - Left Side */}
            <div className="relative flex flex-col justify-center items-center px-12 lg:px-20 py-16 lg:py-24 bg-[#0a0a0a] min-h-[600px]">
              <div className="max-w-[500px]">
                <p className="text-[#4A9FDB] text-xs tracking-[0.25em] uppercase mb-8">
                  IT INFRASTRUCTURE
                </p>
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light mb-10 tracking-tight text-white">
                  DRaaS
                </h2>
                <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                  Our Disaster Recovery as a Service (DRaaS) delivers scalable, cost-efficient protection with rapid recovery, minimal downtime, and strong data security. Designed for complex environments like telecom, it supports automated self-healing, replication, failover, and failback across critical systems. With flexible, pay-as-you-go resource optimization, we ensure business continuity while reducing costs and simplifying disaster recovery management.
                </p>
              </div>
            </div>

            {/* Image Placeholder - Right Side */}
            <div className="relative bg-gray-200 min-h-[600px] flex items-center justify-center">
              {/* This is where the actual image would go */}
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-200"></div>
            </div>

            {/* Image Placeholder - Left Side */}
            <div className="relative bg-gray-200 min-h-[600px] flex items-center justify-center">
              {/* This is where the actual image would go */}
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-200"></div>
            </div>

            {/* BaaS - Right Side */}
            <div className="relative flex flex-col justify-center items-center px-12 lg:px-20 py-16 lg:py-24 bg-[#0a0a0a] min-h-[600px]">
              <div className="max-w-[500px]">
                <p className="text-[#4A9FDB] text-xs tracking-[0.25em] uppercase mb-8">
                  IT INFRASTRUCTURE
                </p>
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light mb-10 tracking-tight text-white">
                  BaaS
                </h2>
                <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                  Our Backup as a Service (BaaS) offers secure, automated backups and rapid recovery to ensure business continuity while eliminating CapEx costs through flexible cloud-based subscription models. With encrypted storage, easy data access from any device, and reduced downtime, it boosts productivity, enhances efficiency, and lowers operational costs. Scalable, reliable, and user-friendly, our BaaS empowers financial institutions and retail businesses to focus on core operations with confidence.
                </p>
              </div>
            </div>

            {/* SOCaaS - Left Side */}
            <div className="relative flex flex-col justify-center items-center px-12 lg:px-20 py-16 lg:py-24 bg-[#0a0a0a] min-h-[600px]">
              <div className="max-w-[500px]">
                <p className="text-[#4A9FDB] text-xs tracking-[0.25em] uppercase mb-8">
                  SECURITY SERVICES
                </p>
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light mb-10 tracking-tight text-white">
                  SOCaaS
                </h2>
                <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                  Our Security of Cloud as a Service (SOCaaS) delivers 24/7 monitoring, advanced threat detection, and rapid response to secure complex multi-cloud environments. Addressing risks like misconfigurations, expanded attack surfaces, and limited visibility, we combine threat intelligence, automation, and industrialized processes for faster detection, cost efficiency, and proactive defense. With proven platforms, extensive reporting, and industry expertise, SOCaaS ensures compliance, resilience, and continuous protection while you focus on growth.
                </p>
              </div>
            </div>

            {/* Image Placeholder - Right Side */}
            <div className="relative bg-gray-200 min-h-[600px] flex items-center justify-center">
              {/* This is where the actual image would go */}
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-200"></div>
            </div>

            {/* Image Placeholder - Left Side */}
            <div className="relative bg-gray-200 min-h-[600px] flex items-center justify-center">
              {/* This is where the actual image would go */}
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-200"></div>
            </div>

            {/* Workplace Environment - Right Side */}
            <div className="relative flex flex-col justify-center items-center px-12 lg:px-20 py-16 lg:py-24 bg-[#0a0a0a] min-h-[600px]">
              <div className="max-w-[500px]">
                <p className="text-[#4A9FDB] text-xs tracking-[0.25em] uppercase mb-8">
                  EMPOWERMENT
                </p>
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light mb-10 tracking-tight text-white">
                  Workplace Environment
                </h2>
                <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                  Our Modern Workplace solutions combine technology, operations, and culture change to boost employee experience and productivity. With services projected to hit $57B by 2025, we support hybrid work, zero-trust security, automated management, and analytics-driven insights. For industries like healthcare, we deliver device-as-a-service, remote support, cloud-based management, and unified endpoint monitoring with self-healing and automation. Through advisory services, we help build digitally savvy workforces, enabling scalable collaboration, optimized spaces, and innovation-driven engagement.
                </p>
              </div>
            </div>

            {/* End User Support Service - Left Side */}
            <div className="relative flex flex-col justify-center items-center px-12 lg:px-20 py-16 lg:py-24 bg-[#0a0a0a] min-h-[600px]">
              <div className="max-w-[500px]">
                <p className="text-[#4A9FDB] text-xs tracking-[0.25em] uppercase mb-8">
                  SUPPORT SERVICE
                </p>
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light mb-10 tracking-tight text-white">
                  End User Support Service
                </h2>
                <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                  Our End User Support Services provide 24/7 multi-mode assistance, including remote, on-site, and chat support, along with device management, user migration, software updates, and network management. Tailored to industries like retail, manufacturing, telecom, and FSI, we deliver proactive problem and incident management while optimizing costs—reducing IT expenses by 30-40% per ticket—ensuring seamless operations, flexibility, and user satisfaction.
                </p>
              </div>
            </div>

            {/* Image Placeholder - Right Side */}
            <div className="relative bg-gray-200 min-h-[600px] flex items-center justify-center">
              {/* This is where the actual image would go */}
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-200"></div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-32 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-3xl p-6 sm:p-10 lg:p-16 border border-gray-800">
            {/* Left Side - Contact Info */}
            <div className="flex flex-col justify-center">
              <p className="text-gray-400 text-xs tracking-[0.3em] uppercase mb-4 sm:mb-6">
                GET IN TOUCH
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6 sm:mb-8 lg:mb-12 leading-tight">
                We are always ready to help you and answer your questions
              </h2>
              <div>
                <p className="text-gray-400 text-sm mb-2">Email</p>
                <a href="mailto:info@styxtech.systems" className="text-white text-base sm:text-lg hover:text-[#c4d957] transition-colors break-all">
                  info@styxtech.systems
                </a>
              </div>
            </div>

            {/* Right Side - Calendar Card */}
            <div className="bg-[#c4d957] rounded-3xl p-6 lg:p-8 w-full lg:max-w-md mx-auto lg:mx-0">
              {/* Header */}
              <div className="mb-4">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-black mb-2">
                  Select Date & Time
                </h3>
                <p className="text-black/80 text-xs sm:text-sm leading-relaxed">
                  Pick a date and time that works best for you to get started. It&apos;s quick, simple, and hassle-free.
                </p>
              </div>

              {/* Month and Year Selector */}
              <div className="mb-6">
                <div className="relative bg-black/10 rounded-xl flex items-center px-4 py-3">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-[#c4d957]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/>
                        <line x1="3" y1="10" x2="21" y2="10"/>
                      </svg>
                    </div>
                    <select
                      value={selectedMonthYear}
                      onChange={(e) => setSelectedMonthYear(e.target.value)}
                      className="bg-transparent border-none outline-none text-black text-sm font-semibold cursor-pointer appearance-none flex-1"
                      style={{ WebkitAppearance: 'none', MozAppearance: 'none' }}
                    >
                      {monthYearOptions.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <svg className="w-5 h-5 text-black flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="mb-6">
                {/* Day Headers */}
                <div className="grid grid-cols-7 gap-2 mb-3">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                    <div key={index} className="text-center text-black/60 text-sm font-medium">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Date Grid */}
                <div className="grid grid-cols-7 gap-2">
                  {[1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].map((date) => (
                    <button
                      key={date}
                      onClick={() => setSelectedDate(date)}
                      className={`
                        aspect-square rounded-lg flex items-center justify-center text-sm font-medium transition-all
                        ${selectedDate === date
                          ? 'bg-black text-[#c4d957]'
                          : 'text-black hover:bg-black/10'
                        }
                      `}
                    >
                      {date}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Zone Selector */}
              <div className="mb-6">
                <p className="text-black text-sm mb-2 font-medium">Time Zone</p>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none z-10">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                      <path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <select
                    value={selectedTimezone}
                    onChange={(e) => setSelectedTimezone(e.target.value)}
                    className="w-full bg-black/10 rounded-lg pl-10 pr-10 py-3 text-black text-sm focus:outline-none focus:ring-2 focus:ring-black/20 cursor-pointer appearance-none"
                  >
                    {timezones.map((tz, index) => (
                      <option key={index} value={tz}>{tz}</option>
                    ))}
                  </select>
                  <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-black pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Schedule Button */}
              <button
                onClick={handleScheduleCall}
                className="w-full bg-black text-[#c4d957] rounded-lg py-4 font-medium text-base hover:bg-black/90 transition-colors"
              >
                Schedule a Call
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
