"use client";
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden" image-overlay="8">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          background: "url('/assets/img/slider-bg-1.jpg') no-repeat center center",
          backgroundSize: "cover",
          opacity: 1,
          width: "100%",
          height: "720px",
          zIndex: -1,
        }}
      ></div>

      {/* Dark Blue Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,32,51,0.85) 0%, rgba(10,32,51,0.85) 40%, rgba(10,32,51,0.8) 70%, rgba(10,32,51,0.0) 100%)",
          height: "720px",
          zIndex: -1,
        }}
      ></div>

      {/* Bottom Wave (white) */}
      <div className="pointer-events-none absolute left-0 right-0 bottom-0" style={{ zIndex: 1 }}>
        <svg viewBox="0 0 1440 160" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="block w-full h-[160px]">
          <path d="M0,96 C240,192 480,0 720,48 C960,96 1200,208 1440,112 L1440,160 L0,160 Z" fill="#ffffff" fillOpacity="1"></path>
        </svg>
      </div>

      {/* Content Container */}
      <div className="container mx-auto relative z-10 py-16" style={{ minHeight: "720px" }}>
        <div className="flex flex-wrap items-center justify-between">
          {/* Left Side */}
          <div className="w-full md:w-1/2 mt-5 flex justify-center">
            <div className="img-wrap">
              <img
                src="/assets/img/modi-tweet.png"
                alt="Modi Tweet"
                className="max-w-full h-auto"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full md:w-1/3 text-center text-white mt-6 md:mt-0">
            <h3 className="text-lg mb-4">
              The exact three words that drives my book
            </h3>
            <a
              href="https://www.amazon.in/dp/1638325804/ref=cm_sw_r_wa_api_glc_fabc_JY3VMDFPZ8SSB3D7YAQH"
              target="_blank"
            >
              <img
                src="/assets/img/one-more-step.jpg"
                alt="Book"
                className="mx-auto shadow-lg rounded-lg max-w-full h-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
