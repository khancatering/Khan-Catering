import Image from 'next/image';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>Who We Are | Khan Catering</title>
        <meta name="description" content="Learn about Khan Catering’s history, values, and commitment to premium halal Indian cuisine across New Zealand." />
      </Head>

      <div className="p-10 space-y-8">
        <h1 className="text-4xl text-saffron font-bold mb-6">Who We Are</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="space-y-4">
            <p>Khan Catering is a halal-certified luxury catering service founded in 2003. We deliver premium Indian dining experiences across Auckland, Wellington, Christchurch, and beyond.</p>
            <p>Our values are rooted in cultural authenticity, sustainability, and excellence. From sourcing the finest ingredients to presenting food in antique bronze serveware, every detail is handled with care.</p>
            <p>With a legacy of over two decades, we continue to uphold traditions while innovating for today’s elegant events.</p>
          </div>
          <Image src="/images/Cultural_Values_Collage.jpg" alt="Collage representing Khan Catering's cultural values" width={800} height={500} className="rounded-2xl shadow-xl" />
        </div>
      </div>
    </>
  );
}