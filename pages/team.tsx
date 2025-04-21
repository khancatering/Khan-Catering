import Image from 'next/image';
import Head from 'next/head';

export default function Team() {
  return (
    <>
      <Head>
        <title>Meet Our Team | Khan Catering</title>
        <meta name="description" content="Meet Chef Afzal and the expert team behind Khan Catering, delivering luxury Indian cuisine with precision and passion." />
      </Head>

      <div className="p-10 space-y-8">
        <h1 className="text-3xl text-saffron font-bold">Meet Our Team</h1>
        <p>Chef Afzal is the heart of Khan Catering – bringing over 20 years of culinary excellence in Indian cuisine. Known for his calm leadership, sharp discipline, and impeccable taste, he leads the team from the front, making every event shine.</p>
        <p>Our well-trained team works in harmony under Chef Afzal’s guidance to deliver smooth, delightful, and precise catering for every occasion.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
          <Image src="/images/The_Heart_of_Khan_Catering.jpg" alt="Chef Afzal - Executive Chef at Khan Catering" width={600} height={400} />
          <Image src="/images/Team_at_work.jpg" alt="Khan Catering Team in action at an event" width={600} height={400} />
        </div>
        <div className="pt-6 text-lg text-sandstone">
          <p className="mb-2"><strong>For Collaborations, Direct Contact, or Business Inquiries:</strong></p>
          <p><strong>Founder, CEO & Head Chef:</strong> Afzal Khan</p>
          <p>Email: <a href="mailto:founder@khancatering.co.nz" className="text-white underline">founder@khancatering.co.nz</a></p>
          <p>Phone: <a href="tel:0211616941" className="text-white underline">021 161 6941</a></p>
        </div>
      </div>
    </>
  );
}