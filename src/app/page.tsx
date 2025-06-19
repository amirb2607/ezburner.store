import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>ezburner.store — Temporary Email Domain</title>
        <meta name="description" content="ezburner.store is used for temporary and disposable email aliases. Ideal for one-time use and privacy." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="ezburner.store — Temporary Email Domain" />
        <meta property="og:description" content="This domain is used to generate burner email addresses for privacy-focused use." />
        <meta property="og:url" content="https://ezburner.store" />
        <meta property="og:type" content="website" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-6">
        <div className="max-w-xl text-center">
          <h1 className="text-4xl font-bold mb-4">ezburner.store</h1>
          <p className="text-lg text-gray-400 mb-8">
            This domain is used for temporary and disposable email aliases. It does not host any services or content.
          </p>
          <p className="text-sm text-gray-600 mb-6">
            If you received an email from this domain, it was likely generated for one-time or privacy-focused use.
          </p>
          <a
            href="https://www.amirb.dev"
            className="inline-block bg-white text-black font-semibold py-2 px-6 rounded-lg shadow hover:bg-gray-200 transition"
          >
            Dev Site
          </a>
        </div>
      </main>
    </>
  );
}
