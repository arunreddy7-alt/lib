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
          height: "600px", // Adjust height as needed
          zIndex: -1,
        }}
      ></div>

      {/* Bottom Wave Shape */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          background: "url('/assets/img/wave-shap.svg') no-repeat bottom center",
          height: "100px",
        }}
      ></div>

      {/* Shape Effect */}
      <div className="absolute top-0 left-0 opacity-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 361.1 384.8"
          className="w-48 h-48 text-gray-800"
        >
          <path d="M53.1,266.7C19.3,178-41,79.1,41.6,50.1S287.7-59.6,293.8,77.5c6.1,137.1,137.8,238,15.6,288.9 S86.8,355.4,53.1,266.7z"></path>
        </svg>
      </div>

      {/* Content Container */}
      <div className="container mx-auto relative z-10 py-16">
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
