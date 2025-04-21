import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Khan Catering | Indian Halal Catering in NZ</title>
        <meta name="description" content="Authentic Halal Indian catering services across New Zealand, tailored for events and gatherings." />
        <meta name="robots" content="index, follow" />
      </Head>

      <div>
        {/* Hero */}
        <section className="relative h-[600px] w-full pb-20">
          <Image src="/images/Hero_Banner.jpg" alt="Khan Catering Hero Banner" fill className="object-cover z-0" />
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 z-20 text-center text-white drop-shadow-xl px-4">
            <h1 className="text-3xl sm:text-5xl font-bold leading-snug">Bringing India’s Rich Culinary Heritage to New Zealand</h1>
            <p className="hidden sm:block text-base sm:text-xl mt-4">
              From royal weddings to intimate gatherings – experience 100% halal, authentic Indian catering with unmatched elegance.
            </p>
            <Link href="/book">
              <button className="mt-6 px-6 py-3 bg-saffron text-black font-semibold rounded-lg hover:bg-saffron/80 transition-all">
                Book Your Event
              </button>
            </Link>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="px-4 sm:px-8 md:px-16 py-14 bg-charcoal text-sandstone">
          <h2 className="text-3xl font-bold text-saffron mb-10 text-center">Why Choose Khan Catering</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-lg">
            <div>
              <h3 className="font-semibold text-xl mb-1 text-white">20+ Years of Excellence</h3>
              <p>Serving since 2003 with deep-rooted traditions and culinary mastery.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-1 text-white">100% Halal, Always</h3>
              <p>Certified halal ingredients, honoring your values and trust.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-1 text-white">Antique Bronze Serveware</h3>
              <p>Every dish is served with visual elegance and cultural charm.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-1 text-white">Nationwide Reach</h3>
              <p>Delivering exceptional catering experiences across all of New Zealand.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-1 text-white">Tailored for You</h3>
              <p>Personalized service with menu planning, layout design, and chef consultation.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}