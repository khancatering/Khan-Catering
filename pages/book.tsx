import Image from 'next/image';
import Head from 'next/head';

export default function Book() {
  return (
    <>
      <Head>
        <title>Book a Consultation | Khan Catering</title>
        <meta name="description" content="Book a free consultation with Khan Catering’s Head Chef to customize your event’s menu and layout." />
      </Head>

      <div className="px-4 sm:px-10 py-10 space-y-8">
        <h1 className="text-4xl text-saffron font-bold">Book a Consultation</h1>
        <p className="text-lg font-semibold mt-4" style={{ color: '#D6C4A8' }}>
  📅 Please place your order at least 1 week in advance. We only accept bookings on Public Holidays and Weekdays.
</p>
        <Image src="/images/Chef_Consultation_Moment.jpg" alt="Chef consulting with client" width={1000} height={600} />
        <p>Let us help plan your perfect event. You’ll get a free consultation with our Head Chef including:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Customized menu planning</li>
          <li>Layout and food flowchart design</li>
          <li>Dedicated call to understand your vision</li>
        </ul>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfxNWUQM22cMSygwaq6tqTIPP0OxsQ8r910JPeD_x3bm8KKEw/viewform?embedded=true"
          width="100%"
          height="1000"
          frameBorder="0"
          className="w-full"
          aria-label="Khan Catering Booking Form"
        >
          Your browser does not support iframes.
        </iframe>
        <div className="text-center space-y-4">
          <Image src="/images/Smiling_Service_Contact_Visual.jpg" alt="Smiling Khan Catering staff ready to assist" width={600} height={400} />
          <p className="text-lg text-sandstone">
            Need help? Call us directly at <span className="font-semibold text-white">021 116 8647</span> or <span className="font-semibold text-white">021 117 1077</span><br />
            or email us at <span className="font-semibold text-white">support@khancatering.co.nz</span>
          </p>
        </div>
      </div>
    </>
  );
}