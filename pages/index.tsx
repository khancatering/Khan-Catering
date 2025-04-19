import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function KhanCatering() {
  const [activePage, setActivePage] = useState("home");

  return (
    <div className="bg-charcoal text-sandstone font-sans">
      {/* Header */}
      <nav className="flex justify-between items-center px-8 py-5 bg-chili text-white shadow-lg">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="Khan Logo" width={50} height={50} className="rounded-full" />
          <h1 className="text-2xl font-bold tracking-wide">Khan Catering</h1>
        </div>
        <div className="flex gap-6 text-lg font-medium">
          <button onClick={() => setActivePage('home')} className="hover:text-saffron transition">Home</button>
          <button onClick={() => setActivePage('about')} className="hover:text-saffron transition">About Us</button>
          <button onClick={() => setActivePage('booking')} className="hover:text-saffron transition">Book</button>
        </div>
      </nav>

      {activePage === "home" && (
        <>
          <section className="text-center py-24 px-6 bg-cover bg-center" style={{ backgroundImage: 'url(/catering/catering2.jpg)' }}>
            <div className="bg-black bg-opacity-60 inline-block p-8 rounded-xl">
              <h2 className="text-5xl font-extrabold text-sandstone mb-4">Experience Authentic Indian Catering</h2>
              <p className="text-lg max-w-2xl mx-auto text-clay">
                South Indian, North Indian, and Indo-Chinese dishes — handcrafted with flavor, elegance, and love.
              </p>
              <button
  onClick={() => setActivePage('booking')}
  className="mt-6 bg-curry text-white px-6 py-3 text-lg rounded-full hover:bg-[#2c4d34] transition"
>
                Book Your Event <ArrowRight className="inline ml-2 w-5 h-5" />
              </button>
            </div>
          </section>

          <section className="px-6 py-16 bg-bronze text-charcoal text-center">
            <h2 className="text-4xl font-bold mb-4">Our Catering Services</h2>
            <p className="max-w-3xl mx-auto text-lg text-charcoal mb-10">
              We proudly serve every kind of Indian and Indo-Chinese dish, from elegant receptions to grand wedding spreads.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Image src="/catering/catering1.jpg" alt="Buffet Setup" width={1200} height={800} className="rounded-2xl shadow-lg" />
              <Image src="/catering/catering2.jpg" alt="Event Presentation" width={1200} height={800} className="rounded-2xl shadow-lg" />
            </div>
          </section>
        </>
      )}

      {activePage === "about" && (
        <section className="px-6 py-16 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-saffron mb-6">About Us</h2>
          <p className="text-lg text-clay max-w-2xl mx-auto leading-relaxed space-y-4">
            Khan Catering is your trusted culinary partner for all special occasions across New Zealand. We specialize in South Indian, North Indian, and Indo-Chinese cuisines — delivering exceptional taste, authentic tradition, and seamless catering experiences. From intimate gatherings to grand weddings, we ensure every plate reflects passion and perfection.
            <br /><br />
            Our mission is to bring the warmth of home-cooked flavors and the grandeur of fine-dining presentation to every event. Whether you're planning a wedding, birthday, religious celebration, or corporate function, Khan Catering provides tailored menus, stunning buffet setups, and dependable service that leaves a lasting impression.
            <br /><br />
            <strong>Meet the Founder</strong><br />
            Khan Catering was founded by <strong>Afzal Khan</strong>, an experienced culinary artist with a deep passion for Indian cuisine and hospitality. As Founder, CEO, and Head Chef, Afzal leads the team with creativity, precision, and a strong commitment to quality. Reach out to him personally at <a href="mailto:founder@khancatering.co.nz" className="text-saffron underline">founder@khancatering.co.nz</a> or call <span className="whitespace-nowrap">021 161 6941</span> for direct inquiries or collaborations.
          </p>
        </section>
      )}

      {activePage === "booking" && (
        <section className="px-6 py-16 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-curry mb-6">Book a Catering Consultation</h2>
          <div className="rounded-xl overflow-hidden shadow-2xl border-2 border-curry">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfxNWUQM22cMSygwaq6tqTIPP0OxsQ8r910JPeD_x3bm8KKEw/viewform?embedded=true"
              width="100%"
              height="800"
              className="w-full h-[800px] border-none"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
            >
              Loading…
            </iframe>
          </div>
        </section>
      )}

      {/* Footer */}
      <section className="px-6 py-12 text-center bg-chili text-white">
        <h2 className="text-3xl font-semibold">Contact Us</h2>
        <p className="mt-2 text-sandstone">📞 021 116 8647 | 021 117 1077</p>
        <p className="text-sandstone">📧 support@khancatering.co.nz</p>
        <p className="mt-1 text-sandstone">📍 We proudly serve events all across New Zealand</p>
      </section>

      <footer className="text-center py-5 bg-charcoal text-clay text-sm border-t border-[#333]">
        © 2025 Khan Catering. Crafted with care and flavor.
      </footer>
    </div>
  );
}
