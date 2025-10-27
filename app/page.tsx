"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import WorldMapSVG from "./components/WorldMapSVG";
import { styxtech, customSolutionsIcon, accurateInfrasructure, itinfrastructure, cloudfirst, security, workplaceenvironment, endusersupportservice, networkAutomation, Digitaworkspace} from "@/public/Assets/icons";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedDate, setSelectedDate] = useState<number>(15);
  const [selectedMonthYear, setSelectedMonthYear] = useState<string>("AUG, 2025");
  const [selectedTimezone, setSelectedTimezone] = useState<string>("Central European Time (8:12 PM)");

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-in-section');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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

    // Parse the selected month and date
    const [monthPart, yearPart] = selectedMonthYear.split(", ");
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const monthIndex = monthNames.indexOf(monthPart);
    const year = yearPart;

    // Create date string - default to 10 AM
    const dateStr = `${year}-${String(monthIndex + 1).padStart(2, '0')}-${String(selectedDate).padStart(2, '0')}`;
    const startTime = `${dateStr}T10:00:00`;
    const endTime = `${dateStr}T11:00:00`;

    // Create event details
    const title = "Meeting with Styxtech Systems";
    const details = "Scheduled consultation call";
    const location = "Online";

    // Google Calendar URL
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startTime.replace(/[-:]/g, '')}/${endTime.replace(/[-:]/g, '')}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;

    // Outlook Calendar URL
    const outlookCalendarUrl = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(title)}&startdt=${startTime}&enddt=${endTime}&body=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;

    // Ask user to choose
    const choice = window.confirm("Click OK for Google Calendar or Cancel for Outlook Calendar");

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
              <Link href="/" className="text-white text-sm transition-colors font-medium">
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
              <img
                src="/images/Finalized color-02.png"
                alt="Styxtech Systems Logo"
                className="object-contain"
                style={{ height: '170px', width: 'auto', marginTop:'20%' }}
              />
            </div>

            {/* Right Navigation */}
            <div className="flex items-center gap-6 z-10">
              <a href="#blogs" className="text-gray-300 hover:text-white text-sm transition-colors">
                Blogs
              </a>
              <Link href="/about" className="text-gray-300 hover:text-white text-sm transition-colors">
                About Us
              </Link>
              <a href="#contact" className="text-gray-300 hover:text-white text-sm transition-colors">
                Contact
              </a>

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
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative max-w-[1400px] mx-auto px-6 py-20 min-h-[600px] overflow-hidden">
          {/* Glowing Line with Enhanced Effect */}
          <div className="absolute top-8 left-0 right-0 flex justify-center z-0">
            <div className="relative w-[900px] h-[3px]">
              {/* Main glow line */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-90"></div>
              {/* Outer glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent blur-md opacity-70"></div>
              {/* Extended glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent blur-xl opacity-50"></div>
              {/* Bottom light diffusion */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-b from-white/20 via-white/5 to-transparent blur-3xl"></div>
            </div>
          </div>

          {/* Custom Solutions Badge - Left */}
          <div className="absolute left-[10%] top-[45%]">
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12"
                dangerouslySetInnerHTML={{ __html: customSolutionsIcon }}
              />
              <div className="text-sm">
                <div className="text-white font-medium">Custom</div>
                <div className="text-gray-400">Solutions</div>
              </div>
            </div>
          </div>

          {/* Accurate Infrastructure Badge - Right */}
          <div className="absolute right-[10%] top-[30%]">
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12"
                dangerouslySetInnerHTML={{ __html: accurateInfrasructure }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-center relative z-10 pt-24">
            <p className="text-gray-400 text-sm tracking-[0.3em] uppercase mb-8">
              AN IT INFRASTRUCTURE AND SECURITY
            </p>

            <h1 className="text-6xl md:text-7xl font-light mb-6 leading-tight">
              Accelerate your digital
              <br />
              journey with Stylx
            </h1>

            <p className="text-gray-400 max-w-[700px] mx-auto mb-24 leading-relaxed">
              We transform your business with smart digital solutions designed to simplify complex processes, spark
              innovation, and accelerate sustainable growth across every area of your operations.
            </p>

            {/* Statistics - Triangular Layout */}
            <div className="relative w-full h-[200px] mt-20">
              {/* Left Stat - 3.5x Retention (Bottom Left) */}
              <div className="absolute left-[25%] bottom-0">
                <div className="text-5xl font-light mb-2">3.5x</div>
                <div className="text-gray-400 text-sm">Retention</div>
              </div>

              {/* Center Stat - 99% Security (Top Center) */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0">
                <div className="text-6xl font-light mb-2">99%</div>
                <div className="text-gray-400 text-sm">Security</div>
              </div>

              {/* Right Stat - 75% Support (Bottom Right) */}
              <div className="absolute right-[25%] bottom-0">
                <div className="text-5xl font-light mb-2">75%</div>
                <div className="text-gray-400 text-sm">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="max-w-[1400px] mx-auto px-6 py-20 mt-20">

          <div className="flex items-center justify-center">
            <Image
              src="/images/Frame 45.png"
              alt="Our Trusted Partners"
              width={1400}
              height={165}
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Services Section */}
        <section className="max-w-[1400px] mx-auto px-6 py-32 mt-20 fade-in-section">
          {/* Section Header */}
          <div className="flex items-start justify-between mb-16">
            <div className="flex-1">
              <p className="text-gray-400 text-xs tracking-[0.3em] uppercase mb-6">
                OUR SERVICES
              </p>
              <h2 className="text-7xl font-semibold leading-tight capitalize" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Let Us Handle the
                <br />
                Complexity
              </h2>
            </div>
            <div className="flex-1 max-w-[400px]">
              <p className="text-gray-400 leading-relaxed">
                We deliver smart, scalable solutions that power your digital future—helping you innovate faster, stay secure, and achieve sustainable growth in an ever-changing world.
              </p>
            </div>
          </div>

          {/* Service Cards Grid */}
          <div className="flex flex-wrap justify-center gap-8 fade-in-section">
            {/* IT Infrastructure Card */}
            <div className="group bg-[#000000] border border-gray-800 rounded-3xl p-10 hover:border-gray-700 transition-all duration-300 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] hover-lift">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 flex-shrink-0"
                  dangerouslySetInnerHTML={{ __html: itinfrastructure }}
                />
                <h3 className="text-xl font-normal text-white">IT Infrastructure</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Build a solid business foundation with our reliable IT infrastructure. We provide scalable, secure solutions that ensure smooth operations and power your growth.
              </p>
              <button className="text-white text-sm hover:text-[#c4d957] transition-colors">
                Learn More
              </button>
            </div>

            {/* Cloud First Card */}
            <div className="group bg-[#000000] border border-gray-800 rounded-3xl p-10 hover:border-gray-700 transition-all duration-300 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] hover-lift">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 flex-shrink-0"
                  dangerouslySetInnerHTML={{ __html: cloudfirst }}
                />
                <h3 className="text-xl font-normal text-white">Cloud First</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Accelerate your digital journey with our Cloud-First approach—delivering agility, scalability, and innovation while reducing costs.
              </p>
              <button className="text-white text-sm hover:text-[#c4d957] transition-colors">
                Learn More
              </button>
            </div>

            {/* Security Card */}
            <div className="group bg-[#000000] border border-gray-800 rounded-3xl p-10 hover:border-gray-700 transition-all duration-300 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] hover-lift">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 flex-shrink-0"
                  dangerouslySetInnerHTML={{ __html: security }}
                />
                <h3 className="text-xl font-normal text-white">Security</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Protect your digital assets with SOCaaS—24/7 monitoring, threat detection, and rapid response to keep your cloud secure and resilient.
              </p>
              <button className="text-white text-sm hover:text-[#c4d957] transition-colors">
                Learn More
              </button>
            </div>

            {/* Workplace Environment Card */}
            <div className="group bg-[#000000] border border-gray-800 rounded-3xl p-10 hover:border-gray-700 transition-all duration-300 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] hover-lift">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 flex-shrink-0"
                  dangerouslySetInnerHTML={{ __html: workplaceenvironment }}
                />
                <h3 className="text-xl font-normal text-white">Workplace Environment</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Empower teams with collaboration and innovation. Our workplace solutions boost growth, productivity, and excellence.
              </p>
              <button className="text-white text-sm hover:text-[#c4d957] transition-colors">
                Learn More
              </button>
            </div>

            {/* End user Support Service Card */}
            <div className="group bg-[#000000] border border-gray-800 rounded-3xl p-10 hover:border-gray-700 transition-all duration-300 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] hover-lift">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 flex-shrink-0"
                  dangerouslySetInnerHTML={{ __html: endusersupportservice }}
                />
                <h3 className="text-xl font-normal text-white">End user Support Service</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Keep your business efficient with responsive End User Support—fast troubleshooting and proactive care for seamless operations.
              </p>
              <button className="text-white text-sm hover:text-[#c4d957] transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="max-w-[1400px] mx-auto px-6 py-20 fade-in-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f]">
            {/* Left Side - Image */}
            <div className="relative bg-gradient-to-br from-[#2a3a3a] via-[#1a2a2a] to-[#0f1f1f] p-8 flex items-center justify-center min-h-[600px]">
              <Image
                src="/images/aboutus.png"
                alt="IT Infrastructure Server"
                width={500}
                height={500}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Right Side - Content */}
            <div className="bg-[#c4d957] p-16 flex flex-col justify-center">
              <p className="text-black text-xs tracking-[0.3em] uppercase mb-6 font-medium">
                ABOUT US
              </p>

              <h2 className="text-4xl font-medium text-black mb-12 leading-tight">
                Offering innovative and customer-centric information technology experiences for enterprises.
              </h2>

              {/* Two Column Layout - Stacked Items Left, Description Right */}
              <div className="grid grid-cols-2 gap-8 mb-8">
                {/* Left Column - Stacked List with Dotted Border */}
                <div className="flex gap-0 items-center">
                  {/* Vertical Dotted Line */}
                  <div className="w-0.5 border-l-2 border-dotted border-black/30 mr-4 self-stretch"></div>

                  {/* Stacked Items */}
                  <div className="flex flex-col gap-0 flex-1">
                    <div className="py-4 border-b border-black/20 text-black/50 text-base font-normal">
                      Infrastructure
                    </div>
                    <div className="py-4 border-b border-black/20 text-black text-base font-semibold">
                      Security
                    </div>
                    <div className="py-4 text-black/50 text-base font-normal">
                      Support
                    </div>
                  </div>
                </div>

                {/* Right Column - Description */}
                <div className="flex items-center">
                  <p className="text-black/90 text-sm leading-relaxed">
                    Delivers digital experiences and innovation that drive real business value. We empower our people to learn, grow, and build rewarding careers.
                  </p>
                </div>
              </div>

              {/* Learn More Button */}
              <div>
                <button className="text-black text-sm font-medium hover:opacity-70 transition-opacity flex items-center gap-2">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="max-w-[1400px] mx-auto px-6 py-32 mt-20 fade-in-section">
          {/* Section Header */}
          <div className="flex items-start justify-between mb-16">
            <div className="flex-1">
              <p className="text-gray-400 text-xs tracking-[0.3em] uppercase mb-6">
                OUR SUCCESS STORIES
              </p>
            </div>
            <div className="flex-1 max-w-[500px]">
              <p className="text-gray-400 leading-relaxed text-sm">
                Where innovation meets measurable success—our success stories highlight how we&apos;ve partnered with businesses to solve complex challenges, drive transformation, and deliver real, lasting impact.
              </p>
            </div>
          </div>

          {/* Success Story Card */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch rounded-3xl overflow-hidden" style={{ height: '600px' }}>
            {/* Left Side - Automotive Engine Image */}
            <div className="relative bg-black h-full">
              <Image
                src="/images/automotive.png"
                alt="Automotive Engine"
                width={700}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Side - Yellow-Green Content Card */}
            <div className="relative bg-[#c4d957] h-full flex items-center justify-center p-12 lg:p-16">
              <div className="max-w-md">
                <h2 className="text-5xl lg:text-6xl font-bold text-black mb-8">
                  Automotive
                </h2>
                <p className="text-black text-lg leading-relaxed">
                  We build smart automotive solutions that boost performance, safety, and connectivity—powered by AI, IoT, and data analytics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="w-full bg-black fade-in-section">
          <div className="max-w-[1400px] mx-auto px-6 py-20">
            <Image
              src="/images/achievementsfull.png"
              alt="Achievements and Certifications"
              width={1400}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Blogs & News Section */}
        <section className="max-w-[1400px] mx-auto px-6 py-20 fade-in-section">
          {/* Section Header */}
          <div className="flex items-start justify-between mb-16">
            <div className="flex-1">
              <p className="text-gray-400 text-xs tracking-[0.3em] uppercase mb-6">
                UPDATES
              </p>
              <h2 className="text-5xl font-light text-white">
                Blogs & News
              </h2>
            </div>
            <div className="flex-1 max-w-[500px]">
              <p className="text-gray-400 leading-relaxed text-sm">
                Stay updated with the latest insights, stories, and company news. Explore expert perspectives, industry trends, and success stories that shape the future of technology.
              </p>
            </div>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Large Card - Network Automation */}
            <div className="lg:row-span-2 bg-[#c4d957] rounded-3xl p-12 flex flex-col justify-between min-h-[600px]">
              {/* Brain Network Icon */}
              <div className="mb-auto">
                <div
                  className="w-48 h-48 [&_path]:fill-white [&_path]:stroke-white [&_circle]:fill-white [&_circle]:stroke-white [&_line]:stroke-white [&_polygon]:fill-white [&_polygon]:stroke-white"
                  dangerouslySetInnerHTML={{ __html: networkAutomation }}
                />
              </div>

              <div className="mt-auto">
                <h3 className="text-4xl font-semibold text-white mb-6 leading-tight">
                  Network Automation - How Does It Work?
                </h3>
                <p className="text-white text-base leading-relaxed mb-6">
                  In today&apos;s digital age, network automation has become an essential tool for managing and operating large-scale networks.....
                </p>
                <button className="text-white text-sm font-normal hover:opacity-70 transition-opacity">
                  Learn More
                </button>
              </div>
            </div>

            {/* Top Right Card - Digital Workplace */}
            <div className="lg:col-span-2 bg-gradient-to-br from-[#2a4a4a] to-[#1a3535] rounded-3xl p-12 flex items-center justify-between min-h-[290px]">
              <div className="flex-1 pr-12">
                <h3 className="text-2xl font-normal text-white mb-6 leading-tight">
                  Digital Workplace Transformation - Key tools and strategies to consider
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  Digital workplace transformation is a critical process for modern businesses that want to improve productivity, increase...
                </p>
                <button className="text-white text-sm font-normal hover:opacity-70 transition-opacity">
                  Learn More
                </button>
              </div>

              {/* Target/Goal Icon */}
              <div className="flex-shrink-0">
                <div
                  className="w-64 h-64 [&_path]:fill-white [&_path]:stroke-white [&_circle]:fill-white [&_circle]:stroke-white [&_line]:stroke-white [&_polygon]:fill-white [&_polygon]:stroke-white [&_rect]:fill-white [&_rect]:stroke-white"
                  dangerouslySetInnerHTML={{ __html: Digitaworkspace }}
                />
              </div>
            </div>

            {/* Bottom Left Card - Fast Tracking */}
            <div className="bg-gradient-to-br from-[#2a4a4a] to-[#1a3535] rounded-3xl p-10 flex flex-col justify-between min-h-[290px]">
              <div>
                <h3 className="text-xl font-normal text-white mb-4 leading-tight">
                  Fast Tracking Your Software Release Cycles.
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  In today&apos;s fast-paced digital world, software development teams face increasing pressure....
                </p>
              </div>
              <button className="text-white text-sm font-normal hover:opacity-70 transition-opacity self-start">
                Learn More
              </button>
            </div>

            {/* Bottom Right Card - Infrastructure as Code */}
            <div className="bg-[#c4d957] rounded-3xl p-10 flex flex-col justify-between min-h-[290px]">
              <div>
                <h3 className="text-xl font-semibold text-white leading-tight">
                  Infrastructure as Code -<br/>
                  <span className="font-normal text-white">Why Should DevOps Teams Adopt It?</span>
                </h3>
                <p className="text-white text-sm leading-relaxed mt-4 mb-6">
                  In today&apos;s fast-paced digital world, software development teams face increasing pressure....
                </p>
              </div>
              <button className="text-white text-sm font-normal hover:opacity-70 transition-opacity self-start">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="max-w-[1400px] mx-auto px-6 py-32 mt-20 fade-in-section">
          {/* Section Header */}
          <div className="flex items-start justify-between mb-16">
            <div className="flex-1">
              <p className="text-gray-400 text-xs tracking-[0.3em] uppercase mb-6">
                FAQS
              </p>
              <h2 className="text-6xl font-light text-white leading-tight">
                Frequently Asked<br />
                Questions
              </h2>
            </div>
            <div className="flex-1 max-w-[500px]">
              <p className="text-gray-400 leading-relaxed text-sm">
                Find quick answers to common questions about our services, processes, and support. We&apos;ve gathered everything you need to know in one place for your convenience.
              </p>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="flex justify-end">
            <div className="w-full max-w-[600px] bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-3xl p-12 border border-gray-800">
              {/* Section Title */}
              <h3 className="text-white text-lg font-medium mb-8">Getting Started</h3>

              {/* FAQ Items */}
              <div className="space-y-0">
                {/* FAQ Item 1 */}
                <div className="border-b border-gray-700 last:border-0">
                  <button
                    onClick={() => toggleFaq(0)}
                    className="w-full flex items-center justify-between py-6 text-left hover:opacity-80 transition-opacity"
                  >
                    <span className="text-white text-base pr-4 font-normal">
                      What services does Styxtech provide?
                    </span>
                    <span className="text-white text-2xl flex-shrink-0 font-light">
                      {openFaq === 0 ? '−' : '+'}
                    </span>
                  </button>
                  {openFaq === 0 && (
                    <div className="pb-6 text-gray-400 text-sm leading-relaxed">
                      We offer end-to-end digital solutions including IT infrastructure, cloud services, AI-driven applications, product engineering, and consulting.
                    </div>
                  )}
                </div>

                {/* FAQ Item 2 */}
                <div className="border-b border-gray-700 last:border-0">
                  <button
                    onClick={() => toggleFaq(1)}
                    className="w-full flex items-center justify-between py-6 text-left hover:opacity-80 transition-opacity"
                  >
                    <span className="text-white text-base pr-4 font-normal">
                      How do I know which solution is right for my business?
                    </span>
                    <span className="text-white text-2xl flex-shrink-0 font-light">
                      {openFaq === 1 ? '−' : '+'}
                    </span>
                  </button>
                  {openFaq === 1 && (
                    <div className="pb-6 text-gray-400 text-sm leading-relaxed">
                      Our team conducts a thorough assessment of your business needs, goals, and challenges to recommend the most suitable solutions tailored to your specific requirements.
                    </div>
                  )}
                </div>

                {/* FAQ Item 3 */}
                <div className="border-b border-gray-700 last:border-0">
                  <button
                    onClick={() => toggleFaq(2)}
                    className="w-full flex items-center justify-between py-6 text-left hover:opacity-80 transition-opacity"
                  >
                    <span className="text-white text-base pr-4 font-normal">
                      Do you offer customized software solutions?
                    </span>
                    <span className="text-white text-2xl flex-shrink-0 font-light">
                      {openFaq === 2 ? '−' : '+'}
                    </span>
                  </button>
                  {openFaq === 2 && (
                    <div className="pb-6 text-gray-400 text-sm leading-relaxed">
                      Yes, we specialize in creating custom software solutions designed to meet your unique business requirements and objectives.
                    </div>
                  )}
                </div>

                {/* FAQ Item 4 */}
                <div className="border-b border-gray-700 last:border-0">
                  <button
                    onClick={() => toggleFaq(3)}
                    className="w-full flex items-center justify-between py-6 text-left hover:opacity-80 transition-opacity"
                  >
                    <span className="text-white text-base pr-4 font-normal">
                      How secure are your IT and cloud services?
                    </span>
                    <span className="text-white text-2xl flex-shrink-0 font-light">
                      {openFaq === 3 ? '−' : '+'}
                    </span>
                  </button>
                  {openFaq === 3 && (
                    <div className="pb-6 text-gray-400 text-sm leading-relaxed">
                      We implement industry-leading security measures, including encryption, multi-factor authentication, and regular security audits to ensure your data remains protected.
                    </div>
                  )}
                </div>

                {/* FAQ Item 5 */}
                <div className="border-b border-gray-700 last:border-0">
                  <button
                    onClick={() => toggleFaq(4)}
                    className="w-full flex items-center justify-between py-6 text-left hover:opacity-80 transition-opacity"
                  >
                    <span className="text-white text-base pr-4 font-normal">
                      What industries do you specialize in?
                    </span>
                    <span className="text-white text-2xl flex-shrink-0 font-light">
                      {openFaq === 4 ? '−' : '+'}
                    </span>
                  </button>
                  {openFaq === 4 && (
                    <div className="pb-6 text-gray-400 text-sm leading-relaxed">
                      We serve various industries including automotive, healthcare, finance, retail, manufacturing, and technology, providing tailored solutions for each sector.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get in Touch Section */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-32 mb-20 fade-in-section">
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

        {/* World Map Section */}
        <section className="w-full bg-black py-20 overflow-hidden">
          <div className="max-w-[1600px] mx-auto px-6">
            <div className="relative w-full h-[700px] md:h-[800px]">
              {/* World Map SVG */}
              <WorldMapSVG />

              
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full bg-black pt-16 pb-8 border-t border-[#1a1a1a]">
          <div className="max-w-[1600px] mx-auto px-6">
            {/* Newsletter Section */}
            <div className="flex justify-between items-center mb-16 pb-8 border-b border-[#1a1a1a]">
              <div>
                <h3 className="text-white text-lg font-normal">Join our newsletter to keep up</h3>
                <h3 className="text-white text-lg font-normal">to date with us!</h3>
              </div>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent border border-gray-700 rounded-lg px-6 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#c4d957] w-[300px]"
                />
                <button className="bg-[#c4d957] text-black px-8 py-3 rounded-lg font-medium hover:bg-[#d4e967] transition-colors">
                  Submit
                </button>
              </div>
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
                  <li className="text-gray-400 text-sm hover:text-[#c4d957] cursor-pointer transition-colors">Workanet Empowerment</li>
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
      </main>
    </div>
  );
}
