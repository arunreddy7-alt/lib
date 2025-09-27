"use client";
import React, { useState, useEffect } from "react";
import { IoNewspaperOutline, IoMegaphoneOutline, IoPhonePortrait, IoBriefcase, IoStar, IoClose } from 'react-icons/io5';
import { BsCameraVideo, BsCart } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);

  const reviews = [
    {
      name: "Shreya Yadav",
      rating: 5,
      date: "15 September 2025",
      text: "As a practitioner who sees children daily, The Toddlers' Way spoke to me at a much more profound level than boundaries of motherhood. This book perfectly cross-connects scientific understanding with everyday practicality. PEARL philosophy—Play, Explore, and Learn—brought back memories of my teacher training."    
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

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 shadow-md transition-transform duration-300 ${scrolled ? '-translate-y-4 bg-white' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-2 py-2 flex items-center">
          {/* Logo shifted slightly left */}
          <div className={`h-20 flex items-center mr-18 -ml-26 transition-filter duration-300 ${scrolled ? 'filter brightness-0 invert-0' : 'filter brightness-0 invert'}`}>
            <span className="text-xl font-bold">Logo</span>
          </div>
          {/* Desktop Links */}
          <div className={`hidden md:flex gap-12 ml-auto transition-colors duration-300 ${scrolled ? 'text-[#394b35]' : 'text-[#FFFFFF]'}`}>
            <a href="#home" className="hover:text-[#394b35] transition">Home</a>
            <a href="#about" className="hover:text-[#394b35] transition">About</a>
            <a href="#authors" className="hover:text-[#394b35] transition">Authors</a>
            <a href="#gallery" className="hover:text-[#394b35] transition">Gallery</a>
            <a href="#reviews" className="hover:text-[#394b35] transition">Reviews</a>
            <a href="#contact" className="hover:text-[#394b35] transition">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none ml-auto"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-transparent px-6 py-4 flex flex-col gap-4 text-white">
            <a href="#home" className="hover:text-white" onClick={(e) => { e.preventDefault(); const target = document.querySelector('#home'); if (target) { target.scrollIntoView({ behavior: 'smooth' }); } setMenuOpen(false); }}>Home</a>
            <a href="#about" className="hover:text-white" onClick={(e) => { e.preventDefault(); const target = document.querySelector('#about'); if (target) { target.scrollIntoView({ behavior: 'smooth' }); } setMenuOpen(false); }}>About</a>
            <a href="#gallery" className="hover:text-white" onClick={(e) => { e.preventDefault(); const target = document.querySelector('#gallery'); if (target) { target.scrollIntoView({ behavior: 'smooth' }); } setMenuOpen(false); }}>Gallery</a>
            <a href="#reviews" className="hover:text-white" onClick={(e) => { e.preventDefault(); const target = document.querySelector('#reviews'); if (target) { target.scrollIntoView({ behavior: 'smooth' }); } setMenuOpen(false); }}>Reviews</a>
            <a href="#contact" className="hover:text-white" onClick={(e) => { e.preventDefault(); const target = document.querySelector('#contact'); if (target) { target.scrollIntoView({ behavior: 'smooth' }); } setMenuOpen(false); }}>Contact</a>
          </div>
        )}
      </nav>

      <section id="home" className="relative" image-overlay="8">
        {/* Hero Hero Part */}
        <div className="relative h-[800px]">
          {/* Background Image */}
          <div
            className="absolute inset-0"
            style={{
              background: "url('/assets/img/slider-bg-1.jpg') no-repeat center center",
              backgroundSize: "cover",
              opacity: 1,
              width: "100%",
              height: "100%",
              zIndex: -1,
            }}
          ></div>

          {/* Light Beige Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(229,230,208,0.6) 10%, rgba(229,230,208,0.6) 40%, rgba(229,230,208,0.5) 70%, rgba(229,230,208,0.0) 100%)",
              height: "100%",
              zIndex: -1,
            }}
          ></div>

          {/* Bottom Wave (white) */}
          <div className="pointer-events-none absolute left-0 right-0 bottom-10" style={{ zIndex: 1 }}>
            <svg viewBox="0 0 1440 160" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="block w-full h-[160px]">
            <path d="M0,120 C360,0 1080,260 1440,80 L1440,300 L0,300 Z" fill="#ffffff" fillOpacity="1" stroke="rgba(229,230,208,0.8)" strokeWidth="19"></path>
            </svg>
          </div>

          {/* Content Container */}
          <div className="container mx-auto relative z-10 py-16" style={{ minHeight: "720px" }}>
            <div className="flex flex-wrap items-center justify-between">
              {/* Left Side */}
              <div className="w-full md:w-1/2 mt-30 flex flex-col justify-center text-center text-[#394b35]">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  “Discover the Panda’s Wisdom for Peaceful Parenting”
                </h1>
                <p className="text-lg md:text-xl mb-6">
                  An evidence-based roadmap to nurture your child’s first 2000 days with mindfulness, connection, and love.
                </p>
                <a
                  href="https://www.amazon.in/dp/9349999366"
                  className="bg-[#fafbe5]/70 text-black text-sm font-semibold py-3 px-0 rounded-lg shadow-lg hover:bg-[#f0f1e0]/70 transition duration-300"
                >
                  🛒 Get Your Copy on Amazon
                </a>
              </div>

              {/* Right Side */}
              <div className="w-full md:w-2/4 text-center text-white mt-15 md:mt-40 -ml-8 md:-ml-20 translate-x-9 -translate-y-8">
                  <a
                  href="https://www.amazon.in/dp/1638325804/ref=cm_sw_r_wa_api_glc_fabc_JY3VMDFPZ8SSB3D7YAQH"
                  target="_blank"
                >
                  <img
                    src="/assets/img/book.jpg"
                    alt="Book"
                    className="mx-0 shadow-lg w-[800px] h-auto"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*about us*/}
      <section id="about" className="py-16 bg-gray-50 -mt-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-8xl md:text-6xl font-bold mb-4 text-[#394b35] font-poppins">The Toddlers’ Way: Your Parenting Compass</h1>
          </div>
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 pr-4">
              <p className="text-lg mb-6 font-poppins text-black">Modern parenting can feel overwhelming, with endless advice and constant self-doubt. The Toddlers’ Way: A Panda’s Parenting Guide offers a simple, evidence-based roadmap for your child’s first 2000 days - the most crucial years for brain growth.</p>
              <p className="text-lg mb-6 font-poppins text-black">Inspired by the calm wisdom of the panda, this book provides practical strategies to build a secure, loving foundation, turn everyday moments into growth opportunities, and navigate challenges from picky eating to bedtime battles.</p>
              <p className="text-lg mb-6 font-poppins text-black">Stop striving for perfection; embrace mindful parenting for a happier family life and a lasting legacy of love.</p>
            </div>
            <div className="w-full md:w-1/2 text-center">
              <img src="/assets/img/about.jpg" alt="Book" className="mx-auto rounded-lg shadow-lg w-86 h-auto mt-3" />
            </div>
          </div>
        </div>
      </section>
       {/*authors*/}
      <section id="authors" className="py-16 bg-[#e5e6d0]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-8xl md:text-6xl font-bold mb-4 text-[#394b35] font-poppins">Meet the Authors</h1>
          </div>
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-3/6 text-center">
              <img src="/assets/img/author1.jpg" alt="Dr. Chandrashekar D.P." className="mx-auto -translate-x-4 -translate-y-0 shadow-lg w-full h-104 object-cover rounded-lg mb-4" />
            </div>
            <div className="w-full md:w-1/2 pl-4">
              <p className="text-lg mb-6 font-poppins text-black">Dr. Chandrashekar D.P. serves as the CEO of Toddlers Early Years Centers (TEYC). A Ph.D. in Education from the University of Milan and alumnus of IIM Lucknow, Dr. Chandrashekar pioneered India’s first Whole-Brain School in collaboration with Dr. Kobus Neethling. His 22+ years of educational leadership are dedicated to optimizing cognitive power and fostering holistic child development.</p>
              <p className="text-lg mb-6 font-poppins text-black">Saviola Lobo is the Director of TEYC and a Cambridge-certified Early Years Specialist. With over 9 years of experience in early childhood initiatives, she spearheaded the “No More Screen Time” movement and played a key role in establishing the first Cambridge International Early Years Center in Hyderabad. A passionate advocate for children’s well-being, Saviola blends professional expertise with a personal commitment to mindful parenting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Glimpses from the Launch */}
      <section id="gallery" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-8xl md:text-6xl font-bold mb-4 text-[#394b35] font-poppins">Glimpses from the Launch</h1>
            <p className="text-lg mb-6 font-poppins text-black">Celebrating the launch of The Toddlers’ Way with parents, educators, and thought leaders!</p>
          </div>
          <div className="flex justify-center mt-18">
            <ImageSlider />
          </div>
        </div>
      </section>

      {/* In the News */}
      <section id="news" className="py-16 bg-[#e5e6d0]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-8xl md:text-6xl font-bold mb-4 text-[#394b35] font-poppins">In the News</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <IoNewspaperOutline className="inline mr-2 text-lg" />, text: "ArdorComm Media – Launch Coverage", link: "https://ardorcomm-media.com/the-toddlers-way-a-pandas-parenting-guide-by-dr-chandrashekar-and-mrs-saviola-lobo-launched-in-hyderabad/", image: "/assets/img/news1.jpg" },
              { icon: <IoNewspaperOutline className="inline mr-2 text-lg" />, text: "IndiGlobal Media – Future Leaders Dialogue", link: "https://indiglobalmedia.com/the-toddlers-way-a-pandas-parenting-guide-launched-in-hyderabad-sparks-dialogue-on-nurturing-future-leaders/", image: "/assets/img/news2.jpg" },
              { icon: <BsCameraVideo className="inline mr-2 text-lg" />, text: "YouTube – Book Launch Clip", link: "https://youtube.com/shorts/o53y40jOf4g?si=wLwF0oFq4WBExEwf", image: "/assets/img/news3.jpg" },
              { icon: <IoMegaphoneOutline className="inline mr-2 text-lg text-black" />, text: "X (Twitter) Coverage", link: "https://x.com/IndiglobalMedia/status/1963118838691610891", image: "/assets/img/news4.jpg" },
              { icon: <IoPhonePortrait className="inline mr-2 text-lg" />, text: "Facebook Post", link: "https://www.facebook.com/share/p/1DE3B3GsbM/", image: "/assets/img/news5.jpg" },
              { icon: <IoBriefcase className="inline mr-2 text-lg" />, text: "LinkedIn Article", link: "https://www.linkedin.com/posts/indiglobal-media-network_the-toddlers-way-a-pandas-parenting-guide-activity-7368877820741091330-5z-R?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAFjUAOEB6PYKyVCkYiIelnyYnayO8788zB4&utm_campaign=whatsapp", image: "/assets/img/news6.jpg" }
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer block opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {item.text === "X (Twitter) Coverage" ? (
                  <div className="bg-white rounded-t-lg p-2 mb-4 mt-4">
                    <img
                      src={item.image}
                      alt={item.text}
                      className="w-full h-40 object-contain"
                    />
                  </div>
                ) : (
                  <img
                    src={item.image}
                    alt={item.text}
                    className="w-full h-40 object-contain rounded-t-lg mb-4 mt-4"
                  />
                )}
                <div className="p-8">
                  <p className="text-lg font-poppins text-black">{item.icon} {item.text}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* What Parents Are Saying */}
      <section id="reviews" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-8xl md:text-6xl font-bold mb-4 text-[#394b35] font-poppins">What Parents Are Saying</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => {
              const isFlipped = expanded === index;
              const truncatedText = review.text.split('\n\n')[0] || review.text.substring(0, 150) + '...';
              return (
                <div
                  key={index}
                  className={`flip-card opacity-0 animate-fade-in-up ${isFlipped ? 'flipped' : ''}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                  onClick={() => setExpanded(isFlipped ? null : index)}
                >
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <div className="flex items-center mb-2">
                        <h3 className="text-lg font-semibold font-poppins text-black flex-grow">{review.name}</h3>
                        <div className="flex ml-auto">
                          {[...Array(5)].map((_, i) => (
                            <IoStar
                              key={i}
                              className={`text-sm ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 mb-2">Reviewed on {review.date}</p>
                      <p className="text-base font-poppins text-black mb-4 flex-grow overflow-hidden">
                        {truncatedText}
                      </p>
                    </div>
                    <div className="flip-card-back">
                      <div className="flex flex-col justify-center items-center h-full p-4">
                        <h3 className="text-xl font-bold text-[#394b35] mb-4 text-center">Inspired? Get Your Copy!</h3>
                        <a
                          href="https://www.amazon.in/dp/9349999366"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#fafbe5]/70 text-black text-lg font-semibold py-4 px-6 rounded-lg shadow-lg hover:bg-[#f0f1e0]/70 transition duration-300"
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
      <section id="contact" className="py-16 bg-[#e5e6d0]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <img
                src="/assets/img/contact.jpg"
                alt="Parenting Journey"
                className="w-full h-80 object-contain rounded-lg mb-4 -ml-25 -mt-3"
              />
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#394b35] font-poppins">Your Parenting Journey Starts Here</h2>
              <p className="text-lg md:text-xl mb-8 text-black font-poppins">Build a strong, connected foundation for your child’s future - one mindful moment at a time.</p>
              <a
                href="https://www.amazon.in/dp/9349999366"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#fafbe5]/70 text-black text-xl font-bold py-6 px-8 rounded-lg shadow-lg hover:bg-[#f0f1e0]/70 transition duration-300 inline-block"
              >
                📚 Buy on Amazon Now
              </a>
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <h3 className="text-2xl font-bold mb-4 text-[#394b35] font-poppins">Bulk Purchase for Organizations</h3>
              <p className="text-base mb-6 text-black font-poppins">Looking to empower a larger community of parents, educators, or organizations? The Toddlers’ Way: A Panda’s Parenting Guide is available for bulk purchases!</p>
              <p className="text-sm mb-4 text-black font-poppins">Upto 10 copies - Rs. 469 / copy. Above 10 copies - Rs 400 / copy</p>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-semibold mb-4 text-[#394b35] font-poppins">Place Your Order</h4>
                <form className="space-y-4">
                  <input type="text" placeholder="Name" className="w-full p-3 border border-gray-300 rounded-lg text-black" required />
                  <input type="tel" placeholder="Phone number" className="w-full p-3 border border-gray-300 rounded-lg text-black" required />
                  <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-lg text-black" required />
                  <input type="text" placeholder="Organization" className="w-full p-3 border border-gray-300 rounded-lg text-black" required />
                  <input type="text" placeholder="Designation" className="w-full p-3 border border-gray-300 rounded-lg text-black" required />
                  <input type="number" placeholder="Number of copies" className="w-full p-3 border border-gray-300 rounded-lg text-black" min="1" required />
                  <textarea placeholder="Shipping address" className="w-full p-3 border border-gray-300 rounded-lg text-black" rows="3" required></textarea>
                  <button type="submit" className="w-full bg-[#394b35] text-white text-lg font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-[#2d3a2a] transition duration-300">
                    Confirm / Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#394b35] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="space-y-2">
                <a href="#" className="block hover:text-[#e5e6d0] transition">Instagram</a>
                <a href="https://www.amazon.in/dp/9349999366" target="_blank" rel="noopener noreferrer" className="block hover:text-[#e5e6d0] transition">Amazon</a>
              </div>
            </div>
            {/* News Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">In the News</h3>
              <div className="space-y-2">
                <a href="https://ardorcomm-media.com/the-toddlers-way-a-pandas-parenting-guide-by-dr-chandrashekar-and-mrs-saviola-lobo-launched-in-hyderabad/" target="_blank" rel="noopener noreferrer" className="block hover:text-[#e5e6d0] transition text-sm">ArdorComm Media</a>
                <a href="https://indiglobalmedia.com/the-toddlers-way-a-pandas-parenting-guide-launched-in-hyderabad-sparks-dialogue-on-nurturing-future-leaders/" target="_blank" rel="noopener noreferrer" className="block hover:text-[#e5e6d0] transition text-sm">IndiGlobal Media</a>
                <a href="https://youtube.com/shorts/o53y40jOf4g?si=wLwF0oFq4WBExEwf" target="_blank" rel="noopener noreferrer" className="block hover:text-[#e5e6d0] transition text-sm">YouTube</a>
                <a href="https://x.com/IndiglobalMedia/status/1963118838691610891" target="_blank" rel="noopener noreferrer" className="block hover:text-[#e5e6d0] transition text-sm">X (Twitter)</a>
              </div>
            </div>
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <div className="space-y-2">
                <p>📞 Phone: +91 12345 67890</p>
                <p>✉️ Email: info@pandaswisdom.com</p>
                <p>📍 Address: Hyderabad, India</p>
              </div>
            </div>
            {/* Reach Out Form */}
            <div>
              <h3 className="text-xl font-bold mb-4">Reach Out</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Name" className="w-full p-2 border border-gray-300 rounded text-white" required />
                <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded text-white" required />
                <textarea placeholder="Message" className="w-full p-2 border border-gray-300 rounded text-white" rows="3" required></textarea>
                <button type="submit" className="w-full bg-[#e5e6d0] text-[#394b35] font-bold py-2 px-4 rounded hover:bg-[#d4d5c0] transition">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="text-center mt-8 border-t border-[#e5e6d0] pt-8">
            <p>&copy; 2025 The Toddlers’ Way. All rights reserved.</p>
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
  const numVisible = 3;
  const allImages = [...images, ...images]; // Duplicate for seamless loop
  const totalPositions = allImages.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPositions);
    }, 3000); // Auto slide by 1 every 3 seconds

    return () => clearInterval(interval);
  }, [totalPositions]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPositions);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPositions) % totalPositions);
  };

  const slideWidth = 100 / numVisible;

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
      <div
        className="flex gap-4 transition-transform duration-1000 ease-in-out"
        style={{
          width: `${allImages.length * slideWidth}%`,
          transform: `translateX(-${currentIndex * slideWidth}%)`
        }}
      >
        {allImages.map((src, index) => (
          <div
            key={index}
            className="flex-1 aspect-square bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={src}
              alt={`Launch Image ${index + 1}`}
              className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
      >
        ›
      </button>
    </div>
  );
}
