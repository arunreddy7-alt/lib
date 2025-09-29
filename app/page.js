/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect } from "react";
import { IoNewspaperOutline, IoMegaphoneOutline, IoPhonePortrait, IoBriefcase, IoStar, IoClose, IoLogoFacebook, IoLogoLinkedin, IoLogoYoutube, IoLogoInstagram } from 'react-icons/io5';
import { BsCameraVideo, BsCart } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaAmazon } from 'react-icons/fa';

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const [bookLoaded, setBookLoaded] = useState(false);

  const reviews = [
    {
      name: "Shreya Yadav",
      rating: 5,
      date: "15 September 2025",
      text: "As a practitioner who sees children daily, The Toddlers&apos; Way spoke to me at a much more profound level than boundaries of motherhood. This book perfectly cross-connects scientific understanding with everyday practicality. PEARL philosophy—Play, Explore, and Learn—brought back memories of my teacher training."
      },
    {
      name: "Samridhi",
      rating: 4,
      date: "9 September 2025",
      text: "The Toddlers’ Way is a thoughtful and reassuring guide for parents navigating the early years of childhood. What makes this book special is its ability to simplify complex ideas about development and present them in an easy, relatable way. Drawing inspiration from the calm nature of the panda."
    },
    {
      name: "Drish!!",
      rating: 5,
      date: "28 August 2025",
      text: "The Toddlers’ Way felt like such a refreshing breath in the parenting space. Instead of throwing a hundred rules at you, it softly reminds you that parenting is really about connection, not perfection. The whole “panda” idea stayed with me—it instantly makes you think of patience, calmness, and nurture."
    },
    {
      name: "S shetty",
      rating: 5,
      date: "27 August 2025",
      text: "\"The Toddlers’ Way: A Panda’s Parenting Guide\" by Dr. Chandrashekar D. P. & Saviola Lobo offers a refreshing, research-backed approach to parenting toddlers, focusing on patience, empathy, and mindfulness. Using the metaphor of pandas, the authors guide parents through early childhood with warmth and calm."
    },
    {
      name: "Bibliophile",
      rating: 5,
      date: "19 August 2025",
      text: "Parenting toddlers can feel like running a marathon with no finish line, but “The Toddlers’ Way” gives you a calm, thoughtful guide through it. I liked how it balances expert research with gentle advice. It’s not about being a “perfect” parent but about being present and creating small, meaningful connections every day.\n\nThe panda metaphor is beautiful, it reminds you to approach your child with patience, curiosity, and kindness. I found the sections on mindful parenting especially powerful because they also focus on the parent’s mental health, not just the child’s needs.\n\nThe book is easy to read, full of relatable examples, and feels reassuring rather than judgmental. It doesn’t promise magic solutions, but it does give you confidence that with love, awareness, and a little patience, you’re already on the right track. Definitely a must-read for parents of toddlers who want less stress and more joy in their daily lives."
    },
    {
      name: "Arpita",
      rating: 4,
      date: "28 August 2025",
      text: "The Toddlers’ Way, a book by Dr. Chandrashekar D. P. and Saviola Lobo, feels warm and comforting, as the panda pictures show. As a parent, I found the approach new - it does not give many strict rules, but instead offers practical, gentle along with simple guidance.\n\nThe authors use plain stories plus familiar examples to explain the good and bad parts of toddlerhood - it is like having a wise friend near you helping you understand both the joys but also the problems of parenting calmly. A panda picture is cute, and it adds comfort to the reading.\n\nThis book gave me advice, confidence in addition to calm. It is a good friend for parents who want to raise their toddlers with love, patience next to balance."
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setBookLoaded(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('slide-left')) {
            entry.target.classList.add('animate-slide-in-left');
          } else if (entry.target.classList.contains('slide-right')) {
            entry.target.classList.add('animate-slide-in-right');
          } else if (entry.target.classList.contains('zoom-pulse')) {
            entry.target.classList.add('animate-zoom-pulse');
          } else {
            entry.target.classList.add('animate-fade-in-up');
          }
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 shadow-md transition-transform duration-300 ${scrolled ? '-translate-y-4 bg-white' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
          {/* Logo */}
          <div className="h-16 md:h-20 flex items-center">
            <img
              src="/assets/img/CSK Speaks.PNG"
              alt="CSK Logo"
              className="h-12 md:h-16 w-auto object-contain"
            />
          </div>
          
          {/* Desktop Links */}
          <div className={`hidden md:flex gap-8 lg:gap-12 transition-colors duration-300 ${scrolled ? 'text-[#394b35]' : 'text-[#FFFFFF]'}`}>
            <a href="#home" className="hover:text-[#394b35] transition">Home</a>
            <a href="#about" className="hover:text-[#394b35] transition">About</a>
            <a href="#authors" className="hover:text-[#394b35] transition">Authors</a>
            <a href="#launch" className="hover:text-[#394b35] transition">Launch</a>
            <a href="#reviews" className="hover:text-[#394b35] transition">Reviews</a>
            <a href="#contact" className="hover:text-[#394b35] transition">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden focus:outline-none p-2 transition-colors duration-300 ${scrolled ? 'text-black' : 'text-white'}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className={`md:hidden backdrop-blur-sm px-6 py-4 flex flex-col gap-4 shadow-lg ${scrolled ? 'bg-black/95 text-white' : 'bg-white/95 text-[#394b35]'}`}>
            <a href="#home" className={`py-2 transition-colors ${scrolled ? 'hover:text-gray-300' : 'hover:text-[#394b35]'}`} onClick={(e) => { e.preventDefault(); const target = document.querySelector('#home'); if (target) { target.scrollIntoView({ behavior: 'smooth' }); } setMenuOpen(false); }}>Home</a>
            <a href="#about" className={`py-2 transition-colors ${scrolled ? 'hover:text-gray-300' : 'hover:text-[#394b35]'}`} onClick={(e) => { e.preventDefault(); const target = document.querySelector('#about'); if (target) { target.scrollIntoView({ behavior: 'smooth' }); } setMenuOpen(false); }}>About</a>
            <a href="#authors" className={`py-2 transition-colors ${scrolled ? 'hover:text-gray-300' : 'hover:text-[#394b35]'}`} onClick={(e) => { e.preventDefault(); const target = document.querySelector('#authors'); if (target) { target.scrollIntoView({ behavior: 'smooth' }); } setMenuOpen(false); }}>Authors</a>
            <a href="#launch" className={`py-2 transition-colors ${scrolled ? 'hover:text-gray-300' : 'hover:text-[#394b35]'}`} onClick={(e) => { e.preventDefault(); const target = document.querySelector('#gallery'); if (target) { target.scrollIntoView({ behavior: 'smooth' }); } setMenuOpen(false); }}>Launch</a>
            <a href="#reviews" className={`py-2 transition-colors ${scrolled ? 'hover:text-gray-300' : 'hover:text-[#394b35]'}`} onClick={(e) => { e.preventDefault(); const target = document.querySelector('#reviews'); if (target) { target.scrollIntoView({ behavior: 'smooth' }); } setMenuOpen(false); }}>Reviews</a>
            <a href="#contact" className={`py-2 transition-colors ${scrolled ? 'hover:text-gray-300' : 'hover:text-[#394b35]'}`} onClick={(e) => { e.preventDefault(); const target = document.querySelector('#contact'); if (target) { target.scrollIntoView({ behavior: 'smooth' }); } setMenuOpen(false); }}>Contact</a>
          </div>
        )}
      </nav>

      <section id="home" className="relative">
        {/* Hero Section */}
        <div className="relative h-[600px] sm:h-[700px] md:h-[800px] lg:h-[900px]">
          {/* Background Image - Fill till wave */}
          <div
            className="absolute top-0 left-0 right-0"
            style={{
              background: "url('/assets/img/slider-bg-1.jpg') no-repeat center center",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              opacity: 1,
              height: "calc(100% - 40px)",
              zIndex: -1,
            }}
          ></div>

          {/* Light Beige Gradient Overlay */}
          <div
            className="absolute inset-0 bg-white md:bg-transparent"
            style={{
              background:
                "linear-gradient(180deg, rgba(57,75,53,0.6) 10%, rgba(57,75,53,0.6) 40%, rgba(57,75,53,0.5) 70%, rgba(57,75,53,0.0) 100%)",
              height: "100%",
              zIndex: -1,
            }}
          ></div>

          {/* Bottom Wave (white) */}
          <div className="pointer-events-none absolute left-0 right-0 bottom-10" style={{ zIndex: 1 }}>
            <svg viewBox="0 0 1440 160" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="block w-full h-[80px] md:h-[160px]">
            <path d="M0,120 C360,0 1080,260 1440,80 L1440,300 L0,300 Z" fill="#ffffff" fillOpacity="1" stroke="rgba(229,230,208,0.8)" strokeWidth="19"></path>
            </svg>
          </div>

          {/* Content Container */}
          <div className="container mx-auto relative z-10 pt-32 sm:pt-48 md:pt-64 pb-12 md:pb-20 px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 opacity-0 animate-fade-in-up">
              {/* Left Side */}
              <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left text-[#fafbe5]">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                  &ldquo;Discover the Panda&apos;s Wisdom for Peaceful Parenting&rdquo;
                </h1>
                <p className="text-base sm:text-lg md:text-xl mb-6 leading-relaxed">
                  An evidence-based roadmap to nurture your child's first 2000 days with mindfulness, connection, and love.
                </p>
                <a
                  href="https://www.amazon.in/dp/9349999366"
                  className="bg-[#fafbe5]/70 text-black text-sm font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-[#f0f1e0]/70 transition duration-300 inline-block"
                >
                  🛒 Get Your Copy on Amazon
                </a>
              </div>

              {/* Right Side */}
              <div className="w-full md:w-2/4 text-center">
                <img
                  src="/assets/img/book.jpg"
                  alt="Book"
                  className="mx-auto shadow-lg w-full max-w-[500px] md:max-w-[600px] lg:max-w-[700px] h-auto animate-slide-in-right"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*about us*/}
      <section id="about" className="py-8 md:py-16 bg-gray-50 -mt-16 md:-mt-10">
        <div className="container mx-auto px-4 pt-48 md:pt-0">
          <div className="flex flex-row items-center justify-center mb-12 md:mb-8 scroll-animate opacity-0">
            <img src="/assets/img/panda.png" alt="Creative Icon" className="w-12 h-12 sm:w-16 sm:h-16 md:w-50 md:h-50 mr-1 sm:mr-4 object-cover translate-x-5 sm:translate-x-0" />
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#394b35] font-poppins leading-tight text-center px-2 -translate-x-5 sm:translate-x-0">The Toddlers' Way: Your Parenting Compass</h1>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-8 lg:gap-12 mt-8 md:mt-0">
            <div className="w-full md:w-1/2 order-2 md:order-1 scroll-animate opacity-0 mt-8 md:mt-0">
              <p className="text-sm sm:text-base md:text-lg mb-4 md:mb-6 font-poppins text-black leading-relaxed px-2 sm:px-0">Modern parenting can feel overwhelming, with endless advice and constant self-doubt. The Toddlers' Way: A Panda's Parenting Guide offers a simple, evidence-based roadmap for your child's first 2000 days - the most crucial years for brain growth.</p>
              <p className="text-sm sm:text-base md:text-lg mb-4 md:mb-6 font-poppins text-black leading-relaxed px-2 sm:px-0">Inspired by the calm wisdom of the panda, this book provides practical strategies to build a secure, loving foundation, turn everyday moments into growth opportunities, and navigate challenges from picky eating to bedtime battles.</p>
              <p className="text-sm sm:text-base md:text-lg mb-4 md:mb-6 font-poppins text-black leading-relaxed px-2 sm:px-0">Stop striving for perfection; embrace mindful parenting for a happier family life and a lasting legacy of love.</p>
              <div className="text-center md:text-left px-2 sm:px-0">
                <a
                  href="https://www.amazon.in/dp/9349999366"
                  className="bg-[#fafbe5]/70 text-black text-xs sm:text-sm font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg shadow-lg hover:bg-[#f0f1e0]/70 transition duration-300 inline-block mt-4"
                >
                  🛒 Get Your Copy on Amazon
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 text-center order-1 md:order-2 scroll-animate opacity-0 px-2 sm:px-0">
              <img src="/assets/img/about.jpg" alt="Book" className="mx-auto rounded-lg shadow-lg w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[450px] h-auto" />
            </div>
          </div>
        </div>
      </section>
       {/*authors*/}
      <section id="authors" className="py-8 md:py-16 bg-[#e5e6d0]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 md:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#394b35] font-poppins leading-tight">Meet the Authors</h1>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="w-full md:w-3/6 text-center order-1 scroll-animate opacity-0 slide-left">
              <img src="/assets/img/author1.jpg" alt="Dr. Chandrashekar D.P." className="mx-auto shadow-lg w-full max-w-[300px] md:max-w-[400px] aspect-square object-cover rounded-lg mb-4" />
            </div>
            <div className="w-full md:w-1/2 order-2 scroll-animate opacity-0 slide-right">
              <p className="text-base md:text-lg mb-4 md:mb-6 font-poppins text-black leading-relaxed">Dr. Chandrashekar D.P. serves as the CEO of Toddlers Early Years Centers (TEYC). A Ph.D. in Education from the University of Milan and alumnus of IIM Lucknow, Dr. Chandrashekar pioneered India's first Whole-Brain School in collaboration with Dr. Kobus Neethling. His 22+ years of educational leadership are dedicated to optimizing cognitive power and fostering holistic child development.</p>
              <p className="text-base md:text-lg mb-4 md:mb-6 font-poppins text-black leading-relaxed">Saviola Lobo is the Director of TEYC and a Cambridge-certified Early Years Specialist. With over 9 years of experience in early childhood initiatives, she spearheaded the "No More Screen Time" movement and played a key role in establishing the first Cambridge International Early Years Center in Hyderabad. A passionate advocate for children's well-being, Saviola blends professional expertise with a personal commitment to mindful parenting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Glimpses from the Launch */}
      <section id="launch" className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-row items-center justify-center mb-6 md:mb-8 scroll-animate opacity-0">
            <img src="/assets/img/panda2.png" alt="Creative Icon" className="w-16 h-16 sm:w-12 sm:h-12 md:w-50 md:h-50 mr-1 sm:mr-4 sm:-ml-10 object-cover" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mt-4 mb-4 text-[#394b35] font-poppins leading-tight text-center px-2 -translate-x-2 sm:translate-x-3">Glimpses from the Launch</h1>
          </div>
          <p className="text-base md:text-lg mb-6 font-poppins text-black scroll-animate opacity-0 text-center">Celebrating the launch of The Toddlers' Way with parents, educators, and thought leaders!</p>
          <div className="flex justify-center scroll-animate opacity-0">
            <ImageSlider />
          </div>
        </div>
      </section>

      {/* What Parents Are Saying */}
      <section id="reviews" className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 md:mb-8 scroll-animate opacity-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#394b35] font-poppins leading-tight">What Parents Are Saying</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {reviews.map((review, index) => {
              const isFlipped = expanded === index;
              const truncatedText = review.text.split('\n\n')[0] || review.text.substring(0, 150) + '...';
              return (
                <div
                  key={index}
                  className={`flip-card scroll-animate opacity-0 ${isFlipped ? 'flipped' : ''}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                  onClick={() => setExpanded(isFlipped ? null : index)}
                >
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <div className="flex items-center mb-2">
                        <img src={index === 2 || index === 3 ? "/assets/img/18033.jpg" : "/assets/img/48063.jpg"} alt="Reviewer" className="w-15 h-15 rounded-full mr-2" />
                        <h3 className="text-sm md:text-lg font-semibold font-poppins text-black flex-grow">{review.name}</h3>
                        <div className="flex ml-auto">
                          {[...Array(5)].map((_, i) => (
                            <IoStar
                              key={i}
                              className={`text-xs md:text-sm ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs md:text-sm text-gray-500 mb-2">Reviewed on {review.date}</p>
                      <p className="text-sm md:text-base font-poppins text-black mb-4 flex-grow overflow-hidden">
                        {truncatedText}
                      </p>
                    </div>
                    <div className="flip-card-back">
                      <div className="flex flex-col justify-center items-center h-full p-2 md:p-4">
                        <h3 className="text-lg md:text-xl font-bold text-[#394b35] mb-2 md:mb-4 text-center">Inspired? Get Your Copy!</h3>
                        <a
                          href="https://www.amazon.in/dp/9349999366"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#fafbe5]/70 text-black text-sm md:text-lg font-semibold py-2 md:py-4 px-3 md:px-6 rounded-lg shadow-lg hover:bg-[#f0f1e0]/70 transition duration-300"
                        >
                          🛒 Buy on Amazon
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="contact" className="py-8 md:py-16 bg-[#e5e6d0]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="w-full md:w-1/2 text-center md:text-left order-1">
              <img
                src="/assets/img/contact.jpg"
                alt="Parenting Journey"
                className="w-full max-w-[200px] md:max-w-[400px] h-auto object-contain rounded-lg mb-4 mx-auto md:mx-0 scroll-animate opacity-0"
              />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#394b35] font-poppins leading-tight scroll-animate opacity-0">Your Parenting Journey Starts Here</h2>
              <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-black font-poppins leading-relaxed scroll-animate opacity-0">Build a strong, connected foundation for your child's future - one mindful moment at a time.</p>
              <a
                href="https://www.amazon.in/dp/9349999366"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#fafbe5]/70 text-black text-lg md:text-xl font-bold py-4 md:py-6 px-6 md:px-8 rounded-lg shadow-lg hover:bg-[#f0f1e0]/70 transition duration-300 inline-block scroll-animate opacity-0"
              >
                📚 Buy on Amazon Now
              </a>
            </div>
            <div className="w-full md:w-1/2 order-2 scroll-animate opacity-0">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#394b35] font-poppins">Bulk Purchase for Organizations</h3>
              <p className="text-sm md:text-base mb-4 md:mb-6 text-black font-poppins leading-relaxed">Looking to empower a larger community of parents, educators, or organizations? The Toddlers' Way: A Panda's Parenting Guide is available for bulk purchases!</p>
              <p className="text-xs md:text-sm mb-4 text-black font-poppins">Upto 10 copies - Rs. 469 / copy. Above 10 copies - Rs 400 / copy</p>
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
                <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-[#394b35] font-poppins">Place Your Order</h4>
                <form className="space-y-3 md:space-y-4">
                  <input type="text" placeholder="Name" className="w-full p-2 md:p-3 border border-gray-300 rounded-lg text-black text-sm md:text-base" required />
                  <input type="tel" placeholder="Phone number" className="w-full p-2 md:p-3 border border-gray-300 rounded-lg text-black text-sm md:text-base" required />
                  <input type="email" placeholder="Email" className="w-full p-2 md:p-3 border border-gray-300 rounded-lg text-black text-sm md:text-base" required />
                  <input type="text" placeholder="Organization" className="w-full p-2 md:p-3 border border-gray-300 rounded-lg text-black text-sm md:text-base" required />
                  <input type="text" placeholder="Designation" className="w-full p-2 md:p-3 border border-gray-300 rounded-lg text-black text-sm md:text-base" required />
                  <input type="number" placeholder="Number of copies" className="w-full p-2 md:p-3 border border-gray-300 rounded-lg text-black text-sm md:text-base" min="1" required />
                  <textarea placeholder="Shipping address" className="w-full p-2 md:p-3 border border-gray-300 rounded-lg text-black text-sm md:text-base" rows="3" required></textarea>
                  <button type="submit" className="w-full bg-[#394b35] text-white text-sm md:text-lg font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg shadow-lg hover:bg-[#2d3a2a] transition duration-300">
                    Confirm / Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#394b35] text-white py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Social Links */}
            <div className="scroll-animate opacity-0">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Follow Us</h3>
              <div className="flex justify-start md:justify-center gap-4 md:-ml-37">
                <a href="https://www.instagram.com/csk_speaks?igsh=cmtpbGl4d3pidDNr" className="hover:text-[#e5e6d0] transition text-sm md:text-base"><IoLogoInstagram className="text-2xl" /></a>
                <a href="https://www.facebook.com/CSKspeaks/" className="hover:text-[#e5e6d0] transition text-sm md:text-base"><IoLogoFacebook className="text-2xl" /></a>
                <a href="https://www.linkedin.com/in/chandrashekardp/" className="hover:text-[#e5e6d0] transition text-sm md:text-base"><IoLogoLinkedin className="text-2xl" /></a>
                <a href="https://youtube.com/@cskspeaks?si=tgYwcwR8XKex24KZ" className="hover:text-[#e5e6d0] transition text-sm md:text-base"><IoLogoYoutube className="text-2xl" /></a>
              </div>
              <h4 className="text-md md:text-lg font-semibold mt-7 mb-2">Buy Book</h4>
              <div className="space-y-2">
                <a href="https://www.amazon.in/dp/9349999366" target="_blank" rel="noopener noreferrer" className="block hover:text-[#e5e6d0] transition text-sm md:text-base"><FaAmazon className="inline mr-2 text-xl" />Amazon</a>
              </div>
              <h5 className="text-md md:text-lg font-semibold mt-7 mb-2">For More</h5>
              <div className="space-y-2">
                <a href="https://cskspeaks.com/" target="_blank" rel="noopener noreferrer" className="block hover:text-[#e5e6d0] transition text-sm md:text-base">CSK Speaks</a>
              </div>
            </div>
            {/* News Links */}
            <div className="scroll-animate opacity-0">
  <h4 className="text-lg md:text-xl font-semibold -mt-0 mb-2 ml-0 md:-ml-7">Other Publications</h4>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Rightway Leader Pocketbook */}
    <div className="p-4 rounded-xl -ml-4 md:-ml-20 -mt-4 md:mt-0">
      <h5 className="text-sm md:text-base font-semibold mb-3">Rightway Leader Pocketbook</h5>
      <div className="space-y-2">
        <a
          href="https://www.amazon.in/dp/9349999366"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-[#e5e6d0] transition text-sm md:text-base"
        >
          <FaAmazon className="text-xl" /> Amazon
        </a>
      </div>
    </div>

    {/* One More Step */}
    <div className="p-4 rounded-xl -ml-4 md:-ml-20 -mt-10 md:mt-0">
      <h5 className="text-sm md:text-base font-semibold mb-3">One More Step</h5>
      <div className="space-y-2">
        <a
          href="https://www.amazon.in/dp/9349999366"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-[#e5e6d0] transition text-sm md:text-base"
        >
          <FaAmazon className="text-xl" /> Amazon
        </a>
        <a
          href="https://www.flipkart.com/one-more-step/p/itm667dc887d7cda?pid=9781638325802&affid=editornoti"
          className="flex items-center gap-2 hover:text-[#e5e6d0] transition text-sm md:text-base"
        >
          <BsCart className="text-xl" /> Flipkart
        </a>
        <a
          href="https://notionpress.com/in/read/one-more-step/"
          className="flex items-center gap-2 hover:text-[#e5e6d0] transition text-sm md:text-base"
        >
          <IoNewspaperOutline className="text-xl" /> Notion Press</a>
      </div>
    </div>
  </div>
</div>

            {/* Contact Info */}
            <div className="scroll-animate opacity-0">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Contact Us</h3>
              <div className="space-y-2">
                <p className="text-sm md:text-base">📞 Phone: +91 9949488181</p>
                <p className="text-sm md:text-base">✉️ Email: csk@cskspeaks.com</p>
              </div>
            </div>
            {/* Reach Out Form */}
            <div className="scroll-animate opacity-0">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Reach Out</h3>
              <form className="space-y-3 md:space-y-4">
                <input type="text" placeholder="Name" className="w-full p-2 md:p-2 border border-gray-300 rounded text-white text-sm md:text-base" required />
                <input type="email" placeholder="Email" className="w-full p-2 md:p-2 border border-gray-300 rounded text-white text-sm md:text-base" required />
                <textarea placeholder="Message" className="w-full p-2 md:p-2 border border-gray-300 rounded text-white text-sm md:text-base" rows="3" required></textarea>
                <button type="submit" className="w-full bg-[#e5e6d0] text-[#394b35] font-bold py-2 px-4 rounded hover:bg-[#d4d5c0] transition text-sm md:text-base">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="text-center mt-6 md:mt-8 border-t border-[#e5e6d0] pt-6 md:pt-8 scroll-animate opacity-0">
            <p className="text-sm md:text-base">&copy; 2025 The Toddlers' Way. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </>
  );
}

function ImageSlider() {
  const images = [
    '/assets/img/im1.jpg',
    '/assets/img/im2.jpg',
    '/assets/img/im3.jpg',
    '/assets/img/im4.jpg',
    '/assets/img/im5.jpg',
    '/assets/img/im6.jpg',
    '/assets/img/im7.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="flex gap-2 md:gap-4 overflow-hidden">
        {/* Show 1 image on mobile, 3 on desktop */}
        {[0, 1, 2].map((offset) => {
          const imageIndex = (currentIndex + offset) % images.length;
          return (
            <div
              key={offset}
              className={`${offset === 1 ? 'hidden md:block' : ''} ${offset === 2 ? 'hidden md:block' : ''} flex-1 aspect-square bg-white rounded-lg shadow-md overflow-hidden`}
            >
              <img
                src={images[imageIndex]}
                alt={`Launch Image ${imageIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>
      
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 md:p-2 rounded-full hover:bg-opacity-75 transition text-sm md:text-base"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 md:p-2 rounded-full hover:bg-opacity-75 transition text-sm md:text-base"
      >
        ›
      </button>
    </div>
  );
}
